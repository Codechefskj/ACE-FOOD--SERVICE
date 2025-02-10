import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"; 

const AppStore = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

export default AppStore; 
