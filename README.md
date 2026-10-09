# Music App

An AI-powered music recommendation application that detects facial emotions and recommends music based on the detected emotion.

## Project Status

**Current Version:** MVP Version 1

**Development Status:** In Progress

**Current Backend Progress:** Step 11 — Songs API implemented; validation and final testing in progress

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
* PyJWT
* Cryptography
* Supabase Python SDK
* Psycopg PostgreSQL driver

### Database

* PostgreSQL
* Supabase (managed PostgreSQL)

### Authentication

* Supabase Auth
* JWT access tokens
* ES256 / ECC (P-256) JWT verification
* JWKS-based public key verification
* HTTP Bearer authentication
* Role-based authorization

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
* [x] Application name configured
* [x] Application version configured
* [x] Environment mode configured
* [x] Database URL configured
* [x] Supabase URL configured
* [x] Supabase publishable/anon key configured
* [x] Supabase JWT issuer configured
* [x] Supabase JWKS URL configured
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
* [x] Detailed user-specific RLS policies deferred until application authorization is fully implemented

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

### Step 7 — Pydantic Schemas / API Contracts

* [x] User response schema
* [x] Song response schema
* [x] Favorite request/response schemas
* [x] Playlist request/response schemas
* [x] Playlist-song request/response schemas
* [x] Recommendation request/response schemas
* [x] Listening-history request/response schemas
* [x] Pydantic schema validation verified

### Step 8 — SQLAlchemy Models

* [x] SQLAlchemy `Base` configured
* [x] Seven database models created
* [x] Model relationships configured
* [x] Database tables verified through SQLAlchemy
* [x] All seven models imported successfully

### Step 9 — Database Session & Dependency Injection

* [x] SQLAlchemy `SessionLocal` configured
* [x] Database session dependency created
* [x] Automatic session closing implemented
* [x] Database dependency tested
* [x] `/health/db` endpoint created
* [x] Database health check verified

### Step 10 — Authentication, Authorization & User API

#### Step 10.1 — Authentication Dependencies

* [x] PyJWT installed
* [x] Cryptography installed
* [x] Supabase Python package installed
* [x] Authentication dependencies added to `requirements.txt`

#### Step 10.2 — Supabase JWT Verification

* [x] Supabase JWT configuration added
* [x] Current ECC / P-256 signing key identified
* [x] JWKS-based verification configured
* [x] JWT issuer validation configured
* [x] `authenticated` audience validation configured
* [x] ES256 JWT verification implemented
* [x] JWKS endpoint tested successfully
* [x] Supabase login tested successfully

#### Step 10.3 — Current Authenticated User Dependency

* [x] HTTP Bearer authentication configured
* [x] `get_current_user()` dependency created
* [x] JWT access token verified through dependency
* [x] User ID extracted from JWT `sub` claim
* [x] Authenticated endpoint tested successfully

#### Step 10.4 — User API

* [x] User service created
* [x] Current user lookup implemented
* [x] `GET /users/me` endpoint created
* [x] Authentication dependency integrated
* [x] Database dependency integrated
* [x] Application user profile linked with Supabase Auth user
* [x] `GET /users/me` tested through Postman

#### Step 10.5 — Role / Admin Verification

* [x] `get_current_admin()` authorization dependency created
* [x] Authenticated user linked to application user record
* [x] Application role checked from `public.users`
* [x] Non-admin access blocked with `403 Forbidden`
* [x] Admin access successfully verified with `200 OK`
* [x] Temporary `/admin-test` endpoint created for testing
* [x] Admin and normal-user role authorization tested

#### Step 10.6 — Postman Authentication Testing

* [x] `/auth-test` tested with valid access token
* [x] `/users/me` tested with valid access token
* [x] `/admin-test` tested with normal user
* [x] `/admin-test` tested with admin user
* [x] Invalid access token tested
* [x] `401 Unauthorized` response verified
* [x] `403 Forbidden` response verified
* [x] Authentication and authorization flow verified through Postman

#### Step 10.7 — Authentication Git Checkpoint

* [x] Authentication changes reviewed
* [x] Temporary authentication testing files excluded from Git
* [x] Temporary admin testing file excluded from Git
* [x] README updated
* [x] Authentication milestone committed
* [x] Changes pushed to GitHub `master`

