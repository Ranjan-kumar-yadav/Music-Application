from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class SongResponse(BaseModel):
    id: UUID
    title: str
    artist: str
    album: str | None = None
    genre: str | None = None
    language: str | None = None
    emotion: str
    audio_url: str
    image_url: str | None = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)