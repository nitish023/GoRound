# api/Dockerfile

FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code (optional for build; overwritten by volume in dev)
COPY . .

# Run FastAPI with auto-reload
# CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000", "--reload"]
