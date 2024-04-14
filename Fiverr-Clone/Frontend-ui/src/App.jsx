
// Components Imports
import Navbar from "./Components/navbar/Navbar"
import Home from "../src/Pages/Home/Home"
import Gig from "./Pages/gig/Gig";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
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
