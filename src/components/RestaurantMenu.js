import { useParams } from "react-router-dom";
import { Resturantimageinfo } from "./config";
import ShimmerUI from "./shimmerUI";
import useResturats from "../Utils/useResturants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartslice";

const RestaurantMenu = () => {
  const params = useParams();
  let { id } = params;

  let restaurants = useResturats(id);

  let Dispached = useDispatch();
  const handlechange = (restaurants) => {
    Dispached(addItem(restaurants));
    console.log(restaurants);
  };

  return restaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="max-w-lg mx-auto p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-1">{restaurants.name}</h1>
        <h2 className="text-sm text-gray-500">Restaurant ID: {params.id}</h2>
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <img
          src={Resturantimageinfo + restaurants.cloudinaryImageId}
          alt={`${restaurants.name} image`}
          className="rounded-lg shadow-md w-72 h-56 object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>

      <div className="text-center text-gray-700 mb-4">
        <p className="text-lg font-semibold mb-1">{restaurants.city}</p>
        <p className="text-sm text-gray-600 mb-1">{restaurants.locality}</p>
        <p className="text-sm text-gray-500">{restaurants.costForTwoMessage}</p>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-200"
          onClick={() => handlechange(restaurants)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;

