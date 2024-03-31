import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/login',
    element: <Loginpage />
  }
])