
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer
});

// const shippingAddressFromStorage = JSON.parse(localStorage.getItem("shippingAddress"))
  // ? JSON.parse(localStorage.getItem("shippingAddress"))
  // : {};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
    // shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
// import { configureStore } from '@reduxjs/toolkit'
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// // Reducers
// import { cartReducer } from "./reducers/cartReducers";
// import {
//   getProductsReducer,
//   getProductDetailsReducer,
// } from "./reducers/productReducers";
// import {
//   userLoginReducer,
//   userRegisterReducer,
//   userDetailsReducer,
//   userUpdateProfileReducer,
// } from "./reducers/userReducers";
// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
//   orderListMyReducer,
// } from "./reducers/orderReducer";

// const reducer = combineReducers({
//   cart: cartReducer,
//   getProducts: getProductsReducer,
//   getProductDetails: getProductDetailsReducer,
//   userLogin: userLoginReducer,
//   userRegister: userRegisterReducer,
//   userDetails: userDetailsReducer,
//   userUpdateProfile: userUpdateProfileReducer,
//   orderCreate: orderCreateReducer,
//   orderDetails: orderDetailsReducer,
//   orderPay: orderPayReducer,
//   orderListMy: orderListMyReducer
// });

// const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
//   ? JSON.parse(localStorage.getItem("shippingAddress"))
//   : {};

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const cartItemsInLocalStorage = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : [];

// const INITIAL_STATE = {
//   cart: {
//     cartItems: cartItemsInLocalStorage,
//     shippingAddress: shippingAddressFromStorage,
//   },
//   userLogin: { userInfo: userInfoFromStorage },
// };

// const middleware = [thunk];

// const store = configureStore(
//   ({reducer:reducer}),
//   INITIAL_STATE,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;