import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import { auth } from "../firebase"

import { signOut } from "firebase/auth"



function Profile(){


const [user,setUser] = useState(null)

const navigate = useNavigate()



useEffect(()=>{

setUser(auth.currentUser)

},[])





const logout = async()=>{


await signOut(auth)


alert("Logout Successfully")


navigate("/login")


}




if(!user){


return(

<div className="app">


<h2>
Please Login First
</h2>


<button onClick={()=>navigate("/login")}>

Login

</button>


</div>

)

}





return(

<div className="app">


<h1>
👤 My Profile
</h1>



<div className="job">


<h3>
User Details
</h3>



<p>
📧 Email:
{user.email}
</p>



<p>
✅ Account Active
</p>



<button onClick={()=>navigate("/saved-jobs")}>

⭐ My Saved Jobs

</button>



<br/><br/>



<button onClick={logout}>

Logout

</button>



</div>


</div>

)


}


export default Profile
