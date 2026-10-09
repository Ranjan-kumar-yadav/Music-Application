from uuid import UUID

from sqlalchemy.orm import Session

from app.models.song import Song


def get_all_songs(
    db: Session,
) -> list[Song]:
    return (
        db.query(Song)
        .order_by(Song.created_at.desc())
        .all()
    )


def get_song_by_id(
    db: Session,
    song_id: UUID,
) -> Song | None:
    return (
        db.query(Song)
        .filter(Song.id == song_id)
        .first()
    )


def create_song(
    db: Session,
    song_data: dict,
) -> Song:
    song = Song(**song_data)

    db.add(song)
    db.commit()
    db.refresh(song)

    return song


def update_song(
    db: Session,
    song: Song,
    song_data: dict,
) -> Song:
    for field, value in song_data.items():
        setattr(song, field, value)

    db.commit()
    db.refresh(song)

    return song


def delete_song(
    db: Session,
    song: Song,
) -> None:
    db.delete(song)
    db.commit()