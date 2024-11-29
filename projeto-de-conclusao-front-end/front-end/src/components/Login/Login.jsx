import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Header from "../Header/Header"

function Login() {
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (response) => {
        console.log("Credenciais: ", response.credential);

        const decodedJwt = jwtDecode(response.credential);
        console.log(decodedJwt);

        setUser(decodedJwt);
    }

    const handleLoginFailure = (error) => {
        console.error("Erro ao autentiticar: ", error);
    }

    const handleSignOut = () => {
        setUser(null);
    }

    return (
        <div>
            {user && (
                <Header user={user} handleSignOut={handleSignOut} />
            )}

            {!user && (
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

                    <form className={styles["login-container"]}>
                        <header>
                            <h2>Ou faça seu login com um email</h2>
                        </header>

                        <label htmlFor="email">Email:</label>
                        <div>
                            <input type="email" name="" id="email" placeholder="Digite seu email" />
                        </div>

                        <label htmlFor="password">Senha:</label>
                        <div>
                            <input type="password" name="" id="password" placeholder="Digite sua senha" />
                        </div>

                        <Link to="/forgot-password">Esqueceu sua senha?</Link>

                        <p>Não possui uma conta? Faça seu <Link to="/signup">cadastro</Link></p>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Login;