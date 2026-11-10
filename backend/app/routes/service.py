from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Service, Provider
from app.schemas.service import ServiceCreate, ServiceResponse
from app.dependencies import get_current_user

router = APIRouter(
    prefix="/api/v1/services",
    tags=["Services"]
)


@router.post("/", response_model=ServiceResponse, status_code=201)
def create_service(
    data: ServiceCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    provider = db.query(Provider).filter(
        Provider.user_id == current_user.id
    ).first()

    if not provider:
        raise HTTPException(
            status_code=403,
            detail="Register as a provider first"
        )

    service = Service(
        provider_id=provider.id,
        name=data.name,
        category=data.category,
        description=data.description,
        price=data.price,
        duration_minutes=data.duration_minutes
    )

    db.add(service)
    db.commit()
    db.refresh(service)

    return service


@router.get("/", response_model=list[ServiceResponse])
def list_services(db: Session = Depends(get_db)):
    return db.query(Service).filter(
        Service.is_active == True
    ).all()