import { Link } from "react-router-dom"

function JobCard({ job, index }) {
  return (
    <div className="job-card">

      <div className="job-header">
        <h2>{job.title}</h2>
        <span className="category">{job.category}</span>
      </div>

      <p><strong>🏢 Company:</strong> {job.company}</p>

      <p><strong>🎓 Qualification:</strong> {job.qualification}</p>

      <p><strong>📍 Location:</strong> {job.location}</p>

      <p><strong>💰 Salary:</strong> {job.salary}</p>

      <p><strong>📅 Last Date:</strong> {job.lastDate || "Not Available"}</p>

      <div className="job-buttons">

        <Link to={`/job/${index}`}>
          <button>View Details</button>
        </Link>

        {
          job.applyLink &&
          <a
            href={job.applyLink}
            target="_blank"
            rel="noreferrer"
          >
            <button>Apply Now</button>
          </a>
        }

      </div>

    </div>
  )
}

export default JobCard
