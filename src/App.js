import React from "react";
import { BrowserRouter ,Navigate, Route, Routes } from "react-router-dom";

import Heading from "./pages/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./pages/footer/Footer";
import Store from "./pages/accesories/store";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = false;
  return (
  <> 
    <BrowserRouter>
      <Heading />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/accesories" element={<Store />} exact />
          <Route path="/cart" element={<Cart />} exact/>
          <Route path="/login" element={user ?<Navigate replace to="/" /> : <Login />} />
          <Route path="/register" element={user ?<Navigate replace to="/" /> : <Register />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;