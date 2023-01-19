import React from 'react'
import { Outlet} from 'react-router-dom'
import Sidebar from './components/SideBar/index'
import "./App.css"

const App = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div >
        <Outlet />
      </div>
    </div>
  )
}

export default App