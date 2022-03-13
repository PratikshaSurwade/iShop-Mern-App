import React from "react";
import Footer from "./footer/Footer";
// import Home from "./HomePage/Home";
import Heading from "./Navbar/Navbar";
import Store from "./storepage/Store";

function App() {
  return (
  <>
    <Heading />
    {/* <Home /> */}
    <Store />
    <Footer />
  </>
  );
}

export default App;