from sqlalchemy import (
    Column, Integer, String, Text,
    ForeignKey, DateTime, Numeric
)
from sqlalchemy.sql import func

from app.database import Base


class Booking(Base):

    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)

    customer_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    service_id = Column(
        Integer,
        ForeignKey("services.id"),
        nullable=False
    )

    booking_date = Column(DateTime, nullable=False)

    address = Column(String(255), nullable=False)

    description = Column(Text, nullable=True)

    total_price = Column(Numeric(10, 2), nullable=False)

    status = Column(
        String(30),
        default="pending",
        nullable=False
    )

    created_at = Column(DateTime, server_default=func.now())