import React, { useContext } from 'react'
import { Outlet} from "react-router-dom";
import { AppContext } from '../context/AppContext';

import Sidebar from './SideBar';

const Layout = () => {
  const {sidebarOpen, setSidebarOpen} = useContext(AppContext)

  return (
    <div>
      <Sidebar />

      <div className={sidebarOpen ? "main" : "main sidebarClose"}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout