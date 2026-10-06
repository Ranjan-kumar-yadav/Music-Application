from typing import Annotated, Any
from uuid import UUID

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import verify_access_token
from app.services.user_service import get_user_by_id

bearer_scheme = HTTPBearer()


def get_current_user(
    credentials: Annotated[
        HTTPAuthorizationCredentials,
        Depends(bearer_scheme),
    ],
) -> dict[str, Any]:
    token = credentials.credentials

    payload = verify_access_token(token)

    user_id = payload.get("sub")

    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid access token: user ID is missing",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return payload


def get_current_admin(
    current_user: Annotated[
        dict[str, Any],
        Depends(get_current_user),
    ],
    db: Annotated[
        Session,
        Depends(get_db),
    ],
):
    user_id = UUID(current_user["sub"])

    user = get_user_by_id(
        db=db,
        user_id=user_id,
    )

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found",
        )

    if user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required",
        )

    return user