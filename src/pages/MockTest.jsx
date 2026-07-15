import { useState } from "react"
import questionsData from "../data/questions"

function MockTest() {

  const savedQuestions = JSON.parse(
    localStorage.getItem("questions")
  ) || []

  const questions = [
    ...questionsData,
    ...savedQuestions
  ]


  const [score, setScore] = useState(null)


  const submitTest = () => {

    let marks = 0


    questions.forEach((q,index)=>{

      const selected =
      document.querySelector(
        `input[name="q${index}"]:checked`
      )


      if(selected && selected.value === q.answer){
        marks++
      }

    })


    setScore(marks)

  }


  return (

    <div className="app">

      <h1>ITI Fitter Mock Test</h1>


      {
        questions.map((q,index)=>(

          <div className="job" key={index}>

            <h3>
              {index+1}. {q.question}
            </h3>


            {
              q.options.map((option)=>(

                <label key={option}>

                  <input
                  type="radio"
                  name={`q${index}`}
                  value={option}
                  />

                  {option}

                </label>

              ))
            }


          </div>

        ))
      }


      <button onClick={submitTest}>
        Submit Test
      </button>


      {
        score !== null &&
        <h2>
          Your Score: {score}/{questions.length}
        </h2>
      }


    </div>

  )
}


export default MockTest
