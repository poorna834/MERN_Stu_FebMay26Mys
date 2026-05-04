import { useState } from "react";

// Derived State and Conditional Rendering
// Derived State is a value calculated from existing state
// It is not usually stored Separately in a state
// Instead we compute it during rendering

export function DerivedStateCondRender() {
    const [tasks,setTasks] = useState([
        {id:1, title: 'Learn useState' , completed : true},
        {id:2, title: 'Practice Js' , completed : false},
        {id:3, title: 'Learn useState' , completed :false}
    ]);

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) => {
                return task.id === id
                ? { ...task, completed: !task.completed }
                : task;
            })
        );
    };

    // Derived State
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const allCompleted = totalTasks === completedTasks && totalTasks > 0;

    let statusMessage = "Keep going";
    if(totalTasks === 0){
        statusMessage = "No task available";
    }
    else if(allCompleted){
        statusMessage = "All Task Completed";
    }
    else if(completedTasks > 0){
        statusMessage = "Good Progress";
    }

    return(
        <>
            <p>Total Tasks : {totalTasks}</p>
            <p>Completed Tasks : {completedTasks}</p>
            <p>Pending Tasks : {pendingTasks}</p>

            <p>Status : {statusMessage}</p>

            {allCompleted && (
                <p style={{color:'green'}}>Great Job! You Finished Everything.</p>
            )}

            <p>
                Progress: {allCompleted ? 'Finished' : 'Still In Progress'}
            </p>

            <div>
                <h3>Task List</h3>
                {tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            {task.title} - {task.completed ? 'Done' : 'Pending'}
                            <button onClick={() => toggleTask(task.id)}>Toggle</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}