# Gradient Descent Optimizer

A web-based application to optimize a 4th-degree polynomial using the Gradient Descent algorithm.

This project allows users to:
- Enter polynomial coefficients
- Adjust learning rate and iteration count
- Compute the minimum value
- Visualize convergence graphically

------------------------------------------------------------

## 📌 Mathematical Model

Polynomial:

f(x) = ax⁴ + bx³ + cx² + dx + e

Derivative:

f'(x) = 4ax³ + 3bx² + 2cx + d

Gradient Descent Update Rule:

xₙ₊₁ = xₙ − η f'(xₙ)

Where:
- η = learning rate
- n = iteration number

------------------------------------------------------------

## ⚙️ Features

- Custom polynomial coefficients input
- Adjustable learning rate
- Adjustable iteration count
- Displays minimum x value
- Displays minimum f(x)
- Convergence graph visualization
- Clean academic UI

------------------------------------------------------------

## 🛠️ Tech Stack

Frontend:
- React (Vite)
- Recharts
- Axios

Backend:
- Python
- Flask
- Flask-CORS
- NumPy

------------------------------------------------------------

## 🚀 How to Run the Project

IMPORTANT: Backend must be started before frontend.

------------------------------------

### Step 1: Install Python (3.8 or higher)

Verify installation:

python --version

------------------------------------

### Step 2: Run Backend

1. Open terminal inside the backend folder.
2. Install required packages:

pip install -r requirements.txt

3. Start the server:

python app.py

Backend will run at:
http://localhost:5000

------------------------------------

### Step 3: Install Node.js (16+ recommended)

Verify installation:

node -v

------------------------------------

### Step 4: Run Frontend

1. Open a new terminal inside the frontend folder.
2. Install dependencies:

npm install

3. Start development server:

npm run dev

Frontend will run at:
http://localhost:5173 (or similar port)

------------------------------------

### Step 5: Open in Browser

Open the frontend URL shown in terminal and use the application.

------------------------------------------------------------

## 📊 Output

The application displays:
- Optimized minimum x value
- Corresponding minimum f(x)
- Convergence graph of the optimization process

------------------------------------------------------------

## 📁 Project Structure

gradient-descent/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│
└── README.md

------------------------------------------------------------

## 📚 Academic Purpose

This project demonstrates practical implementation of:
- Gradient Descent Algorithm
- Polynomial optimization
- Numerical methods
- Full-stack integration (React + Flask)

------------------------------------------------------------

## 👨‍💻 Author


Course: M.TECH IN COMPUTER TECHNOLOGY [ AI AND DATA SCIENCE]
Institution: JADAVPUR UNIVERSITY 
GROUP NO. - 4
TOPIC - Gradient Descent with respect to a Function (Degree 4)
