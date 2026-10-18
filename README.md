# Music App

An AI-powered music recommendation application that detects facial emotions and recommends music based on the detected emotion.

## Project Status

- **Current Version:** MVP Version 1
- **Development Status:** In Progress
- **Current Backend Progress:** Step 14 — Recommendation Logic implementation in progress; recommendation service committed and pushed to GitHub
- **Next Backend Milestone:** Step 14 — Complete recommendation logic validation and documentation
- **Frontend Integration:** Not started yet

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
- React
- Vite
- Tailwind CSS

### Backend
- Python
- FastAPI
- Uvicorn
- SQLAlchemy
- Pydantic
- Pydantic Settings
- PyJWT
- Cryptography
- Supabase Python SDK
- Psycopg PostgreSQL driver

### Database
- PostgreSQL
- Supabase (managed PostgreSQL)

### Authentication and Authorization
- Supabase Auth
- JWT access tokens
- ES256 / ECC (P-256) JWT verification
- JWKS-based public key verification
- HTTP Bearer authentication
- Role-based authorization

### AI / Machine Learning
- TensorFlow
- Keras
- MobileNetV2
- OpenCV

### Development and Testing
- Postman
- Git
- GitHub
- VS Code

---

## Emotion Classes

The MVP currently supports five emotion classes:

- Angry
- Happy
- Neutral
- Sad
- Surprise

---

# Development Progress

## Backend

### Step 0 — Environment Setup
- [x] Python environment configured
- [x] Virtual environment created
- [x] Backend `.venv` configured
- [x] Python 3.12.10 verified
- [x] pip verified

### Step 1 — FastAPI Setup
- [x] FastAPI installed
- [x] Uvicorn installed
- [x] `requirements.txt` created
- [x] FastAPI application created
- [x] `/health` endpoint created and tested
- [x] Swagger `/docs` verified

### Step 2 — Git and GitHub Setup
- [x] Git initialized
- [x] `master` branch configured
- [x] `.gitignore` created
- [x] GitHub repository created
- [x] Remote `origin` configured
- [x] Initial backend setup pushed to GitHub

### Step 3 — Modular Backend Structure
- [x] `api` package created
- [x] `models` package created
- [x] `schemas` package created
- [x] `services` package created
- [x] `core` package created
- [x] Health router created and registered
- [x] Health endpoint verified through Postman and Swagger

### Step 4 — Configuration and Environment Variables
- [x] `.env` configuration created
- [x] `.env.example` created
- [x] Pydantic Settings configured
- [x] Application settings configured
- [x] Database URL configured
- [x] Supabase URL and public key configured
- [x] JWT issuer and JWKS URL configured
- [x] `.env` excluded from Git

### Step 5 — PostgreSQL / Supabase Connection
- [x] Supabase PostgreSQL project created
- [x] SQLAlchemy configured
- [x] Psycopg PostgreSQL driver installed
- [x] Database engine created
- [x] Database connection verified
- [x] `SELECT 1` query tested successfully

### Step 6 — Database Models and Tables

Seven application tables are configured:

- [x] `users`
- [x] `songs`
- [x] `recommendations`
- [x] `favorites`
- [x] `playlists`
- [x] `playlist_songs`
- [x] `listening_history`

#### Database Constraints
- [x] Primary keys
- [x] Foreign keys
- [x] `ON DELETE CASCADE` relationships
- [x] NOT NULL constraints
- [x] UNIQUE constraints
- [x] CHECK constraints
- [x] Emotion validation
- [x] Recommendation confidence validation
- [x] User role validation
- [x] Listening duration validation
- [x] Playlist position validation

#### Database Indexes
- [x] Song emotion index
- [x] Recommendation indexes
- [x] Favorite user index
- [x] Playlist user index
- [x] Playlist-song indexes
- [x] Listening-history indexes

#### Row Level Security
- [x] RLS enabled on all seven application tables
- [x] Database security structure verified
- [ ] Detailed user-specific RLS policies — deferred for separate verification and implementation

