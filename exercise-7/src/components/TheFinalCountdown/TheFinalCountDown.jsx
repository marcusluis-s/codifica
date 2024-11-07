import { useEffect, useState } from "react";
import styles from "./TheFinalCountDown.module.css";

function TheFinalCountDown() {
    const [time, setTime] = useState(10);
    const [userInput, setUserInput] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => Math.max(prevTime - 1, 0));
            }, userInput * 1000);
        } else if (!isRunning || time === 0) {
            clearInterval(interval);

            if (time === 0 && isRunning) {
                alert("O tempo acabou.");
                setIsRunning(false);
            }
        }

        return () => clearInterval(interval);

    }, [isRunning, time, userInput]);

    const handleInputChange = (event) => {
        const value = event.target.value;

        if (isNaN(value) || value <= 0) {
            alert("Entrada inválida. Digite um número inteiro.");
            return;
        }

        setUserInput(parseInt(value, 10));
    }

    const handleRestart = () => {
        setIsRunning(false);
        setTime(10);
        setUserInput("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userInput > 0) {
            setIsRunning(true);
            setTime(10);
        }
    }

    return (
        <div className={styles["container-countdown"]}>
            <header>
                <h2>9 - Timer com Intervalo e Alerta</h2> 
            </header>

            <form onSubmit={handleSubmit}>
                <label>Digite um número inteiro em segundos:</label>
                <input 
                    type="number"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Digite um número inteiro em segundos"
                />
                <button type="submit">Enviar</button> 
            </form>

            <div>
                <p>{time}</p>
            </div>

            <div>
                <button type="button" onClick={() => setIsRunning(false)}>Parar</button>
                <button type="button" onClick={handleRestart}>Reiniciar</button>
            </div>
        </div>
    )
}

export default TheFinalCountDown;
