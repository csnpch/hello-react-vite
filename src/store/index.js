import { configureStore } from "@reduxjs/toolkit";
import overlayReducer from './overlay';
import sidebarReducer from './sidebar';


export const store = configureStore({

  reducer: {
    overlay: overlayReducer,
    sidebar: sidebarReducer
  }

});
