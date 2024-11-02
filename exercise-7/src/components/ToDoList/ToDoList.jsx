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

        setTasks([...tasks, task]);
        setTask("");
        setErrorMessage("");
    }

    const handleRemoveTask = (index) => {
        const filteredTasks = tasks.filter((_, i) => {
            return i !== index;
        });

        setTasks(filteredTasks);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        handleAddTask();
    }

    return (
        <div>
            <h2>3 - Lista de Tarefas</h2>
            <form onSubmit={handleSubmit} className={styles["form"]}>
                <div className={styles["form-group"]}>
                    <label htmlFor="to-do">Tarefa</label>
                    <input
                        type="text"
                        value={task}
                        placeholder="Digite uma tarefa"
                        onChange={(event) => setTask(event.target.value)}
                    />
                    {errorMessage &&
                        <p className={styles["error-message"]}>{errorMessage}</p>
                    }
                </div>

                <div>
                    <button type="submit">Adicionar tarefa</button>
                </div>
            </form>

            <main className={styles["to-do-list"]}>
                <ul>
                    {tasks.map((t, i) => (
                        <div>
                            <li key={i}>{t}</li>
                            <button onClick={() => handleRemoveTask(i)}>Remover tarefa</button>
                        </div>
                    ))}
                </ul> 
            </main>
        </div>
    )
}

export default ToDoList;
