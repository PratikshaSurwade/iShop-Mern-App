import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Heading from "./pages/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./pages/footer/Footer";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Singleproduct from "./pages/singleproduct/Singleproduct";
import ShippingScreen from "./pages/shipping/ShippingScreen";
import PaymentScreen from "./pages/shipping/PaymentScreen";
import PlaceOrderScreen from "./pages/shipping/PlaceOrderScreen";
import OrderScreen from "./pages/shipping/OrderScreen";
import Accesories from "./pages/accesories/Accesories";
import Tabsec from "./pages/accesories/tab2";
import Loader from "./pages/effects/loader";
import { useSelector } from "react-redux";
import Updateprofile from "./pages/Updateprofile/Updateprofile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact >
            <Route path="/home" element={<Home />} exact />
            <Route path="/home/mac" element={<Home />} exact />
            <Route path="/home/iphone" element={<Home />} exact />
            <Route path="/home/ipad" element={<Home />} exact />
            <Route path="/home/ipod" element={<Home />} exact />
            <Route path="/home/accessories" element={<Home />} exact />
          </Route>
          <Route path="/category/:category" element={<Tabsec />} exact />
          <Route path="/store" element={<Accesories />} exact />

          <Route path="/api/products/:id" element={<Singleproduct />} exact />
          <Route path="/shipping" element={<ShippingScreen />} exact />
          <Route path="/payment" element={<PaymentScreen />} exact />

          <Route path="/login?redirect=placeorder" element={<Login />} />

          <Route path="/placeorder" element={<PlaceOrderScreen />} exact />
          <Route path="/api/orders/:id" element={<OrderScreen />} exact />

          <Route path="/cart" element={<Cart />} exact />
          <Route path="/loader" element={<Loader />} exact />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={<Updateprofile />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;