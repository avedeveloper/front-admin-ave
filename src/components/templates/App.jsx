import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="main">
      <Outlet />
    </div>
  )
}

export default App