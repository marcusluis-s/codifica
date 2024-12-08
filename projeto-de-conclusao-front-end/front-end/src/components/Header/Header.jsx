import PropTypes from "prop-types";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header({ user, handleSignOut }) {
    if (!user) {
        return null;
    }

    return (
        <header className={styles["header"]}>
            <div className={styles["header-user-profile-info"]}>
                <h3>{user.name || "Usuário"}</h3>
                {/* <img src={user.picture} alt="Imagem do perfil do usuário" /> */}
            </div>

            <ThemeToggle />

            <button onClick={handleSignOut}>Sair</button>
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
    handleSignOut: PropTypes.func.isRequired,
}

export default Header;
