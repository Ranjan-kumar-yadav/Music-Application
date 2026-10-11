
from uuid import UUID

from sqlalchemy.orm import Session

from app.models.playlist import Playlist


def get_user_playlists(
    db: Session,
    user_id: UUID,
) -> list[Playlist]:
    return (
        db.query(Playlist)
        .filter(Playlist.user_id == user_id)
        .order_by(Playlist.created_at.desc())
        .all()
    )


def get_playlist_by_id(
    db: Session,
    playlist_id: UUID,
    user_id: UUID,
) -> Playlist | None:
    return (
        db.query(Playlist)
        .filter(
            Playlist.id == playlist_id,
            Playlist.user_id == user_id,
        )
        .first()
    )


def create_playlist(
    db: Session,
    user_id: UUID,
    name: str,
    description: str | None = None,
) -> Playlist:
    playlist = Playlist(
        user_id=user_id,
        name=name,
        description=description,
    )

    db.add(playlist)
    db.commit()
    db.refresh(playlist)

    return playlist


def update_playlist(
    db: Session,
    playlist: Playlist,
    updates: dict,
) -> Playlist:
    for field, value in updates.items():
        setattr(playlist, field, value)

    db.commit()
    db.refresh(playlist)

    return playlist


def delete_playlist(
    db: Session,
    playlist: Playlist,
) -> None:
    db.delete(playlist)
    db.commit()

