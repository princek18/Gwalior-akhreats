import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";
import CartItem from "./CartItem";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
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
      {cartItems.length
        ? cartItems.map((item) => {
            console.log(item.card.info);
            return <CartItem itemList={item.card.info}></CartItem>;
          })
        : ""}
    </div>
  );
};

export default CartPage;
