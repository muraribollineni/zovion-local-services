from pydantic import BaseModel, ConfigDict
from typing import Optional


class ProviderCreate(BaseModel):
    business_name: str
    description: Optional[str] = None
    address: str
    city: str
    pincode: str
    years_experience: int = 0


class ProviderResponse(BaseModel):
    id: int
    user_id: int
    business_name: str
    description: Optional[str]
    address: str
    city: str
    pincode: str
    years_experience: int
    is_verified: bool

    model_config = ConfigDict(from_attributes=True)