import styles from "./Header.module.css";

function Header({ user, handleSignOut }) {
    return (
        <header className={styles["header"]}>
            <div className={styles["header-user-profile-info"]}>
                <h3>{user.name}</h3>
                <img src={user.picture} alt="Imagem do perfil do usuário" />
            </div>

            <button onClick={handleSignOut}>Sair</button>
        </header>
    )
}

export default Header;
