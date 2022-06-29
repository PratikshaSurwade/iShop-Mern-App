import React from 'react';
import "./cart.css";
import imagee from "./../HomePage/feacturedprods/featuredproducts/Netatmo_rain.svg";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link ,useNavigate } from "react-router-dom";
// Actions
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const Cart = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate ();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => { }, []);

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2);
    };

    const checkout = () => {
        // navigate("/login?redirect=shipping");
        navigate("/shipping");

      };
    return (
        <>
            <h5 className='topHeader'>Cart</h5>
            <div>
                <div className='cartitembox'>
                    <div className='topHead'>
                        <p>PRODUCT</p>
                        <p>UNIT PRICE</p>
                        <p>QTY</p>
                        <p>PRICE</p>
                    </div>
                    <hr style={{ margin: "5px", color: "#d3d3d3" }}></hr>
                    {cartItems.length === 0 ? (
                        <div>
                            Your Cart Is Empty <Link to="/">Go Back</Link>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <Scrollbars style={{ minHeight: "18rem" }}>
                                <div className='itemContainer'>
                                    <i class="cancle fa-solid fa-xmark" id='one'  onClick={() => removeHandler(item.product)}></i>
                                    <img className='itemImage' id="two" src={item.imageUrl} alt={item.name}></img>
                                    <div className='itemname' id='three'>{item.name}</div>
                                    <div className='perItemPrice' id='notShow'>{item.price}</div>
                                    <div id='four'>
                                        <div className='itemsCount'>
                                            {/* <i class="fa-solid fa-plus" ></i>
                                            <p>543</p>
                                            <i class="fa-solid fa-minus"  ></i> */}
                                            <select
                                                value={item.qty}
                                                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                                                className="cartItem__select"
                                            >
                                                {[...Array(10).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className='itemPrice' id='five'>{( Number(item.qty))*(Number(item.discountedPrice))}</div> */}
                                    <div className='itemPrice' id='five'>{item.price*item.qty}</div>
                                </div>
                                <hr style={{ margin: "5px", color: "#d3d3d3" }}></hr>
                            </Scrollbars>
                        ))
                    )}
                </div>
                <div className="bottOm">
                    <div className='voucher'>
                        <span >
                            <input className="inputVoucher" style={{ height: "3rem", border: "grey solid 1px" }} placeholder="Voucher code"></input>
                            <button className='inputbuton' style={{ height: "3rem", backgroundColor: "#006CFF", color: "white", border: "rgb(0,108,255) solid 1px", borderRadius: "2px" }}>Redeem</button>
                        </span>
                    </div>
                    <div className='toTal'>
                        <div className='gridofPrices'>
                            <p>Subtotal</p><p>₹({getCartCount()})</p>
                        </div>
                        <div className='gridofPrices'>
                            <p>Shipping free</p><p>₹20</p>
                        </div>
                        <div className='gridofPrices'>
                            <p>Coupon</p><p>No</p>
                        </div>
                        <hr style={{ margin: "5px", color: "#d3d3d3" }}></hr>
                        <div className='gridofPrices'>
                            <h2>TOTAL</h2><h2>₹({getCartSubTotal()})</h2>
                        </div>
                        <button className='totalbutton' style={{ height: "3rem", backgroundColor: "#006CFF", color: "white", border: "rgb(0,108,255) solid 1px", borderRadius: "2px" }} disabled={cartItems.length === 0} onClick={checkout}>Check Out</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart