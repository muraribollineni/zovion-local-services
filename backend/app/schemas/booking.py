from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime
from decimal import Decimal
from typing import Optional


class BookingCreate(BaseModel):
    service_id: int
    booking_date: datetime
    address: str
    description: Optional[str] = None


class BookingResponse(BaseModel):
    id: int
    customer_id: int
    service_id: int
    booking_date: datetime
    address: str
    description: Optional[str]
    total_price: Decimal
    status: str

    model_config = ConfigDict(from_attributes=True)


class BookingStatusUpdate(BaseModel):
    status: str = Field(
        pattern="^(confirmed|completed|cancelled)$"
    )