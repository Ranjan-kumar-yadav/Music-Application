from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class PlaylistSongCreate(BaseModel):
    song_id: UUID
    position: int


class PlaylistSongResponse(BaseModel):
    id: UUID
    playlist_id: UUID
    song_id: UUID
    position: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)