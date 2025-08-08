# GoRound Setup Instructions

This project uses Docker Compose to run both the **FastAPI backend** and **React frontend** in separate containers.

---

## 🐳 Prerequisites

- **Docker Desktop** must be installed and running.  
  👉 [Install Docker for Windows](https://docs.docker.com/desktop/setup/install/windows-install/)

---

## 🚀 Getting Started

### 1. Clone this repository and navigate to the root `GoRound` directory:

```bash
cd GoRound
```

### 2. Build and start the containers:

```bash
docker-compose up --build
```

This will build the `api` (FastAPI) and `frontend` (React) services.

---

## 🧪 Running Containers Interactively

Open **two terminals** in VS Code:

### Terminal 1 – API (FastAPI):

```bash
docker-compose run api bash
```

From here, you can manually start the FastAPI server with:

```bash
uvicorn app:app --host 0.0.0.0 --port 5000 --reload
```

### Terminal 2 – Frontend (React):

```bash
docker-compose run --service-ports frontend bash
```

Then inside the container, start the React development server:

```bash
npm start
```

---

## ✅ Let Me Know If It Works

Once both servers are running:
- Visit the frontend at: [http://localhost:3000](http://localhost:3000)
- The FastAPI backend should be live at: [http://localhost:5000](http://localhost:5000)

---