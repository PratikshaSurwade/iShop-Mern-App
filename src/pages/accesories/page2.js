import React from 'react';
import { Slider } from '@material-ui/core';
import { useEffect, useState } from "react";
import axios from "axios";
import "./store.css";
import "./largesidebar/largesidebar.css"
// import Largesidebar from './largesidebar/largesidebar';
import Iphonemob from '../HomePage/iphoneadd/iphonemob';
import Items from '../HomePage/Best_seller/accesoriespage';

function PageSecond() {
    const [prices, setPrice] = useState([4, 99]);
    const [productsss, setProductsss] = useState([]);
    // const [products, setProducts] = useState([]);

    //filtered data 1,2,3
    const [filteredbrand, setFilteredbrand] = useState(null);
    const [filteredcategory, setFilteredcategory] = useState(null);
    const [filteredprice, setFilteredprice] = useState([null]);
    //color
    const [selectedcolor, setSelectedcolor] = useState(null);
    const [resultsFound, setResultsFound] = useState(true);

    //filtered data
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

    const [showPerPage, setShowPerPage] = useState(4);
    const total = (productsss.length);
    console.log()
    // const total = filteredProducts ? (filteredProducts.length) :products.length;
    //data for filters upcoming
    const [counter, setCounter] = useState(1);
    const [items, setItems] = useState([]);
    const [sortType, setSortType] = useState('createdAt');
    const [pagination, setpagination] = useState({
        start: 0,
        end: showPerPage,
    })

    const onPaginationChange = (start, end) => {
        setpagination({ start: start, end: end });
    };
    const onButtonClickpage = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === "next") {
            if (Math.ceil(total / showPerPage) === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }
        }
    }
    const [numberOfButtons, setnumberOfButtons] = useState(Math.ceil(total / showPerPage))

    const onButtonClickweb = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === "next") {
            if (numberOfButtons === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }
        }

    }
    // console.log();
    const applyFilters = () => {
        let updatedList = productsss;

        // color Filter
        if (selectedcolor) {
            updatedList = [...updatedList].filter(
                (data) => (data.color.indexOf(selectedcolor) !== -1)
            )
        }
        console.log(selectedcolor)
        // category filter
        if (filteredcategory) {
            updatedList =[...updatedList].filter(
                (data) => (data.categories.indexOf(filteredcategory.toLowerCase()) !== -1)
            )
        }        console.log(filteredcategory)

        // brand filter
        if (filteredbrand) {
            updatedList = [...updatedList].filter(
                (data) => (data.brand.indexOf(filteredbrand.toLowerCase()) !== -1)
            )
        }        console.log(filteredbrand)

        // Price Filter
        const minPrice = filteredprice[0];
        const maxPrice = filteredprice[1];

        updatedList = [...updatedList].filter(
            (item) => item.discountedPrice >= minPrice && item.discountedPrice <= maxPrice
        );        console.log(filteredprice)

        console.log(updatedList)
        setFilteredProducts(updatedList);
        !updatedList.length ? setResultsFound(false) : setResultsFound(true);
        { resultsFound ? setFilteredProducts(updatedList) : setFilteredProducts(productsss) }

    };
    console.log(prices,filteredprice, filteredbrand,filteredcategory, selectedcolor)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:7000/api/products");
                setProductsss(res.data);
            } catch (err) { }
        };
        getProducts();
        applyFilters()

        console.log(productsss)
        setnumberOfButtons(Math.round(total / showPerPage))
        const value = showPerPage * counter;

        onPaginationChange(value - showPerPage, value)

        const sortArray = type => {
            const types = {
                newest: 'createdAt',
                price: 'discountedPrice',
                rating: 'rating',
            };
            const sortProperty = types[type];
            // const sorted = filteredItems ? [...filteredItems].sort((a, b) => a[sortProperty] - b[sortProperty]):[...products].sort((a, b) => a[sortProperty] - b[sortProperty]);

            const sorted = [...filteredProducts].sort((a, b) => a[sortProperty] - b[sortProperty]);
            setItems(sorted);
        };

        sortArray(sortType);

    }, [counter, showPerPage, numberOfButtons, total, sortType, filteredprice, filteredbrand, filteredcategory, selectedcolor]);

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
                    <div className='largeSidebar'>
                        <div className='sidebarHeader'>
                            <div className='verticalStrip'>
                                <div className="flexDiv">
                                    <div>{showPerPage} Items</div>
                                    <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                        <span>Sort By</span>
                                        <span>
                                            <select name="sort" class="form-select form-select-sm" onChange={(e) => setSortType(e.target.value)} aria-label=".form-select-sm example" style={{ fontSize: "1rem", fontWeight: "400", backgroundColor: "#f1f1f1" }}  >
                                                <option value="newest">Newest</option>
                                                <option value="price">Price</option>
                                                <option value="rating">Rating</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                        <span>Show</span>
                                        <span>
                                            <span>
                                                <select name="showitem" onChange={(e) => setShowPerPage(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example" style={{ fontSize: "1rem", fontWeight: "400", backgroundColor: "#f1f1f1" }} >
                                                    <option defult="true" value="4">4</option>
                                                    <option value="6">6</option>
                                                    <option value="8">8</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ width: "15%" }} className='d-flex text-end flex-row flex-nowrap overflow-visible align-items-center'>
                                    <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><img className='myAuto' style={{ margin: "auto" }} src="https://img.icons8.com/ios-glyphs/30/000000/squared-menu.png" alt="" /></button>
                                    <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><img className='myAuto' style={{ margin: "auto" }} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png" alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className='cardsbox'>
                            {console.log(items)}
                            {items.slice(pagination.start, pagination.end).map(data => {
                                return <Items info={data} />
                            })}
                        </div>
                        {/* <div className='pagination'></div> */}
                        <div className='page'>
                            <div className='d-flex justify-content-between'>
                                <button className='btn btn-primary' onClick={() => onButtonClickpage("prev")}>Previous</button>

                                <button className='btn btn-primary' onClick={() => onButtonClickpage("next")}>Next</button>
                            </div>
                        </div>
                        {/* <Webpagination  showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={total} /> */}

                        <div className='webpagination'>
                            <div className='d-flex justify-content-center'>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" onClick={() => onButtonClickweb("prev")}>Previous</a></li>

                                        {
                                            new Array(numberOfButtons).fill("").map((el, index) => (
                                                <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
                                                    <a class="page-link" style={{ cursor: "pointer" }} onClick={() => setCounter(index + 1)}>
                                                        {index + 1}
                                                    </a>
                                                </li>
                                            ))
                                        }

                                        <li class="page-item"><a class="page-link" onClick={() => onButtonClickweb("next")}>Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>        </div>
            </div>
        </>
    )
}

export default PageSecond