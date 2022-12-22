import { API_URL } from "../../../constants/env"
import axios from "axios"
import { getToken, setToken } from "../../../helpers/auth"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Login.css"
import logo from "../../../assests/logoave.svg"

const Login = () => {
  const nav= useNavigate()
  const tokenUser = getToken()

  useEffect(() => {
    tokenUser && nav("/admin")
  }, [])

  const [error, setError] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    setError("")

    const dataLogin = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    axios.post(`${API_URL}admin/login`, dataLogin)
      .then(resp => {
        setToken(resp.data.token)
        nav("/admin")
      })
      .catch(err => {
        setError(err.response.data.error)
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