import "./bestseller.css";
import ReactStars from "react-rating-stars-component";
import likeButton from "./icons/favorite_icon.svg";
import cart from "./icons/fill_cart.svg";


function Bestseller(props) {
    console.log(props.info.image)
    return(
        <>
        
            <div className="subCards">
                <div className="tag">HOT</div>
                <div className="hoveritems">
                    <img className="imagepart" src={props.info.image} alt="" />
                    <div className="blurEffect">
                        <img src={likeButton} />
                        <img src={cart} />
                    </div>
                </div>
                <div className="itemName">{ props.info.name }</div>
                <div className="itemRatings">
                    <ReactStars
                            count={5}
                            value={props.info.rating}
                            edit={false}
                            size={20}
                            activeColor="#ffd700"
                    />
                </div>
                
                <div>
                    <span style={{"marginRight":"10px", "color":"red"}}> 
                        ${props.info.discountedPrice}
                    </span>
                    <span style={{"color":"#999999"}}>
                        <del>${props.info.originalPrice}</del>
                    </span>
                </div>
            </div>
         
        </>
    )
}
export default Bestseller;