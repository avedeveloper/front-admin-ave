import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../../constants/env'
import { AppContext } from '../../../context/AppContext'
import { getToken } from '../../../helpers/auth'
import { formatterCurrency } from '../../../helpers/currency'
import Loader from '../../atoms/Loader/Loader'
import Thead from '../../molecules/Table/Thead'
import "../../organisms/TableProducts/TableProducts.css"
import "./ProductSingle.css"

const ProductSingle = () => {

  const params = useParams()
  
  const token = getToken()

  const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  };
 
  const dataProduct = {
    id: `${params.id}`,
    channel: "promos",
    address: "CO"
  }
  const [product, setProduct] = useState([])

  const {loading, setLoading} = useContext(AppContext)

  useEffect(() => {
    setLoading(true)
    axios.post(`${API_URL}api/products/product/`, dataProduct, config)
      .then(resp => {
        setLoading(false)
        setProduct(resp.data.data.data.product)
        console.log(resp.data.data.data.product)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="productSingle">
      {loading && (<Loader />)}
      {!loading && (
      <>
        <div className="infoProduct">
          <div className="img">
            <img src={`${product?.metadata[5]?.value}`} alt="producto" />
          </div>
          <div className="detalles">
            <h2>{product?.name}</h2>
            <div className="sku">
              <p>{product?.metadata[4]?.value}</p>
            </div>
            <div className="info">
              <div dangerouslySetInnerHTML={{__html: `${product?.metadata[1]?.value}`}} />
              <div className="precio"><p>{`Precio sugerido: ${formatterCurrency.format(product?.metadata[3]?.value)}`}</p></div>
            </div>
            <div className="estado">
              <h4>{product.isAvailableForPurchase ? "Activo" : "Inactivo"}</h4>
            </div>
            <div className="edit">
              <Link to={`/admin/productos/editar/${product.id}`}>Editar</Link>
            </div>
          </div>
        </div>
        
        <div className="tableproducts productsingletable">
          <h2>Existencias de producto</h2>
          <table>
            <Thead arrayTh={["Nombre", "Sku", "Precio neto", "Precio sugerido", "Bodega local", "Zona franca", "Transito", "Total disponible"]}/>
            <tbody>
              {
                product.variants.map((variant) => 
                  <tr key={variant.id}>
                    <td>{variant.name}</td>
                    <td>{variant.sku}</td>
                    <td>{formatterCurrency.format(variant.pricing.price.gross.amount)}</td>
                    <td>{formatterCurrency.format(variant.pricing.price.gross.amount)}</td>
                    <td>2.000</td>
                    <td>800</td>
                    <td>300</td>
                    <td>2800</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </>
      )}
    </div>
  )
}

export default ProductSingle