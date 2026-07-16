import { useState } from "react"

import {
  addJob,
  deleteJob,
  updateJob
} from "./services/firestore"

import { signOut } from "firebase/auth"
import { auth } from "./firebase"



function Admin({ jobList, setJobList }) {



const emptyJob = {

title:"",
company:"",
qualification:"",
category:"",
jobType:"",
salary:"",
location:"",
lastDate:"",
applyLink:"",
image:""

}



const [job,setJob] = useState(emptyJob)

const [editId,setEditId] = useState(null)




const saveJob = async()=>{


if(editId){


await updateJob(editId,job)


setJobList(

jobList.map(item=>

item.id===editId

?

{
id:item.id,
...job
}

:

item

)

)


alert("Job Updated")


}

else{


const newJob = {

...job,

isNew:true,

createdAt:
new Date().toLocaleDateString()

}



const result =
await addJob(newJob)



setJobList([

...jobList,

{
id:result.id,
...newJob
}

])


alert("Job Added")


}



setJob(emptyJob)

setEditId(null)


}





const editJob=(item)=>{


setJob(item)

setEditId(item.id)


}




const removeJob=async(id)=>{


await deleteJob(id)


setJobList(

jobList.filter(
item=>item.id!==id
)

)


alert("Deleted")


}





return(


<div className="admin">



<h2>
Admin Panel
</h2>



<button onClick={()=>signOut(auth)}>
Logout
</button>





<div className="dashboard">


<h3>
📊 Dashboard
</h3>



<p>
Total Jobs:
<b>{jobList.length}</b>
</p>


<p>
Government:
<b>
{
jobList.filter(
job=>job.category==="Government"
).length
}
</b>
</p>


<p>
Private:
<b>
{
jobList.filter(
job=>job.category==="Private"
).length
}
</b>
</p>


<p>
ITI:
<b>
{
jobList.filter(
job=>job.category==="ITI"
).length
}
</b>
</p>


</div>






<h3>
{
editId
?
"Edit Job"
:
"Add Job"
}
</h3>




<input
placeholder="Job Title"
value={job.title}
onChange={
e=>setJob({...job,title:e.target.value})
}
/>



<input
placeholder="Company"
value={job.company}
onChange={
e=>setJob({...job,company:e.target.value})
}
/>



<input
placeholder="Qualification"
value={job.qualification}
onChange={
e=>setJob({...job,qualification:e.target.value})
}
/>



<input
placeholder="Category"
value={job.category}
onChange={
e=>setJob({...job,category:e.target.value})
}
/>



<input
placeholder="Job Type"
value={job.jobType}
onChange={
e=>setJob({...job,jobType:e.target.value})
}
/>



<input
placeholder="Salary"
value={job.salary}
onChange={
e=>setJob({...job,salary:e.target.value})
}
/>



<input
placeholder="Location"
value={job.location}
onChange={
e=>setJob({...job,location:e.target.value})
}
/>



<input
placeholder="Last Date"
value={job.lastDate}
onChange={
e=>setJob({...job,lastDate:e.target.value})
}
/>



<input
placeholder="Apply Link"
value={job.applyLink}
onChange={
e=>setJob({...job,applyLink:e.target.value})
}
/>



<input
placeholder="Image URL"
value={job.image}
onChange={
e=>setJob({...job,image:e.target.value})
}
/>



<button onClick={saveJob}>

{
editId
?
"Update Job"
:
"Add Job"
}

</button>





<h2>
All Jobs
</h2>



{

jobList.map(item=>(


<div className="job-card" key={item.id}>


{
item.isNew &&
<span className="new-badge">
NEW
</span>
}



<h3>
{item.title}
</h3>


<p>
{item.company}
</p>


<p>
📅 {item.createdAt || "Old Job"}
</p>



<button onClick={()=>editJob(item)}>
Edit
</button>



<button onClick={()=>removeJob(item.id)}>
Delete
</button>



</div>


))


}



</div>


)


}



export default Admin
