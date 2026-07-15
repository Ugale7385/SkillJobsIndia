import { useState } from "react"

function Admin({ jobList, setJobList }) {

  const [job, setJob] = useState({
    title:"",
    company:"",
    qualification:"",
    category:"",
    jobType:"",
    salary:"",
    location:"",
    lastDate:"",
    applyLink:""
  })


  const addJob = () => {

    const newJobs = [
      ...jobList,
      job
    ]

    setJobList(newJobs)

    localStorage.setItem(
      "jobs",
      JSON.stringify(newJobs)
    )

    alert("Job Added")

  }


  return (

    <div className="admin">

      <h2>Admin Panel</h2>

      <h3>Add Job</h3>


      <input placeholder="Job Title"
      onChange={(e)=>setJob({...job,title:e.target.value})}
      />

      <input placeholder="Company"
      onChange={(e)=>setJob({...job,company:e.target.value})}
      />

      <input placeholder="Qualification"
      onChange={(e)=>setJob({...job,qualification:e.target.value})}
      />

      <input placeholder="Category"
      onChange={(e)=>setJob({...job,category:e.target.value})}
      />

      <input placeholder="Salary"
      onChange={(e)=>setJob({...job,salary:e.target.value})}
      />

      <input placeholder="Location"
      onChange={(e)=>setJob({...job,location:e.target.value})}
      />


      <button onClick={addJob}>
        Add Job
      </button>



      <h2>All Jobs</h2>


      {
        jobList.map((item,index)=>(

          <div className="job" key={index}>

            <h3>{item.title}</h3>

            <p>{item.company}</p>


            <button
            onClick={()=>{

              const newJobs =
              jobList.filter(
                (_,i)=>i!==index
              )

              setJobList(newJobs)

              localStorage.setItem(
                "jobs",
                JSON.stringify(newJobs)
              )

            }}
            >
              Delete
            </button>


          </div>

        ))
      }


    </div>

  )

}


export default Admin
