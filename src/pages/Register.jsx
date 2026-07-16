import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "../firebase"


function Register(){


const [email,setEmail]=useState("")
const [password,setPassword]=useState("")



const register=async()=>{


try{


await createUserWithEmailAndPassword(
auth,
email,
password
)


alert("Account Created")


}


catch(error){

alert(error.message)

}


}



return(

<div className="app">


<h2>User Register</h2>


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



<button onClick={register}>
Register
</button>


</div>

)

}


export default Register
