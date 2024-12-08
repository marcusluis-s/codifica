import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        console.log("Tema inicial:", savedTheme);
        return savedTheme;
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            console.log("Novo tema:", newTheme);
            return newTheme;
        });
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme deve ser usado em um ThemeProvider.");
    }
    return context;
}