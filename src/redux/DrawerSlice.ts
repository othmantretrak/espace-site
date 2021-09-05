import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DrawerState {
  open: boolean;
}

const initialState: DrawerState = {
  open: true,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = drawerSlice.actions;

export default drawerSlice.reducer;
