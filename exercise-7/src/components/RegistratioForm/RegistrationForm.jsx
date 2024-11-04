import { useState } from "react";
import styles from "./RegistrationForm.module.css";

const initialState = {
    name: "",
    email: "",
    password: ""
};

function RegistrationForm() {
    const [formData, setFormData] = useState(initialState);
    const [showInputData, setShowInputData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevValues) => {
            return {
                ...prevValues,
                [name]: value
            }
        });
        
        // Limpa a mensagem de erro qnd um campo é alterado
        if (errorMessage) {
            setErrorMessage("");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.name.trim() === "" || formData.email.trim() === "" || formData.password.trim() === "") {
            setErrorMessage("Todos os campos são obrigatórios.");
            return;
        }     
        
        setShowInputData(formData);

        setFormData(initialState);
    }

    return (
        <div className={styles["container-registration-form"]}>
            <h2>6 - Formulário de Registro Simples</h2>

            <form onSubmit={handleSubmit}>
                {errorMessage && (
                    <small style={{color: "red"}}>{errorMessage}</small>
                )} 

                <div className={styles["form-group"]}>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome"
                    />
                </div>

                <div className={styles["form-group"]}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome"
                    />
                </div>

                <div className={styles["form-group"]}>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome"
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>

            {showInputData && (
                <section>
                    <h2>Bem-vindo</h2>
                    <ul>
                        <li>Nome: {showInputData.name}</li>
                        <li>Email: {showInputData.email}</li>
                        <li>Vazou a senha: {showInputData.password}</li>
                    </ul>
                </section>
            )}
        </div>
    )
}

export default RegistrationForm;
