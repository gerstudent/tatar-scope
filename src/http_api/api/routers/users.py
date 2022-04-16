from api.authentication.authentication import (
    get_current_active_user,
    get_password_hash,
    User,
)
from pydantic import BaseModel, Field

from db.models import users
from db import session_scope

from fastapi import APIRouter, Depends
from core.config import get_app_settings


settings = get_app_settings()
router = APIRouter(prefix=settings.api_prefix + '/users')


class CreationUser(BaseModel):
    username: str = Field(..., max_length=255)
    password: str = Field(..., max_length=255)
    email: str = Field(...,  max_length=255)
    full_name: str = Field(..., max_length=255)


@router.get("/", tags=['Users'], response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


@router.post('/', tags=['Users'], response_model=User)
async def create_user(user_data: CreationUser):
    with session_scope() as session:
        user = users.User(
            username=user_data.username,
            hashed_password=get_password_hash(user_data.password),
            email=user_data.email,
            full_name=user_data.full_name,
        )
        session.add(user)
        session.commit()
        return User.from_orm(user)
