import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <header>
                <h1>Error | 404</h1>

                <p>Voltar para a <Link to="/home">página principal</Link></p>
            </header>
        </div>
    )
}

export default ErrorPage;
