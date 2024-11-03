import { useState } from "react";
import styles from "./ToDoList.module.css";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState(""); 
    const [errorMessage, setErrorMessage] = useState("");

    const handleAddTask = () => {
        if (task.trim() === "") {
            setErrorMessage("Por favor, adicione uma tarefa.");
            return;
        }
        
        // TIL que é possível criar objetos para um estado em React.
        // Objetos adicionados para o estado `task`: title e completed
        setTasks([...tasks, { title: task, completed: false }]);
        setTask("");
        setErrorMessage("");
    }

    const handleRemoveTask = (index) => {
        const filteredTasks = tasks.filter((_, i) => {
            return i !== index;
        });

        setTasks(filteredTasks);
    }

    const handleCheckedTask = (index) => {
        const updatedTasks = tasks.map((t, i) => {
            return i === index ? { ...t, completed: !t.completed } : t;
        });

        setTasks(updatedTasks);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        handleAddTask();
    }

    return (
        <div className={styles["container-to-do-list"]}>
            <h2>3 - Lista de Tarefas</h2>
            <form onSubmit={handleSubmit} className={styles["form"]}>
                <label htmlFor="to-do">Tarefa</label>
                <input
                    type="text"
                    value={task}
                    placeholder="Digite uma tarefa"
                    onChange={(event) => setTask(event.target.value)}
                />
                {errorMessage &&
                    <small className={styles["error-message"]}>{errorMessage}</small>
                }

                <button type="submit">Adicionar tarefa</button>
            </form>

            <main className={styles["to-do-list"]}>
                {tasks.map((t, i) => (
                    <ul key={i} className="">
                        <div>
                            <input
                                type="checkbox"
                                checked={t.completed}
                                onChange={() => handleCheckedTask(i)}
                            />
                            <li style={{ 
                                    textDecoration: t.completed ? "line-through" : "none",
                                    color: t.completed ? "gray" : "black" 
                            }}>
                                {t.title}
                            </li>
                        </div>
                        <button onClick={() => handleRemoveTask(i)}>Remover tarefa</button>
                    </ul>
                ))}
            </main> 
        </div>
    )
}

export default ToDoList;
