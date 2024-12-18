import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

function PrivateLayout() {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    console.log("Valor de user:", user);

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    }

    const safeUser = {
        name: user?.name || "Usuário",
        role: user?.role || "user",
    }

    console.log(safeUser);

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