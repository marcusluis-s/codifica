import { useEffect, useState } from "react";
import styles from "./ChangingBackgroundColor.module.css";

function ChangingBackgroundColor() {
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState("#4682B4");

    const colors = ["#C0C0C0", "#808080", "#008080", "#FF0000", "#800000", "#FFFF00", "#808000"];

    const handleChangeBackgroundColor = () => {
        // `Math.floor(Math.random() * colors.length)` gera um número aleatório
        // que pode ser usado como um index para acessar os elementos no array `colors`
        const randomIndex = Math.floor(Math.random() * colors.length);
        setCurrentBackgroundColor(colors[randomIndex]);
    }

    useEffect(() => {
        document.querySelector(`.${styles["container-bg-color"]}`);
    }, [currentBackgroundColor]);  

    return (
        <div className={styles["container-bg-color"]} style={{backgroundColor: currentBackgroundColor}}>
            <h2>2 - Alteração de Cor de Fundo</h2>
            <p>Clique no botão para alterar a cor de fundo deste container.</p>
            <button onClick={handleChangeBackgroundColor}>Alterar cor de fundo</button>
        </div>
    )
}

export default ChangingBackgroundColor;
