import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import SimmerUi from "./SimmerUi";
import { Link } from "react-router-dom";
const filterData = (searchText, restaurantList) => {
  const data = restaurantList.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
};

const Body = () => {
  const [allResurantList, setAllResurantList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  // useEffect(() => console.log("abcdes"));

  useEffect(() => {
    const data = filterData(searchText, allResurantList);
    setRestaurantList(data);
    // console.log("seraching");
  }, [searchText]);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.968913158697145&lng=77.71987678941039&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const swiggyResturants = json?.data?.cards[2]?.data?.data?.cards;
    setRestaurantList(swiggyResturants);
    setAllResurantList(swiggyResturants);
  }

  if (allResurantList.length > 0 && restaurantList.length === 0) {
    return (
      <div className="SearchBar">
        <input
          type="text"
          className="Search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allResurantList);
            setRestaurantList(data);
          }}
        >
          Search
        </button>
        <h3>
          Sorry we are not able to find this resturant 😒! Please try again ✌️
        </h3>
      </div>
    );
  }
  return (
    <>
      <div className="SearchBar">
        <input
          type="text"
          className="Search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allResurantList);
            setRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>

      {restaurantList.length < 1 ? (
        <div className="resturant-lists">
          {Array(14)
            .fill("")
            .map((i, index) => (
              <SimmerUi key={index} />
            ))}
        </div>
      ) : (
        <div className="resturant-lists">
          {restaurantList.map((res) => {
            return (
              <Link to={"/resturant/" + res.data.id} key={res.data.id}>
                <ResturantCard {...res.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
