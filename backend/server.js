require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// In memory Storage for tasks
let tasks = [];
let currentId = 1;

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

//Post a new task
app.post("/tasks", (req, res) => {
    const { title, description } = req.body;
    const newTask = {
        id: currentId++,
        title,
        description
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

//Delete a task
app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);

    const taskExists = tasks.some(task => task.id === taskId);
    if (!taskExists) {
        return res.status(404).json({ message: "Task not found" });
    }

    //Deletion
    tasks = tasks.filter(task => task.id !== taskId);

    res.status(200).json({
        message: "Task deleted successfully"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});