#### Seed and Test Data
- [x] Demo songs created
- [x] Supabase Auth test users created
- [x] Matching application user profiles created
- [x] Favorite test data created
- [x] Playlist test data created
- [x] Playlist songs created
- [x] Recommendation test data created
- [x] Listening history test data created

### Step 7 — Pydantic Schemas and API Contracts
- [x] User response schema
- [x] Song response schema
- [x] Favorite request and response schemas
- [x] Playlist request and response schemas
- [x] Playlist-song request and response schemas
- [x] Recommendation request and response schemas
- [x] Listening-history request and response schemas
- [x] Schema validation tested

### Step 8 — SQLAlchemy Models
- [x] SQLAlchemy `Base` configured
- [x] Seven database models created
- [x] Model relationships configured
- [x] Database tables verified
- [x] Model imports verified

### Step 9 — Database Session and Dependency Injection
- [x] SQLAlchemy `SessionLocal` configured
- [x] Database session dependency created
- [x] Automatic session closing implemented
- [x] Database dependency tested
- [x] `/health/db` endpoint created and verified

### Step 10 — Authentication, Authorization and User API

#### Authentication
- [x] PyJWT and Cryptography installed
- [x] Supabase Python SDK installed
- [x] Authentication dependencies recorded in `requirements.txt`
- [x] Supabase JWT configuration completed
- [x] ES256 / P-256 JWT verification implemented
- [x] JWKS-based verification configured
- [x] JWT issuer and audience validation configured
- [x] `get_current_user()` dependency created
- [x] User ID extracted from JWT `sub` claim
- [x] Authentication tested through Postman

#### User API
- [x] User service created
- [x] Current-user lookup implemented
- [x] `GET /users/me` implemented and tested
- [x] Supabase Auth user linked to application profile

#### Admin Authorization
- [x] `get_current_admin()` dependency created
- [x] Application role checked from `public.users`
- [x] Non-admin access blocked with `403 Forbidden`
- [x] Admin access verified with `200 OK`
- [x] Temporary `/admin-test` endpoint tested
- [x] Invalid access token tested with `401 Unauthorized`

#### Git Checkpoint
- [x] Authentication changes reviewed
- [x] Temporary test files reviewed
- [x] Changes committed and pushed to GitHub

### Step 11 — Music Data and Songs API

- [x] Song Pydantic schemas created
- [x] Song service created
- [x] Songs router created and registered
- [x] `GET /songs` — list songs
- [x] `GET /songs/{song_id}` — retrieve a song
- [x] `POST /songs` — admin-only song creation
- [x] `PUT /songs/{song_id}` — admin-only song update
- [x] `DELETE /songs/{song_id}` — admin-only song deletion
- [x] Song title validation implemented
- [x] Supported emotion validation implemented
- [x] Invalid request data tested
- [x] Missing song returns `404 Not Found`
- [x] Successful creation, retrieval, update and deletion tested
- [x] Changes committed and pushed to GitHub

### Step 12 — Favorites and Playlist APIs

#### Favorites API
- [x] Favorite service created
- [x] Favorites router registered
- [x] `GET /favorites` implemented
- [x] `POST /favorites` implemented
- [x] `DELETE /favorites/{favorite_id}` implemented
- [x] Duplicate favorite returns `409 Conflict`
- [x] Missing or unauthorized favorite returns `404 Not Found`
- [x] Favorites API tested

#### Playlist CRUD API
- [x] Playlist service and router created
- [x] Playlist Pydantic schemas created
- [x] `GET /playlists` implemented
- [x] `POST /playlists` implemented
- [x] `PUT /playlists/{playlist_id}` implemented
- [x] `DELETE /playlists/{playlist_id}` implemented
- [x] Playlist name validation implemented
- [x] Playlist ownership and authorization tested

