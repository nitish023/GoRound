# api/app.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router  # import your routes
import uvicorn

app = FastAPI()

origins = [
    "https://port3002-workspaces-ws-h2oe4.us10.trial.applicationstudio.cloud.sap",
    "http://localhost:3000"  # for local testing
]

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,  # Allow cookies / session
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=5000)
