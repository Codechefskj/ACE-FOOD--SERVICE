import { useContext } from "react";
import usercontext from "../Utils/usercontext";

const Footer = () => {
  const { user } = useContext(usercontext);

  return (
    <footer className="bg-gray-800 text-white py-6 text-center text-sm font-light tracking-wide mt-auto w-full">
      <p className="text-base font-medium">
        This platform is brought to you by {user.name}.
      </p>
      <p className="text-gray-400 text-sm hover:text-gray-300 transition">
        Feel free to contact us via email at {user.email}.
      </p>
    </footer>
  );
};

export default Footer;
