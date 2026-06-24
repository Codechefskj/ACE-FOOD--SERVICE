import { useEffect, useState } from "react";
import { Resturantinfo } from "../components/config";

const useResturantsname = () => {
  const [allResturants, setAllResturants] = useState(Resturantinfo);
  const [filterResturant, setFilterResturant] = useState(Resturantinfo);

  useEffect(() => {
    getResturantInfoThroughApi();
  }, []);

  async function getResturantInfoThroughApi() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error("Failed to fetch restaurants");
      }

      const json = await data.json();

      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      if (restaurants.length > 0) {
        setAllResturants(restaurants);
        setFilterResturant(restaurants);
      } else {
        console.log("API returned empty data. Using local data.");
        setAllResturants(Resturantinfo);
        setFilterResturant(Resturantinfo);
      }
    } catch (error) {
      console.log("Swiggy API Failed. Using Local Data.", error);

      setAllResturants(Resturantinfo);
      setFilterResturant(Resturantinfo);
    }
  }

  return [allResturants, filterResturant, setFilterResturant];
};

export default useResturantsname;