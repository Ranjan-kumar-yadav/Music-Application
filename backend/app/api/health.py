from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.core.database import get_db


router = APIRouter()


@router.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "Music App Backend is running"
    }


@router.get("/health/db")
def database_health_check(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT 1")).scalar()

    return {
        "status": "ok",
        "database": "connected",
        "query_result": result
    }