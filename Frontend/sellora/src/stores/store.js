import { configureStore, createReducer } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice";
import sellerReducer from "./slice/sellerSlice";
import customerReducer from "./slice/customerSlice";
import cartReducer from "./slice/cartSlice"
import orderReducer from "./slice/orderSlice"



const store = configureStore({
  reducer: {
    auth: authReducer,
    seller: sellerReducer,
    customer: customerReducer,
    cart: cartReducer,
    order: orderReducer

  }
});

export default store;