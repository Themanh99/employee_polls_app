import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenWrapper = ({ children }) => {
    // Using useSelector to get the authentication state
    const isAuthenticated = useSelector((state) => Boolean(state.authUserReducer));

    const currentPath = window.location.pathname + window.location.search;

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to={`/login?redirectTo=${encodeURIComponent(currentPath)}`} />
    );
};

export default AuthenWrapper;