#### Playlist Songs API
- [x] Playlist-song service and router created
- [x] `GET /playlists/{playlist_id}/songs` implemented
- [x] `POST /playlists/{playlist_id}/songs` implemented
- [x] `DELETE /playlists/{playlist_id}/songs/{song_id}` implemented
- [x] Duplicate playlist-song validation tested
- [x] Missing resources return `404 Not Found`
- [x] Playlist ownership and song existence verified

#### Git Checkpoint
- [x] Step 12 changes committed
- [x] Changes pushed to GitHub `master`

### Step 13 — Listening History API

#### Model and Schemas
- [x] Existing `ListeningHistory` SQLAlchemy model reviewed
- [x] Listening-history request and response schemas configured
- [x] `duration_seconds` validation requires a value greater than or equal to zero
- [x] Database constraint for non-negative listening duration retained

#### Service and Router
- [x] `listening_history_service.py` created
- [x] `listening_history.py` API router created
- [x] Router registered in `main.py`
- [x] Authenticated user ID obtained from the verified JWT
- [x] Application user profile checked
- [x] Song existence checked before recording history
- [x] Listening records filtered by the current user
- [x] Listening history sorted by `played_at` in descending order
- [x] Database errors handled with rollback

#### API Endpoints

| Method | Endpoint | Purpose | Expected success status |
|---|---|---|---|
| GET | `/listening-history` | Retrieve the current user's listening history | `200 OK` |
| POST | `/listening-history` | Record a listening-history entry | `201 Created` |

Both endpoints require a valid Supabase access token.

#### Validation and Testing
- [x] Successful listening-history creation tested
- [x] Listening-history retrieval tested
- [x] Negative duration rejected with `422 Unprocessable Entity`
- [x] Nonexistent song returns `404 Not Found`
- [x] Two different users tested
- [x] Cross-user history isolation tested
- [x] Backend application import verified
- [x] OpenAPI confirms GET and POST methods
- [x] Validation test file executed successfully
- [x] `git diff --check` completed
- [x] Git working tree verified clean after commit
- [x] Changes committed and pushed to GitHub `master`

#### Git Checkpoint
- [x] Listening History API committed
- [x] GitHub push completed
- [x] Local working tree verified clean


### Step 14 — Recommendation Logic

#### Recommendation Service
- [x] Existing Recommendation model and schema reviewed
- [x] Songs, favorites, and listening-history models reviewed
- [x] `recommendation_service.py` created
- [x] Personalized recommendation logic implemented
- [x] Favorite song emotions and genres used to identify preferences
- [x] Empty and spaces-only song titles excluded
- [x] Favorited and previously played songs excluded
- [x] Fallback recommendations implemented
- [x] Recommendation limit validation implemented

#### Validation and Testing
- [x] Recommendation service import verified
- [x] Database recommendation query tested
- [x] Blank-title filtering tested
- [x] Duplicate recommendation prevention tested
- [x] Zero and negative limits tested
- [x] Favorite exclusion tested
- [x] Listening-history exclusion tested for two users
- [x] Additional edge cases and fallback behavior verified
- [x] Recommendation service final review completed

#### Git Checkpoint
- [x] Recommendation service committed
- [x] Recommendation service pushed to GitHub `master`
- [ ] README changes committed and pushed


---

## Upcoming Backend Work

- [x] Step 11 — Music Data and Songs API
- [x] Step 12 — Favorites and Playlist APIs
- [x] Step 13 — Listening History API
- [ ] Step 14 — Recommendation Logic (final validation and review pending)
- [ ] Step 15 — MobileNetV2 Model Integration
- [ ] Step 16 — Emotion Prediction API
- [ ] Step 17 — Recommendation API
- [ ] Step 18 — Complete Backend Flow
- [ ] Step 19 — Validation and Error Handling
- [ ] Step 20 — Complete Postman Testing
- [ ] Step 21 — Backend Cleanup and Final Testing
- [ ] Step 22 — Backend MVP Checkpoint

---

# Frontend Progress

# Frontend Progress

Frontend development is managed inside the `frontend/` directory.

