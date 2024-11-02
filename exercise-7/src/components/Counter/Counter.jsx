import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    };

    const handleDecrease = () => {
        setCount((prevCount) => {
            if (prevCount > 0) {
                return prevCount - 1; 
            }

            return prevCount;
        });
    }

    return (
        <div className={styles["counter-container"]}>
            <h2>1 - Contador Simples</h2>

            <button onClick={handleIncrease}>+</button>
            <span>{count}</span>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

export default Counter;
