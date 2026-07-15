import { Link } from "react-router-dom"
import { useState } from "react"
import jobsData from "../data/jobs"

function Home({ jobs }) {

  const jobList = jobs || jobsData


  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")


  const filteredJobs = jobList.filter((job)=>{

    const matchSearch =
    job.title.toLowerCase()
    .includes(search.toLowerCase())


    const matchCategory =
    category === "All" ||
    job.category === category


    return matchSearch && matchCategory

  })


  return (

    <div className="app">


      <h1>SkillJobs India</h1>


      <p>
        Government, Private & Apprenticeship Jobs
      </p>


      <input
      placeholder="Search Job..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />


      <select
      onChange={(e)=>setCategory(e.target.value)}
      >

        <option value="All">
          All Jobs
        </option>

        <option value="Government">
          Government
        </option>

        <option value="Private">
          Private
        </option>

        <option value="Apprentice">
          Apprentice
        </option>

      </select>



      <h2>Latest Jobs</h2>


      {
        filteredJobs.map((job,index)=>(


          <div className="job" key={index}>


            <h3>{job.title}</h3>


            <p>
              Company: {job.company}
            </p>


            <p>
              Qualification: {job.qualification}
            </p>


            <p>
              Category: {job.category}
            </p>


            <p>
              Salary: {job.salary}
            </p>


            <Link to={`/job/${index}`}>
              <button>
                View Details
              </button>
            </Link>


          </div>


        ))
      }


    </div>

  )

}


export default Home
