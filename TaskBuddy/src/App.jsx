import React from 'react';
import ProgressTrack from './Components/ProgressTrack.jsx';
import Taskform from './Components/Taskform.jsx';
import TaskList from './Components/TaskList.jsx';
import { useState, useEffect } from 'react';

export default function App() {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [search, setSearch] = useState('');

    // Search tasks
    const filterTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(search.toLowerCase())
    );

    // Save tasks to localStorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add task
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    // Update task
    const updateTask = (updatedTask) => {
        setTasks(tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        ));
    };

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Clear all tasks
    const clearTasks = () => {
        setTasks([]);
    };

    return (
        <div>

            <h1>Task-Buddy</h1>

            <p>
                <i>Friendly TaskManager</i>
            </p>

            <Taskform addTask={addTask} />

            <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <TaskList
                tasks={filterTasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />

            <ProgressTrack tasks={tasks} />

            {tasks.length > 0 && (
                <button
                    className="clear-btn"
                    onClick={clearTasks}
                >
                    Clear All Tasks
                </button>
            )}

        </div>
    );
}