
from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.core.database import get_db
from app.models.user import User
from app.schemas.favorite import FavoriteCreate, FavoriteResponse
from app.services.favorite_service import (
    create_favorite,
    delete_favorite,
    get_favorite_by_id,
    get_user_favorites,
)
from app.services.song_service import get_song_by_id
from app.services.user_service import get_user_by_id


router = APIRouter(
    prefix="/favorites",
    tags=["Favorites"],
)


@router.get(
    "",
    response_model=list[FavoriteResponse],
)
def list_favorites(
    current_user: Annotated[
        dict,
        Depends(get_current_user),
    ],
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    user_id = UUID(current_user["sub"])

    user = get_user_by_id(
        db=db,
        user_id=user_id,
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found",
        )

    return get_user_favorites(
        db=db,
        user_id=user_id,
    )


@router.post(
    "",
    response_model=FavoriteResponse,
    status_code=status.HTTP_201_CREATED,
)
def add_favorite(
    favorite_data: FavoriteCreate,
    current_user: Annotated[
        dict,
        Depends(get_current_user),
    ],
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    user_id = UUID(current_user["sub"])

    user = get_user_by_id(
        db=db,
        user_id=user_id,
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found",
        )

    song = get_song_by_id(
        db=db,
        song_id=favorite_data.song_id,
    )

    if song is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Song not found",
        )

    try:
        return create_favorite(
            db=db,
            user_id=user_id,
            song_id=favorite_data.song_id,
        )
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="This song is already in your favorites",
        )

    
@router.delete(
    "/{favorite_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def remove_favorite(
    favorite_id: UUID,
    current_user: Annotated[
        dict,
        Depends(get_current_user),
    ],
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    user_id = UUID(current_user["sub"])

    user = get_user_by_id(
        db=db,
        user_id=user_id,
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found",
        )

    favorite = get_favorite_by_id(
        db=db,
        favorite_id=favorite_id,
        user_id=user_id,
    )

    if favorite is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Favorite not found",
        )

    delete_favorite(
        db=db,
        favorite=favorite,
    )

    return None