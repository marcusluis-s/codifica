import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <form>
            <header>
                <h2>Encontre sua conta</h2>
            </header>

            <p>Informe seu endereço de email.</p>

            <label htmlFor="email">Email:</label>
            <div>
                <input type="email" name="" id="email" />
            </div>

            <Link to="/">Faça seu login</Link>
        </form>
    )
}

export default ForgotPassword;