import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

function PrivateLayout() {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    }

    const safeUser = user || {};

    return (
        <div>
            <Header user={safeUser} handleSignOut={handleSignOut} />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default PrivateLayout;