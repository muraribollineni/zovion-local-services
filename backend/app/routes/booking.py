from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Booking, Service, Provider
from app.schemas.booking import (
    BookingCreate,
    BookingResponse,
    BookingStatusUpdate
)
from app.dependencies import get_current_user

router = APIRouter(
    prefix="/api/v1/bookings",
    tags=["Bookings"]
)


@router.post("/", response_model=BookingResponse, status_code=201)
def create_booking(
    data: BookingCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    service = db.query(Service).filter(
        Service.id == data.service_id,
        Service.is_active == True
    ).first()

    if not service:
        raise HTTPException(404, "Service not found")

    provider = db.query(Provider).filter(
        Provider.id == service.provider_id
    ).first()

    if provider.user_id == current_user.id:
        raise HTTPException(
            400,
            "You cannot book your own service"
        )

    booking = Booking(
        customer_id=current_user.id,
        service_id=service.id,
        booking_date=data.booking_date,
        address=data.address,
        description=data.description,
        total_price=service.price,
        status="pending"
    )

    db.add(booking)
    db.commit()
    db.refresh(booking)

    return booking


@router.get("/my-bookings", response_model=list[BookingResponse])
def get_my_bookings(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return db.query(Booking).filter(
        Booking.customer_id == current_user.id
    ).all()


@router.patch("/{booking_id}/status", response_model=BookingResponse)
def update_booking_status(
    booking_id: int,
    data: BookingStatusUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    booking = db.query(Booking).filter(
        Booking.id == booking_id
    ).first()

    if not booking:
        raise HTTPException(404, "Booking not found")

    service = db.query(Service).filter(
        Service.id == booking.service_id
    ).first()

    provider = db.query(Provider).filter(
        Provider.id == service.provider_id
    ).first()

    if provider.user_id != current_user.id:
        raise HTTPException(403, "Not authorized")

    if booking.status != "pending":
        raise HTTPException(
            400,
            "Only pending bookings can be updated"
        )

    booking.status = data.status
    db.commit()
    db.refresh(booking)

    return booking