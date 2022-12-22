import React from 'react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { getToken } from '../../helpers/auth'

const App = () => {
  const tokenUser = getToken()
  const nav = useNavigate()

  useEffect(() => {
    !tokenUser && nav("/")
  }, [])

  return (
    <div className="main">
      <Outlet />
    </div>
  )
}

export default App