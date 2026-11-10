from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import test_database_connection
from app.routes.user import router as user_router
from app.routes.provider import router as provider_router
from app.routes.service import router as service_router
from app.routes.booking import router as booking_router
from app.routes.review import router as review_router

app = FastAPI(
    title="Zovion API",
    description="Local Services Marketplace API",
    version="1.0.0"
)
app.include_router(user_router)
app.include_router(provider_router)
app.include_router(service_router)
app.include_router(booking_router)
app.include_router(review_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to Zovion API"
    }


@app.get("/api/v1/health")
def health_check():
    return {
        "status": "healthy",
        "application": "Zovion"
    }

@app.get("/api/v1/db-health")
def database_health():
    try:
        test_database_connection()
        return {
            "status": "connected",
            "database": "zovion_db"
        }
    except Exception as error:
        return {
            "status": "error",
            "message": str(error)
        }