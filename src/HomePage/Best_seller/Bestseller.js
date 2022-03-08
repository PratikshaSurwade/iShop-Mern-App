import React from "react";
import "./bestseller.css";
import mainImg2 from "./2_corousel.png";

function Bestseller() {
    return(
        <>
        <div className="subHead">BEST SELLER</div>
        <div className="subHeadSubpoints">
            <div className="subListItems">All</div>
            <div className="subListItems">iPhone</div>
            <div className="subListItems">iPad</div>
            <div className="subListItems">iPod</div>
            <div className="subListItems">Accessories</div>
        </div>
        <div className="homepageItems">
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
        </div>
        <div className="homePageImg2">
            <div className="homeImgText">
                <h1>iPhone 6 Plus</h1>
                <div>Performance and design. Taken right to the edge.</div>
                <h4>SHOP NOW</h4>
            </div>
            <img  className="mainImg2" src={mainImg2} />
        </div>
        </>
    )
}
export default Bestseller;