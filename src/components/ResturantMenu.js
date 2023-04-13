import { useState } from "react";
import { useParams } from "react-router-dom";
import { imageUrl } from "../utils/config";
import useResturantMenu from "../utils/useResturantMenu";
import SimmerUi from "./SimmerUi";
import FoodItem from "./FoodItem";

const ResturantMenu = () => {
  const { id } = useParams();
  const resturantMenu = useResturantMenu(id);

  // console.log(resturantMenu[1]);

  return resturantMenu[0] === null ? (
    <div className="resturant-lists">
      {Array(14)
        .fill("")
        .map((i, index) => (
          <SimmerUi key={index} />
        ))}
    </div>
  ) : (
    <>
      <div className="resturantMenuCard">
        <img
          className="menuPic"
          src={imageUrl + resturantMenu[0]?.cloudinaryImageId}
        ></img>
        <div>
          <h3>{resturantMenu[0]?.name}</h3>
          <h5>
            {resturantMenu[0]?.locality},{resturantMenu[0]?.areaName},
            {resturantMenu[0]?.city}
          </h5>
          <h5>{resturantMenu[0]?.costForTwoMessage}</h5>
          <h5>{resturantMenu[0]?.cuisines.join(" ,")}</h5>
          <h5>Rating: {resturantMenu[0]?.avgRating}</h5>
          <h5>{resturantMenu[0]?.feeDetails.message}</h5>
        </div>
      </div>
      <hr />
      <div>
        {resturantMenu[1].map((item, index) => {
          return <FoodItem item={item} index={index} />;
        })}
      </div>
    </>
  );
};

export default ResturantMenu;
