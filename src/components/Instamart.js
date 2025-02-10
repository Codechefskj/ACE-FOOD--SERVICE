import { useState } from "react";

const Section = ({ name, description, isVisible, setIsVisible }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{name}</h1>

      {isVisible ? (
        <>
          <button
            className="text-gray-700 font-medium mt-2 hover:text-gray-900 transition-colors"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">{description}</p>
        </>
      ) : (
        <button
          className="text-gray-700 font-medium mt-2 hover:text-gray-900 transition-colors"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visiblesection, setvisiblesection] = useState();

  return (
    <>
      <Section
        name="About Instamart"
        description={
          <p>
            Instamart is a food ordering application designed to simplify and enhance your dining experience.
            Built using Swiggy's real-time API, it offers seamless integration and real-time updates for your orders.
            This platform is created solely by Sambhav Jha, with a vision to combine convenience and technology in one place.
            Whether you're craving something special or planning a meal, Instamart is here to serve you.
          </p>
        }
        isVisible={visiblesection === "about"}
        setIsVisible={() => setvisiblesection(visiblesection === "about" ? null : "about")}
      />

      <Section
        name="Instamart Team"
        description={
          <p>
            Instamart is an individual project crafted with dedication and expertise by Sambhav Jha.
            Leveraging Swiggy's robust real-time API, the application is designed to provide a smooth and reliable experience for users.
            From designing the user interface to integrating advanced functionalities, every aspect of this platform has been built with care.
            The goal is to deliver a hassle-free and enjoyable food ordering experience for all.
          </p>
        }
        isVisible={visiblesection === "Instamartteam"}
        setIsVisible={() => setvisiblesection(visiblesection === "Instamartteam" ? null : "Instamartteam")}
      />
    </>
  );
};

export default Instamart;
