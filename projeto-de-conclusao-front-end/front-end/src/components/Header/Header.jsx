import PropTypes from "prop-types";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function Header({ user, handleSignOut }) {
    if (!user) {
        return null;
    }

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
                        <Link to="/products">Produtos</Link>
                        <Link to="/contact">Contato</Link>
                        <Link to="/about">Sobre</Link>
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
    }).isRequired,
    handleSignOut: PropTypes.func.isRequired,
}

export default Header;
