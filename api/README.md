# GoRound - Financial Goal Tracker 💰

GoRound is a simple financial web application that allows users to:

- 🎯 Create financial **goals** (e.g., save $5,000 for a vacation)
- 💵 Deposit money toward those goals
- 📊 Track progress with a visual progress bar

---

## 🧱 Tech Stack

- 🔙 Backend: [Flask](https://flask.palletsprojects.com/) (Python)
- 🔛 API: RESTful
- 🎨 Frontend: [React](https://reactjs.org/)
- 🔐 CORS-enabled for local development

---

## 🚀 Getting Started

### 📁 Project Structure

GoRound/
├── api/ # Flask backend
│ ├── app.py
│ ├── routes.py
│ ├── models.py
├── goround/ # React frontend
│ ├── src/
│ ├── public/
│ └── ...
├── README.md
├── requirements.txt
└── package.json

## 🔧 Backend Setup (Flask)

### 1. Navigate to backend

cd api

install dependencies:

pip install .

### 2. Navigate to frontend

cd goround

npm i

npm start

react should run on: 

http://localhost:3000