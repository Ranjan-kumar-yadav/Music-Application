
from uuid import UUID

from sqlalchemy.orm import Session

from app.models.listening_history import ListeningHistory


def get_user_listening_history(
    db: Session,
    user_id: UUID,
) -> list[ListeningHistory]:
    return (
        db.query(ListeningHistory)
        .filter(ListeningHistory.user_id == user_id)
        .order_by(ListeningHistory.played_at.desc())
        .all()
    )


def get_listening_history_by_id(
    db: Session,
    history_id: UUID,
    user_id: UUID,
) -> ListeningHistory | None:
    return (
        db.query(ListeningHistory)
        .filter(
            ListeningHistory.id == history_id,
            ListeningHistory.user_id == user_id,
        )
        .first()
    )


def create_listening_history(
    db: Session,
    user_id: UUID,
    song_id: UUID,
    played_at,
    duration_seconds: int,
) -> ListeningHistory:
    history = ListeningHistory(
        user_id=user_id,
        song_id=song_id,
        played_at=played_at,
        duration_seconds=duration_seconds,
    )

    db.add(history)
    db.commit()
    db.refresh(history)

    return history
