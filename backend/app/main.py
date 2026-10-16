from fastapi import FastAPI
from app.api.songs import router as songs_router
from app.api.admin_test import router as admin_test_router
from app.api.auth_test import router as auth_test_router
from app.api.health import router as health_router
from app.api.users import router as users_router
from app.core.config import settings
from app.api.favorites import router as favorites_router
from app.api.playlists import router as playlists_router
from app.api.playlist_songs import router as playlist_songs_router
from app.api.listening_history import router as listening_history_router


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description="Backend API for Music App MVP Version 1",
)

app.include_router(health_router)
app.include_router(auth_test_router)
app.include_router(users_router)
app.include_router(admin_test_router)
app.include_router(songs_router)
app.include_router(favorites_router)
app.include_router(playlists_router)
app.include_router(playlist_songs_router)
app.include_router(listening_history_router)