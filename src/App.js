import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom";

import Heading from "./Navbar/Navbar";
import Home from "./HomePage/Home";
import Footer from "./footer/Footer";
import Store from "./accesories/store";
import Cart from "./cart/Cart";

function App() {
  return (
  <>
    
    <BrowserRouter>
      <Heading />
      <Routes>
      
      <Route path="/" style={{"zIndex":"5"}} element={<Home />} />
      <Route path="/accesories" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;