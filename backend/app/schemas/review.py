from pydantic import BaseModel, ConfigDict, Field
from typing import Optional


class ReviewCreate(BaseModel):
    booking_id: int
    rating: int = Field(ge=1, le=5)
    comment: Optional[str] = None


class ReviewResponse(BaseModel):
    id: int
    customer_id: int
    provider_id: int
    booking_id: int
    rating: int
    comment: Optional[str]

    model_config = ConfigDict(from_attributes=True)