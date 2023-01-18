import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import { getToken } from '../helpers/auth';
import Sidebar from './SideBar';

const Layout = () => {

  const tokenUser = getToken()
  //console.log(tokenUser);
  const nav = useNavigate()

  const {sidebarOpen, setSidebarOpen} = useContext(AppContext)

  useEffect(() => {
    !tokenUser && nav("/")
  }, [])

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