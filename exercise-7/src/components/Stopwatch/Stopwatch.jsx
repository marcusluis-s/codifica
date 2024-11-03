import { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    return prevTime + 10;
                });
            }, 10);
        } else if (!running && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [running, time]);

    const formatTime = (time) => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);
        const milliseconds = Math.floor((time % 1000) / 10);

        return {
            hours: String(hours).padStart(2, "0"),
            minutes: String(minutes).padStart(2, "0"),
            seconds: String(seconds).padStart(2, "0"),
            milliseconds: String(milliseconds).padStart(2, "0"),
        };
    };

    const { hours, minutes, seconds, milliseconds } = formatTime(time);

    return (
        <div className={styles["stopwatch-cotnainer"]}>
            <h2>4. Cronômetro com useEffect</h2>

            <div>
                <p>{`${hours}:${minutes}:${seconds}:${milliseconds}`}</p>

                <button onClick={() => setRunning(true)}>Iniciar</button>
                <button onClick={() => setRunning(false)}>Parar</button>
                <button onClick={() => { setRunning(false), setTime(0)} }>Zerar</button>
            </div>
        </div>
    )
}

export default Stopwatch;
