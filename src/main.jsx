import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Layouts/Root.jsx";
import Home from "./Components/HomePage/Home/Home.jsx";
import About from "./Components/HomePage/about/About.jsx";
import Services from "./Components/HomePage/Services/Services.jsx";
import LogIn from "./Components/logIn/LogIn.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import AuthProvider from "./Components/Providers/AuthProvider.jsx";
import CheckOut from "./Components/CheckOut/CheckOut.jsx";
import BookService from "./Components/BookService/BookService.jsx";
import PrivateRoute from "./Components/Routes/PrivateRoute.jsx";

import Tables from "./Components/Table/Table.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/table",
        element: <Tables />,
      },
      {
        path: "/logIn",
        element: <LogIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "checkOuts",
        element:<PrivateRoute><BookService></BookService></PrivateRoute>,
  
      },
      {
        path: "/checkOuts/:id",
        element: <PrivateRoute><CheckOut/></PrivateRoute>,
        loader:({params})=> fetch(`https://car-doctor-server-with-jwt-three.vercel.app/services/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto p-6">
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
    ,
  </div>
);
