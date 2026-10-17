
from uuid import UUID

from sqlalchemy import func, or_
from sqlalchemy.orm import Session

from app.models.favorite import Favorite
from app.models.listening_history import ListeningHistory
from app.models.song import Song


def get_personalized_recommendations(
    db: Session,
    user_id: UUID,
    limit: int = 10,
) -> list[Song]:
    """
    Recommend valid songs using favorites and listening history.
    """

    if limit < 1:
        return []

    # 1. Get the user's favorite song IDs.
    favorite_song_ids = {
        song_id
        for (song_id,) in (
            db.query(Favorite.song_id)
            .filter(Favorite.user_id == user_id)
            .all()
        )
    }

    # 2. Get all song IDs in the user's listening history.
    history_song_ids = {
        song_id
        for (song_id,) in (
            db.query(ListeningHistory.song_id)
            .filter(ListeningHistory.user_id == user_id)
            .all()
        )
    }

    # 3. Load valid favorite songs to learn preferences.
    favorite_songs = (
        db.query(Song)
        .filter(
            Song.id.in_(favorite_song_ids),
            Song.title.isnot(None),
            func.trim(Song.title) != "",
        )
        .all()
        if favorite_song_ids
        else []
    )

    preferred_emotions = {
        song.emotion for song in favorite_songs if song.emotion
    }

    preferred_genres = {
        song.genre for song in favorite_songs if song.genre
    }

    # 4. Exclude songs already favorited or played.
    excluded_song_ids = favorite_song_ids | history_song_ids

    # 5. Only recommend songs with valid titles.
    base_query = db.query(Song).filter(
        Song.title.isnot(None),
        func.trim(Song.title) != "",
    )

    if excluded_song_ids:
        base_query = base_query.filter(
            ~Song.id.in_(excluded_song_ids)
        )

    # 6. Find songs matching favorite emotions or genres.
    if preferred_emotions or preferred_genres:
        conditions = []

        if preferred_emotions:
            conditions.append(
                Song.emotion.in_(preferred_emotions)
            )

        if preferred_genres:
            conditions.append(
                Song.genre.in_(preferred_genres)
            )

        matching_query = base_query.filter(or_(*conditions))

        recommendations = (
            matching_query
            .order_by(Song.created_at.desc())
            .limit(limit)
            .all()
        )
    else:
        recommendations = []

    # 7. Fill remaining slots with other valid songs.
    if len(recommendations) < limit:
        recommended_ids = {song.id for song in recommendations}

        fallback_query = base_query

        if recommended_ids:
            fallback_query = fallback_query.filter(
                ~Song.id.in_(recommended_ids)
            )

        remaining_limit = limit - len(recommendations)

        fallback_songs = (
            fallback_query
            .order_by(Song.created_at.desc())
            .limit(remaining_limit)
            .all()
        )

        recommendations.extend(fallback_songs)

    return recommendations
