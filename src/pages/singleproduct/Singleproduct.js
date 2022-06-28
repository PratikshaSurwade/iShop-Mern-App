import { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
import "./singleproduct.css"
import { useSelector, useDispatch } from "react-redux";
import Loader from "../effects/loader";
// Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

const Singleproduct = ({ match }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate ();

  const { id } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const setcount= () =>{
    const data = cartItems.find(e => e.product === id);
    if(data){
      console.log("qty",data.qty);
      // setQty(data.qty);
      return data.qty
  }else{ return 1}; 
  }
  const [qty, setQty] = useState(setcount());


  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, match, product,id]);
// console.log(qty)
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty , product.img , product.discountedPrice ,product.name));
    navigate(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
        <Loader />
    </div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ₹{product.discountedPrice}</p>
              <p>Description: {product.desc}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>₹{product.discountedPrice}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.inStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(5).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Singleproduct