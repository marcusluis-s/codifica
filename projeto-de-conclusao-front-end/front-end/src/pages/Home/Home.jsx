import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles["home-container"]}>
            <h1>Home Page</h1>

            <main>
                <p>Conheça nossos produtos <Link to="/home/products">Produtos</Link></p>
            </main>
        </div>
    );
}

export default Home;