import "./bestseller.css";
import ReactStars from "react-rating-stars-component";

function Bestseller(props) {
    console.log(props.info.image)
    return(
        <>
        
            <div className="subCards">
                <img className="imagepart" src={props.info.image} alt="" />
                <div className="itemName">{ props.info.name }</div>
                <div className="itemRatings">
                    <ReactStars className="text-center" style={{ "border":"0"}}
                            count={5}
                            value={props.info.rating}
                            edit={false}
                            size={20}
                            activeColor="#ffd700"
                    />
                </div>
                <div className="itemPrice">
                    <span style={{"marginRight":"10px", "color":"red"}}> 
                        ${props.info.discountedPrice}
                    </span>
                    <span style={{"color":"#999999"}}>
                        <del>${props.info.originalPrice}</del>
                    </span>
                </div>
            </div>
            {/* <div className="subCards">
                <img></img>
                <div className="itemName"></div>
                <div className="itemRatings"></div>
                <div className="itemPrice"></div>
            </div>
            <div className="subCards">
                <img></img>
                <div className="itemName"></div>
                <div className="itemRatings"></div>
                <div className="itemPrice"></div>
            </div>
            <div className="subCards">
                <img></img>
                <div className="itemName"></div>
                <div className="itemRatings"></div>
                <div className="itemPrice"></div>
            </div>
            <div className="subCards">
                <img></img>
                <div className="itemName"></div>
                <div className="itemRatings"></div>
                <div className="itemPrice"></div>
            </div>
            <div className="subCards">
                <img></img>
                <div className="itemName"></div>
                <div className="itemRatings"></div>
                <div className="itemPrice"></div>
            </div>
            <div className="subCards">
                <img></img>
                <div className="itemName"></div>
                <div className="itemRatings"></div>
                <div className="itemPrice"></div>
            </div>
            <div className="subCards">
                <img></img>
                <div className="itemName"></div>
                <div className="itemRatings"></div>
                <div className="itemPrice"></div>
            </div> */}
      
        </>
    )
}
export default Bestseller;