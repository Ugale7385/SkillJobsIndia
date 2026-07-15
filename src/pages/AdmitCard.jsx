function AdmitCard() {

  const admitCards = [
    {
      exam: "DRDO Technician Exam",
      date: "Available Now",
      link: "#"
    },
    {
      exam: "Railway Apprentice Exam",
      date: "Coming Soon",
      link: "#"
    },
    {
      exam: "BEL Technician Exam",
      date: "Available Soon",
      link: "#"
    }
  ]


  return (
    <div className="app">

      <h1>Admit Card</h1>


      {
        admitCards.map((card,index)=>(

          <div className="job" key={index}>

            <h3>{card.exam}</h3>

            <p>Status: {card.date}</p>

            <a href={card.link}>
              <button>
                Download Admit Card
              </button>
            </a>

          </div>

        ))
      }


    </div>
  )
}

export default AdmitCard
