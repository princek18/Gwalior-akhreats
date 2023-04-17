import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import CartItem from "./CartItem";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartPrice = useSelector((store) => store.cart.orderValue);
  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="h1ButtonCombo">
        <h2>Your Cart</h2>
        {cartItems.length ? (
          <button className="btn" onClick={() => handelClearCart()}>
            Clear Cart
          </button>
        ) : (
          " "
        )}
      </div>
      <hr></hr>
      {cartItems.length ? (
        cartItems.map((item) => {
          return <CartItem itemList={item}></CartItem>;
        })
      ) : (
        <h4>Your cart is empty please add someting</h4>
      )}
      <hr></hr>
      <div className="h1ButtonCombo">
        <h3>Order Total : {cartPrice}</h3>
        {cartPrice ? (
          <Link to="/paymentPage">
            <button className="btn" onClick={() => handelClearCart()}>
              Pay Now
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartPage;
