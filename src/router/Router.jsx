import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import Error404 from "../components/pages/Error404"
import App from "../components/templates/App"
import Login from "../components/pages/Login/Login"
import Blank from "../components/templates/Blank"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blank />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Login />
      }
    ]
  },
  {
    path: "/admin",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

export default router