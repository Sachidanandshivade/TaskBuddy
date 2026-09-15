import React from 'react';

export default function ProgressTrack({tasks}) {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks === 0? 0: (completedTasks/totalTasks) * 100;
    return (
        <div className = "Progress-tracker">
            <p>
                {completedTasks} of {totalTasks}
                Tasks Completed
                 <span>{Math.round(progress)}%</span>
            </p>
            <div className = "progress-bar">
                <div className = "progress" style={{width: `${progress}%` }}>

                </div>
            </div>
          
        </div>
    )
}