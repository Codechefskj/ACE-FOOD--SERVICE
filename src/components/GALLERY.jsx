import Profilefromclassbasedcompponents from "./profilepage";
import React from "react";
import photo1 from "../assets/photo-1552566626-52f8b828add9.avif";
import photo2 from "../assets/photo-1424847651672-bf20a4b0982b.avif";
import photo3 from "../assets/photo-1590846406792-0adc7f938f1d.avif";
import photo4 from "../assets/premium_photo-1661883237884-263e8de8869b.avif";
import photo5 from "../assets/premium_photo-1661953124283-76d0a8436b87.avif";
import photo6 from "../assets/premium_photo-1670984935550-5ce2e220977a.avif";

class GALLERY extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }

  render() {
    console.log("parent-render");
    return (
      <div className="p-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-xl shadow-2xl max-w-7xl mx-auto my-12 border border-gray-400 font-serif">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-extrabold text-gray-900 drop-shadow-xl tracking-wide aria-[]: uppercase">GALLERY</h1>
          <p className="text-lg text-gray-700 mt-6 leading-loose ">
            Discover a world of flavors where every dish is crafted with love and precision, bringing you an unforgettable dining experience.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <img src={photo1} className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Delicious Cuisine 1" />
          <img src={photo2} className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Delicious Cuisine 2" />
          <img src={photo3} className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Delicious Cuisine 3" />
          <img src={photo4} className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Delicious Cuisine 4" />
          <img src={photo5} className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Delicious Cuisine 5" />
          <img src={photo6} className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt="Delicious Cuisine 6" />
        </div>

        <div className="text-center mb-8">
          <p className="text-2xl text-gray-800 font-semibold italic tracking-wide">
            Where flavors meet passion, and every bite tells a story
          </p>
        </div>
      </div>
    );
  }
}

export default GALLERY;