### Step 11 — Music Data & Songs API

* [x] Song Pydantic schemas created
* [x] Song service created
* [x] Songs router created
* [x] Songs router registered in `main.py`
* [x] Public `GET /songs` endpoint implemented
* [x] Public `GET /songs/{song_id}` endpoint implemented
* [x] Admin-only `POST /songs` endpoint implemented
* [x] Admin-only `PUT /songs/{song_id}` endpoint implemented
* [x] Admin-only `DELETE /songs/{song_id}` endpoint implemented
* [x] Song title validation added
* [x] Supported emotion validation added
* [x] Song creation tested successfully
* [x] Song update tested successfully
* [x] Public song listing tested
* [x] Single-song retrieval tested
* [x] Nonexistent song ID returns `404 Not Found`
* [x] Empty and whitespace-only title validation tested
* [x] Invalid emotion validation tested

#### Step 11.5 — Validation & Final Verification

* [x] Invalid request data returns `422 Unprocessable Entity`
* [x] Nonexistent song update returns `404 Not Found`
* [x] Nonexistent song deletion returns `404 Not Found`
* [ ] Review all Songs API and service files
* [ ] Complete final API verification
* [ ] Review Git diff and repository status
* [ ] Complete Step 11 Git checkpoint

---

## Upcoming Backend Work

* [x] Step 11 — Music Data & Songs API
* [ ] Step 12 — Favorites & Playlist APIs
* [ ] Step 13 — Listening History API
* [ ] Step 14 — Recommendation Logic
* [ ] Step 15 — MobileNetV2 Model Integration
* [ ] Step 16 — Emotion Prediction API
* [ ] Step 17 — Recommendation API
* [ ] Step 18 — Complete Backend Flow
* [ ] Step 19 — Validation & Error Handling
* [ ] Step 20 — Complete Postman Testing
* [ ] Step 21 — Backend Cleanup & Final Testing
* [ ] Step 22 — Backend MVP Checkpoint

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
    ├── test_supabase_auth.py
    │
    └── app/
        ├── __init__.py
        ├── main.py
        │
        ├── api/
        │   ├── __init__.py
        │   ├── dependencies.py
        │   ├── health.py
        │   ├── users.py
        │   ├── auth_test.py
        │   ├── admin_test.py
        │   └── songs.py
        │
        ├── core/
        │   ├── __init__.py
        │   ├── config.py
        │   ├── database.py
        │   └── security.py
        │
        ├── models/
        │   ├── __init__.py
        │   ├── user.py
        │   ├── song.py
        │   ├── favorite.py
        │   ├── playlist.py
        │   ├── playlist_song.py
        │   ├── recommendation.py
        │   └── listening_history.py
        │
        ├── schemas/
        │   ├── __init__.py
        │   ├── user.py
        │   ├── song.py
        │   ├── favorite.py
        │   ├── playlist.py
        │   ├── playlist_song.py
        │   ├── recommendation.py
        │   └── listening_history.py
        │
        └── services/
            ├── __init__.py
            ├── user_service.py
            └── song_service.py
```

> Note: The project structure shows the main application files. Temporary authentication/testing files may be excluded from Git through `.gitignore`. The local `.env` and `.venv` are not to be committed to GitHub.

---

# Current API

## Health Check

**Method:** `GET`

**Endpoint:** `/health`

**Local URL:** `http://127.0.0.1:8000/health`

**Example Response:**

```json
{
  "status": "ok",
  "message": "Music App Backend is running"
}
```

## Database Health Check

**Method:** `GET`

**Endpoint:** `/health/db`

**Local URL:** `http://127.0.0.1:8000/health/db`

**Example Response:**

```json
{
  "status": "ok",
  "database": "connected",
  "query_result": 1
}
```

## Authentication Test Endpoint

**Method:** `GET`

**Endpoint:** `/auth-test`

This endpoint was created for temporary authentication verification and is not tracked in Git.

## Current User Profile

**Method:** `GET`

**Endpoint:** `/users/me`

**Authentication:** Supabase access token required.

Header:

