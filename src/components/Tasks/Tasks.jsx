import { useState } from "react";
import Task from "../Task/Task";
export default function Tasks({ tasks, setTasks }) {
    const [filter, setFilter] = useState("all")
    function deleteTask(id) {
        const newTasks = structuredClone(tasks);
        newTasks.splice(id, 1);
        setTasks(newTasks)
    }
    function checkTask(id) {
        setTasks(prevTasks =>
            prevTasks.map(t =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    }
    function completeAll() {
        setTasks(tasks.map(t => {
            return { ...t, completed: true }
        }))
    }
    function deleteCompleted() {
        setTasks(tasks.filter((t) => t.completed == false))
    }
    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") return task.completed
        if (filter === "remaining") return !task.completed
        return true; //all
    })
    const completedCount = tasks.filter(t=>t.completed).length
    const remainingCount = tasks.filter(t=>!t.completed).length
    return <>
        <div className="allButtons d-flex justify-content-between align-items-center my-3">
            <button className="complete" onClick={completeAll}>Complete All</button>
            <button className="delete" onClick={deleteCompleted}>Delete completed</button>
        </div>
        <div className="todoCard container">
            <ul className="list-unstyled">
                {filteredTasks.map(function (task) {
                    return <Task todo={task.title}
                        key={task.id}
                        isCompleted={task.completed}
                        handleDelete={deleteTask}
                        handleComplete={checkTask}
                        id={task.id}
                    />
                })}
            </ul>
        </div>
        <div className="total-n d-flex justify-content-between align-items-center">
            <div className="right d-flex justify-content-between align-items-center gap-3">
                <p>Completed Tasks: <span className="fw-bold text-white">{completedCount}</span></p>
                <p>Remaining Tasks: <span className="fw-bold text-white">{remainingCount}</span></p>
            </div>
            <div className="left d-flex justify-content-evenly align-items-center text-white fw-bold gap-4">
                <p className={filter === "all" ? "active" : ""} onClick={()=>{
                    setFilter("all")
                }}>All</p>
                <p className={filter === "completed" ? "active" : ""} onClick={()=>{
                    setFilter("completed")
                }}>completed</p>
                <p className={filter === "remaining" ? "active" : ""} onClick={()=>{
                    setFilter("remaining")
                }}>Remaining</p>
            </div>
        </div>
    </>
}
