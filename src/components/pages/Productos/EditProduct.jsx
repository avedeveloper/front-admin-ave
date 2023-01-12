import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../../constants/env'
import { AppContext } from '../../../context/AppContext'
import { getToken } from '../../../helpers/auth'
import { formatterCurrency } from '../../../helpers/currency'
import Loader from '../../atoms/Loader/Loader'
import './EditProduct.css'

const EditProduct = () => {
  
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
    <div className="editProduct">
      <h1>Editar producto</h1>
      {loading && (<Loader />)}
      {!loading && (
      <form className='formProduct'>
        <div className="fieldset">
          <label htmlFor="nombre">Nombre del producto</label>
          <input 
            type="text" 
            name="nombre" 
            id="nombre" 
            placeholder='Nombre del producto'
            defaultValue={product && product.name}
          />
        </div>
        <div className="fieldset">
          <label htmlFor="sku">SKU</label>
          <input type="text" name="sku" id="sku" placeholder='SKU del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="categoria">Categoría</label>
          <input type="text" name="categoria" id="categoria" placeholder='Categoría del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="raiting">Raiting</label>
          <input type="text" name="raiting" id="raiting" placeholder='Raiting del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="raiting">Descripción</label>
          <textarea type="text" name="descripcion" id="descripcion" placeholder='Descipción'/>
        </div>
        <div className="fieldset">
          <label htmlFor="precioneto">Precio</label>
          <input type="text" name="precioneto" id="precioneto" placeholder='Precio neto del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="raiting">Raiting</label>
          <input type="text" name="raiting" id="raiting" placeholder='Raiting del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="raiting">Raiting</label>
          <input type="text" name="raiting" id="raiting" placeholder='Raiting del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="raiting">Raiting</label>
          <input type="text" name="raiting" id="raiting" placeholder='Raiting del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="raiting">Raiting</label>
          <input type="text" name="raiting" id="raiting" placeholder='Raiting del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="raiting">Raiting</label>
          <input type="text" name="raiting" id="raiting" placeholder='Raiting del producto'/>
        </div>
        <div className="fieldset">
          <label htmlFor="raiting">Raiting</label>
          <input type="text" name="raiting" id="raiting" placeholder='Raiting del producto'/>
        </div>
        <button>Editar</button>
      </form>)}
    </div>
  )
}

export default EditProduct