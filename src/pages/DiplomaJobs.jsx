import jobs from "../data/jobs"
import { Link } from "react-router-dom"


function DiplomaJobs(){

  const diplomaJobs = jobs.filter(
    (job)=>job.qualification?.includes("Diploma")
  )


  return(

    <div className="app">

      <h1>Diploma Jobs</h1>


      {
        diplomaJobs.map((job,index)=>(

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


export default DiplomaJobs
