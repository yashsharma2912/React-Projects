
// Components Imports
import Navbar from "./Components/navbar/Navbar"
import Home from "../src/Pages/Home/Home"
import Footer from "./Components/footer/Footer";
import Gig from "./Pages/gig/Gig";
import Gigs from "./Pages/gigs/Gigs";
import MyGigs from "./Pages/myGigs/MyGigs";
import Orders from "./Pages/orders/Orders";

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element : <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gig",
          element : <Gig/>,
        },
        {
          path: "/gigs",
          element : <Gigs/>,
        },
        {
          path: "/MyGigs",
          element : <MyGigs/>,
        },       
        {
          path: "/orders",
          element : <Orders/>,
        },

      ]
    },  
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
