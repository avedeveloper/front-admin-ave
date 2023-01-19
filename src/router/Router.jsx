import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/index"
import App from "../App"
import Productos from "../pages/Productos/index"
import Configuracion from "../pages/Configuracion/index"
import Usuarios from "../pages/Usuarios/index"
import Login from "../pages/Login"
import Error404Blank from "../pages/Error404Blank"
import Blank from '../Blank'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Blank />,
    errorElement: <Error404Blank />,
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
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/admin/usuarios",
        element: <Usuarios />
      },
      {
        path: "/admin/productos",
        element: <Productos />
      },
      {
        path: "/admin/configuracion",
        element: <Configuracion />
      }
    ]
  }
])

export default router