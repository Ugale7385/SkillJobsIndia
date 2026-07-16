import { useState } from "react"

import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "../firebase"



function UserLogin(){


const [email,setEmail]=useState("")

const [password,setPassword]=useState("")



const login=async()=>{


try{


await signInWithEmailAndPassword(
auth,
email,
password
)


alert("Login Successful")


}


catch(error){

alert("Wrong Email or Password")

}


}



return(

<div className="app">


<h2>User Login</h2>



<input
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


export default UserLogin
