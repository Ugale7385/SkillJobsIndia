import { useState } from "react"
import AdminLogin from "../AdminLogin"
import Admin from "../Admin"

function AdminPage({ jobList, setJobList }) {

  const [login, setLogin] = useState(false)

  return (
    <div>
      {
        login ? (
          <Admin
            jobList={jobList}
            setJobList={setJobList}
          />
        ) : (
          <AdminLogin setLogin={setLogin} />
        )
      }
    </div>
  )
}

export default AdminPage
