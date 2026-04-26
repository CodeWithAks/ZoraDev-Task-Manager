# ZoraDev Task Manager

##  Overview

This is a simple full-stack Task Manager application built as part of the selection process for the Full Stack Developer Intern role at ZoraDev.
The application allows users to:

* Add tasks
* View tasks
* Delete tasks

It demonstrates basic full-stack integration between a React frontend and a Node.js backend.

---

##  Tech Stack

### Frontend:

* React (Vite)
* JavaScript
* Tailwind CSS

### Backend:

* Node.js
* Express.js

---

##  Live Demo

* Frontend: https://zora-dev-task-manager.vercel.app
* Backend API: https://zoradev-task-manager.onrender.com/tasks

---

##  How It Works

- The frontend fetches tasks from the backend API on page load
- Users can add tasks, which are sent to the backend via POST request
- Tasks are stored in memory and returned to the frontend
- Deleting a task sends a DELETE request to the backend and updates UI instantly

---

##  Project Structure

```
ZoraDev-Task-Manager/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## ⚙️ How to Run Locally

### 1️ Clone the repository

```
git clone https://github.com/CodeWithAks/ZoraDev-Task-Manager.git
cd ZoraDev-Task-Manager
```

---

### 2️ Run Backend

```
cd backend
npm install
node server.js
```

---

### 3️ Run Frontend

```
cd frontend
npm install
npm run dev
```

---

##  API Endpoints

* **GET /tasks** → Fetch all tasks
* **POST /tasks** → Create a new task
* **DELETE /tasks/:id** → Delete a task

---

##  Key Decisions

* Used in-memory storage instead of a database for simplicity
* Focused on clean and minimal UI rather than over-complicating design
* Ensured proper frontend-backend integration using REST APIs

---

##  Notes

* Backend is hosted on Render (free tier), so the first request may take a few seconds to respond
* No authentication is implemented as per assignment requirements

---

##  Bonus Features

* Clean UI using Tailwind CSS
* Proper error handling in API
* Dynamic task updates without page refresh

---

##  Submission

Submitted as part of the ZoraDev Full Stack Developer Intern selection task.

---

##  Author

Akshara Goyal
GitHub: https://github.com/CodeWithAks
