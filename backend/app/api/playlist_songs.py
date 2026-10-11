
from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.core.database import get_db
from app.schemas.playlist_song import (
    PlaylistSongCreate,
    PlaylistSongResponse,
)
from app.services.playlist_service import get_playlist_by_id
from app.services.playlist_song_service import (
    add_song_to_playlist,
    get_playlist_song,
    get_playlist_songs,
    remove_song_from_playlist,
)
from app.services.song_service import get_song_by_id
from app.services.user_service import get_user_by_id


router = APIRouter(
    prefix="/playlists/{playlist_id}/songs",
    tags=["Playlist Songs"],
)


@router.get(
    "",
    response_model=list[PlaylistSongResponse],
)
def list_playlist_songs(
    playlist_id: UUID,
    current_user: Annotated[dict, Depends(get_current_user)],
    db: Annotated[Session, Depends(get_db)],
) -> list:
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

    return get_playlist_songs(db, playlist_id)


@router.post(
    "",
    response_model=PlaylistSongResponse,
    status_code=status.HTTP_201_CREATED,
)
def add_playlist_song(
    playlist_id: UUID,
    song_data: PlaylistSongCreate,
    current_user: Annotated[dict, Depends(get_current_user)],
    db: Annotated[Session, Depends(get_db)],
) -> PlaylistSongResponse:
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

    song = get_song_by_id(db, song_data.song_id)
    if song is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Song not found",
        )

    existing = get_playlist_song(db, playlist_id, song_data.song_id)
    if existing is not None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="This song is already in the playlist",
        )

    try:
        return add_song_to_playlist(
            db=db,
            playlist_id=playlist_id,
            song_id=song_data.song_id,
            position=song_data.position,
        )
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Could not add song due to a database conflict",
        )


@router.delete(
    "/{song_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_playlist_song(
    playlist_id: UUID,
    song_id: UUID,
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

    playlist_song = get_playlist_song(db, playlist_id, song_id)
    if playlist_song is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Song not found in this playlist",
        )

    remove_song_from_playlist(db, playlist_song)
