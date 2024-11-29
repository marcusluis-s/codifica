import { Link } from "react-router-dom";

function SignUp() {
    return (
        <form>
            <label htmlFor="name">Nome:</label>
            <div>
                <input type="text" id="name" placeholder="Digite seu nome" />
            </div>

            <label htmlFor="email">Email:</label>
            <div>
                <input type="email" id="email" placeholder="Digite seu email" />
            </div>

            <label htmlFor="password">Senha</label>
            <div>
                <input type="password" id="password" placeholder="Digite uma senha segura" />
            </div>

            <label htmlFor="confirm-password">Digite sua senha novamente</label>
            <div>
                <input type="password" id="confirm-password" placeholder="Digite sua senha novamente" />
            </div>

            <p>Já possui uma conta? Faça o <Link to="/login">login</Link> </p>
        </form>
    )
}

export default SignUp;