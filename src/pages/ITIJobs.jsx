import jobs from "../data/jobs"
import { Link } from "react-router-dom"


function ITIJobs(){

  const itiJobs = jobs.filter(
    (job)=>job.qualification?.includes("ITI")
  )


  return(

    <div className="app">

      <h1>ITI Jobs</h1>


      {
        itiJobs.map((job,index)=>(

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
              Category: {job.category}
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


export default ITIJobs
