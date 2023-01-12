import { API_URL } from "../../../constants/env"
import axios from "axios"
import { getToken, setToken } from "../../../helpers/auth"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import "./Login.css"
import logo from "../../../assests/logoave.svg"
import { AppContext } from "../../../context/AppContext"
import Loader from "../../atoms/Loader/Loader"

const Login = () => {
  const nav= useNavigate()
  const tokenUser = getToken()

  const {loading, setLoading} = useContext(AppContext)

  useEffect(() => {
    setLoading(false)
    tokenUser && nav("/admin")
  }, [])

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

    axios.post(`${API_URL}admin/login`, dataLogin, config)
      .then(resp => {
        setLoading(false)
        setToken(resp.data.token)
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
  )
}

export default Login