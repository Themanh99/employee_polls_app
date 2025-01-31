import { configureStore } from "@reduxjs/toolkit";
import middleware from "../middleware";
import reducers from "../reducers/index";

export default configureStore({
    middleware,
    reducer: reducers,
});
