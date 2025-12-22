
const  Footer = () => {
  return (
    <>
      <div className="mx-12 my-8">
        <hr></hr>
        <div className="Footer my-11">
          <div className="grid grid-cols-[40%_30%_30%]">
            <div className="box1">
              <h1 className="text-shadow-gray-300">iSHOP</h1>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus esse suscipit excepturi ut officiis doloribus inventore
                dolores assumenda reiciendis repudiandae dolore nemo quidem sit
                vitae soluta, aliquam deleniti nesciunt delectus
              </div>
            </div>
            <div className="box2">
              <h5>Follow Us</h5>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus esse suscipit
              </div>
              <i className="text-blue-600 fa-brands fa-facebook-f"></i>
              <i className="text-blue-600 fab fa-twitter"></i>
            </div>
            <div className="box2">
              <h5>Contact Us</h5>
              <div className="text-sm">
                <p>iShop: address @buiding 124</p>
                <p>Call us now: 0123-456-789</p>
                <p>Email: support@whatever.com</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <div className="text-sm">
              <h5 className="text-lg">Information</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div  className="text-sm">
              <h5  className="text-lg">Service</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div  className="text-sm">
              <h5  className="text-lg">Extras</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div  className="text-sm">
              <h5  className="text-lg">My Account</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div  className="text-sm">
              <h5 className="text-lg">UsefulLinks</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="columnTab">
              <h5 className="text-lg">Our Offers</h5>
              <p>About Us</p>
              <p>Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div style={{ textAlign: "end" }}>
          <img src="./payment_icons/master_card.svg" alt="" ></img>
          <img src="./payment_icons/visa.svg" alt=""></img>
          <img src="./payment_icons/Paypal.svg" alt=""></img>
          <img src="./payment_icons/Western_union.svg" alt="" ></img>
        </div>
      </div>
    </>
  );
}
export default Footer;