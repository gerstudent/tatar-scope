"""Declare basic class for user instance."""
from db import Base
from db.mixins import BaseDBModel

from sqlalchemy import (
    Column,
    String,
    BigInteger,
    Text,
    Boolean,
)


class User(Base, BaseDBModel):
    """Main class for interaction with user instances in db."""

    __tablename__ = 'users'
    username = Column(String(255), nullable=False, unique=True)
    hashed_password = Column(Text, nullable=False)
    full_name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    experience = Column(
        BigInteger,
        nullable=False,
        default=0,
        server_default='0',
    )
    disabled = Column(Boolean, nullable=False, default=False)
