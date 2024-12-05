import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Header from "../Header/Header"

function Login() {
    // Criar lógica (Regex) para verificar o e-mail fornecido é válido.
    // Criar lógica para verificar se o e-mail fornecido está cadastrado
    // no banco de dados.

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Código relacionado ao Login com o Google
    const handleLoginSuccess = (response) => {
        console.log("Credenciais: ", response.credential);

        const decodedJwt = jwtDecode(response.credential);
        console.log(decodedJwt);

        setUser(decodedJwt);

        navigate("/products");
    }

    // Código relacionado ao Login com o Google
    const handleLoginFailure = (error) => {
        console.error("Erro ao autentiticar: ", error);
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
            console.log("Resposta da API: " + receivedData);

            setUser(receivedData.user);
            localStorage.setItem("token", receivedData.token);

            navigate("/products");

        } catch (err) {
            setError(err.message);
        }
    }

    const handleSignOut = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    return (
        <div>
            {user ? (
                <Header user={user} handleSignOut={handleSignOut} />
            ) : (
                <div>
                    <section>
                        <header>
                            <h2>Faça login com sua conta do Google</h2>
                        </header>
                        <div className={styles["login-button-container"]}>
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={handleLoginFailure}
                            />
                        </div>
                    </section>

                    <form className={styles["login-container"]} onSubmit={handleLogin}>
                        <header>
                            <h2>Ou faça seu login com um email</h2>
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

                        <div>
                            <button type="submit">Entrar</button>
                        </div>

                        <Link to="/forgot-password">Esqueceu sua senha?</Link>

                        <p>
                            Não possui uma conta? Faça seu <Link to="/signup">Cadastro</Link>
                        </p>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Login;