from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Provider
from app.schemas.provider import ProviderCreate, ProviderResponse
from app.dependencies import get_current_user

router = APIRouter(
    prefix="/api/v1/providers",
    tags=["Providers"]
)


@router.post("/register", response_model=ProviderResponse, status_code=201)
def register_provider(
    data: ProviderCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    existing = db.query(Provider).filter(
        Provider.user_id == current_user.id
    ).first()

    if existing:
        raise HTTPException(
            status_code=409,
            detail="Provider profile already exists"
        )

    provider = Provider(
        user_id=current_user.id,
        business_name=data.business_name,
        description=data.description,
        address=data.address,
        city=data.city,
        pincode=data.pincode,
        years_experience=data.years_experience
    )

    db.add(provider)
    current_user.role = "provider"
    db.commit()
    db.refresh(provider)

    return provider