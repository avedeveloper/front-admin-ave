import { API_URL } from "../../constants/env"

function Home() {

  return (
    <div className="Home">
      <h1>Accede a tu cuenta</h1>
      <h2>{API_URL}</h2>
    </div>
  )
}

export default Home
