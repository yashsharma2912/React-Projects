
// Components Imports
import Navbar from "./components/navbar/Navbar";

// Page components adding
import Home from "./Pages/Home/Home"
// react router dom
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return(
     <div className="app">
        <Navbar/>
        <Outlet/>
     </div>
    )
 }

  const router = createBrowserRouter([
    {
      path: "/",
      element : <Layout/>,
      children : [
          {
               path : "/",
               element : <Home/>
          }
      ]
    }
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
