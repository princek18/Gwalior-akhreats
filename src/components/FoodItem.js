import { useState } from "react";
import { imageUrl } from "../utils/config";
const FoodItem = ({ item, index }) => {
  const [show, setShow] = useState(false);
  return (
    <div key={index}>
      <div className="h1ButtonCombo" key={index}>
        <h2>{item.title}</h2>
        {!show && (
          <button className="btn" onClick={() => setShow(true)}>
            show
          </button>
        )}
        {show && (
          <button className="btn" onClick={() => setShow(false)}>
            hide
          </button>
        )}
      </div>

      {show &&
        item.itemCards.map((food) => {
          let price = food?.card?.info?.price;
          let defaultPrice = food?.card?.info?.defaultPrice;
          let finalPrice = defaultPrice ? defaultPrice : price;
          return (
            <div key={food?.card?.info?.id} className="itemConatiner">
              <div className="namePrice" key={food?.card?.info?.id}>
                <h4>{food?.card?.info?.name}</h4>
                <h5>Price:{finalPrice / 100}</h5>
                <h5>
                  Rating:
                  {food?.card?.info?.ratings?.aggregatedRating?.rating}(
                  {food?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </h5>
                <h5>{food?.card?.info?.description}</h5>
              </div>
              <div className="itemAdd">
                <img
                  className="itemPic"
                  src={imageUrl + food?.card?.info?.imageId}
                ></img>
                <button className="btn">Add</button>
              </div>
            </div>
          );
        })}
      <hr />
    </div>
  );
};

export default FoodItem;
