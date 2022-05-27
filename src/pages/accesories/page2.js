import React from 'react';
import { Slider } from '@material-ui/core';
import { useEffect, useState } from "react";
import axios from "axios";
import "./store.css";
import "./largesidebar/largesidebar.css";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

// import Largesidebar from './largesidebar/largesidebar';
import Iphonemob from '../HomePage/iphoneadd/iphonemob';
import Items from '../HomePage/Best_seller/accesoriespage';
// import Slider from '@mui/material/Slider';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core'
//////

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
// import {RoomIcon} from '@material-ui/icons/Room';

// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import Loader from "../effects/loader.js";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
function PageSecond() {


    const [selcat, setSelcat] = useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelcat(event.target.textContent);
        if(index==8){
            setSelcat(null)
        }
        console.log(event.target.textContent)

    };
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    console.log(products)

    const [prices, setPrice] = useState([4, 99]);
    const [productsss, setproductsss] = useState([]);
    // const [products, setProducts] = useState([]);

    //filtered data 1,2,3
    const [filteredbrand, setFilteredbrand] = useState(null);
    const [filteredcategory, setFilteredcategory] = useState(null);
    const location = useLocation();

    const path = location.pathname.split("/")[2];
    console.log(path);
    // setFilteredcategory(path)
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
    // const total = (productsss.length);

    // console.log(selectedcolor);
    const [price, setPricee] = useState([0, 10000]);
    const [categoryToggle, setCategoryToggle] = useState(true);


    const priceHandler = (e, newPrice) => {
        setPricee(newPrice);
    }


    const selectBrand = ((event) => {
        const value = event.target.innerHTML;
        setFilteredbrand(value.toLowerCase())
    })
    const selectCategory = ((event) => {
        const value = event.target.innerHTML;
        console.log(value)
        !value.length ? setFilteredcategory("null") : setFilteredcategory(value);
    })
    // console.log(filteredcategory)
    const updateRange = (e, data) => {
        setPrice(data)
        setFilteredprice([data[0] * 100, data[1] * 100])
    }

    const [showPerPage, setShowPerPage] = useState(6);
    // console.log()
    // const total = filteredProducts ? (filteredProducts.length) :products.length;        123456789/*-+.0123654789/*-+.0
    //data for filters upcoming
    const [counter, setCounter] = useState(1);
    const [items, setItems] = useState([]);
    const [needalert, setNeedAlert] = useState(false);
    const [pageload, setPageload] = useState(true);
    // const [filters, setFilters] = useState({});


    const [sortType, setSortType] = useState('createdAt');
    const [pagination, setpagination] = useState({
        start: 0,
        end: showPerPage,
    })

    const onPaginationChange = (start, end) => {
        setpagination({ start: start, end: end });
    };
    const total = resultsFound ? (items.length) : (productsss.length);

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
        console.log(productsss);
        console.log("in apply filters");

        // category filter
        if ((selcat) != null) {
            setPageload(false);
            updatedList = [...updatedList].filter(
                (data) => (data.categories.indexOf(selcat) !== -1)
            );
        }
        console.log(selcat)
        console.log(updatedList);

        // Price Filter
        const minPrice = price[0];
        const maxPrice = price[1];

        updatedList = [...updatedList].filter(
            (item) => item.discountedPrice >= minPrice && item.discountedPrice <= maxPrice
        );
        console.log(updatedList)

        // color Filter
        if ((selectedcolor) != null) {
            setPageload(false);

            updatedList = [...updatedList].filter(
                (data) => (data.color.indexOf(selectedcolor) !== -1)
            )  
        }
        console.log(updatedList)

        // brand filter
        if ((filteredbrand) != null) {
            setPageload(false);

            console.log(filteredbrand)
            updatedList = [...updatedList].filter(
                (data) => (data.brand.indexOf(filteredbrand) !== -1)
            )  
        }

        console.log(updatedList.length)
        // setFilteredProducts(updatedList);
        console.log(!updatedList.length);
        console.log(productsss.length);

        // (!updatedList.length) ? setResultsFound(false) : setResultsFound(true);
        // console.log(resultsFound)
        // resultsFound ? setFilteredProducts(updatedList) : setFilteredProducts(productsss)
        // resultsFound ? setItems(updatedList) : setItems(productsss)

        // (!updatedList.length) ? setFilteredProducts(productsss) : setFilteredProducts(updatedList);
        // (!updatedList.length) ? setItems(productsss) : setItems(updatedList);


        if (!updatedList.length) {
            setNeedAlert(true)
            setFilteredProducts(productsss);
            setItems(productsss);
            console.log("in updatedlist == 0 ");

        }
        else {
            setNeedAlert(false)
            setFilteredProducts(updatedList)
            setItems(updatedList)
            console.log("in else of apply filterd");

        }

        // console.log(productsss)
        // if (filteredbrand || selcat || selectedcolor) {
        //     setNeedAlert(false)
        //     setFilteredProducts(productsss);
        //     setItems(productsss);
        //     console.log("in updatedlist == 0 ");

        // }
        // else {
        //     if (updatedList.length = 0) {
        //         setNeedAlert(true)
        //         setFilteredProducts(productsss);
        //     }
        //     setNeedAlert(false)
        //     setFilteredProducts(updatedList)
        //     setItems(updatedList)
        //     console.log("in else of apply filterd");
        // }

    }
    // ,[price, prices, filteredprice, filteredbrand, selcat, selectedcolor]);
    console.log(price, prices, filteredbrand, selcat, selectedcolor, filteredcategory);
    // console.log(filters)

    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch]);

    useEffect(() => {
        applyFilters(price, prices, filteredbrand, selcat, selectedcolor);

    }, [price, prices, filteredbrand, selcat, selectedcolor]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("/api/products");
                setproductsss(res.data);
            } catch (err) { }
        };
        console.log(productsss)
        getProducts();
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
            console.log(filteredProducts)
            const sorted = [...filteredProducts].sort((a, b) => a[sortProperty] - b[sortProperty]);
            console.log(sorted);
            setItems(sorted);
        };
        sortArray(sortType);

    }, [path, counter, showPerPage, numberOfButtons, total, sortType, resultsFound]);

    return (
        <>
            <h5 className='topHeader' style={{ color: "#006CFF" }}>Store/Accesories</h5>

            <div className='mainBar'>
                <div className='smallsidebar'>
                    <div className='sidebarHeader'>
                        <h3>ACCESORIES</h3>
                        <div name="accesories" className='elementsContainer'>
                            {/* <div className='accesory' ><Link to="/page2/watches"><p onClick={selectCategory} style={{ cursor: "pointer" }}>watches</p></Link><p>2</p></div>
                            <div className='accesory' ><Link to="/page2/ipad"><p onClick={selectCategory} style={{ cursor: "pointer" }}>ipod</p></Link><p>48</p></div>
                            <div className='accesory' ><Link to="/page2/iphone"><p onClick={selectCategory} style={{ cursor: "pointer" }}>iphone</p></Link><p>14</p></div>
                            <div className='accesory' ><Link to="/page2/wireless"><p onClick={selectCategory} style={{ cursor: "pointer" }}>wireless</p></Link><p>15</p></div>
                            <div className='accesory' ><Link to="/page2/connecting devices"><p onClick={selectCategory} style={{ cursor: "pointer" }}>connecting devices</p></Link><p>23</p></div>
                            <div className='accesory' ><Link to="/page2/cables"><p onClick={selectCategory} style={{ cursor: "pointer" }}>cables</p></Link><p>1</p></div>
                            <div className='accesory' ><Link to="/page2/headphones"><p onClick={selectCategory} style={{ cursor: "pointer" }}>headphones</p></Link><p>95</p></div>
                            <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><Link to="/page2"><img className='myAuto' onClick={selectCategory} style={{ margin: "auto" }} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png" alt="" /></Link></button> */}
                            <div className='accesory' onClick={(e) => setFilteredcategory(e.target.innerHTML)} style={{ cursor: "pointer" }}><Link to="/page2/watches">watches</Link></div>
                            <div className='accesory' onClick={(e) => setFilteredcategory(e.target.innerHTML)} style={{ cursor: "pointer" }}><Link to="/page2/ipad">ipod</Link></div>
                            <div className='accesory' onClick={(e) => setFilteredcategory(e.target.innerHTML)} style={{ cursor: "pointer" }}><Link to="/page2/iphone">iphone</Link></div>
                            <div className='accesory' onClick={(e) => setFilteredcategory(e.target.innerHTML)} style={{ cursor: "pointer" }} ><Link to="/page2/wireless">wireless</Link></div>
                            <div className='accesory' onClick={(e) => setFilteredcategory(e.target.innerHTML)} style={{ cursor: "pointer" }}><Link to="/page2/connecting devices">connecting devices</Link></div>
                            {/* <div className='accesory' ><Link to="/page2/cables">onClick={(e) => setFilteredcategory(e.target.innerHTML)}  style={{ cursor: "pointer" }}>cables</Link></div> */}
                            <div className='accesory' onClick={(e) => setFilteredcategory(e.target.innerHTML)} style={{ cursor: "pointer" }}><Link to="/page2/headphones">headphones</Link></div>
                            <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><Link to="/page2"><img className='myAuto' onClick={selectCategory} style={{ margin: "auto" }} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png" alt="" /></Link></button>
                            {/* <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> */}

                            {/* <List component="nav" aria-label="secondary mailbox folder"> */}
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(event, v) => handleListItemClick(event, 2)}
                            >
                                <ListItemText primary="devices" />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 3}
                                onClick={(event) => handleListItemClick(event, 3)}
                            >
                                <ListItemText primary="watches" />
                            </ListItemButton>

                            <ListItemButton
                                selected={selectedIndex === 4}
                                onClick={(event) => handleListItemClick(event, 4)}
                            >
                                <ListItemText primary="iphone" />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 5}
                                onClick={(event) => handleListItemClick(event, 5)}
                            >
                                <ListItemText primary="ipad" />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 6}
                                onClick={(event) => handleListItemClick(event, 6)}
                            >
                                <ListItemText primary="wireless" />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 7}
                                onClick={(event) => handleListItemClick(event, 7)}
                            >
                                <ListItemText primary="headphones" />
                            </ListItemButton>
                            {/* </List> */}
                            {/* </Box> */}
                            {/* <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><Link to="/page2"><img className='myAuto' onClick={setSelcat(null)} style={{ margin: "auto" }} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png" alt="" /></Link></button> */}

                        </div>
                    </div>
                    <div className='sidebarHeader'>
                        <h3>Prices</h3>
                        {/* <div className='elementsContainer'> 12345678910159753357159852456   */}
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
                        <div className="flex flex-col gap-2 border-b px-4">
                            <span className="font-medium text-xs">PRICE</span>

                            <Slider
                                value={price}
                                onChange={priceHandler}
                                valueLabelDisplay="auto"
                                getAriaLabel={() => 'Price range slider'}
                                min={0}
                                max={10000}
                            />

                            <div className="flex gap-3 items-center justify-between mb-2 min-w-full">
                                <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">₹{price[0].toLocaleString()}</span>
                                <span className="font-medium text-gray-400">to</span>
                                <span className="flex-1 border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">₹{price[1].toLocaleString()}</span>
                            </div>
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
                        {/* {console.log(filters[1])} */}
                        {/* <Stack direction="row" spacing={1}>
                            <Chip
                                label={filters[1]}
                                onClick={handleClick}
                                onDelete={handleDelete}
                            />
                            <Chip
                                label={filters.selectBrand}
                                variant="outlined"
                                onClick={handleClick}
                                onDelete={handleDelete}
                            />
                        </Stack>
                         */}

                            {/* {loading ? (
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                                    <Loader />
                                </div>
                            ) : (
                            */}
                            {(needalert) ?
                                (
                                    (pageload) ? (
                                        <div className='cardsbox'>

                                       { productsss.slice(pagination.start, pagination.end).map(data => {
                                            return <Items info={data} />
                                        })}
                                        </div>
                                    ) : (
                                        <>
                                        <Alert severity="error">
                                            <AlertTitle>Sorry {filteredProducts.length} items found </AlertTitle>
                                            Please Do Check other Items<br></br> <strong>No result found for your Search!</strong>
                                        </Alert>
                                        <div className='cardsbox'>

                                        {productsss.slice(pagination.start, pagination.end).map(data => {
                                            return <Items info={data} />
                                        })}
                                        </div>
                                    </>
                                    )    
                                )
                                :
                                (
                                    <>
                                        {console.log(items)}
                                        <div className='cardsbox'>

                                        {items.slice(pagination.start, pagination.end).map(data => {
                                            return <Items info={data} />
                                        })}
                                        </div>
                                    </>
                                )
                            }
     
                        {/* </div> */}
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