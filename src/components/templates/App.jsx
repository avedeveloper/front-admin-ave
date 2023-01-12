import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { getToken } from '../../helpers/auth'
import Sidebar from '../organisms/Sidebar/Sidebar'
import "./App.css"

const App = () => {
  const tokenUser = getToken()
  const nav = useNavigate()

  const {sidebarOpen, setSidebarOpen} = useContext(AppContext)

  useEffect(() => {
    !tokenUser && nav("/")
  }, [])

  return (
    <div className="container-app">
      <Sidebar />
      <div className={sidebarOpen ? "main" : "main sidebarClose"}>
        <Outlet />
      </div>
    </div>
  )
}

export default App