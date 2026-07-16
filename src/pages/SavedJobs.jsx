import { useEffect,useState } from "react"

import { auth } from "../firebase"

import { getSavedJobsFirebase } from "../services/savedJobs"



function SavedJobs(){


const [jobs,setJobs]=useState([])



useEffect(()=>{


const load=async()=>{


if(!auth.currentUser){

return

}



const data =
await getSavedJobsFirebase(
auth.currentUser.uid
)



setJobs(data)


}



load()



},[])




return(


<div className="app">


<h2>
⭐ Saved Jobs
</h2>



{

jobs.length===0 ?

<p>
No Saved Jobs
</p>



:


jobs.map((item)=>(


<div className="job-card" key={item.id}>


<h3>
{item.job.title}
</h3>


<p>
🏢 {item.job.company}
</p>


<p>
💰 {item.job.salary}
</p>


<p>
📍 {item.job.location}
</p>



</div>


))


}



</div>


)


}


export default SavedJobs
