import { ImageCdn } from "./config";

const Restruantcard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
      <div className="w-full h-56">
        <img
          src={ImageCdn + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-gray-800 truncate hover:text-teal-500 transition-colors">
          {name}
        </h2>
        <p className="text-sm text-gray-500 mt-2 truncate">
          {cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${
              avgRating >= 4
                ? "bg-green-100 text-green-700"
                : avgRating >= 3
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <button className="text-teal-500 hover:underline font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Restruantcard;
