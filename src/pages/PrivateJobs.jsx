import jobs from "../data/jobs"
import { Link } from "react-router-dom"


function PrivateJobs(){

  const privateJobs = jobs.filter(
    (job)=>job.category === "Private"
  )


  return(

    <div className="app">

      <h1>Private Jobs</h1>


      {
        privateJobs.map((job,index)=>(

          <div className="job" key={index}>


            <h3>
              {job.title}
            </h3>


            <p>
              Company: {job.company}
            </p>


            <p>
              Qualification: {job.qualification}
            </p>


            <p>
              Job Type: {job.jobType}
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


export default PrivateJobs
