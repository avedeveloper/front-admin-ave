import React, { useContext, useState } from 'react'
import axios from "axios"
import logo from "../../assests/logoave.svg"
import { useNavigate } from "react-router-dom"
import "./login.css"
import { AppContext } from "../../context/AppContext"
import Loader from '../../components/Loader/index'



const Login = () => {
  const nav= useNavigate()


  const {loading, setLoading} = useContext(AppContext)


  const [error, setError] = useState()

  const handleSubmit = e => {
    e.preventDefault()
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

    axios.post(`https://128.199.6.213/admin/login`, dataLogin, config)
      .then(res => {
        const tokenUser = res.data.token
        sessionStorage.setItem('user', tokenUser)
        console.log(res.data)
        nav("/admin")
      })
      .catch(err => {
        setLoading(false)
        if(err.response?.data?.error){
          setError(err.response.data.error)
        }else if( err.message ) {
          setError(`${err.message} - Error de API`)
        }else {
          setError('Error inesperado')
        }
      })
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