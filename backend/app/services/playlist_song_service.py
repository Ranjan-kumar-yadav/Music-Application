
from uuid import UUID

from sqlalchemy.orm import Session

from app.models.playlist_song import PlaylistSong


def get_playlist_songs(
    db: Session,
    playlist_id: UUID,
) -> list[PlaylistSong]:
    return (
        db.query(PlaylistSong)
        .filter(PlaylistSong.playlist_id == playlist_id)
        .order_by(PlaylistSong.position.asc())
        .all()
    )


def get_playlist_song(
    db: Session,
    playlist_id: UUID,
    song_id: UUID,
) -> PlaylistSong | None:
    return (
        db.query(PlaylistSong)
        .filter(
            PlaylistSong.playlist_id == playlist_id,
            PlaylistSong.song_id == song_id,
        )
        .first()
    )


def add_song_to_playlist(
    db: Session,
    playlist_id: UUID,
    song_id: UUID,
    position: int,
) -> PlaylistSong:
    playlist_song = PlaylistSong(
        playlist_id=playlist_id,
        song_id=song_id,
        position=position,
    )

    db.add(playlist_song)
    db.commit()
    db.refresh(playlist_song)

    return playlist_song


def remove_song_from_playlist(
    db: Session,
    playlist_song: PlaylistSong,
) -> None:
    db.delete(playlist_song)
    db.commit()
