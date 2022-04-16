from functools import lru_cache
from typing import Type

from core.settings.app import AppSettings
from core.settings.base import AppEnvTypes, BaseAppSettings
from core.settings.development import DevAppSettings
from core.settings.production import ProdAppSettings


environments: dict[AppEnvTypes, Type[AppSettings]] = {
    AppEnvTypes.dev: DevAppSettings,
    AppEnvTypes.prod: ProdAppSettings,
}


@lru_cache
def get_app_settings() -> AppSettings:
    app_env = BaseAppSettings().app_env
    config = environments[app_env]
    return config()
