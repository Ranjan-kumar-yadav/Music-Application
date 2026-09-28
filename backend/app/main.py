from fastapi import FastAPI

from app.api.health import router as health_router
from app.core.config import settings


app = FastAPI(
    title=settings.app_name,
    description="Backend API for Music App MVP Version 1",
    version=settings.app_version
)

app.include_router(health_router)