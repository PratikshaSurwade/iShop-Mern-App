import React from "react";
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom";

import Heading from "./Navbar/Navbar";
import Home from "./HomePage/Home";
import Footer from "./footer/Footer";
import Store from "./accesories/store";

function App() {
  return (
  <>
    
    <BrowserRouter>
      <Heading />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/accesories" element={<Store />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;