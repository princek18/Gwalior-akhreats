/**
 * Layout
 *  - Header
 *    -logo
 *     -navbar
 *  -Body
 *    -Search Bar
 *    -cards
 *      -resturant name
 *      - Rating
 *      - Keywords
 *      - resturant image
 *  -footer
 */

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import AboutUs from "./components/aboutUs";
import Contact from "./components/contactUs";
import ErrorPage from "./components/error";
import ResturantMenu from "./components/resturantMenu";
import FastMart from "./components/FastMart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userConetxt from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./components/CartPage";

const AppLayout = () => {
  // const [user, setUser] = useState();

  // useEffect(()=> {
  //   api call for Authentication
  //   then call setUser(user) and update
  // },[])

  const user = {
    name: "Amit",
    email: "akrock0512000@gmail.com",
  };
  return (
    <Provider store={store}>
      <userConetxt.Provider
        value={{
          user: user,
          // setUser: setUser - to modify the user
        }}
      >
        <Header></Header>
      </userConetxt.Provider>
      <Outlet></Outlet>
      <Footer></Footer>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/fastmart",
        element: <FastMart />,
      },
      {
        path: "/cartPage",
        element: <CartPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
