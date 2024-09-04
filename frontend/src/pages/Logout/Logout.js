import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleUserLogout } from "../../actions/authUserAction";
import { PATH } from "../../App";

export const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const logoutAndRedirect = async () => {
            await dispatch(handleUserLogout());
            localStorage.setItem("login", false);
            navigate(PATH.LOGIN_URL);
        };

        logoutAndRedirect();
    }, [dispatch, navigate]);

    return null;
};
