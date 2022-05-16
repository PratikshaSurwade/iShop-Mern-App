import React, { useEffect, useState } from 'react';
import Items from "../../HomePage/Best_seller/accesoriespage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./largesidebar.css";
import "./pagination.css";
import axios from "axios";
import { publicRequest } from '../../../requestMethod';

const Itembar = ({ filteredprice, filteredbrand, filteredcategory, selectedcolor }) => {
    // console.log(filteredProducts);
    // const [filproducts, setFilproducts] = useState(false);
    // console.log(resultsFound)
    // const isfilAvailable = () => {
    //     resultsFound ? setFilproducts(true) : setFilproducts(false)
    // }
    const [products, setProducts] = useState([]);
    const [fetchedata, setFetchedata] = useState([]);
    const [resultsFound, setResultsFound] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    //filtered data 1,2,3
    //  const [filteredbrand, setFilteredbrand] = useState(filteredBrand);
    //  const [filteredcategory, setFilteredcategory] = useState(filteredCategory);

    //  const [filteredprice, setFilteredprice] = useState([filteredPrice]);

    //  //color
    //  const [selectedcolor, setSelectedcolor] = useState(selectedColor);

    //,filteredPrice, filteredBrand,filteredCategory, selectedColor

    const [showPerPage, setShowPerPage] = useState(4);
    const total = (products.length);
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
    const removeFilters = () => {
        // setFilteredbrand(null); 
        // setFilteredcategory(null);
        // setFilteredprice(null);
        // setSelectedcolor(null);
    }
    const applyFilters = () => {
        let updatedList = products;

        // color Filter
        if (selectedcolor) {
            updatedList = [...updatedList].filter(
                (data) => (data.color.indexOf(selectedcolor) !== -1)
            )
        }
        // category filter
        if (filteredcategory) {
            updatedList = [...updatedList].filter(
                (data) => (data.categories.indexOf(filteredcategory.toLowerCase()) !== -1)
            )
        }
        // brand filter
        if (filteredbrand) {
            updatedList = [...updatedList].filter(
                (data) => (data.brand.indexOf(filteredbrand.toLowerCase()) !== -1)
            )
        }
        // Price Filter
        const minPrice = filteredprice[0];
        const maxPrice = filteredprice[1];

        updatedList = [...updatedList].filter(
            (item) => item.discountedPrice >= minPrice && item.discountedPrice <= maxPrice
        );
        console.log(updatedList)

        {!updatedList.length ? setResultsFound(false) : setResultsFound(true)};
        { resultsFound ? setFilteredProducts(updatedList) : setFilteredProducts(products) }
    };
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("/products");

                setProducts(res.data)

            } catch (err) { }
        };

        getProducts();
        applyFilters()

        console.log()
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
    // console.log(filteredprice,filteredItems)
    return (
        <>
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
                            <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><img className='myAuto' style={{ margin: "auto" }} src="https://img.icons8.com/ios-glyphs/30/000000/squared-menu.png" alt="" onClick={removeFilters} /></button>
                            <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><img className='myAuto' style={{ margin: "auto" }} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='cardsbox'>
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
            </div>

        </>
    )
}


export default Itembar