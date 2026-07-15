import { useState } from "react"
import AdminLogin from "../AdminLogin"
import Admin from "../Admin"

function AdminPage() {

  const [login, setLogin] = useState(false)

  return (

    <div>

      {
        login ?

        <Admin />

        :

        <AdminLogin setLogin={setLogin}/>

      }

    </div>

  )
}

export default AdminPage
