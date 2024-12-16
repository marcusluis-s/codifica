import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    }

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/.test(password);
    const passwordMatch = (password, confirmPassword) => password === confirmPassword;
    const validateName = (name) => name.trim().length > 0;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const { name, email, password, confirmPassword } = formData;

        const newErrors = {
            name: validateName(name) ? "" : "O nome é obrigatório.",
            email: validateEmail(email) ? "" : "Email inválido.",
            password: validatePassword(password)
                ? ""
                : "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
            confirmPassword: passwordMatch(password, confirmPassword)
                ? ""
                : "As senhas não coincidem.",
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some((error) => error)) {
            try {
                const response = await fetch("http://localhost:3000/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setErrors((prevErrors) => ({ ...prevErrors, email: errorData.message }));
                } else {
                    alert("Usuário registrado com sucesso!");
                    navigate("/login");
                }
            } catch (error) {
                console.error("Erro:", error);
                alert("Erro ao registrar usuário.");
            }
        }

        setIsLoading(false);
    };

    return (
        <div className={styles["signup-container"]}>
            <div className={styles["form-wrapper"]}>
                <form onSubmit={handleSubmit} className={styles["form-container"]}>
                    <header>
                        <h2>Crie Sua Conta</h2>
                    </header>

                    <label htmlFor="name">Nome:</label>
                    <div>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Digite seu nome"
                        />
                    </div>
                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                    <label htmlFor="email">Email:</label>
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite seu email"
                        />
                    </div>
                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                    <label htmlFor="password">Senha</label>
                    <div>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Digite uma senha segura"
                        />
                    </div>
                    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

                    <label htmlFor="confirmPassword">Digite sua senha novamente</label>
                    <div>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Digite sua senha novamente"
                        />
                    </div>
                    {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}

                    <div className={styles["container-signup-button"]}>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Carregando..." : "Criar conta"}
                        </button>
                    </div>

                    <p>Já possui uma conta? Faça o <Link to="/login">Login</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;