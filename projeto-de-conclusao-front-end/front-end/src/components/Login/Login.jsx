import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
    // Criar lógica (Regex) para verificar o e-mail fornecido é válido.
    // Criar lógica para verificar se o e-mail fornecido está cadastrado
    // no banco de dados.

    // const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // handleLoginSuccess está relacionado ao Login com o Google
    const handleLoginSuccess = (response) => {
        try {
            if (response && response.credential) {
                const decodedJwt = jwtDecode(response.credential);
                console.log("Decoded JWT:", decodedJwt);

                localStorage.setItem("token", response.credential);
                localStorage.setItem("user", JSON.stringify(decodedJwt));

                // setUser(decodedJwt);

                navigate("/home/products");
            } else {
                console.error("Credenciais não encontradas.");
            }
        } catch (error) {
            console.error("Erro ao processar o login com o Google:", error);
        }
    }

    // handleLoginFailure está relacionado ao Login com o Google
    const handleLoginFailure = (error) => {
        console.error("Erro ao autentiticar com o Google:", error);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error("Login falhou. Verifique suas credenciais.");
            }

            const receivedData = await response.json();
            console.log("Resposta da API:", receivedData);

            // Salva o token no localStorage
            localStorage.setItem("token", receivedData.token);

            // Decodificar o token para obter o nome do usuário
            const decodedToken = jwtDecode(receivedData.token);
            const user = {
                name: decodedToken.name, // Extraído do token
                role: decodedToken.role,
            };

            // Salvar o usuário no localStorage
            localStorage.setItem("user", JSON.stringify(user));

            navigate("/home/products");

        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className={styles["login-container"]}>
            <div className={styles["form-wrapper"]}>
                <section className={styles["login-google"]}>
                    <header>
                        <h2>Login Com Sua Conta do Google</h2>
                    </header>
                    <div className={styles["login-button-container"]}>
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginFailure}
                            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
                        />
                    </div>
                </section>

                <form className={styles["form-container"]} onSubmit={handleLogin}>
                    <header>
                        <h2>Login Com Seu Email</h2>
                    </header>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <label htmlFor="email">Email:</label>
                    <div>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <label htmlFor="password">Senha:</label>
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={styles["forgot-password"]}>
                        <Link to="/forgot-password">Esqueceu sua senha?</Link>
                    </div>

                    <div className={styles["container-login-button"]}>
                        <button type="submit">Entrar</button>
                    </div>

                    <p>
                        Não possui uma conta? Faça seu <Link to="/signup">Cadastro</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;