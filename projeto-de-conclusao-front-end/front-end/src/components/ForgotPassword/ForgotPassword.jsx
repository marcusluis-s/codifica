import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

function ForgotPassword() {

    // TODO: Criar lógica para verificar se o e-mail fornecido pelo usuário
    // existe no banco de dados. Caso o e-mail não esteja no banco de dados
    // ou o usuário tenha cometido algum erro de digitação ao digitar o e-mail,
    // mostrar uma mensagem informando ao usuário que o e-mail fornecido está incorreto.

    return (
        <div className={styles["forgot-password-container"]}>
            <div className={styles["forgot-password-wrapper"]}>
                <form>
                    <header>
                        <h2>Redefina Sua Senha</h2>
                    </header>

                    <p>
                        Por favor, insira o endereço de e-mail associado à sua conta.<br />
                        Enviaremos um link para que você possa criar uma nova senha.
                    </p>

                    <label htmlFor="email">Email:</label>
                    <div>
                        <input
                            type="email"
                            name=""
                            id="email"
                            placeholder="Insira seu e-mail aqui"
                        />
                    </div>

                    <div className={styles["forgot-password-submit-button"]}>
                        <button type="submit">Enviar Link de Redefinição</button>
                    </div>

                    <Link to="/">Voltar para a página de Login</Link>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;