```text
Authorization: Bearer <Supabase access token>
```

**Example Response:**

```json
{
  "id": "user-uuid",
  "name": "User Name",
  "email": "user@example.com",
  "role": "user",
  "created_at": "timestamp"
}
```

The endpoint returns the application profile from `public.users` after validating the Supabase access token.

## Admin Test Endpoint

**Method:** `GET`

**Endpoint:** `/admin-test`

This endpoint was created temporarily to verify role-based admin authorization and is not tracked in Git.

**Normal user response:**

```json
{
  "detail": "Admin access required"
}
```

**Expected status:** `403 Forbidden`

**Example admin response:**

```json
{
  "admin_access": true,
  "user_id": "user-uuid",
  "role": "admin"
}
```

**Expected status:** `200 OK`

## Songs API

The Songs API provides endpoints to retrieve, create, update, and delete songs from the `songs` table.

### 1. Get All Songs

* **Method:** `GET`
* **Endpoint:** `/songs`
* **Authentication:** Not required
* **Success status:** `200 OK`

Returns the list of songs, ordered by creation date.

### 2. Get Song by ID

* **Method:** `GET`
* **Endpoint:** `/songs/{song_id}`
* **Authentication:** Not required
* **Success status:** `200 OK`

Returns a song by its UUID. If the song does not exist, the API returns `404 Not Found`.

### 3. Create Song

* **Method:** `POST`
* **Endpoint:** `/songs`
* **Authentication:** Admin access required
* **Success status:** `201 Created`

Creates a new song.

The emotion must be one of:

* `angry`
* `happy`
* `neutral`
* `sad`
* `surprise`

The title cannot be empty or contain only spaces.

### 4. Update Song

* **Method:** `PUT`
* **Endpoint:** `/songs/{song_id}`
* **Authentication:** Admin access required
* **Success status:** `200 OK`

Updates the supplied song fields. A nonexistent song returns `404 Not Found`, and an empty or whitespace-only title is rejected.

### 5. Delete Song

* **Method:** `DELETE`
* **Endpoint:** `/songs/{song_id}`
* **Authentication:** Admin access required
* **Success status:** `204 No Content`

Deletes a song by its UUID. A nonexistent song returns `404 Not Found`.

### Songs API Validation

* Song titles cannot be empty or contain only spaces.
* Emotion values are restricted to the five supported emotion classes.
* A nonexistent song ID returns `404 Not Found`.
* Invalid request data returns `422 Unprocessable Entity`.
* Admin-only endpoints require a valid Supabase access token and an application user with the `admin` role.

---

# Authentication Flow

```text
React Frontend
      ↓
Supabase Auth Login
      ↓
Supabase Access Token
      ↓
Authorization: Bearer <access_token>
      ↓
FastAPI
      ↓
JWT / ES256 Verification
      ↓
get_current_user()
      ↓
public.users
      ↓
Role Verification
      ↓
Authenticated / Admin API
```

The backend does not store user passwords.

Supabase Auth manages authentication credentials, while `public.users` stores application-specific user information such as name and role.

Admin-only APIs use the application user's role from `public.users`. A user with role `user` receives `403 Forbidden` when accessing an admin-only endpoint.

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

Database credentials and authentication configuration are stored in environment variables and are not committed to GitHub.

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
16. Authentication secrets and access tokens must never be committed or shared publicly.
17. Temporary testing files should be excluded from Git when they are not part of the application code.

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

**Backend — Step 11.5: Songs API Final Review**

The Songs API has been implemented with public read endpoints and admin-only create, update, and delete endpoints.

Completed checks include:

* Public song listing and single-song retrieval
* Song creation and update tested successfully
* Invalid emotion validation
* Empty and whitespace-only title validation
* Nonexistent song retrieval returning `404 Not Found`
* Nonexistent song update and deletion returning `404 Not Found`
* Invalid request data returning `422 Unprocessable Entity`

Remaining work:

* Review `backend/app/api/songs.py`
* Review `backend/app/services/song_service.py`
* Complete final API verification
* Review all changed files and Git status
* Complete the Step 11 Git checkpoint

The next feature milestone is **Step 12 — Favorites & Playlist APIs**.
