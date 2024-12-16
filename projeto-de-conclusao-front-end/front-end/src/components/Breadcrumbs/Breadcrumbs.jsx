import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

function Breadcrumbs() {
    const location = useLocation();
    console.log(location);

    let currentLink = "";

    const crumbs = location.pathname
        .split("/")
        .filter((crumb) => {
            return crumb !== "";
        })
        .map((crumb) => {
            currentLink += `/${crumb}`;
            return (
                <span key={crumb} className={styles["breadcrumbs-margin-right"]}>
                    <Link to={currentLink}>{crumb}</Link>
                    <span className={styles["breadcrumbs-margin"]}></span>
                </span>
            )
        })

    return (
        <nav aria-label="breadcrumbs" className={styles["breadcrumbs-container"]}>
            <div className={styles["breadcrumbs-wrapper"]}>
                {crumbs.length > 0 ? crumbs : <span>Home</span>}
            </div>
        </nav>
    );
}

export default Breadcrumbs;