### Completed
- [x] React + Vite project setup
- [x] Tailwind CSS installation and configuration
- [x] Initial Renix UI rendered and verified in the browser
- [x] Frontend folder structure created
- [x] Initial frontend Git checkpoint committed and pushed
- [x] Reusable UI components (Button and Navbar created and tested)

### In Progress
- [ ] Application routing and shared layouts
- [ ] Landing page
- [ ] Sign Up and Sign In pages
- [ ] Home and music discovery pages
- [ ] Music player, favorites, playlists, and history
- [ ] Emotion detection and recommendation UI
- [ ] FastAPI integration
- [ ] Responsive design and final testing

# Project Structure

Main application structure:

```text
Music-App/
├── README.md
├── .gitignore
├── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── layouts/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── package-lock.json
    └── vite.config.js
└── backend/
    ├── .env
    ├── .env.example
    ├── .venv/
    ├── requirements.txt
    ├── test_listening_history_validation.py
    └── app/
        ├── __init__.py
        ├── main.py
        ├── api/
        │   ├── __init__.py
        │   ├── dependencies.py
        │   ├── health.py
        │   ├── users.py
        │   ├── auth_test.py
        │   ├── admin_test.py
        │   ├── songs.py
        │   ├── favorites.py
        │   ├── playlists.py
        │   ├── playlist_songs.py
        │   └── listening_history.py
        ├── core/
        │   ├── __init__.py
        │   ├── config.py
        │   ├── database.py
        │   └── security.py
        ├── models/
        │   ├── __init__.py
        │   ├── user.py
        │   ├── song.py
        │   ├── favorite.py
        │   ├── playlist.py
        │   ├── playlist_song.py
        │   ├── recommendation.py
        │   └── listening_history.py
        ├── schemas/
        │   ├── __init__.py
        │   ├── user.py
        │   ├── song.py
        │   ├── favorite.py
        │   ├── playlist.py
        │   ├── playlist_song.py
        │   ├── recommendation.py
        │   └── listening_history.py
        └── services/
            ├── __init__.py
            ├── user_service.py
            ├── song_service.py
            ├── favorite_service.py
            ├── playlist_service.py
            ├── playlist_song_service.py
            └── listening_history_service.py
```

**Notes:**
- This is the documented main application structure. Verify the actual repository before treating it as an exhaustive file listing.
- Local `.env` and `.venv` must not be committed to GitHub.
- Temporary test files should be retained only when they serve an intended testing or development purpose.

---

# Current API

## Health Check

- **Method:** `GET`
- **Endpoint:** `/health`
- **Local URL:** `http://127.0.0.1:8000/health`

Example response:

```json
{
  "status": "ok",
  "message": "Music App Backend is running"
}
```

## Database Health Check

- **Method:** `GET`
- **Endpoint:** `/health/db`
- **Local URL:** `http://127.0.0.1:8000/health/db`

Example response:

```json
{
  "status": "ok",
  "database": "connected",
  "query_result": 1
}
```

## Authentication Test

- **Method:** `GET`
- **Endpoint:** `/auth-test`

This endpoint was created to verify authentication.

## Current User Profile

- **Method:** `GET`
- **Endpoint:** `/users/me`
- **Authentication:** Supabase access token required

Header:

```text
Authorization: Bearer <Supabase access token>
```

The endpoint returns the application profile from `public.users` after validating the Supabase access token.

## Admin Test

- **Method:** `GET`
- **Endpoint:** `/admin-test`

This endpoint was created to verify role-based admin authorization.

- Normal users should receive `403 Forbidden`.
- Authorized admin users should receive `200 OK`.

## Songs API

| Method | Endpoint | Access |
|---|---|---|
| GET | `/songs` | Public |
| GET | `/songs/{song_id}` | Public |
| POST | `/songs` | Admin |
| PUT | `/songs/{song_id}` | Admin |
| DELETE | `/songs/{song_id}` | Admin |

Supported emotion values:

- `angry`
- `happy`
- `neutral`
- `sad`
- `surprise`

