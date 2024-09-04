import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenWrapper = ({ children }) => {
    const isAuthenticated = useSelector((state) => Boolean(state.authUser));
    const currentPath = window.location.pathname;

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to={`/login?redirectTo=${currentPath}`} />
    );
};

export default AuthenWrapper;
