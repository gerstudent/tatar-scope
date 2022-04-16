"""Declare main mixins."""
import datetime

from sqlalchemy.sql import func
from sqlalchemy import Column, Integer, DateTime


class IdFieldMixin:
    """Mixin for models with id."""

    id = Column(Integer, primary_key=True)

    def __str__(self):
        """Declare basic string representation of the object."""
        return f'<{self.__class__.__name__} {self.id}>'


class BaseDBModel(IdFieldMixin):
    """Mixin for models with created_time and updated_time."""

    created_at = Column(
        DateTime,
        default=datetime.datetime.utcnow,
        server_default=func.now(),
        nullable=False,
    )
    updated_at = Column(
        DateTime,
        default=datetime.datetime.utcnow,
        server_default=func.now(),
        nullable=False,
        onupdate=func.now(),
    )
