import React from 'react';
import "./cart.css";
import imagee from "./../HomePage/feacturedprods/featuredproducts/Netatmo_rain.svg";
import { Scrollbars } from 'react-custom-scrollbars-2';

function Cart() {
  return (
    <>
        <h5 className='topHeader'>Cart</h5>
        <div className='cartitembox'>
            <div className='topHead'>
                <p>PRODUCT</p>
                <p>PRICE</p>
                <p>QTY</p>
                <p>UNIT PRICE</p>
            </div>
            <hr></hr>
            <Scrollbars style={{height:"25rem"}}>
            <div className='itemContainer'>
                <i class="cancle fa-solid fa-xmark"></i>                
                <img className='itemImage' src={imagee}></img>
                <div className='itemname'>name</div>
                <div className='itemPrice'>$998</div>
                <div>
                    <div className='itemsCount'>
                        <i class="fa-solid fa-plus"></i>
                        <p>2</p>
                        <i class="fa-solid fa-minus"></i>
                    </div>
                </div>
                <div className='perItemPrice'>$499</div>
            </div>
            <hr></hr>
            
          
            
            </Scrollbars>
        </div>
    </>
  )
}

export default Cart;