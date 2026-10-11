
from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class PlaylistSongCreate(BaseModel):
    song_id: UUID
    position: int = Field(gt=0)


class PlaylistSongResponse(BaseModel):
    id: UUID
    playlist_id: UUID
    song_id: UUID
    position: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
