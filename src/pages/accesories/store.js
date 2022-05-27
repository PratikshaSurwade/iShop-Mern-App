import React from 'react';
import { Slider } from '@material-ui/core';
import { useEffect, useState } from "react";
import axios from "axios";
import "./store.css";
// import Largesidebar from './largesidebar/largesidebar';
import Iphonemob from '../HomePage/iphoneadd/iphonemob';
import Itembar from './largesidebar/itembar';

function Store() {
  const [prices, setPrice] = useState([4, 99]);
  const [productsss, setProductsss] = useState([]);

  //filtered data 1,2,3
  const [filteredbrand, setFilteredbrand] = useState(null);
  const [filteredcategory, setFilteredcategory] = useState(null);

  const [filteredprice, setFilteredprice] = useState([null]);

  //color
  const [selectedcolor, setSelectedcolor] = useState(null);
  const [resultsFound, setResultsFound] = useState(true);

  //
  const [filteredProducts, setFilteredProducts] = useState([]);


  const [blueClicked, setBlueClicked] = useState(true);
  const [darkPinkClicked, setDarkPinkClicked] = useState(false);
  const [blackClicked, setBlackClicked] = useState(false);
  const [lightPinkClicked, setLightPinkClicked] = useState(false);
  const [yellowClicked, setYellowClicked] = useState(false);
  const [whiteclicked, setWhiteclicked] = useState(false);

  const handleBlue = () => {
    setBlueClicked(true);
    setDarkPinkClicked(false);
    setBlackClicked(false);
    setLightPinkClicked(false);
    setYellowClicked(false);
    setWhiteclicked(false);
    setSelectedcolor("blue")
  }
  const handleDarkPink = () => {
    setBlueClicked(false);
    setDarkPinkClicked(true);
    setBlackClicked(false);
    setLightPinkClicked(false);
    setYellowClicked(false);
    setWhiteclicked(false);
    setSelectedcolor("pink");
  }
  const handleBlack = () => {
    setBlueClicked(false);
    setDarkPinkClicked(false);
    setBlackClicked(true);
    setLightPinkClicked(false);
    setYellowClicked(false);
    setWhiteclicked(false);
    setSelectedcolor("black")
  }
  const handlesilver = () => {
    setBlueClicked(false);
    setDarkPinkClicked(false);
    setBlackClicked(false);
    setYellowClicked(true);
    setLightPinkClicked(false);
    setWhiteclicked(false);
    setSelectedcolor("silver")
  }
  const handlegrey = () => {
    setBlueClicked(false);
    setDarkPinkClicked(false);
    setBlackClicked(false);
    setYellowClicked(false);
    setLightPinkClicked(true);
    setWhiteclicked(false);
    setSelectedcolor("grey")
  }
  const handleWhite = () => {
    setBlueClicked(false);
    setDarkPinkClicked(false);
    setBlackClicked(false);
    setLightPinkClicked(false);
    setYellowClicked(false);
    setWhiteclicked(true);
    setSelectedcolor("white")
  }
  // console.log(selectedcolor);
  const selectBrand = ((event) => {
    const value = event.target.innerHTML;
    setFilteredbrand(value)
  })
  const selectCategory = ((event) => {
    const value = event.target.innerHTML;
    setFilteredcategory(value)
  })
  // console.log(filteredcategory)
  const updateRange = (e, data) => {
    setPrice(data)
    setFilteredprice([data[0] * 100, data[1] * 100])
  }

  // console.log();
  const applyFilters = () => {
    let updatedList = productsss;

    // color Filter
    if (selectedcolor) {
      updatedList = updatedList.filter(
        (data) => (data.color.indexOf(selectedcolor) !== -1)
      )
    }
    // category filter
    if (filteredcategory) {
      updatedList = updatedList.filter(
        (data) => (data.categories.indexOf(filteredcategory.toLowerCase()) !== -1)
      )
    }
    // brand filter
    if (filteredbrand) {
      updatedList = updatedList.filter(
        (data) => (data.brand.indexOf(filteredbrand.toLowerCase()) !== -1)
      )
    }
    // Price Filter
    const minPrice = filteredprice[0];
    const maxPrice = filteredprice[1];

    updatedList = updatedList.filter(
      (item) => item.discountedPrice >= minPrice && item.discountedPrice <= maxPrice
    );
    // console.log(updatedList)
    setFilteredProducts(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };
  // console.log(prices,filteredprice, filteredbrand,filteredcategory, selectedcolor)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:7000/api/products");
        setProductsss(res.data);
      } catch (err) { }
    };
    getProducts();
    applyFilters()
  }, [filteredprice, filteredbrand, filteredcategory, selectedcolor]);

  return (
    <>
      <h5 className='topHeader' style={{ color: "#006CFF" }}>Store/Accesories</h5>

      <div className='mainBar'>
        <div className='smallsidebar'>
          <div className='sidebarHeader'>
            <h3>ACCESORIES</h3>
            <div name="accesories" className='elementsContainer'>
              <div className='accesory' ><p onClick={selectCategory} style={{ cursor: "pointer" }}>watches</p><p>2</p></div>
              <div className='accesory' ><p onClick={selectCategory} style={{ cursor: "pointer" }}>ipod</p><p>48</p></div>
              <div className='accesory' ><p onClick={selectCategory} style={{ cursor: "pointer" }}>iphone</p><p>14</p></div>
              <div className='accesory' ><p onClick={selectCategory} style={{ cursor: "pointer" }}>wireless</p><p>15</p></div>
              <div className='accesory' ><p onClick={selectCategory} style={{ cursor: "pointer" }}>connecting devices</p><p>23</p></div>
              <div className='accesory' ><p onClick={selectCategory} style={{ cursor: "pointer" }}>cables</p><p>1</p></div>
              <div className='accesory' ><p onClick={selectCategory} style={{ cursor: "pointer" }}>headphones</p><p>95</p></div>
            </div>
          </div>
          <div className='sidebarHeader'>
            <h3>Prices</h3>
            {/* <div className='elementsContainer'> */}
            <div className='ranger'>
              <div>Ranger</div>
              <div>${prices[0]}00-${prices[1]}00</div>
            </div>
            <div className='elementsContainer'>
              <Slider
                step={1}
                value={prices}
                onChange={updateRange}
              />
            </div>
          </div>
          <div className='sidebarHeader'>
            <h3>Color</h3>
            <div className='colorize'>
              <span>
                <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handleBlue} className={blueClicked ? "forBlue" : "removeAll"}>
                  <div style={{ backgroundColor: "#006CFF", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
                </div>
              </span>
              <span>
                <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handleBlack} className={blackClicked ? "forBlack" : "removeAll"}>
                  <div style={{ backgroundColor: "#171717", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
                </div>

              </span>
              <span>
                <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handleDarkPink} className={darkPinkClicked ? "forPink" : "removeAll"}>
                  <div style={{ backgroundColor: "#FF00B4", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
                </div>
              </span>
              <span>
                <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handlesilver} className={yellowClicked ? "forYellow" : "removeAll"}>
                  <div style={{ backgroundColor: "#C0C0C0", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
                </div>
              </span>
              <span>
                <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handleWhite} className={whiteclicked ? "forCamron" : "removeAll"}>
                  <div style={{ backgroundColor: "white", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>

                </div>

              </span>
              <span>
                <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handlegrey} className={lightPinkClicked ? "forLightPink" : "removeAll"}>
                  <div style={{ backgroundColor: "#808080", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>

                </div>
              </span>
            </div>
          </div>          <div className='sidebarHeader'>
            <h3>BRAND</h3>
            <div name="brand" className='elementsContainer'>
              <div className="brand" ><p name="1" onClick={selectBrand} style={{ cursor: "pointer" }}>Apple</p><p>99</p></div>
              <div className="brand"><p name="2" onClick={selectBrand} style={{ cursor: "pointer" }}>BoAt</p><p>99</p></div>
              <div className="brand"><p name="3" onClick={selectBrand} style={{ cursor: "pointer" }}>Samsung</p><p>99</p></div>
              <div className="brand"><p name="4" onClick={selectBrand} style={{ cursor: "pointer" }}>Siemens</p><p>99</p></div>
            </div>
          </div>
          <div className='sidebarHeader'>
            <h4>More</h4>
          </div>
        </div>
        <div className='largesidebar'>
          <div className='advertise'>
            <Iphonemob />
          </div>
          {/* <Largesidebar products={products} /> */}
          <Itembar filteredprice={filteredprice} filteredbrand={filteredbrand} filteredcategory={filteredcategory} selectedcolor={selectedcolor} resultsFound={resultsFound} products={productsss} />
        </div>
      </div>
    </>
  )
}

export default Store