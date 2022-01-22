import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
	name: "navbar",
	initialState: {
		ShowDropdown: false,
	},
	reducers: {
		set_ShowDropdown: (state, action) => {
			state.ShowDropdown = action.payload;
		},
	},
});

export const { set_ShowDropdown } = navbarSlice.actions;

export default navbarSlice.reducer;
