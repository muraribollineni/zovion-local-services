from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Boolean,
    ForeignKey,
    DateTime
)
from sqlalchemy.sql import func

from app.database import Base


class Provider(Base):

    __tablename__ = "providers"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True,
        nullable=False
    )

    business_name = Column(String(150), nullable=False)

    description = Column(Text, nullable=True)

    address = Column(String(255), nullable=False)

    city = Column(String(100), nullable=False)

    pincode = Column(String(10), nullable=False)

    years_experience = Column(Integer, default=0)

    is_verified = Column(Boolean, default=False)

    created_at = Column(DateTime, server_default=func.now())