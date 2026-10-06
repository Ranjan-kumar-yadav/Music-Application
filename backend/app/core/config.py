from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Music App API"
    app_version: str = "1.0.0"
    environment: str = "development"

    database_url: str

    supabase_url: str
    supabase_anon_key: str

    supabase_jwt_issuer: str
    supabase_jwt_jwks_url: str

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8"
    )


settings = Settings()