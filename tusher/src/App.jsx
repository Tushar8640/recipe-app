import React from "react";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./Components/PrivateRoute";
import Layout from "./Components/Layout";
import ChefDetails from "./Pages/ChefDetails";
import Blogs from "./Pages/Blogs";
import Notfound from "./Components/Notfound";
import Profile from "./Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/chefs/`),
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
export default function () {
  console.log(import.meta.env.VITE_API_KEY,);
  return <RouterProvider router={router} />;
}
