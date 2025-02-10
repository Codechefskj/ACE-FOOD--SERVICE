import { useState } from "react";
import logo from "../assets/logo image .jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export let Title = (
  <a href="/" className="flex items-center">
    <img
      src={logo}
      alt="LOGO"
      className="logo w-32 h-auto rounded-full border-4 border-gradient-to-r from-gray-500 via-gray-600 to-gray-700 shadow-xl transform transition-transform hover:scale-105"
    />
  </a>
);

const Header = () => {
  const [isLoggedin, setisLoggesin] = useState(false);

  const cartItemCount = useSelector((store) => store.cart.items.length);

  return (
    <div className="mainheader bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white p-5 flex items-center justify-between rounded-xl shadow-2xl border-b-4 border-gray-600">
      {Title}
      <div className="flex gap-10">
        <ul className="flex gap-6 text-lg font-semibold tracking-wide">
          <Link to={"/"}>
            <li className="hover:text-emerald-400 transition-colors hover:underline">Home</li>
          </Link>
          <Link to={"/GALLERY"}>
            <li className="hover:text-emerald-400 transition-colors hover:underline">Gallery</li>
          </Link>
          <Link to={"/contact"}>
            <li className="hover:text-emerald-400 transition-colors hover:underline">Contact</li>
          </Link>

          <Link to={"/Cart"}><li className="hover:text-emerald-400 transition-colors hover:underline">Cart - {cartItemCount}</li></Link>
          
          <Link to={"/Instamart"}>
            <li className="hover:text-emerald-400 transition-colors hover:underline">Instamart</li>
          </Link>
        </ul>
      </div>

      {isLoggedin ? (
        <button
          onClick={() => {
            setisLoggesin(false);
          }}
          className="bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-3 rounded-full shadow-xl font-medium text-white hover:bg-gradient-to-l hover:from-rose-600 hover:to-rose-700 transition-all transform hover:scale-105"
        >
          LOGOUT
        </button>
      ) : (
        <button
          onClick={() => {
            setisLoggesin(true);
          }}
          className="bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-3 rounded-full shadow-xl font-medium text-white hover:bg-gradient-to-l hover:from-teal-500 hover:to-teal-600 transition-all transform hover:scale-105"
        >
          LOGIN
        </button>
      )}
    </div>
  );
};

export default Header;