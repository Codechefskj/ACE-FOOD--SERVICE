import { useEffect, useState } from "react";
import { Resturantinfo } from "../components/config";

const useResturantsname = () => {
  const [allResturants, setAllResturants] = useState(Resturantinfo);
  const [filterResturant, setFilterResturant] = useState(Resturantinfo);

  useEffect(() => {
    getResturantInfoThroughApi();
  }, []);

  async function getResturantInfoThroughApi() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setAllResturants(restaurants);
    setFilterResturant(restaurants);
  }

  return [allResturants, filterResturant, setFilterResturant];
};

export default useResturantsname;