Song titles cannot be empty or contain only spaces. Invalid request data returns `422 Unprocessable Entity`. A nonexistent song returns `404 Not Found`.

## Favorites API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/favorites` | List the current user's favorites |
| POST | `/favorites` | Add a song to favorites |
| DELETE | `/favorites/{favorite_id}` | Remove a favorite |

Authenticated users can manage their own favorites. Duplicate favorites are rejected.

## Playlists API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/playlists` | List the current user's playlists |
| POST | `/playlists` | Create a playlist |
| PUT | `/playlists/{playlist_id}` | Update a playlist |
| DELETE | `/playlists/{playlist_id}` | Delete a playlist |
| GET | `/playlists/{playlist_id}/songs` | List songs in a playlist |
| POST | `/playlists/{playlist_id}/songs` | Add a song to a playlist |
| DELETE | `/playlists/{playlist_id}/songs/{song_id}` | Remove a song from a playlist |

Playlist endpoints require authentication and enforce playlist ownership.

## Listening History API

### Get Listening History

- **Method:** `GET`
- **Endpoint:** `/listening-history`
- **Authentication:** Required
- **Success status:** `200 OK`

Returns the authenticated user's listening-history entries, ordered by `played_at` in descending order.

### Record Listening History

- **Method:** `POST`
- **Endpoint:** `/listening-history`
- **Authentication:** Required
- **Success status:** `201 Created`

Example request:

```json
{
  "song_id": "00000000-0000-0000-0000-000000000001",
  "played_at": "2026-10-14T18:30:00Z",
  "duration_seconds": 120
}
```

Use the UUID of an actual song in the database when testing a successful request.

The API obtains `user_id` from the verified access token. The client does not supply the owner ID in the request body.

Validation and error behavior:

- Negative `duration_seconds` returns `422 Unprocessable Entity`.
- A nonexistent song returns `404 Not Found`.
- A missing application user profile returns `404 Not Found`.
- Users receive only their own listening-history records.
- Each playback can create a separate history entry.

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

The backend does not store user passwords. Supabase Auth manages authentication credentials, while `public.users` stores application-specific user information such as name and role.

Admin-only endpoints check the application user's role.

---

# Database

The application uses PostgreSQL through Supabase.

```text
FastAPI
   ↓
SQLAlchemy
   ↓
Psycopg
   ↓
PostgreSQL / Supabase
```

Database credentials and authentication configuration are stored in environment variables and must never be committed to GitHub.

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
10. Both frontend and backend use the same GitHub repository.
11. The project uses the `master` branch.
12. Frontend work should modify only the `frontend/` folder.
13. Backend work should modify only the `backend/` folder.
14. Major milestones should be committed and pushed to GitHub.
15. Document major database changes in the README.
16. Authentication secrets and access tokens must never be committed or shared publicly.
17. Temporary testing files should be reviewed before being included in commits.

---

# Git Workflow

**GitHub repository:** [Ranjan-kumar-yadav/Music-Application](https://github.com/Ranjan-kumar-yadav/Music-Application)

**Branch:** `master`

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

The GitHub repository is the shared source of truth for the project.

---


# Current Next Task

## Backend — Step 14: Recommendation Logic

**Previous milestone:** Step 13 — Listening History API — completed, tested, committed, and pushed to GitHub `master`.

**Current progress:** Recommendation service implemented, tested, committed, and pushed to GitHub `master`. README progress documentation is being updated.

**Remaining work:**
- Complete additional edge-case and fallback behavior tests.
- Perform a final review of recommendation logic.
- Finish README updates and verify the changes.
- Commit and push the README updates.

**Next milestone:** Step 15 — MobileNetV2 Model Integration.

**Development rules:**
- Continue from the existing project; do not recreate the backend setup.
- Do not implement future features unless requested.
- Work one step at a time and verify each result before proceeding.
- Whenever a Python package is installed, update `backend/requirements.txt`.
- Use visible `python -c` checks for Python import or functionality verification.
