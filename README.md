# Music App

An AI-powered music recommendation application that detects facial emotions and recommends music based on the detected emotion.

## Project Status

**Current Version:** MVP Version 1
**Development Status:** In Progress
**Current Backend Progress:** Step 6 completed
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
* SQLAlchemy
* Pydantic
* Pydantic Settings

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

### Step 4 — Configuration & Environment Variables

* [x] `.env` configuration created
* [x] `.env.example` created
* [x] Environment variables loaded using Pydantic Settings
* [x] Application name configured through environment variables
* [x] Application version configured through environment variables
* [x] Environment mode configured
* [x] Database URL configured through environment variables
* [x] `.env` excluded from Git

### Step 5 — PostgreSQL / Supabase Connection

* [x] Supabase PostgreSQL project created
* [x] PostgreSQL connection configured
* [x] SQLAlchemy installed
* [x] Psycopg PostgreSQL driver installed
* [x] Database engine created
* [x] Database connection tested
* [x] `SELECT 1` database test successful

### Step 6 — Database Models & Tables

Database architecture completed with seven application tables:

* [x] `users`
* [x] `songs`
* [x] `recommendations`
* [x] `favorites`
* [x] `playlists`
* [x] `playlist_songs`
* [x] `listening_history`

#### Database Relationships

```text
users
 ├──< recommendations >── songs
 ├──< favorites >───────── songs
 ├──< playlists
 │       └──< playlist_songs >── songs
 └──< listening_history >── songs
```

#### Database Constraints

* [x] Primary keys
* [x] Foreign keys
* [x] `ON DELETE CASCADE` relationships
* [x] NOT NULL constraints
* [x] UNIQUE constraints
* [x] CHECK constraints
* [x] Emotion validation
* [x] Recommendation confidence validation
* [x] User role validation
* [x] Listening duration validation
* [x] Playlist position validation

#### Database Indexes

* [x] Song emotion index
* [x] Recommendation indexes
* [x] Favorite user index
* [x] Playlist user index
* [x] Playlist-song indexes
* [x] Listening-history indexes

#### Row Level Security

* [x] RLS enabled on all seven application tables
* [x] Database security structure verified
* [x] Detailed user-specific RLS policies deferred until Supabase Auth integration

#### Seed / Test Data

* [x] Five demo songs created
* [x] Supabase Auth test user created
* [x] Matching application user created
* [x] Favorite test data created
* [x] Playlist test data created
* [x] Playlist songs created
* [x] Recommendation test data created
* [x] Listening history test data created

#### Database Testing

* [x] Invalid song emotion rejected
* [x] Invalid recommendation confidence rejected
* [x] Duplicate favorite rejected
* [x] Invalid user foreign key rejected
* [x] Duplicate playlist song rejected
* [x] Missing song title rejected
* [x] Invalid user role rejected

---

## Upcoming Backend Work

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
    ├── .env
    ├── .env.example
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
        │   ├── __init__.py
        │   ├── config.py
        │   └── database.py
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

> Note: `.env` and `.venv/` are excluded from Git through `.gitignore`.

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

# Database

The application uses PostgreSQL through Supabase.

The backend connects to PostgreSQL using SQLAlchemy and Psycopg.

```text
FastAPI
   ↓
SQLAlchemy
   ↓
Psycopg
   ↓
PostgreSQL / Supabase
```

Database credentials are stored in environment variables and are not committed to GitHub.

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
15. Database changes should be documented in the project README when a major database milestone is completed.

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

**Backend — Step 7: Pydantic Schemas / API Contracts**

The next backend milestone is to define request and response schemas for the API before implementing the music and application endpoints.
