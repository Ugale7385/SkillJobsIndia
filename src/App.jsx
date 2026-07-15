import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import AdminPage from "./pages/AdminPage"

import jobs from "./data/jobs"

import Home from "./pages/Home"
import GovernmentJobs from "./pages/GovernmentJobs"
import PrivateJobs from "./pages/PrivateJobs"
import ITIJobs from "./pages/ITIJobs"
import DiplomaJobs from "./pages/DiplomaJobs"
import Results from "./pages/Results"
import AdmitCard from "./pages/AdmitCard"
import MockTest from "./pages/MockTest"
import JobDetails from "./pages/JobDetails"


function App() {

  const [jobList, setJobList] = useState(() => {

    const savedJobs = localStorage.getItem("jobs")

    return savedJobs ? JSON.parse(savedJobs) : jobs

  })


  useEffect(() => {

    localStorage.setItem(
      "jobs",
      JSON.stringify(jobList)
    )

  }, [jobList])


  return (

    <div>

      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={<Home jobs={jobList}/>} 
        />

        <Route 
          path="/government-jobs" 
          element={<GovernmentJobs/>} 
        />

        <Route 
          path="/private-jobs" 
          element={<PrivateJobs/>} 
        />

        <Route 
          path="/iti-jobs" 
          element={<ITIJobs/>} 
        />

        <Route 
          path="/diploma-jobs" 
          element={<DiplomaJobs/>} 
        />

        <Route 
          path="/results" 
          element={<Results/>} 
        />

        <Route 
          path="/admit-card" 
          element={<AdmitCard/>} 
        />

        <Route 
          path="/mock-test" 
          element={<MockTest/>} 
        />

        <Route 
          path="/job/:id" 
          element={<JobDetails/>} 
        />

        <Route 
          path="/admin" 
          element={
            <AdminPage 
              jobList={jobList}
              setJobList={setJobList}
            />
          } 
        />

      </Routes>

    </div>

  )
}

export default App
