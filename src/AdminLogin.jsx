import { useState } from "react"

function AdminLogin({ setLogin }) {

  const [password, setPassword] = useState("")


  const login = () => {

    if(password === "Saurabh@123") {

      setLogin(true)

    } else {

      alert("Wrong Password")

    }

  }


  return (

    <div className="admin">

      <h2>Admin Login</h2>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />


      <button onClick={login}>
        Login
      </button>

    </div>

  )

}

export default AdminLogin
