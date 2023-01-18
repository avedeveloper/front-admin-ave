import React, { useContext, useState } from 'react'
import logo from "../../assests/logoave.svg"
import {  Navigate, useNavigate } from "react-router-dom"
import './login.css'
import axios from "axios"
import Loader from '../../components/Loader'
import { getToken } from '../../helpers/auth'
import { AppContext } from '../../context/AppContext'



const Login = () => {

  const nav = useNavigate()

  const tokenUser = getToken()

  const {loading, setLoading} = useContext(AppContext)

  const [error, setError] = useState()
 
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setError("")

    
    const config = {
      headers: { 
        "Access-Control-Allow-Origin": "*"
      }
    };

    const dataLogin = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
        
    console.log(dataLogin)
    axios.post(`http://128.199.6.213/admin/login`, dataLogin, config)
    .then(res =>{
      const tokenRecibido = res.data.token
      sessionStorage.setItem('user', tokenRecibido)
      console.log(res.data)
      nav("/home")
    })
    const token = sessionStorage.getItem('user')
    console.log(token)
  }
  


  return (

    <>
    

    <div className="container">
      <div className="boxLogin">
        <div className="logo">
          <img src={logo} alt="Logo AVE" />
        </div>
        <div className="info">
          <h1 className="titulo">Accede a tu cuenta</h1>
          <p className="descripcion">¡Bienvenido de nuevo! Por favor, introduce tus datos.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="fieldset">
            <label htmlFor="email">Email</label>
            <input
              type="email" 
              name="email" 
              id="email" 
              placeholder="Introduce tu correo electrónico"
              required />
          </div>
          <div className="fieldset">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password" 
              name="password" 
              id="password"
              placeholder="••••••••" 
              required />
          </div>
          <button type="submit">Ingresar</button>
          {loading && (<Loader />)}
          {error && 
            (
              <div className="errores">
                <h5>{error}</h5>
              </div>
            )
          }
        </form>
      </div>
    </div>
    </>
  )
}

export default Login