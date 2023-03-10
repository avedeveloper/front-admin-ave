import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import "./sidebar.css"
import logo from "../../assests/logoave.svg"
import {
  AiOutlineLeft,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
  AiOutlineRight,
} from "react-icons/ai";
import NavSidebar from './NavSidebar'
import { MdLogout } from "react-icons/md"
import { FiUsers } from "react-icons/fi"
import { BiNotepad } from "react-icons/bi"
import { AppContext } from '../../context/AppContext'


const Sidebar = () => {
  const nav = useNavigate()

  const getUser = localStorage.getItem('user')
  console.log(getUser);
  
  const handleSession = () => {
    nav('/')
  }

  const {sidebarOpen, setSidebarOpen} = useContext(AppContext)

  const changeSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  } 

  return (
    <div className={sidebarOpen ? "sidebarNav" : "sidebarNav notActive"}>
      <div className="info">
        <img src={logo} alt="Logo AVE" />
        {sidebarOpen && <h2>AVE ADMIN</h2>}
      </div> 
      <button className="Sidebarbutton" onClick={changeSidebar}>
      {sidebarOpen ? <AiOutlineLeft /> : <AiOutlineRight />}
      </button>
      <div className="navPrimary">
        <NavSidebar label="Home" to="/admin">
          <AiOutlineHome />
        </NavSidebar>
        <NavSidebar label="Usuarios" to="/admin/usuarios" >
          <FiUsers/>
        </NavSidebar>
        <NavSidebar label="Productos" to="/admin/productos" >
          <AiOutlineApartment />
        </NavSidebar>
        <NavSidebar label="Logs" to="/admin/logs">
          <BiNotepad />
        </NavSidebar>
      </div>
      <div className="navSecundary">
        <NavSidebar label="Configuración" to="/admin/configuracion" >
          <AiOutlineSetting />
        </NavSidebar>
        <div className="Navlink red">
          <div onClick={handleSession} className="link">
            <div className="Linkicon"><MdLogout /></div>
            {sidebarOpen && "Cerrar Sesión"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar