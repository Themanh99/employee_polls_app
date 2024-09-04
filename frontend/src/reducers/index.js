import { combineReducers } from "@reduxjs/toolkit";

import authUserReducer from "./authUserReducer";
import questionReducer from "./questionReducer";
import userReducer from "./userReducer";

export default combineReducers({
    authUserReducer,
    questionReducer,
    userReducer
});
