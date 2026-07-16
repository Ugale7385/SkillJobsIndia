import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "./firebase"


function AdminLogin({ setLogin }) {


  const [email,setEmail] = useState("")

  const [password,setPassword] = useState("")


  const login = async()=>{


    try{


      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )


      setLogin(true)


      alert("Login Successful")


    }

    catch(error){

      console.log(error)

      alert("Wrong Email or Password")

    }


  }



  return (

    <div className="admin">


      <h2>Admin Login</h2>


      <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />


      <input
      type="password"
      placeholder="Password"
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
