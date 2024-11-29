import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

function PrivateRoute({ children }) {
    const isLoggedIn = false;
    return isLoggedIn ? children : <Navigate to="/" />
}

export default PrivateRoute;
