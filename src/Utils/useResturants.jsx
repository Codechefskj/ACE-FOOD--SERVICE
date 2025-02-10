import { useEffect, useState } from "react";
const useRestaurants = (id) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []); 
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.card?.card?.info);
  }

  return restaurants; 
};

export default useRestaurants;