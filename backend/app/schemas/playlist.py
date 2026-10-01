from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class PlaylistCreate(BaseModel):
    name: str
    description: str | None = None


class PlaylistResponse(BaseModel):
    id: UUID
    user_id: UUID
    name: str
    description: str | None = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)