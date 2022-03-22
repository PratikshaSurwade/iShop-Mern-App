import React from 'react';
import "./footer.css";


function Footer() {
  return (
    <>
      <hr></hr>
      <div className='Footer'>
        <div className='subfooter1'>
          <div className='box1'>
            <h1 className='tiTle'>iSHOP</h1>
            <div className='decrip'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse suscipit excepturi ut officiis doloribus inventore dolores assumenda reiciendis repudiandae dolore nemo quidem sit vitae soluta, aliquam deleniti nesciunt delectus</div>
          </div>
          <div className='box2'>
            <h6>Follow Us</h6>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse suscipit excepturi ut officiis doloribus inventore dolores as</div>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i class="fab fa-twitter"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
          </div>
          <div className='box2'>
            <h6>Contact Us</h6>
            <div>
              <p>iShop: address @buiding 124</p>
              <p>Call us now: 0123-456-789</p>
              <p>Email: support@whatever.com</p></div>
          </div>
        </div>
        <hr></hr>
        <div className='subfooter2'>
          <div className='columnTab'>
            <h3>Information</h3>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className='columnTab'>
            <h3>Service</h3>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className='columnTab'>
            <h3>Extras</h3>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className='columnTab'>
            <h3>My Account</h3>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className='columnTab'>
            <h3>UsefulLinks</h3>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className='columnTab'>
            <h3>Our Offers</h3>
            <p>About Us</p>
            <p>Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;
