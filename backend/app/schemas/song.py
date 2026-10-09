from datetime import datetime
from uuid import UUID
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field, field_validator


class SongCreate(BaseModel):
    title: str = Field(min_length=1)
    artist: str
    album: str | None = None
    genre: str | None = None
    language: str | None = None
    emotion: Literal[
        "angry",
        "happy",
        "neutral",
        "sad",
        "surprise",
    ]
    audio_url: str
    image_url: str | None = None

    @field_validator("title")
    @classmethod
    def validate_title(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("Title cannot be empty or contain only spaces")
        return value


class SongUpdate(BaseModel):
    title: str | None = None
    artist: str | None = None
    album: str | None = None
    genre: str | None = None
    language: str | None = None
    emotion: Literal[
        "angry",
        "happy",
        "neutral",
        "sad",
        "surprise",
    ] | None = None
    audio_url: str | None = None
    image_url: str | None = None

    @field_validator("title")
    @classmethod
    def validate_title(cls, value: str | None) -> str | None:
        if value is not None and not value.strip():
            raise ValueError("Title cannot be empty or contain only spaces")
        return value


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