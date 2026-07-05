"""
Configuration management for KrisiSar AI Backend
"""

from pydantic_settings import BaseSettings
from typing import Optional
import os

class Settings(BaseSettings):
    """Application settings"""
    
    # Application
    APP_NAME: str = "KrisiSar AI"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = False
    
    # API Keys
    GOOGLE_API_KEY: str
    
    # Database
    DATABASE_URL: str
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379"
    
    # BigQuery
    BIGQUERY_PROJECT_ID: str
    BIGQUERY_DATASET_ID: str = "krisisar_analytics"
    BIGQUERY_CREDENTIALS_PATH: Optional[str] = None
    
    # External APIs
    OPEN_METEO_API_URL: str = "https://api.open-meteo.com/v1/forecast"
    NASA_POWER_API_URL: Optional[str] = None
    AGMARKNET_API_URL: Optional[str] = None
    
    # Gemini Configuration
    GEMINI_MODEL_FLASH: str = "gemini-2.0-flash-exp"
    GEMINI_MODEL_PRO: str = "gemini-1.5-pro"
    GEMINI_MODEL_VISION: str = "gemini-2.0-flash-exp"
    GEMINI_TEMPERATURE: float = 0.7
    GEMINI_MAX_TOKENS: int = 8192
    
    # ChromaDB (for RAG)
    CHROMA_PERSIST_DIRECTORY: str = "./chroma_db"
    
    # File Upload
    MAX_FILE_SIZE: int = 10 * 1024 * 1024  # 10MB
    ALLOWED_IMAGE_TYPES: list = ["image/jpeg", "image/png", "image/jpg"]
    
    # Security
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    
    class Config:
        env_file = ".env"
        case_sensitive = True

# Initialize settings
settings = Settings()

# Validate critical settings
if not settings.GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY is required")

if not settings.DATABASE_URL:
    raise ValueError("DATABASE_URL is required")

if not settings.BIGQUERY_PROJECT_ID:
    raise ValueError("BIGQUERY_PROJECT_ID is required")
