import "./bestseller.css";

import likeButton from "./icons/favorite_icon.svg";
import cart from "./icons/fill_cart.svg";
import StarRatings from 'react-star-ratings';


const Items = ({ info }) => {
    return (
        <>
            <div className="subCards">
                <div className="tag">HOT</div>
                <div className="hoveritems">
                    <img className="imagepart" src={info.img} alt="uffs!! No image" />
                    <div className="blurEffect">
                        <img src={likeButton} alt="" />
                        <img src={cart} alt="" />
                    </div>
                </div>
                <div className="itemName">{info.name}</div>
                <div className="itemRatings">
                    <StarRatings
                        rating={info.rating}
                        starRatedColor="#FFD700"
                        numberOfStars={5}
                        name='rating'
                        starDimension="10px"
                        starSpacing="1px"
                    />
                </div>

                <div>
                    <span style={{ "marginRight": "10px", "color": "red" }}>
                        ${info.discountedPrice}
                    </span>
                    <span style={{ "color": "#999999" }}>
                        <del>${info.originalPrice}</del>
                    </span>
                </div>
            </div>

        </>
    )
}
export default Items;