import { Link, useNavigate } from "react-router-dom"

import { auth } from "../firebase"

import { signOut } from "firebase/auth"

import { useEffect, useState } from "react"



function Navbar(){


const [user,setUser]=useState(null)

const navigate = useNavigate()



useEffect(()=>{


const checkUser = ()=>{

setUser(auth.currentUser)

}


checkUser()


},[])



const logout = async()=>{


await signOut(auth)

setUser(null)

navigate("/login")


}




return(


<nav className="navbar">


<div className="logo">


<h2>
🚀 SkillJobs India
</h2>


<p>
Jobs | Apprenticeship | Exams
</p>


</div>



<div className="menu">


<Link to="/">
Home
</Link>


<Link to="/government-jobs">
Government
</Link>


<Link to="/iti-jobs">
ITI Jobs
</Link>


<Link to="/diploma-jobs">
Diploma
</Link>


<Link to="/private-jobs">
Private
</Link>


<Link to="/results">
Results
</Link>


<Link to="/admit-card">
Admit Card
</Link>


<Link to="/mock-test">
Mock Test
</Link>



{

user ?

<>

<Link to="/profile">
👤 Profile
</Link>


<Link to="/saved-jobs">
⭐ Saved Jobs
</Link>


<button onClick={logout}>
Logout
</button>


</>


:

<>

<Link to="/login">
Login
</Link>


<Link to="/register">
Register
</Link>


</>

}



<Link to="/admin">
Admin
</Link>



</div>


</nav>


)


}


export default Navbar
