from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict


class RecommendationCreate(BaseModel):
    song_id: UUID
    emotion: str
    confidence: float


class RecommendationResponse(BaseModel):
    id: UUID
    user_id: UUID
    song_id: UUID
    emotion: str
    confidence: float
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)