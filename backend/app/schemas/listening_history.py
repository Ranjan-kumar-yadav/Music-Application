from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class ListeningHistoryCreate(BaseModel):
    song_id: UUID
    played_at: datetime
    duration_seconds: int


class ListeningHistoryResponse(BaseModel):
    id: UUID
    user_id: UUID
    song_id: UUID
    played_at: datetime
    duration_seconds: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)