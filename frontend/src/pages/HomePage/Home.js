import React from "react";
import Bestseller from "./Best_seller/Bestseller.js";
import Facilitis from "./Facilities/Facilitis";

import NavDropdown from 'react-bootstrap/NavDropdown';

import Iphoneadd from "./iphoneadd/iphoneadd.js";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";

import "./home.css";
import axios from "axios";

import mainImg from "./corousel_3.png";
import mobImg from "./mobile_c3.png";

//import json
import Featuredproduct from "./feacturedprods/Featuredproduct.js";
import Loader from "../effects/loader.js";
       
function Home() {
	//fetching products from reducer
	const dispatch = useDispatch();
	const getProducts = useSelector((state) => state.getProducts);
	const { products, loading, error } = getProducts;
	//subtab filtering
	const [list, setlist] = useState([])
	const [listavailable, setlistavailable] = useState(false)

	const [subtabSelect, setSubtabSelect] = useState()
	//load more pagination
	const [showPerPage, setShowPerPage] = useState(8);
	// const [total , setTotal] = useState(products.length);
	const [counter, setCounter] = useState(1);
	const [ expanded , setExpanded ] = useState(false);

	const selectsubTag = ((e) => {
		const val = (e.target.innerHTML)
		setSubtabSelect(val)
	})
	const selectsubTab = () => {

		let lists = products
		if (subtabSelect) {
			lists = products.filter((item) => (item.subtab.indexOf(subtabSelect.toLowerCase()) !== -1))
			!lists.length ? (setlistavailable(false)) : setlistavailable(true)
			setlist(lists)
		} else {
			setlist(products)
		}
	}
	const [pagination, setpagination] = useState({
		start: 0,
		end: showPerPage,
	})
	const onPaginationChange = (start, end) => {
		if(products.length!==0 && ( listavailable ? end>=list.length :end>=products.length  )){
			setExpanded(true);

		}else{
			setpagination({ start: 0, end: end });
			setExpanded(false);
		}
	};
	const setLoadmorefun = () => {
	}

	useEffect(() => {
		dispatch(listProducts());
		// setlist(products);
		selectsubTab(subtabSelect);
		setLoadmorefun();
		const value = showPerPage * counter;

		onPaginationChange(value - showPerPage, value);

	}, [dispatch, subtabSelect, counter,showPerPage]);

	return (
		<>
			<img className="mainImg" src={mainImg} alt="" />
			<img className="mobImg" src={mobImg} alt="" />
			<h2 className="subHead">BEST SELLER</h2>
			<NavDropdown className="sortbestSeller" title="All" id="basic-nav-dropdown" >
				<NavDropdown.Item><NavLink className="navlinkremoval" onClick={selectsubTag} to="/home/mac">Mac</NavLink></NavDropdown.Item>
				<NavDropdown.Item ><NavLink to="/home/iphone" onClick={selectsubTag}>iPhone</NavLink></NavDropdown.Item>
				<NavDropdown.Item><NavLink to="/home/ipad" onClick={selectsubTag}>iPad</NavLink></NavDropdown.Item>
				<NavDropdown.Item><NavLink to="/home/ipod" onClick={selectsubTag}>iPod</NavLink></NavDropdown.Item>
				<NavDropdown.Item><NavLink to="/home/accessories" onClick={selectsubTag}>Accessories</NavLink></NavDropdown.Item>
			</NavDropdown>
			<div className="subHeadSubpoints">
				<div className="subListItems" ><NavLink className="navlinkremoval" to="/home" onClick={selectsubTag}>All</NavLink></div>
				<div className="subListItems" ><NavLink className="navlinkremoval" to="/home/mac" onClick={selectsubTag}>Mac</NavLink></div>
				<div className="subListItems" ><NavLink className="navlinkremoval" to="/home/iphone" onClick={selectsubTag}>iPhone</NavLink></div>
				<div className="subListItems" ><NavLink className="navlinkremoval" to="/home/ipad" onClick={selectsubTag}>iPad</NavLink></div>
				<div className="subListItems" ><NavLink className="navlinkremoval" to="/home/ipod" onClick={selectsubTag}>iPod</NavLink></div>
				<div className="subListItems" ><NavLink className="navlinkremoval" to="/home/accessories" onClick={selectsubTag}>Accessories</NavLink></div>
			</div>

			<div className="home">
				<div className="homepageItems">

					{loading ? (
						<div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
							<h2 style={{ textAlign: "center" }}>Loading...</h2>
							<Loader />
						</div>
					) : (
						listavailable ? (list.slice(pagination.start, pagination.end).map((info) => {
							return <Bestseller info={info} key={info._id} />;
							{console.log(info)}
						})) : (products.slice(pagination.start, pagination.end).map((info) => {
							return <Bestseller info={info} key={info._id} />;
							{console.log(info)}

						}))
					)}

				</div>
			</div>
			{console.log(list.length)}
			<div className="loadMoreForWeb">
				{(list.length===0||list.length>=9) ? (
					expanded? <><div className="loadmore" onClick={() => setCounter(1)}>Show Less</div></> : <><div className="loadmore" onClick={() => setCounter((counter + 1))}>LOAD MORE</div></>
				) : (<>...</>) }		
			</div>
			<div className="loadMoreForMob">
				{(list.length===0||list.length>=8) ? (
					expanded? <><div className="loadmore" onClick={() => setCounter(1)}>Show Less</div></> : <><div className="loadmore" onClick={() => setCounter((counter + 1))}>LOAD MORE</div></>
				) : (<>...</>) }		
			</div>
			
			{/* {totalPages !== page && <div className="loadmore" onClick={() => setPage(page + 1)}>{loading ? 'Loading...' : 'Load More'}</div>} */}
			<Iphoneadd />
			<Facilitis />
			<h3 className="subHead">FEATURED PRODUCTS</h3>
			<Featuredproduct />
		</>
	);
}
export default Home;