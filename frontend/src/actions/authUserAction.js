export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export function loginUser(authUser) {
    return {
        type: AUTH_LOGIN,
        authUser,
    };
}

export function handleUserLogin(username, password) {
    return (dispatch, getState) => {
        const { users } = getState();

        const user = Object.values(users).find(
            (user) => user.id === username && user.password === password
        );
        if (user) {
            return dispatch(loginUser(user));
        }
    };
}

export function logoutUser() {
    return {
        type: AUTH_LOGOUT,
    };
}

export function handleUserLogout() {
    return (dispatch) => {
        return dispatch(logoutUser());
    };
}
