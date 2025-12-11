import { useState, useEffect } from "react"
import moon from "../../assets/images/icon-moon.svg"
import sun from "../../assets/images/icon-sun.svg"
import Tasks from "../Tasks/Tasks"
export default function Header() {
    // ^ Dark/light Modes
    const [isDark, setIsDark] = useState(true);
    // ^ input
    const [inputValue, setInputValue] = useState("");
    // ^ Tasks
    const [tasks, setTasks] = useState([
        { id: 1, title: "complete js online course", completed: true },
        { id: 2, title: "Jog around the park 3x", completed: false },
        { id: 3, title: "10 minutes meditation", completed: false },
        { id: 4, title: "Read for 1 hour", completed: false },
        { id: 5, title: "Pick up groceries", completed: false },
        { id: 6, title: "Complete js daily Study", completed: false },
    ]);
    const handleAddTask = (e) => {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            const newTask = {
                id: Date.now(), 
                title: inputValue.trim(),
                completed: false,
            };
            setTasks([newTask, ...tasks]);
            setInputValue("");
        }
    };
    const toggleTheme = () => {
        setIsDark(oldValue => !oldValue);
    };
    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [isDark]);
    return <>
        <div className={`header py-4 ${isDark ? "dark" : "light"}`}>
            <div className="inner container py-5">
                <div className="head d-flex justify-content-between pt-3">
                    <h1 className="text-white px-3">Todo</h1>
                    <div className="icon">
                        <button onClick={toggleTheme}>
                            <img
                                className="img-fluid"
                                src={isDark ? sun : moon}
                                alt={isDark ? "switch to light mode" : "switch to dark mode"}
                            />
                        </button>
                    </div>
                </div>
                <input
                        className="form-control container p-3 my-4 mx-auto"
                        type="text"
                        placeholder="Create a new task..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleAddTask}
                    />
                <Tasks tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    </>
}

