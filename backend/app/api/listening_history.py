from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.core.database import get_db
from app.schemas.listening_history import (
    ListeningHistoryCreate,
    ListeningHistoryResponse,
)
from app.services.listening_history_service import (
    create_listening_history,
    get_user_listening_history,
)
from app.services.song_service import get_song_by_id
from app.services.user_service import get_user_by_id

router = APIRouter(prefix="/listening-history", tags=["Listening History"])


@router.get(
    "",
    response_model=list[ListeningHistoryResponse],
    status_code=status.HTTP_200_OK,
)
def read_listening_history(
    current_user: Annotated[dict, Depends(get_current_user)],
    db: Annotated[Session, Depends(get_db)],
):
    user_id = UUID(current_user["sub"])

    user = get_user_by_id(db, user_id)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found",
        )

    return get_user_listening_history(db, user_id)


@router.post(
    "",
    response_model=ListeningHistoryResponse,
    status_code=status.HTTP_201_CREATED,
)
def record_listening_history(
    history_data: ListeningHistoryCreate,
    current_user: Annotated[dict, Depends(get_current_user)],
    db: Annotated[Session, Depends(get_db)],
):
    user_id = UUID(current_user["sub"])

    user = get_user_by_id(db, user_id)
    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found",
        )

    song = get_song_by_id(db, history_data.song_id)
    if song is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Song not found",
        )

    try:
        return create_listening_history(
            db=db,
            user_id=user_id,
            song_id=history_data.song_id,
            played_at=history_data.played_at,
            duration_seconds=history_data.duration_seconds,
        )
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Unable to record listening history",
        )