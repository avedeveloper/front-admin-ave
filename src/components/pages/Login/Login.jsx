import { API_URL } from "../../../constants/env"
import axios from "axios"
import { setToken } from "../../../helpers/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
  const nav= useNavigate()

  const [error, setError] = useState()

  const handleSubmit = e => {
    e.preventDefault()

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
    <>
    <div>Login</div>
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" id="email" required />
      <input type="password" name="password" id="password" required />
      {error && (<h5>{error}</h5>  )}
      <button type="submit">Ingresar</button>
    </form>
    </>
  )
}

export default Login