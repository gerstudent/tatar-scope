"""Declare ways to connect to database."""
import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from contextlib import contextmanager

from fastapi import HTTPException, status

# Create connection string
CONNECTION_STRING = sqlalchemy.engine.url.URL.create(
    drivername="postgresql",
    username="postgres",
    password="",
    host="localhost",
    database="tatarby",
    port="5432",
)


print(CONNECTION_STRING)
# Create an engine for out database to have a connection
engine = sqlalchemy.create_engine(str(CONNECTION_STRING))

# Session level
Session = sessionmaker(bind=engine)

# Declaring base for our models
Base = declarative_base()


@contextmanager
def session_scope(
        wrong_query_exception: Exception = HTTPException(
            status_code=status.HTTP_406_NOT_ACCEPTABLE,
            detail='Not acceptable data.'
        )
        ):
    """Provide a transactional scope around a series of operations."""
    session = Session()
    try:
        yield session
        session.commit()
    except Exception as e:
        session.rollback()
        if isinstance(e, HTTPException):
            raise e
        else:
            print(e)
            raise wrong_query_exception
    finally:
        session.close()