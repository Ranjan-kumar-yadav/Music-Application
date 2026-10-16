from app.schemas.listening_history import ListeningHistoryCreate
from pydantic import ValidationError
from uuid import uuid4
from datetime import datetime, timezone

data = {
    "song_id": uuid4(),
    "played_at": datetime.now(timezone.utc),
    "duration_seconds": -1,
}

try:
    ListeningHistoryCreate(**data)
    print("FAIL: Negative duration was accepted")
except ValidationError:
    print("PASS: Negative duration correctly rejected")