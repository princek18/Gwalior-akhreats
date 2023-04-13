import { imageUrl } from "../utils/config";
const ResturantCard = ({ cloudinaryImageId, name, cuisines, deliveryTime }) => (
  <div className="card">
    <img src={imageUrl + cloudinaryImageId} alt="resturant img" />
    <h3>{name}</h3>
    <h5>{cuisines.join(", ")}</h5>
    <h6>{deliveryTime} minutes</h6>
  </div>
);

export default ResturantCard;
