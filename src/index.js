import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import ErrorPage from "./components/ErrorPage";
import Settings from "./components/Settings";
import AllPuppies from "./components/AllPuppies";
import AboutUs from "./components/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/settings",
                element: <Settings />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/puppies",
                element: <AllPuppies />
            }
        ]
    }
   
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));

