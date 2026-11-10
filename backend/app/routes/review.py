from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Review, Booking, Service
from app.schemas.review import ReviewCreate, ReviewResponse
from app.dependencies import get_current_user

router = APIRouter(
    prefix="/api/v1/reviews",
    tags=["Reviews"]
)


@router.post("/", response_model=ReviewResponse, status_code=201)
def create_review(
    data: ReviewCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    booking = db.query(Booking).filter(
        Booking.id == data.booking_id,
        Booking.customer_id == current_user.id
    ).first()

    if not booking:
        raise HTTPException(404, "Booking not found")

    if booking.status != "completed":
        raise HTTPException(
            400,
            "You can review only completed bookings"
        )

    existing_review = db.query(Review).filter(
        Review.booking_id == booking.id
    ).first()

    if existing_review:
        raise HTTPException(
            409,
            "Review already submitted"
        )

    service = db.query(Service).filter(
        Service.id == booking.service_id
    ).first()

    review = Review(
        customer_id=current_user.id,
        provider_id=service.provider_id,
        booking_id=booking.id,
        rating=data.rating,
        comment=data.comment
    )

    db.add(review)
    db.commit()
    db.refresh(review)

    return review


@router.get("/provider/{provider_id}", response_model=list[ReviewResponse])
def get_provider_reviews(
    provider_id: int,
    db: Session = Depends(get_db)
):
    return db.query(Review).filter(
        Review.provider_id == provider_id
    ).all()