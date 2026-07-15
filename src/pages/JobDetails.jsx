import { useParams, Link } from "react-router-dom"

function JobDetails(){

  const { id } = useParams()


  const savedJobs = JSON.parse(
    localStorage.getItem("jobs")
  ) || []


  const job = savedJobs[id]


  if(!job){

    return (

      <div className="app">

        <h2>
          Job Not Found
        </h2>

        <Link to="/">
          Go Home
        </Link>

      </div>

    )

  }


  const shareJob = () => {

    if(navigator.share){

      navigator.share({

        title: job.title,

        text:
        `${job.title} - ${job.company}`,

        url:
        window.location.href

      })

    }

    else{

      alert("Share option not supported")

    }

  }



  return (

    <div className="app">

      <h1>
        {job.title}
      </h1>


      <div className="job">


        {
          job.image &&
          <img
            src={job.image}
            width="120"
            alt="Company Logo"
          />
        }


        <p>
          <b>Company:</b> {job.company}
        </p>


        <p>
          <b>Qualification:</b> {job.qualification}
        </p>


        <p>
          <b>Category:</b> {job.category}
        </p>


        <p>
          <b>Job Type:</b> {job.jobType}
        </p>


        <p>
          <b>Salary:</b> {job.salary}
        </p>


        <p>
          <b>Location:</b> {job.location}
        </p>


        <p>
          <b>Last Date:</b> {job.lastDate}
        </p>


        <a 
          href={job.applyLink}
          target="_blank"
          rel="noreferrer"
        >

          <button>
            Apply Now
          </button>

        </a>


        <br/><br/>


        <button onClick={shareJob}>
          Share Job
        </button>


      </div>


    </div>

  )

}


export default JobDetails
