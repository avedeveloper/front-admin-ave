import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";
import Usuarios from "../pages/Usuarios/index";
import Productos from "../pages/Productos/index";
import Configuracion from "../pages/Configuracion/index";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin/usuarios" element={<Usuarios/>} />
            <Route path="/admin/productos" element={<Productos/>} />
            <Route path="/admin/configuracion" element={<Configuracion/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};
