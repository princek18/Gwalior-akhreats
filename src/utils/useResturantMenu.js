import { apiFirstHalf, apiSecondHalf } from "./config";
import { useState, useEffect } from "react";

let itemsArray = [];
const useResturantMenu = (id) => {
  const [resturantInfo, setResturantInfo] = useState(null);
  const [items, setItem] = useState([]);

  useEffect(() => {
    getResturantMenu();
  }, []);

  const apiLink = apiFirstHalf + id + apiSecondHalf;

  async function getResturantMenu() {
    const data = await fetch(apiLink);
    const json = await data.json();
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    setItem(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    setResturantInfo(json.data.cards[0].card.card.info);
  }

  items.map((i) => {
    if (
      i.card.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) {
      itemsArray.push(i.card.card);
    }
  });

  let resturantMenu = [resturantInfo, itemsArray];

  return resturantMenu;
};

export default useResturantMenu;
