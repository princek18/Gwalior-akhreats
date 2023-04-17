import { useDispatch } from "react-redux";
import { imageUrl } from "../utils/config";
import { increaseQunatity } from "../utils/CartSlice";
import { decreaseQuantity, updateOrderValue } from "../utils/CartSlice";
const CartItem = ({ itemList }) => {
  const dispatch = useDispatch();
  const handelIncreaseBtn = (id) => {
    dispatch(increaseQunatity(id));
    dispatch(updateOrderValue());
  };

  const handelDecreaseBtn = (id) => {
    dispatch(decreaseQuantity(id));
    dispatch(updateOrderValue());
  };

  let price = itemList?.price;
  let defaultPrice = itemList?.defaultPrice;
  let finalPrice = defaultPrice ? defaultPrice / 100 : price / 100;
  return (
    <div className="cartItem" key={itemList?.id}>
      <div className="cartItemNamePic">
        <h3>{itemList?.name}</h3>
        <img className="cartPic" src={imageUrl + itemList?.imageId}></img>
      </div>
      <div className="cartItemNamePic">
        <div className="cartBtnFlex">
          <button onClick={() => handelDecreaseBtn(itemList.id)}>-</button>
          <h5>{itemList.quantity}</h5>
          <button onClick={() => handelIncreaseBtn(itemList.id)}>+</button>
        </div>
        <h5>Price:{finalPrice}</h5>
        <h4>Total Price : {finalPrice * itemList.quantity}</h4>
      </div>
    </div>
  );
};

export default CartItem;
