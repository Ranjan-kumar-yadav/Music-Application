# Music App

An AI-powered music recommendation application that detects facial emotions and recommends music based on the detected emotion.

## Project Status

**Current Version:** MVP Version 1
**Development Status:** In Progress
**Current Backend Progress:** Step 3 completed
**Frontend Integration:** Not started yet

---

## Architecture

```text
React Frontend
      ↓
FastAPI Backend
      ↓
PostgreSQL / Supabase
```

### AI Flow

```text
Webcam
   ↓
Face / Image Processing
   ↓
MobileNetV2 Emotion Model
   ↓
Emotion + Confidence
   ↓
FastAPI Backend
   ↓
Music Recommendation
   ↓
React Recommendation UI
```

---

## Technology Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Python
* FastAPI
* Uvicorn

### Database

* PostgreSQL
* Supabase (managed PostgreSQL)

### AI / Machine Learning

* TensorFlow
* Keras
* MobileNetV2
* OpenCV

### Development & Testing

* Postman
* Git
* GitHub
* VS Code

---

## Emotion Classes

The MVP currently uses five emotion classes:

* Angry
* Happy
* Neutral
* Sad
* Surprise

---

# Development Progress

## Backend

### Step 0 — Environment Setup

* [x] Python environment
* [x] Python virtual environment
* [x] Backend `.venv`
* [x] Python 3.12.10 verified
* [x] pip verified

### Step 1 — FastAPI Setup

* [x] FastAPI installed
* [x] Uvicorn installed
* [x] `requirements.txt` created
* [x] FastAPI application created
* [x] `/health` endpoint created
* [x] Postman testing completed
* [x] Swagger `/docs` verified

### Step 2 — Git & GitHub Setup

* [x] Git initialized inside `Music-App`
* [x] `master` branch created
* [x] `.gitignore` created
* [x] GitHub repository created
* [x] Remote `origin` configured
* [x] Initial backend setup pushed to GitHub

### Step 3 — Backend Modular Structure

* [x] `api` package created
* [x] `models` package created
* [x] `schemas` package created
* [x] `services` package created
* [x] `core` package created
* [x] Health router created
* [x] Health router connected to `main.py`
* [x] `/health` tested through Postman
* [x] `/health` verified through Swagger
* [x] Changes committed and pushed to GitHub

**Latest Backend Commit:**

```text
8cce388 - Refactor backend into modular structure
```

---

## Upcoming Backend Work

* [ ] Step 4 — Configuration & Environment Variables
* [ ] Step 5 — PostgreSQL / Supabase Connection
* [ ] Step 6 — Database Models / Tables
* [ ] Step 7 — Pydantic Schemas / API Contracts
* [ ] Step 8 — Music Data & Songs API
* [ ] Step 9 — Recommendation Logic
* [ ] Step 10 — MobileNetV2 Model Integration
* [ ] Step 11 — Emotion Prediction API
* [ ] Step 12 — Recommendation API
* [ ] Step 13 — Complete Backend Flow
* [ ] Step 14 — Validation & Error Handling
* [ ] Step 15 — Complete Postman Testing
* [ ] Step 16 — Backend Cleanup & Final Testing
* [ ] Step 17 — Backend MVP Checkpoint

---

# Frontend Progress

Frontend development is handled separately.

Frontend folder:

```text
frontend/
```

Frontend development should be updated here as milestones are completed.

* [ ] React + Vite setup
* [ ] Tailwind CSS setup
* [ ] UI development
* [ ] Webcam interface
* [ ] Emotion result UI
* [ ] Music recommendation UI
* [ ] FastAPI integration
* [ ] Final frontend testing

---

# Project Structure

Current project structure:

```text
Music-App/
│
├── README.md
├── .gitignore
│
├── frontend/
│
└── backend/
    │
    ├── .venv/
    ├── requirements.txt
    │
    └── app/
        ├── __init__.py
        ├── main.py
        │
        ├── api/
        │   ├── __init__.py
        │   └── health.py
        │
        ├── core/
        │   └── __init__.py
        │
        ├── models/
        │   └── __init__.py
        │
        ├── schemas/
        │   └── __init__.py
        │
        └── services/
            └── __init__.py
```

---

# Current API

## Health Check

**Method:**

```text
GET
```

**Endpoint:**

```text
/health
```

**Local URL:**

```text
http://127.0.0.1:8000/health
```

**Response:**

```json
{
    "status": "ok",
    "message": "Music App Backend is running"
}
```

Swagger documentation:

```text
http://127.0.0.1:8000/docs
```

---

# Development Rules

1. React must communicate with the backend through REST APIs.
2. React must not directly access the PostgreSQL/Supabase database.
3. AI model inference should be handled through the backend.
4. Secrets and credentials must never be hardcoded.
5. Every Python package installed for the backend must be added to `backend/requirements.txt`.
6. Backend development should remain modular and beginner-friendly.
7. Avoid unnecessary technologies.
8. Test APIs with Postman during development.
9. Keep the MVP simple before adding advanced features.
10. Both frontend and backend work in the same GitHub repository.
11. The project uses only the `master` branch.
12. Frontend work should modify only the `frontend/` folder.
13. Backend work should modify only the `backend/` folder.
14. Major milestones should be committed and pushed to GitHub.

---

# Git Workflow

Repository:

```text
Music-Application
```

Branch:

```text
master
```

The GitHub repository is the shared source of truth for the project.

Development workflow:

```text
Make changes
    ↓
Test locally
    ↓
git status
    ↓
git add
    ↓
git commit
    ↓
git push
    ↓
GitHub master
```

---

# Current Next Task

**Backend — Step 4: Configuration & Environment Variables**

The next backend milestone is to configure environment variables safely before connecting the application to PostgreSQL/Supabase.
