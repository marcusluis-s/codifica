import PropTypes from "prop-types";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function Header({ user, handleSignOut }) {
    if (!user) {
        return null;
    }

    const role = user.role || "user";

    return (
        <div>
            <header className={styles["header"]}>
                <div className={styles["header-user-profile-info"]}>
                    <h3>{user.name || "Usuário"}</h3>
                    {/* <img src={user.picture} alt="Imagem do perfil do usuário" /> */}
                </div>

                <div className={styles["header-user-actions"]}>
                    <ThemeToggle />
                    <nav className={styles["header-navigation"]}>
                        <Link to="/home/products">Produtos</Link>
                        <Link to="/home/contact">Contato</Link>
                        <Link to="/home/about">Sobre</Link>

                        {role === "admin" && (
                            <Link to="/home/create-product">Criar produto</Link>
                        )}
                    </nav>
                    <button onClick={handleSignOut}>Sair</button>
                </div>
            </header>

            <Breadcrumbs />
        </div>
    )
}

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        // picture: PropTypes.string.isRequired,
        role: PropTypes.string,
    }).isRequired,
    handleSignOut: PropTypes.func.isRequired,
}

export default Header;
