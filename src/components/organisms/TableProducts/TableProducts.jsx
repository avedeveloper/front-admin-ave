import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { API_URL } from "../../../constants/env"
import { AppContext } from "../../../context/AppContext"
import { getToken } from "../../../helpers/auth"
import { formatterCurrency } from "../../../helpers/currency";
import Loader from "../../atoms/Loader/Loader"
import Thead from "../../molecules/Table/Thead"
import "./TableProducts.css"

const TableProducts = () => {

  const token = getToken()

  const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  };
 
  const dataProducts = {
    size: 80,
    address: "CO"
  }
  const [products, setProducts] = useState([])

  const {loading, setLoading} = useContext(AppContext)

  useEffect(() => {
    setLoading(true)

    axios.post(`${API_URL}api/products/`, dataProducts, config)
      .then(resp => {
        setProducts(resp.data.products.data.products.edges)
        setLoading(false)
      })
      .catch(err => {
        //setError(err)
        console.log(err)
      })
  }, [])
  
  
  return (
    <div className="tableproducts">
      {loading && (<Loader />)}
      {!loading && (
      <table>
        <Thead arrayTh={["Imagen", "Nombre", "SKU", "Categoría", "Precio neto", "Precio sugerido", "Stock disponible", "Proveedor", "Estado", "Detalle"]}/>
        <tbody>
          {
            products.map((product) => 
              (
              <tr key={product.node.id}>
                <td>
                  <div className="img">
                    <img 
                      src={product.node.metadata[5].value ? product.node.metadata[5].value : "https://catalogospromocionales.com/images/productos/2551.jpg"} 
                      alt={product.node.thumbnail?.alt ? product.node.thumbnail?.alt : "prueba de contenido"} />
                  </div>
                </td>
                <td>{product.node.name}</td>
                <td>{product.node.metadata[4].value}</td>
                <td>{product.node.metadata[0].value}</td>
                <td>{formatterCurrency.format(product.node.metadata[3].value)}</td>
                <td>{formatterCurrency.format(product.node.metadata[3].value)}</td>
                <td>5000</td>
                <td>{product.node.metadata[2].value}</td>
                <td>{product.node.isAvailable ? "Activo" : "Inactivo"}</td>
                <td><Link to={`/admin/productos/${product.node.id}`} className="ver">Ver</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>)}
    </div>
  )
}
export default TableProducts