from typing import Any

import jwt
from jwt import PyJWKClient
from fastapi import HTTPException, status

from app.core.config import settings


jwks_client = PyJWKClient(
    settings.supabase_jwt_jwks_url
)


def verify_access_token(token: str) -> dict[str, Any]:
    try:
        signing_key = jwks_client.get_signing_key_from_jwt(
            token
        )

        payload = jwt.decode(
            token,
            signing_key.key,
            algorithms=["ES256"],
            issuer=settings.supabase_jwt_issuer,
            audience="authenticated",
        )

        return payload

    except jwt.PyJWTError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired access token",
            headers={"WWW-Authenticate": "Bearer"},
        ) from exc