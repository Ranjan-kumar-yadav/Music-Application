
from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.core.database import get_db
from app.schemas.playlist import (
    PlaylistCreate,
    PlaylistResponse,
    PlaylistUpdate,
)
from app.services.playlist_service import (
    create_playlist,
    delete_playlist,
    get_playlist_by_id,
    get_user_playlists,
    update_playlist,
)
from app.services.user_service import get_user_by_id


router = APIRouter(
    prefix="/playlists",
    tags=["Playlists"],
)


@router.get(
    "",
    response_model=list[PlaylistResponse],
)
def list_playlists(
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

    return get_user_playlists(
        db=db,
        user_id=user_id,
    )


@router.post(
    "",
    response_model=PlaylistResponse,
    status_code=status.HTTP_201_CREATED,
)
def add_playlist(
    playlist_data: PlaylistCreate,
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

    try:
        return create_playlist(
            db=db,
            user_id=user_id,
            name=playlist_data.name,
            description=playlist_data.description,
        )
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Could not create playlist due to a database conflict",
        )

    
@router.put(
    "/{playlist_id}",
    response_model=PlaylistResponse,
)
def edit_playlist(
    playlist_id: UUID,
    playlist_data: PlaylistUpdate,
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

    playlist = get_playlist_by_id(
        db=db,
        playlist_id=playlist_id,
        user_id=user_id,
    )

    if playlist is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Playlist not found",
        )

    updates = playlist_data.model_dump(exclude_unset=True)

    if not updates:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="At least one field must be provided",
        )

    if "name" in updates and updates["name"] is None:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail="Playlist name cannot be null",
        )

    return update_playlist(
        db=db,
        playlist=playlist,
        updates=updates,
    )

@router.delete(
    "/{playlist_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def remove_playlist(
    playlist_id: UUID,
    current_user: Annotated[dict, Depends(get_current_user)],
    db: Annotated[Session, Depends(get_db)],
) -> None:
    user_id = UUID(current_user["sub"])

    user = get_user_by_id(db, user_id)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found",
        )

    playlist = get_playlist_by_id(db, playlist_id, user_id)

    if playlist is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Playlist not found",
        )

    delete_playlist(db, playlist)
