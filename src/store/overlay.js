import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusActive: false
}

const overlaySlice = createSlice({
  name: "overlay",
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
} = overlaySlice.actions;

export default overlaySlice.reducer;
