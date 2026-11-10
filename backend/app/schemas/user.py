from pydantic import BaseModel, ConfigDict
from typing import Optional


class UserCreate(BaseModel):
    full_name: str
    email: str
    phone: Optional[str] = None
    password: str


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: str
    phone: Optional[str] = None
    role: str
    is_active: bool

    model_config = ConfigDict(from_attributes=True)

class UserLogin(BaseModel):
    email: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str