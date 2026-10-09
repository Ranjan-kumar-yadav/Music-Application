from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_admin
from app.core.database import get_db
from app.models.user import User
from app.schemas.song import SongCreate, SongResponse, SongUpdate
from app.services.song_service import (
    create_song,
    delete_song,
    get_all_songs,
    get_song_by_id,
    update_song,
)


router = APIRouter(
    prefix="/songs",
    tags=["Songs"],
)


@router.get(
    "",
    response_model=list[SongResponse],
)
def get_songs(
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    return get_all_songs(db)


@router.get(
    "/{song_id}",
    response_model=SongResponse,
)
def get_song(
    song_id: UUID,
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    song = get_song_by_id(
        db=db,
        song_id=song_id,
    )

    if song is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Song not found",
        )

    return song


@router.post(
    "",
    response_model=SongResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_new_song(
    song_data: SongCreate,
    current_admin: Annotated[
        User,
        Depends(get_current_admin),
    ],
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    return create_song(
        db=db,
        song_data=song_data.model_dump(),
    )

@router.put(
    "/{song_id}",
    response_model=SongResponse,
)
def update_existing_song(
    song_id: UUID,
    song_data: SongUpdate,
    current_admin: Annotated[
        User,
        Depends(get_current_admin),
    ],
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    song = get_song_by_id(
        db=db,
        song_id=song_id,
    )

    if song is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Song not found",
        )

    return update_song(
        db=db,
        song=song,
        song_data=song_data.model_dump(
            exclude_unset=True
        ),
    )

@router.delete(
    "/{song_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_existing_song(
    song_id: UUID,
    current_admin: Annotated[
        User,
        Depends(get_current_admin),
    ],
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    song = get_song_by_id(
        db=db,
        song_id=song_id,
    )

    if song is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Song not found",
        )

    delete_song(
        db=db,
        song=song,
    )