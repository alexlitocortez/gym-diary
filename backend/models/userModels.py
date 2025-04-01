from pydantic import BaseModel, EmailStr, Field
from typing import Literal, Optional
from bson import ObjectId
from datetime import date, datetime, time, timedelta
from passlib.context import CryptContext

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str = Field(..., min_length=6)
    # hashed_password: str