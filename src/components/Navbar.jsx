
import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>🚀 SkillJobs India</h2>
        <p>Jobs | Apprenticeship | Exams</p>
      </div>


      <div className="menu">

        <Link to="/">Home</Link>

        <Link to="/government-jobs">
          Government
        </Link>

        <Link to="/iti-jobs">
          ITI Jobs
        </Link>

        <Link to="/diploma-jobs">
          Diploma
        </Link>

        <Link to="/private-jobs">
          Private
        </Link>

        <Link to="/results">
          Results
        </Link>

        <Link to="/admit-card">
          Admit Card
        </Link>

        <Link to="/mock-test">
          Mock Test
        </Link>

        <Link to="/admin">
          Admin
        </Link>

      </div>

    </nav>
  )
}

export default Navbar
