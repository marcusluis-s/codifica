import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Products from "../pages/Products/Products";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import PrivateRoute from "../auth/PrivateRoute";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

const routerConfig = createBrowserRouter([
    // Public Routes Group
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <App /> },
            { path: "/forgot-password", element: <ForgotPassword /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <SignUp /> }
        ],
    },

    // Private Routes Group
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: (
            <PrivateRoute>
                <PrivateLayout />
            </PrivateRoute>
        ),
        children: [
            { path: "/products", element: <Products /> },
        ],
    },
]);

export default routerConfig;