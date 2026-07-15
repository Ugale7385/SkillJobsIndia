import { useState } from "react"

function Results() {

  const [results, setResults] = useState([
    {
      name: "Rahul",
      exam: "ITI Fitter Mock Test",
      marks: "8/10"
    },
    {
      name: "Amit",
      exam: "Technical Assistant Test",
      marks: "75/100"
    }
  ])


  return (
    <div className="app">

      <h1>Exam Results</h1>

      {
        results.map((result,index)=>(

          <div className="job" key={index}>

            <h3>{result.name}</h3>

            <p>Exam: {result.exam}</p>

            <p>Marks: {result.marks}</p>

          </div>

        ))
      }


    </div>
  )
}

export default Results
