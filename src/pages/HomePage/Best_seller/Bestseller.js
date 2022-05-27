import "./bestseller.css";
import StarRatings from 'react-star-ratings';
import likeButton from "./icons/favorite_icon.svg";
import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";

import cart from "./icons/fill_cart.svg";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../../../redux/actions/productActions";
import { addToCart } from "../../../redux/actions/cartActions";

function Bestseller  ( props ) {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();
    let navigate = useNavigate ();

    // // useEffect(() => {
    // //     if (props.info && id !== props.info._id) {
    // //       dispatch(getProductDetails(id));
    // //     }
    // //   }, [dispatch, match, props.info]);

    // console.log(props.info)

    // const addToCartHandler = () => {
    //     dispatch(addToCart(props.info._id, props.info.img , props.info.discountedPrice ,props.info.name));
    //     navigate(`/cart`);
    //   };
    return (
        <>
            <div className="subCards">
                <div className="tag">HOT</div>
                <div className="hoveritems">
                    <img className="imagepart" src={props.info.img} alt="" ></img>
                    <div className="blurEffect">
                        <img src={likeButton} alt="" />
                        {/* <img src={cart} alt=""  onClick={addToCartHandler}  /> */}
                        <img src={cart} alt=""  />

                    </div>
                </div>
                <Link to={`/api/products/${props.info._id}`} className="info__button">
                    <div className="itemName">{props.info.name}</div>
                </Link>
                <div className="itemRatings">
                    <StarRatings
                        rating={props.info.rating}
                        starRatedColor="#FFD700"
                        numberOfStars={5}
                        name='rating'
                        starDimension="10px"
                        starSpacing="1px"
                    />
                </div>
                <div>
                    <span style={{ "marginRight": "10px", "color": "red" }}>
                        ${props.info.discountedPrice}
                    </span>
                    <span style={{ "color": "#999999" }}>
                        <del>${props.info.originalPrice}</del>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Bestseller;