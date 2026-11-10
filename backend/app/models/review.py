from sqlalchemy import (
    Column, Integer, String, Text,
    ForeignKey, DateTime
)
from sqlalchemy.sql import func

from app.database import Base


class Review(Base):

    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)

    customer_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    provider_id = Column(
        Integer,
        ForeignKey("providers.id"),
        nullable=False
    )

    booking_id = Column(
        Integer,
        ForeignKey("bookings.id"),
        unique=True,
        nullable=False
    )

    rating = Column(Integer, nullable=False)

    comment = Column(Text, nullable=True)

    created_at = Column(DateTime, server_default=func.now())