import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import Error404 from "../components/pages/Error404"
import App from "../components/templates/App"
import Login from "../components/pages/Login/Login"
import Blank from "../components/templates/Blank"
import Error404Blank from "../components/pages/Error404Blank"
import Productos from "../components/pages/Productos/Productos"
import Configuracion from "../components/pages/Configuracion/Configuracion"
import Usuarios from "../components/pages/Usuarios/Usuarios"
import ProductSingle from "../components/pages/Productos/ProductSingle"
import Logs from "../components/pages/Logs/Logs"
import EditProduct from "../components/pages/Productos/EditProduct"

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
    errorElement: <Error404 />,
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
        path: "/admin/productos/:id",
        element: <ProductSingle />
      },
      {
        path: "/admin/productos/editar/:id",
        element: <EditProduct />,
      },
      {
        path: "/admin/logs",
        element: <Logs />
      },
      {
        path: "/admin/configuracion",
        element: <Configuracion />
      }
    ]
  }
])

export default router