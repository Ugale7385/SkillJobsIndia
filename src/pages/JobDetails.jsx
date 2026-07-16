import { useParams, Link } from "react-router-dom"
import { useEffect,useState } from "react"

import { getJobs } from "../services/firestore"

import { auth } from "../firebase"

import { saveJobFirebase } from "../services/savedJobs"



function JobDetails(){


const {id}=useParams()


const [job,setJob]=useState(null)



useEffect(()=>{


const load=async()=>{


const data = await getJobs()



const found = data.find(
item=>item.id===id
)



setJob(found)



}



load()



},[id])





const saveJob = async()=>{


if(!auth.currentUser){

alert("Please Login First")

return

}



await saveJobFirebase(
auth.currentUser.uid,
job
)


alert("Job Saved")


}




const shareJob=()=>{


if(navigator.share){


navigator.share({

title:job.title,

text:
`${job.title} - ${job.company}`,

url:
window.location.href

})


}

else{


alert("Share not supported")


}



}




if(!job)

return <h2>Loading...</h2>




return(


<div className="app">


<h1>
{job.title}
</h1>




<div className="job">



{

job.image &&

<img

src={job.image}

width="150"

alt="logo"

/>

}



<h3>
🏢 {job.company}
</h3>



<p>
🎓 Qualification:
{job.qualification}
</p>



<p>
📂 Category:
{job.category}
</p>



<p>
⚙️ Job Type:
{job.jobType || "Not Available"}
</p>



<p>
💰 Salary:
{job.salary}
</p>



<p>
📍 Location:
{job.location}
</p>



<p>
📅 Last Date:
{job.lastDate || "Not Available"}
</p>




<button onClick={saveJob}>
⭐ Save Job
</button>



<br/><br/>




<a

href={job.applyLink}

target="_blank"

rel="noreferrer"

>

<button>
🚀 Apply Now
</button>


</a>




<br/><br/>




<button onClick={shareJob}>
📤 Share Job
</button>




<br/><br/>




<Link to="/">
⬅️ Back Home
</Link>



</div>



</div>


)



}



export default JobDetails
