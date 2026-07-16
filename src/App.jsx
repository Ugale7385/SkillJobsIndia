import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import BottomNav from "./components/BottomNav"

import Home from "./pages/Home"
import GovernmentJobs from "./pages/GovernmentJobs"
import PrivateJobs from "./pages/PrivateJobs"
import ITIJobs from "./pages/ITIJobs"
import DiplomaJobs from "./pages/DiplomaJobs"
import Results from "./pages/Results"
import AdmitCard from "./pages/AdmitCard"
import MockTest from "./pages/MockTest"
import JobDetails from "./pages/JobDetails"

import AdminPage from "./pages/AdminPage"

import UserLogin from "./pages/UserLogin"
import Register from "./pages/Register"
import SavedJobs from "./pages/SavedJobs"
import Profile from "./pages/Profile"
import JobAlerts from "./pages/JobAlerts"

import { getJobs } from "./services/firestore"



function App(){


const [jobList,setJobList] = useState([])



useEffect(()=>{


const loadJobs = async()=>{

const data = await getJobs()

setJobList(data)

}


loadJobs()


},[])




return(

<div>


<Navbar />



<Routes>


<Route path="/" element={<Home jobs={jobList}/>}/>

<Route path="/government-jobs" element={<GovernmentJobs/>}/>

<Route path="/private-jobs" element={<PrivateJobs/>}/>

<Route path="/iti-jobs" element={<ITIJobs/>}/>

<Route path="/diploma-jobs" element={<DiplomaJobs/>}/>

<Route path="/results" element={<Results/>}/>

<Route path="/admit-card" element={<AdmitCard/>}/>

<Route path="/mock-test" element={<MockTest/>}/>


<Route path="/job/:id" element={<JobDetails/>}/>


<Route
path="/admin"
element={
<AdminPage
jobList={jobList}
setJobList={setJobList}
/>
}
/>


<Route path="/login" element={<UserLogin/>}/>


<Route path="/register" element={<Register/>}/>


<Route path="/saved-jobs" element={<SavedJobs/>}/>


<Route path="/profile" element={<Profile/>}/>


<Route path="/job-alerts" element={<JobAlerts/>}/>



</Routes>



<BottomNav />


</div>

)


}


export default App
