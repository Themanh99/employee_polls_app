import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions/authUserAction";


export default function authUserReducer(state = null, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return action.authUser;
        case AUTH_LOGOUT:
            return null;
        default:
            return state;
    }
}
