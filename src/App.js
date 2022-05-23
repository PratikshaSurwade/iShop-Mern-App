import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Heading from "./pages/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./pages/footer/Footer";
import Store from "./pages/accesories/store";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Trial from "./pages/accesories/largesidebar/filtereditem";
import Bestseller from "./pages/HomePage/Best_seller/Bestseller";
import Itembar from "./pages/accesories/largesidebar/itembar";
import PageSecond from "./pages/accesories/page2";
import Singleproduct from "./pages/singleproduct/Singleproduct";
import ShippingScreen from "./pages/shipping/ShippingScreen";
import PaymentScreen from "./pages/shipping/PaymentScreen";
import PlaceOrderScreen from "./pages/shipping/PlaceOrderScreen";
import OrderScreen from "./pages/shipping/OrderScreen";

function App() {
  const user = false;
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
          {/* <Route path="/home/mac" element={<Home />} exact /> */}
          {/* <Route path="/mac" element={<Home />} exact />
          <Route path="/home/mac" element={<Store />} exact /> */}
          {/* <Route path="/mac" element={<Cart />} exact /> */}

          <Route path="/accesories" element={<Store />} exact />
          <Route path="/page2" element={<PageSecond />} exact />

          <Route path="/accesory" element={<Itembar />} exact />

          <Route path="/trial" element={<Trial />} exact />
          <Route path="/api/products/:id" element={<Singleproduct />} exact />
          <Route path="/shipping" element={<ShippingScreen />} exact />
          <Route path="/payment" element={<PaymentScreen />} exact />
          <Route path="/placeorder" element={<PlaceOrderScreen />} exact />
          <Route path="/api/orders/:id" element={<OrderScreen />} exact />



          <Route path="/cart" element={<Cart />} exact />
          <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;