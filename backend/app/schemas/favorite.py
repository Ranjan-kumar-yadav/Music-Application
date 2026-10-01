from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class FavoriteCreate(BaseModel):
    song_id: UUID


class FavoriteResponse(BaseModel):
    id: UUID
    user_id: UUID
    song_id: UUID
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)