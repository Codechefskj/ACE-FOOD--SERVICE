import { useState } from "react";
import Restruantcard from "./Restruantcard";
import ShimmerUI from "./shimmerUI";
import { Link } from "react-router-dom";
import useResturantsname from "../Utils/useResturantsname";
import useOffline from "../Utils/useOffline";

const filter = (searchtext, allResturants) => {
  return allResturants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase())
  );
};

const Body = () => {
  const [searchtext, setsearchtext] = useState("");

  let [allResturants, filterResturant, setFilterResturant] = useResturantsname();

  let offline = useOffline();
  if (offline)
    return (
      <h1 className="text-red-500 text-2xl font-extrabold text-center bg-yellow-100 p-6 rounded-lg shadow-lg animate-pulse">
        You are offline, please check your network
      </h1>
    );

  if (!allResturants) return null;

  return allResturants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="main search-container flex flex-col items-center gap-6 p-6 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-xl rounded-lg">
        <input
          className="inputplace border border-gray-400 rounded-lg px-4 py-3 w-3/4 max-w-lg focus:outline-none focus:ring-4 focus:ring-teal-400 focus:bg-gray-100 placeholder-gray-600 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          placeholder="Search restaurants"
          value={searchtext}
          onChange={(e) => setsearchtext(e.target.value)}
        />
        <button
          className="button-container bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-teal-300 font-semibold uppercase tracking-wider"
          onClick={() => {
            const data = searchtext
              ? filter(searchtext, allResturants)
              : allResturants;
            setFilterResturant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="maibodydiv grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50 rounded-lg shadow-inner">
        {filterResturant && filterResturant.length > 0 ? (
          filterResturant.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
              className="block transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <Restruantcard {...restaurant.info} />
            </Link>
          ))
        ) : (
          <h2 className="text-center text-gray-700 col-span-full font-extrabold text-xl bg-red-100 p-4 rounded-md shadow-md">
            No restaurants found
          </h2>
        )}
      </div>
    </>
  );
};

export default Body;
