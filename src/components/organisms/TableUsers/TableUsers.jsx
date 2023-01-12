import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { API_URL } from "../../../constants/env";
import { AppContext } from "../../../context/AppContext";
import { getToken } from "../../../helpers/auth";
import Loader from "../../atoms/Loader/Loader";
import Thead from "../../molecules/Table/Thead";
import "./TableUsers.css"

const TableUsers = () => {

  const token = getToken()

  const config = {
    headers: { 
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*"
    }
  };

  const [error, setError] = useState()
 
  const [users, setUsers] = useState([])

  const {loading, setLoading} = useContext(AppContext)

  useEffect(() => {
    setLoading(true)

    axios.post(`${API_URL}api/users/`, {}, config)
      .then(resp => {
        setUsers(resp.data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
      })
  }, [])
  
  return (
    <div className="tableproducts tableusers">
      {loading && (<Loader />)}
      {!loading && (
      <table>
        <Thead arrayTh={["Foto", "Nombre", "Descripción", "Estado", "Tipo de cuenta"]}/>
        <tbody>
          {
            users.map((user) => 
              (
              <tr key={user.user}>
                <td>
                  <div className="img">
                    <img 
                      src={user.img?.src ? user.img?.src : "https://catalogospromocionales.com/images/productos/2551.jpg"} 
                      alt={user.img?.alt ? user.img?.alt : "prueba de contenido"} />
                  </div>
                </td>
                <td>{user.user}</td>
                <td>{user.description}</td>
                <td>{user.status.pago}</td>
                <td>{user.status.tipoDeCuenta}</td>
              </tr>
            ))
          }
        </tbody>
      </table>)}
    </div>
  )
}
export default TableUsers