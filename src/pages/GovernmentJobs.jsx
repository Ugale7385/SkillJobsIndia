import jobs from "../data/jobs"
import { Link } from "react-router-dom"

function GovernmentJobs(){

  const governmentJobs = jobs.filter(
    (job)=>job.category === "Government"
  )


  return(

    <div className="app">

      <h1>Government Jobs</h1>


      {
        governmentJobs.map((job,index)=>(

          <div className="job" key={index}>

            <h3>{job.title}</h3>

            <p>
              Company: {job.company}
            </p>

            <p>
              Qualification: {job.qualification}
            </p>

            <p>
              Salary: {job.salary}
            </p>

            <p>
              Location: {job.location}
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

export default GovernmentJobs
