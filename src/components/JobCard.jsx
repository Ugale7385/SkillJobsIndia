import { Link } from "react-router-dom"

import { auth } from "../firebase"

import { saveJobFirebase } from "../services/savedJobs"



function JobCard({job,index}){


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



return(


<div className="job-card">



{
job.isNew &&
<span className="new-badge">
NEW
</span>
}



{
job.image &&

<img
src={job.image}
width="100"
alt="logo"
/>

}



<h2>
{job.title}
</h2>



<p>
🏢 {job.company}
</p>



<p>
🎓 {job.qualification}
</p>



<p>
📍 {job.location}
</p>



<p>
💰 {job.salary}
</p>



<p>
📅 Last Date: {job.lastDate || "Not Available"}
</p>




<button onClick={saveJob}>
⭐ Save Job
</button>



<br/><br/>



<Link to={`/job/${job.id || index}`}>

<button>
View Details
</button>

</Link>



</div>


)


}


export default JobCard
