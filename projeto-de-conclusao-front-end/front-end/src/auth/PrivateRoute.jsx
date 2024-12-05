import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");

    const isLoggedIn = !!token;

    return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute;
