import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <hr></hr>
        <div className="Footer">
          <div className="subfooter1">
            <div className="box1">
              <h1 className="tiTle">iSHOP</h1>
              <div className="decrip">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus esse suscipit excepturi ut officiis doloribus inventore
                dolores assumenda reiciendis repudiandae dolore nemo quidem sit
                vitae soluta, aliquam deleniti nesciunt delectus
              </div>
            </div>
            <div className="box2">
              <h5>Follow Us</h5>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus esse suscipit
              </div>
              <i className="footer_icons fa-brands fa-facebook-f"></i>
              <i className="footer_icons fab fa-twitter"></i>
            </div>
            <div className="box2">
              <h5>Contact Us</h5>
              <div>
                <p>iShop: address @buiding 124</p>
                <p>Call us now: 0123-456-789</p>
                <p>Email: support@whatever.com</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="subfooter2">
            <div className="columnTab">
              <h5>Information</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="columnTab">
              <h5>Service</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="columnTab">
              <h5>Extras</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="columnTab">
              <h5>My Account</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="columnTab">
              <h5>UsefulLinks</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="columnTab">
              <h5>Our Offers</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
