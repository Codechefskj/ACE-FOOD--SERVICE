import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import GALLERY from "./components/GALLERY.jsx";
import Error from "./components/Error.js";
import Contact from "./components/contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Profile from "./components/profile.js";
import ShimmerUI from "./components/shimmerUI.jsx";
import { Provider } from "react-redux";
import Appstore from "./Utils/appstore.jsx";
import Cart from "./components/cart.jsx";

const Instamart = lazy(() => import("./components/Instamart.js"));

const Layout = () => {
  return (
    <Provider store={Appstore}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/GALLERY",
        element: <GALLERY />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
