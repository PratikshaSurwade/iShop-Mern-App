import React from "react";
import Heading from "./Navbar/Navbar";
import Bestseller from "./HomePage/Best_seller/Bestseller.js";
import Facilitis from "./HomePage/Facilities/Facilitis";
import Feactured from "./HomePage/feacturedprods/Feactured";

function App() {
  return (
  <>
    <Heading />
    <Bestseller />
    <Facilitis />
    <Feactured />
  </>
  );
}

export default App;