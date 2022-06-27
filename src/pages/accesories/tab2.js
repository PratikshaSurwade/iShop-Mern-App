import React from 'react';
import { Slider } from '@material-ui/core';
import { useEffect, useState } from "react";
import axios from "axios";
import "./store.css";
import "./largesidebar/largesidebar.css";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Iphonemob from '../HomePage/iphoneadd/iphonemob';
import Items from '../HomePage/Best_seller/Bestseller';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Loader from "../effects/loader.js";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import baseUrl from '../path/Baseurl';

function Tabsec() {
    const [selcat, setSelcat] = useState(null);

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    // console.log(products)

    const [prices, setPrice] = useState([4, 99]);
    const [productsss, setproductsss] = useState([]);
    const [goods, setGoods] = useState([]);
    const [goodsAvailable, setIsGoodsAvilable] = useState(false);



    //filtered data 1,2,3
    const [filteredbrand, setFilteredbrand] = useState(null);
    const location = useLocation();

    const path = location.pathname.split("/")[2];
    console.log(path);
    // const [ path , setPath ] = useState(loc);
    const [filteredprice, setFilteredprice] = useState([null]);
    //color
    const [selectedcolor, setSelectedcolor] = useState(null);

    //filtered data    
    const [filteredProducts, setFilteredProducts] = useState([]);


    const [blueClicked, setBlueClicked] = useState(false);
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
    const setRomoveColor = () => {
        setBlueClicked(false);
        setDarkPinkClicked(false);
        setBlackClicked(false);
        setLightPinkClicked(false);
        setYellowClicked(false);
        setWhiteclicked(false);
        setSelectedcolor(null)
    }
    // const total = (productsss.length);

    const [price, setPricee] = useState([0, 10000]);

    const priceHandler = (e, newPrice) => {
        setPricee(newPrice);
    }
    const slectcat = ((event) => {
        const value = event.target.innerHTML;
        if(value){
        setSelcat(value.toLowerCase());
        }else{
            setSelcat(null);
        }
    })
    const selectBrand = ((event) => {
        const value = event.target.innerHTML;
        if(value){
        setFilteredbrand(value.toLowerCase())
        } 
        else{
            setFilteredbrand(null);
        }
    })

    const [showPerPage, setShowPerPage] = useState(6);
    //data for filters upcoming
    const [counter, setCounter] = useState(1);
    const [items, setItems] = useState([]);
    const [needalert, setNeedAlert] = useState(true);
    const [pageload, setPageload] = useState(true);
    const [newpath, setNewpath] = useState(false);

    const [total, setTotal] = useState(35);
    const [loader, setLoader] = useState(false);

    console.log(total);

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

    console.log(numberOfButtons);
    const applyFilters = () => {
        let updatedList = productsss;
        console.log("in apply filters");

        // category filter
        if ((selcat!==null)) {
            setPageload(false);
            updatedList = [...updatedList].filter(
                (data) => (data.categories.indexOf(selcat) !== -1)
            );
        }
        else{
            setPageload(true);
        }
        // console.log(selcat,!selcat,"selcat")
        // console.log(updatedList);

        // Price Filter
        if(price[0]!==0 || price[1]!==10000){
            setPageload(false);

            const minPrice = price[0];
            const maxPrice = price[1];

            updatedList = [...updatedList].filter(
                (item) => item.discountedPrice >= minPrice && item.discountedPrice <= maxPrice
            );
        }else if(price[0]===0 || price[1]===10000){
            setPageload(true);
        }
        // console.log(updatedList)

        // color Filter
        if ((selectedcolor) != null) {
            setPageload(false);

            updatedList = [...updatedList].filter(
                (data) => (data.color.indexOf(selectedcolor) !== -1)
            )
        }else if((selectedcolor) == null){
            setPageload(true);
        }
        // console.log(updatedList)

        // brand filter
        if (filteredbrand) {
            setPageload(false);
            updatedList = [...updatedList].filter(
                (data) => (data.brand.indexOf(filteredbrand) !== -1)
            )
        }else{
            setPageload(true);
        }
        // console.log(filteredbrand,!filteredbrand,"filtered brand")

        if ((filteredbrand !== null) || (selectedcolor !== null) ||(selcat !== null) || price[0]!==0 || price[1]!==10000) {
            setNeedAlert(false);
            setTotal(updatedList.length);
            setItems(updatedList);
            setIsGoodsAvilable(false)

            console.log("in updatedlist == 0 ");    
        }

        else {
            console.log("in else of apply filterd");
            setNeedAlert(true);
            setTotal(12);
            setIsGoodsAvilable(false)
            setItems(productsss);
        }
    }
    
    console.log(price, prices, filteredbrand, selcat, selectedcolor);
    
    useEffect(() => {
        setLoader(true);
        const getProducts = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/products/cat/${path}`);
                setNewpath(true);
                setproductsss(res.data);
                setLoader(false);               
                console.log("insideuse effect");
                
                
                // setTotal(res.data.length)
            } catch (err) { console.log(err) }
        };
        console.log(productsss);
        getProducts();

        setNeedAlert(true);
        setFilteredbrand(null);
        setSelectedcolor(null);
        setSelcat(null);
        setPricee([0,10000]);
        setBlueClicked(false);
        setDarkPinkClicked(false);
        setBlackClicked(false);
        setLightPinkClicked(false);
        setYellowClicked(false);
        setWhiteclicked(false);
        setIsGoodsAvilable(false);
        setGoods([]);


        console.log("in useeffect",price,newpath, prices, filteredbrand, selcat, selectedcolor,goods);

    }, [path])
    

    useEffect(() => {
        applyFilters(price, filteredbrand, selcat, selectedcolor,newpath,needalert);

    }, [price, filteredbrand, selcat, selectedcolor,needalert]);
    
    useEffect(() => {
       
        // setGoods(productsss)
        setnumberOfButtons(Math.round(total / showPerPage))
        const value = showPerPage * counter;

        onPaginationChange(value - showPerPage, value);
        const sortArray = type => {
            const types = {
                newest: 'createdAt',
                price: 'discountedPrice',
                rating: 'rating',
            };
            const sortProperty = types[type];
            let sorted;
            if(needalert){
                sorted = [...productsss].sort((a, b) => a[sortProperty] - b[sortProperty]);
                setIsGoodsAvilable(true);
                setproductsss(sorted);
                console.log(sorted)
                console.log("set products")

            }else{
                sorted = [...items].sort((a, b) => a[sortProperty] - b[sortProperty]);
                setItems(sorted);
            }
        };
        sortArray(sortType);


    }, [ counter, showPerPage, numberOfButtons, total, sortType,filteredProducts]);

    return (
        <>
            <h5 className='topHeader' style={{ color: "#006CFF" }}>Store/{path.charAt(0).toUpperCase() + path.slice(1)}</h5>

            <div className='mainBar'>
                <div className='smallsidebar'>
                <div className='sidebarHeader'>
                        <div className="removecat" onClick={slectcat} ><h3>{path.charAt(0).toUpperCase() + path.slice(1)}</h3><i style={{ cursor: "pointer" }} className={(selcat)?"cancle fa-solid fa-xmark":"cancled"} title="remove filter"></i></div>
                        <div className={(path==="accessories") ?'elementsContainer' : "display"}>
                            <div className={(selcat==="watches") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>Watches</p><p> </p></div>
                            <div className={(selcat==="mobile") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>Cameralens</p><p> </p></div>
                            <div className={(selcat==="bluetooth") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>Bluetooth</p><p> </p></div>
                            <div className={(selcat==="airpods") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>Airpods</p><p> </p></div>
                            <div className={(selcat==="homepod") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>HomePod</p><p> </p></div>
                            <div className={(selcat==="cables") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>Cables</p><p> </p></div>
                            <div className={(selcat==="headphones") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>Headphones</p><p> </p></div>
                        </div>
                        <div className={(path==="iphone") ?'elementsContainer' : "display"}>
                            <div className={(selcat==="iphones") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>iPhone</p><p> </p></div>
                        </div>
                        <div className={(path==="ipad") ?'elementsContainer' : "display"}>
                            <div className={(selcat==="ipad") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>iPad</p><p> </p></div>
                        </div>
                        <div className={(path==="macbook") ?'elementsContainer' : "display"}>
                            <div className={(selcat==="macbook") ? "selected" : "unselected"} ><p  onClick={slectcat} style={{ cursor: "pointer" }}>MacBook</p><p> </p></div>
                        </div>
                    </div>
                    
                    <div className='sidebarHeader'>
                        <h3>Prices</h3>
                        <div className='ranger'>
                            <div>Ranger</div>
                            <div>₹{price[0].toLocaleString()}-₹{price[1].toLocaleString()}</div>
                        </div>
                        <div className='elementsContainer'>
                        <Slider
                                value={price}
                                onChange={priceHandler}
                                valueLabelDisplay="auto"
                                getAriaLabel={() => 'Price range slider'}
                                min={0}
                                max={10000}
                            />
                        </div>
                    </div>

                    <div className='sidebarHeader'>
                        {/* <h3>Color</h3> */}
                        <div className="removecat" onClick={setRomoveColor} ><h3>COLOR</h3><i style={{ cursor: "pointer" }} className={(selectedcolor!=null)?"cancle fa-solid fa-xmark":"cancled"} title="remove filter"></i></div>
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
                    </div> 
                    {/* <div className='sidebarHeader'>
                        <h3>BRAND</h3>
                        <div name="brand" className='elementsContainer'>          */}
                    <div className='sidebarHeader'>
                        <h3 className="removecat" onClick={selectBrand} ><h3>BRAND</h3><i style={{ cursor: "pointer" }} className={(filteredbrand)?"cancle fa-solid fa-xmark":"cancled"} title="remove brand filter"></i></h3>

                        <div name="brand" className='elementsContainer'>
                            <div className={(filteredbrand==="apple") ? "selected" : "unselected"} onClick={selectBrand}><p name="1"  style={{ cursor: "pointer" }}>Apple</p><p> </p></div>
                            <div className={(filteredbrand==="boat") ? "selected" : "unselected"} onClick={selectBrand}><p name="2"  style={{ cursor: "pointer" }}>BoAt</p><p> </p></div>
                            <div className={(filteredbrand==="samsung") ? "selected" : "unselected"} onClick={selectBrand}><p name="3"  style={{ cursor: "pointer" }}>Samsung</p><p> </p></div>
                            <div className={(filteredbrand==="siemens") ? "selected" : "unselected"} onClick={selectBrand}><p name="4"  style={{ cursor: "pointer" }}>Vivo</p><p> </p></div>
                        </div>
                    </div>
                    {/* <div className='sidebarHeader'>
                        <h4>More</h4>
                    </div> */}
                </div>
                <div className='largesidebar'>
                    <div className='advertise'>
                        <Iphonemob />
                    </div>
                    
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
                                                    <option default="true" value="6">6</option>
                                                    <option  value="4">4</option>
                                                    <option value="8">8</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {console.log(goods,!goodsAvailable,!goods.length)}
                        {loader ? (
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <h2 style={{ textAlign: "center" }}>Loading...</h2>
                                <Loader />
                            </div>
                        ) : (

                            (needalert) ?
                                (
                                    
                                            <div className='cardsbox'>
                                                {console.log("in products")}
                                            {productsss.slice(pagination.start, pagination.end).map(data => {
                                                return <Items info={data} />
                                            })}
                                        </div>
                                   
                                )
                                :
                                (
                                    (items.length) ? 
                                    (   
                                        <>
                                            <div className='cardsbox'>
                                                {console.log("items")}
                                                {items.slice(pagination.start, pagination.end).map(data => {
                                                    return <Items info={data} />
                                                })}
                                            </div>
                                        </>

                                    ) : (
                                        <>
                                            {console.log("pageload false")}

                                            <Alert severity="error">
                                                <AlertTitle>Sorry No items found </AlertTitle>
                                                No result found for your Search!<br></br> <strong>Please Do Check other Items</strong>
                                            </Alert>
                                            <div className='cardsbox'>
                                                {/* {setTotal(productsss.length)} */}
                                                {productsss.slice(pagination.start, pagination.end).map(data => {
                                                    return <Items info={data} />
                                                })}
                                            </div>
                                            {/* {setNeedAlert(false)} */}
                                        </>
                                    )
                                )
                        )}
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
                                        {/* <li class="page-item"><a class="page-link" onClick={() => onButtonClickweb("prev")}>Previous</a></li> */}
                                        {
                                            new Array(numberOfButtons).fill("").map((el, index) => (
                                                <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
                                                    <a class="page-link" style={{ cursor: "pointer" }} onClick={() => setCounter(index + 1)}>
                                                        {index + 1}
                                                    </a>
                                                </li>
                                            ))
                                        }
                                        {/* <li class="page-item"><a class="page-link" onClick={() => onButtonClickweb("next")}>Next</a></li> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </>
    )
}
export default Tabsec

/* <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(event, v) => handleListItemClick(event, 2)}
                            >
                                <ListItemText primary="devices" />
                            </ListItemButton>
                            <ListItemButton
                                className={(selcat==="watches") ? "selected" : "unselected"}
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
                            </ListItemButton> */
// import React from 'react';
// import { Slider } from '@material-ui/core';
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./store.css";
// import "./largesidebar/largesidebar.css";
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import Iphonemob from '../HomePage/iphoneadd/iphonemob';
// import Items from '../HomePage/Best_seller/accesoriespage';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Loader from "../effects/loader.js";
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";


// function Tabsec() {
//     const [selcat, setSelcat] = useState(null);
//     const [productsss, setproductsss] = useState([]);

//     //filtered data 1,2,3
//     const [filteredbrand, setFilteredbrand] = useState(null);
//     const [filteredcategory, setFilteredcategory] = useState(null);
//     const location = useLocation();

//     const path = location.pathname.split("/")[2];
//     console.log(path)
//     //color
//     const [selectedcolor, setSelectedcolor] = useState(null);

//     //filtered data
//     const [filteredProducts, setFilteredProducts] = useState([]);


//     const [blueClicked, setBlueClicked] = useState(true);
//     const [darkPinkClicked, setDarkPinkClicked] = useState(false);
//     const [blackClicked, setBlackClicked] = useState(false);
//     const [lightPinkClicked, setLightPinkClicked] = useState(false);
//     const [yellowClicked, setYellowClicked] = useState(false);
//     const [whiteclicked, setWhiteclicked] = useState(false);

//     const handleBlue = () => {
//         setBlueClicked(true);
//         setDarkPinkClicked(false);
//         setBlackClicked(false);
//         setLightPinkClicked(false);
//         setYellowClicked(false);
//         setWhiteclicked(false);
//         setSelectedcolor("blue")
//     }
//     const handleDarkPink = () => {
//         setBlueClicked(false);
//         setDarkPinkClicked(true);
//         setBlackClicked(false);
//         setLightPinkClicked(false);
//         setYellowClicked(false);
//         setWhiteclicked(false);
//         setSelectedcolor("pink");
//     }
//     const handleBlack = () => {
//         setBlueClicked(false);
//         setDarkPinkClicked(false);
//         setBlackClicked(true);
//         setLightPinkClicked(false);
//         setYellowClicked(false);
//         setWhiteclicked(false);
//         setSelectedcolor("black")
//     }
//     const handlesilver = () => {
//         setBlueClicked(false);
//         setDarkPinkClicked(false);
//         setBlackClicked(false);
//         setYellowClicked(true);
//         setLightPinkClicked(false);
//         setWhiteclicked(false);
//         setSelectedcolor("silver")
//     }
//     const handlegrey = () => {
//         setBlueClicked(false);
//         setDarkPinkClicked(false);
//         setBlackClicked(false);
//         setYellowClicked(false);
//         setLightPinkClicked(true);
//         setWhiteclicked(false);
//         setSelectedcolor("grey")
//     }
//     const handleWhite = () => {
//         setBlueClicked(false);
//         setDarkPinkClicked(false);
//         setBlackClicked(false);
//         setLightPinkClicked(false);
//         setYellowClicked(false);
//         setWhiteclicked(true);
//         setSelectedcolor("white")
//     }
//     // const total = (productsss.length);

//     // console.log(selectedcolor);
//     const [price, setPricee] = useState([0, 10000]);

//     const priceHandler = (e, newPrice) => {
//         setPricee(newPrice);
//     }

//     const selectBrand = ((event) => {
//         const value = event.target.innerHTML;
//         if(value !== "BRAND"){
//         setFilteredbrand(value.toLowerCase())
//         } 
//         else if(value === "remove"){
//             setFilteredbrand(null);
//         }
//     })

//     const [showPerPage, setShowPerPage] = useState(6);
//     //data for filters upcoming
//     const [counter, setCounter] = useState(1);
//     const [items, setItems] = useState([]);
//     const [needalert, setNeedAlert] = useState(true);
//     const [pageload, setPageload] = useState(true);

//     const [newpath, setNewpath] = useState(false);
//     const [datagrab, setDataGrab] = useState(false);

//     const [total, setTotal] = useState(20);
//     const [loader, setLoader] = useState(false);
//     console.log(total);
//     const [sortType, setSortType] = useState('createdAt');

//     const [pagination, setpagination] = useState({
//         start: 0,
//         end: showPerPage,
//     })

//     const onPaginationChange = (start, end) => {
//         setpagination({ start: start, end: end });
//     };

//     const onButtonClickpage = (type) => {
//         if (type === "prev") {
//             if (counter === 1) {
//                 setCounter(1);
//             } else {
//                 setCounter(counter - 1);
//             }
//         } else if (type === "next") {
//             if (Math.ceil(total / showPerPage) === counter) {
//                 setCounter(counter);
//             } else {
//                 setCounter(counter + 1);
//             }
//         }
//     }
//     const [numberOfButtons, setnumberOfButtons] = useState(Math.ceil(total / showPerPage))

//     console.log(numberOfButtons);

//     //////newwwwww

//     const [newdata , setnewData ] = useState([]);
//     useEffect(() => {
//         const applyFilters = async () => {
//             let updatedList = await productsss;
//             console.log("in apply filters");
    
//             // category filter
//             if ((selcat) != null) {
//                 setPageload(false);
//                 updatedList = [...updatedList].filter(
//                     (data) => (data.categories.indexOf(selcat) !== -1)
//                 );
//             }
    
//             // Price Filter
//             const minPrice = price[0];
//             const maxPrice = price[1];
    
//             updatedList = [...updatedList].filter(
//                 (item) => item.discountedPrice >= minPrice && item.discountedPrice <= maxPrice
//             );
    
//             // color Filter
//             if ((selectedcolor) != null) {
//                 setPageload(false);
    
//                 updatedList = [...updatedList].filter(
//                     (data) => (data.color.indexOf(selectedcolor) !== -1)
//                 )
//             }
    
//             // brand filter
//             if ((filteredbrand) != null) {
//                 setPageload(false);
//                 updatedList = [...updatedList].filter(
//                     (data) => (data.brand.indexOf(filteredbrand) !== -1)
//                 )
//             }
      
//             if (!updatedList.length) {
//                 if(newpath){
//                     setPageload(true);
//                 }
//                 console.log("in updatedlist == 0 ");
//                 setPageload(false);
//                 setNeedAlert(true);
//                 setFilteredProducts(productsss);
//                 setTotal(productsss.length);
//                 setItems(productsss);
//             }
    
//             else {
//                 setNeedAlert(false);
//                 setFilteredProducts(updatedList);
//                 setTotal(updatedList.length);
//                 setItems(updatedList);
//                 console.log("in else of apply filterd");
//             }      
//         }
//         setLoader(true);
//         let filter = [ ];
//         const getProducts = async () => {

//             try {
//                 console.log("in getprod");
//                 const res = await axios.get(`http://localhost:3000/api/products/cat/${path}`);
//                 const waiting = await res.data;
//                 setNewpath(true);
//                 setDataGrab(false);
//                 if(waiting){
//                     applyFilters(price, filteredbrand, selcat, selectedcolor);
//                 }
//                 console.log("gett ready");
//                 setnewData(waiting);
//                 setproductsss(waiting);

//                 filter = res.data;
//                 console.log("prod ",productsss);
//                 setLoader(false);
//                 setTotal(res.data.length);
//             } catch (err) { }
//         };
        
//         console.log(productsss);

//         getProducts();

//     }, [path,price, filteredbrand, selcat, selectedcolor]);

    
//     console.log(price, filteredbrand, selcat, selectedcolor, filteredcategory);
//     console.log("newdata",newdata)
    
//     // useEffect(() => {
//     //     applyFilters(price, filteredbrand, selcat, selectedcolor);

//     // }, [price, filteredbrand, selcat, selectedcolor]);
    
//     // useEffect(() => {

//     //     setnumberOfButtons(Math.round(total / showPerPage));
//     //     const value = showPerPage * counter;
//     //     onPaginationChange(value - showPerPage, value);

//     //     const sortArray = type => {
//     //         const types = {
//     //             newest: 'createdAt',
//     //             price: 'discountedPrice',
//     //             rating: 'rating',
//     //         };
//     //         const sortProperty = types[type];
//     //         let sorted;
//     //         if(needalert){
//     //             sorted = [...productsss].sort((a, b) => a[sortProperty] - b[sortProperty]);
//     //             setproductsss(sorted);

//     //         }else{
//     //             sorted = [...items].sort((a, b) => a[sortProperty] - b[sortProperty]);
//     //             setItems(sorted);

//     //         }
//     //     };
//     //     sortArray(sortType);


//     // }, [path,counter, showPerPage, numberOfButtons, total, sortType,filteredProducts,needalert])
    
//     return (
//         <>
//             <h5 className='topHeader' style={{ color: "#006CFF" }}>Store/Tab</h5>

//             <div className='mainBar'>
//                 <div className='smallsidebar'>
                    
//                     <div className='sidebarHeader'>
//                         <h3>Prices</h3>
//                         <div className='ranger'>
//                             <div>Ranger</div>
//                             <div>₹{price[0].toLocaleString()}-₹{price[1].toLocaleString()}</div>
//                         </div>
//                         <div className='elementsContainer'>
//                         <Slider
//                                 value={price}
//                                 onChange={priceHandler}
//                                 valueLabelDisplay="auto"
//                                 getAriaLabel={() => 'Price range slider'}
//                                 min={0}
//                                 max={10000}
//                             />
//                         </div>
//                     </div>

//                     <div className='sidebarHeader'>
//                         <h3>Color</h3>
//                         <div className='colorize'>
//                             <span>
//                                 <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handleBlue} className={blueClicked ? "forBlue" : "removeAll"}>
//                                     <div style={{ backgroundColor: "#006CFF", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
//                                 </div>
//                             </span>
//                             <span>
//                                 <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handleBlack} className={blackClicked ? "forBlack" : "removeAll"}>
//                                     <div style={{ backgroundColor: "#171717", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
//                                 </div>
//                             </span>
//                             <span>
//                                 <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handleDarkPink} className={darkPinkClicked ? "forPink" : "removeAll"}>
//                                     <div style={{ backgroundColor: "#FF00B4", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
//                                 </div>
//                             </span>
//                             <span>
//                                 <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handlesilver} className={yellowClicked ? "forYellow" : "removeAll"}>
//                                     <div style={{ backgroundColor: "#C0C0C0", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
//                                 </div>
//                             </span>
//                             <span>
//                                 <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handleWhite} className={whiteclicked ? "forCamron" : "removeAll"}>
//                                     <div style={{ backgroundColor: "white", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
//                                 </div>
//                             </span>
//                             <span>
//                                 <div style={{ borderRadius: "50%", width: "1.5rem", height: "1.5rem", position: "relative", cursor: "pointer" }} onClick={handlegrey} className={lightPinkClicked ? "forLightPink" : "removeAll"}>
//                                     <div style={{ backgroundColor: "#808080", borderRadius: "50%", width: "1rem", height: "1rem", border: "none", position: "absolute", margin: "auto", top: "2px", right: "2px" }}></div>
//                                 </div>
//                             </span>
//                         </div>
//                     </div>          
//                     <div className='sidebarHeader'>
//                         <h3 className="removecat" onClick={selectBrand} ><h3>BRAND</h3><i style={{ cursor: "pointer" }} className={(filteredbrand)?"cancle fa-solid fa-xmark":"cancled"} title="remove brand filter"></i></h3>

//                         <div name="brand" className='elementsContainer'>
//                             <div className={(filteredbrand==="apple") ? "selected" : "unselected"} onClick={selectBrand}><p name="1"  style={{ cursor: "pointer" }}>Apple</p><p>99</p></div>
//                             <div className={(filteredbrand==="boat") ? "selected" : "unselected"} onClick={selectBrand}><p name="2"  style={{ cursor: "pointer" }}>BoAt</p><p>99</p></div>
//                             <div className={(filteredbrand==="samsung") ? "selected" : "unselected"} onClick={selectBrand}><p name="3"  style={{ cursor: "pointer" }}>Samsung</p><p>99</p></div>
//                             <div className={(filteredbrand==="siemens") ? "selected" : "unselected"} onClick={selectBrand}><p name="4"  style={{ cursor: "pointer" }}>Siemens</p><p>99</p></div>
//                         </div>
//                     </div>
//                     <div className='sidebarHeader'>
//                         <h4>More</h4>
//                     </div>
//                 </div>
//                 <div className='largesidebar'>
                    
//                     <div className='largeSidebar'>
//                         <div className='sidebarHeader'>
//                             <div className='verticalStrip'>
//                                 <div className="flexDiv">
//                                     <div>{showPerPage} Items</div>
//                                     <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
//                                         <span>Sort By</span>
//                                         <span>
//                                             <select name="sort" class="form-select form-select-sm" onChange={(e) => setSortType(e.target.value)} aria-label=".form-select-sm example" style={{ fontSize: "1rem", fontWeight: "400", backgroundColor: "#f1f1f1" }}  >
//                                                 <option value="newest">Newest</option>
//                                                 <option value="price">Price</option>
//                                                 <option value="rating">Rating</option>
//                                             </select>
//                                         </span>
//                                     </div>
//                                     <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
//                                         <span>Show</span>
//                                         <span>
//                                             <span>
//                                                 <select name="showitem" onChange={(e) => setShowPerPage(e.target.value)} class="form-select form-select-sm" aria-label=".form-select-sm example" style={{ fontSize: "1rem", fontWeight: "400", backgroundColor: "#f1f1f1" }} >
//                                                     <option default="true" value="6">6</option>
//                                                     <option  value="4">4</option>
//                                                     <option value="8">8</option>
//                                                     <option value="10">10</option>
//                                                 </select>
//                                             </span>
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <div style={{ width: "15%" }} className='d-flex text-end flex-row flex-nowrap overflow-visible align-items-center'>
//                                     <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><img className='myAuto' style={{ margin: "auto" }} src="https://img.icons8.com/ios-glyphs/30/000000/squared-menu.png" alt="" /></button>
//                                     <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><img className='myAuto' style={{ margin: "auto" }} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png" alt="" /></button>
//                                 </div>
//                             </div>
//                         </div>

//                         {loader ? (
//                             <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
//                                 <h2 style={{ textAlign: "center" }}>Loading...</h2>
//                                 <Loader />
//                             </div>
//                         ) : (
//                             <div className='cardsbox'>
//                             {newdata.slice(pagination.start, pagination.end).map(data => {
//                                                     return <Items info={data} />
//                                                 })}
//                                                 </div>

//                             // (needalert) ?
//                             //     (
//                             //         (pageload) ? (
//                             //             <div className='cardsbox'>
//                             //                 {productsss.slice(pagination.start, pagination.end).map(data => {
//                             //                     return <Items info={data} />
//                             //                 })}
//                             //             </div>
//                             //         ) : (
//                             //             <>
//                             //                 <Alert severity="error">
//                             //                     <AlertTitle>Sorry No items found </AlertTitle>
//                             //                     No result found for your Search!<br></br> <strong>Please Do Check other Items</strong>
//                             //                 </Alert>
//                             //                 <div className='cardsbox'>
//                             //                     {/* {setTotal(productsss.length)} */}
//                             //                     {productsss.slice(pagination.start, pagination.end).map(data => {
//                             //                         return <Items info={data} />
//                             //                     })}
//                             //                 </div>
//                             //                 {/* {setNeedAlert(false)} */}
//                             //             </>
//                             //         )
//                             //     )
//                             //     :
//                             //     (
//                             //         <>
//                             //             {console.log(items)}
//                             //             <div className='cardsbox'>

//                             //                 {items.slice(pagination.start, pagination.end).map(data => {
//                             //                     return <Items info={data} />
//                             //                 })}
//                             //             </div>
//                             //         </>
//                             //     )
//                         )}
//                         {/* </div> */}
//                         {/* <div className='pagination'></div> */}
//                         <div className='page'>
//                             <div className='d-flex justify-content-between'>
//                                 <button className='btn btn-primary' onClick={() => onButtonClickpage("prev")}>Previous</button>

//                                 <button className='btn btn-primary' onClick={() => onButtonClickpage("next")}>Next</button>
//                             </div>
//                         </div>
//                         {/* <Webpagination  showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={total} /> */}
//                         <div className='webpagination'>
//                             <div className='d-flex justify-content-center'>
//                                 <nav aria-label="Page navigation example">
//                                     <ul class="pagination">
//                                         {/* <li class="page-item"><a class="page-link" onClick={() => onButtonClickweb("prev")}>Previous</a></li> */}
//                                         {
//                                             new Array(numberOfButtons).fill("").map((el, index) => (
//                                                 <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
//                                                     <a class="page-link" style={{ cursor: "pointer" }} onClick={() => setCounter(index + 1)}>
//                                                         {index + 1}
//                                                     </a>
//                                                 </li>
//                                             ))
//                                         }
//                                         {/* <li class="page-item"><a class="page-link" onClick={() => onButtonClickweb("next")}>Next</a></li> */}
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>        
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Tabsec