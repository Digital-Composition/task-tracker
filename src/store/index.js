import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./reducers/navbarReducer";
export default configureStore({
	reducer: {
		navbar: navbarReducer,
	},
});
