import "./bestseller.css";
import StarRatings from 'react-star-ratings';
import likeButton from "./icons/favorite_icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';

import carticon from "./icons/fill_cart.svg";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { addToCart } from "../../../redux/actions/cartActions";

function Bestseller(props) {

    const [qty, setQty] = useState(1);

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();

    const handleCart = () => {
        const data = cartItems.find(e => e.product === props.info._id);
        if(data){
            return data.qty
        }else
        { return 0}
    }

    const addToCartHandler = () => {
        const data = cartItems.find(e => e.product === props.info._id);
        if(data)
        {
            const qnty = Number(Number(data.qty) + 1);
            dispatch(addToCart( props.info._id, qnty ));
        }
        else{
            dispatch(addToCart( props.info._id, qty))
        }
    }
  
    return (
        <>
            <div className="subCards">
                <div className="tag">HOT</div>
                <div className="hoveritems">
                    <img className="imagepart" src={props.info.img} alt="" ></img>
                    <div className="blurEffect">
                        <img src={carticon} alt="" onClick={addToCartHandler} />
                            <span className='itemCount1'>
                                <Badge pill bg="danger" className='cartBadge1'>{handleCart()}</Badge>
                            </span>
                    </div>
                </div>
                {/* style={{color:"black",textDecoration:"none"}} */}
                <Link to={`/api/products/${props.info._id}`} style={{color:"black"}} className="navLink">
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