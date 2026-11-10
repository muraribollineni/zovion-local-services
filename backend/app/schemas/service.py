from pydantic import BaseModel, ConfigDict, Field
from typing import Optional
from decimal import Decimal


class ServiceCreate(BaseModel):
    name: str
    category: str
    description: Optional[str] = None
    price: Decimal = Field(gt=0)
    duration_minutes: int = Field(default=60, gt=0)


class ServiceResponse(BaseModel):
    id: int
    provider_id: int
    name: str
    category: str
    description: Optional[str]
    price: Decimal
    duration_minutes: int
    is_active: bool

    model_config = ConfigDict(from_attributes=True)