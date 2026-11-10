from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Boolean,
    ForeignKey,
    DateTime,
    Numeric
)
from sqlalchemy.sql import func

from app.database import Base


class Service(Base):

    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)

    provider_id = Column(
        Integer,
        ForeignKey("providers.id"),
        nullable=False
    )

    name = Column(String(150), nullable=False)

    category = Column(String(100), nullable=False)

    description = Column(Text, nullable=True)

    price = Column(Numeric(10, 2), nullable=False)

    duration_minutes = Column(Integer, default=60)

    is_active = Column(Boolean, default=True)

    created_at = Column(DateTime, server_default=func.now())