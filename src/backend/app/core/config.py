from functools import lru_cache
from pathlib import Path
from typing import Literal

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
from sqlalchemy.engine import make_url

backend_dir = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=backend_dir / ".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "FPGA Online Platform API"
    app_env: Literal["development", "test", "production"] = "development"
    database_url: str
    cors_origins: list[str] = ["http://localhost:5173", "http://127.0.0.1:5173"]

    @field_validator("database_url")
    @classmethod
    def validate_database_url(cls, value: str) -> str:
        url = make_url(value)
        if url.drivername != "postgresql+psycopg":
            raise ValueError("DATABASE_URL must use postgresql+psycopg")
        if not url.database:
            raise ValueError("DATABASE_URL must specify a database")
        return value


@lru_cache
def get_settings() -> Settings:
    return Settings()
