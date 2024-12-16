import { useTheme } from "../../context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={styles["theme-toggle-button"]}>
            {theme === "light" ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
        </button>
    );
}

export default ThemeToggle;