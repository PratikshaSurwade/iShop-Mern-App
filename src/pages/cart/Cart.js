import React from 'react';
import "./cart.css";
import imagee from "./../HomePage/feacturedprods/featuredproducts/Netatmo_rain.svg";
import { Scrollbars } from 'react-custom-scrollbars-2';

function Cart() {
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
                <hr style={{margin:"5px",color:"#d3d3d3"}}></hr>
                <Scrollbars style={{minHeight:"18rem"}}>
                    <div className='itemContainer'>
                        <i class="cancle fa-solid fa-xmark" id='one'></i>                
                        <img className='itemImage' id="two" src={imagee} alt=""></img>
                        <div className='itemname' id='three'>Philips Hue 7W BR30 Connected Downlight Lamp</div>
                        <div className='perItemPrice' id='notShow'>$499</div>
                        <div id='four'>
                            <div className='itemsCount'>
                                <i class="fa-solid fa-plus"></i>
                                <p>2</p>
                                <i class="fa-solid fa-minus"></i>
                            </div>
                        </div>
                        <div className='itemPrice'  id='five'>$998</div>
                    </div>
                    <hr style={{margin:"5px",color:"#d3d3d3"}}></hr>

                    <div className='itemContainer'>
                        <i class="cancle fa-solid fa-xmark" id='one'></i>                
                        <img className='itemImage' id="two" src={imagee} alt="" ></img>
                        <div className='itemname' id='three'>Philips Hue 7W BR30 Connected Downlight Lamp</div>
                        <div className='perItemPrice' id='notShow'>$499</div>
                        <div id='four'>
                            <div className='itemsCount'>
                                <i class="fa-solid fa-plus"></i>
                                <p>2</p>
                                <i class="fa-solid fa-minus"></i>
                            </div>
                        </div>
                        <div className='itemPrice'  id='five'>$998</div>
                    </div>
                    <hr style={{margin:"5px",color:"#d3d3d3"}}></hr>

                </Scrollbars>
            </div>

            <div className="bottOm">
                <div className='voucher'>
                    <span >
                        <input className="inputVoucher" style={{height:"3rem",border:"grey solid 1px"}} placeholder="Voucher code"></input>
                        <button className='inputbuton' style={{height:"3rem",backgroundColor:"#006CFF",color:"white",border:"rgb(0,108,255) solid 1px",borderRadius:"2px"}}>Redeem</button>
                    </span>

                </div>
                <div className='toTal'>
                    <div className='gridofPrices'>
                        <p>Subtotal</p><p>$998</p>
                    </div>
                    <div className='gridofPrices'>
                        <p>Shipping free</p><p>$20</p>
                    </div>
                    <div className='gridofPrices'>
                        <p>Coupon</p><p>No</p>
                        
                    </div>
                    <hr style={{margin:"5px",color:"#d3d3d3"}}></hr>
                    <div className='gridofPrices'>
                        
                        <h2>TOTAL</h2><h2>$1018</h2>
                    </div>
                    <button className='totalbutton' style={{height:"3rem",backgroundColor:"#006CFF",color:"white",border:"rgb(0,108,255) solid 1px",borderRadius:"2px"}}>Check Out</button>
                

                </div>
            </div>
        </div>
        
    </>
  )
}

export default Cart;