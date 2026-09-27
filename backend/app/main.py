from fastapi import FastAPI

app = FastAPI(
    title="Music App API",
    description="Backend API for Music App MVP Version 1",
    version="1.0.0"
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "message": "Music App Backend is running"
    }