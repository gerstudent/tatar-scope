from fastapi import FastAPI
from api.authentication import authentication
from api.routers import users


def configure_routers(app):
    app.include_router(authentication.router)
    app.include_router(users.router)


def get_app():
    app = FastAPI()
    configure_routers(app)
    return app


app = get_app()
