
import React from "react";

export default function TaskList({ tasks, updateTask, deleteTask }) {

    const toggleComplete = (task) => {
        const updatedTask = {
            ...task,
            completed: !task.completed
        };

        updateTask(updatedTask);
    };

    return (
        <ul className="task-list">

            {tasks.map((task) => (

                <li
                    key={task.id}
                    className={task.completed ? "completed-task" : ""}
                >

                    {/* Task Information */}
                    <div>
                        <span>{task.text}</span>

                        <small>
                            ({task.priority}, {task.category})
                        </small>
                    </div>

                    {/* Buttons */}
                    <div>

                        <button
                            onClick={() => toggleComplete(task)}
                            className={task.completed ? "Undo" : "Complete"}
                        >
                            {task.completed ? "Undo" : "Complete"}
                        </button>

                        <button
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>

                    </div>

                </li>

            ))}

        </ul>
    );
}
