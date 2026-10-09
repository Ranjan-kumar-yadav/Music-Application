
from uuid import UUID

from sqlalchemy.orm import Session

from app.models.favorite import Favorite


def get_user_favorites(
    db: Session,
    user_id: UUID,
) -> list[Favorite]:
    return (
        db.query(Favorite)
        .filter(Favorite.user_id == user_id)
        .order_by(Favorite.created_at.desc())
        .all()
    )


def get_favorite_by_id(
    db: Session,
    favorite_id: UUID,
    user_id: UUID,
) -> Favorite | None:
    return (
        db.query(Favorite)
        .filter(
            Favorite.id == favorite_id,
            Favorite.user_id == user_id,
        )
        .first()
    )


def create_favorite(
    db: Session,
    user_id: UUID,
    song_id: UUID,
) -> Favorite:
    favorite = Favorite(
        user_id=user_id,
        song_id=song_id,
    )

    db.add(favorite)
    db.commit()
    db.refresh(favorite)

    return favorite


def delete_favorite(
    db: Session,
    favorite: Favorite,
) -> None:
    db.delete(favorite)
    db.commit()