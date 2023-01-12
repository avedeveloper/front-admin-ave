import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { API_URL } from "../../../constants/env";
import { AppContext } from "../../../context/AppContext";
import { getToken } from "../../../helpers/auth";
import Loader from "../../atoms/Loader/Loader";
import Thead from "../../molecules/Table/Thead";
import "../TableProducts/TableProducts.css"
import "./TableLogs.css"

const TableLogs = () => {

  const token = getToken()

  const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  };
 
  const datalogs = {}

  const [logs, setLogs] = useState([])

  const {loading, setLoading} = useContext(AppContext)

  useEffect(() => {
    setLoading(true)

    axios.post(`${API_URL}api/cron/`, datalogs, config)
      .then(resp => {
        setLogs(resp.data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
      })
  }, [])
  
  
  return (
    <div className="tableproducts">
      {loading && (<Loader />)}
      {!loading && (
      <table>
        <Thead arrayTh={["Descripción"]}/>
        <tbody>
          {
            logs.map((log) => 
              (
              <tr key={log}>
                <td>{log}</td>
              </tr>
            ))
          }
        </tbody>
      </table>)}
    </div>
  )
}
export default TableLogs