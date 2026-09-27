from fastapi import FastAPI
from app.api.health import router as health_router

app = FastAPI(
    title="Music App API",
    description="Backend API for Music App MVP Version 1",
    version="1.0.0"
)

app.include_router(health_router)