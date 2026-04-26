import React, { useEffect, useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //Get Tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  //Create Task
  const createTask = async () => {
    try {
      const res = await fetch('http://localhost:5000/tasks', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ title, description }) 
      });
      const data = await res.json();
      setTasks([...tasks, data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }

  //Delete Task
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      });
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">

        <h1 className="text-2xl font-bold text-center mb-6"> Task Manager </h1>

        {/* Title */}
        <div className="space-y-3 mb-4">
          <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="w-full border p-2 rounded" />

          {/* Description */}
          <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="w-full border p-2 rounded"/>

          <button
            onClick={createTask}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" >
            Add Task
          </button>
        </div>

        {/* Existing Tasks */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="border p-3 rounded flex justify-between items-start" >

              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">
                  {task.description}
                </p>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700" >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App