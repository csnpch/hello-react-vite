import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusActive: false
}

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    onActive: (state) => {
      state.statusActive = true;
    },
    onDeactive: (state) => {
      state.statusActive = false;
    },
    onToggle: (state) => {
      state.statusActive = !state.statusActive;
    }
  }

});

export const {
  onActive, 
  onDeactive,
  onToggle
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
