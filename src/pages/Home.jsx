import { useState } from "react"

import jobsData from "../data/jobs"

import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar"
import FeaturedJobs from "../components/FeaturedJobs"
import JobCard from "../components/JobCard"
import Footer from "../components/Footer"



function Home({ jobs }) {


const jobList = jobs || jobsData


const [search,setSearch] = useState("")

const [category,setCategory] = useState("All")




const filteredJobs = jobList

.filter((job)=>{


const text = (

job.title +
" " +
job.company +
" " +
job.location +
" " +
job.qualification

).toLowerCase()



const matchSearch =
text.includes(
search.toLowerCase()
)



const matchCategory =

category==="All" ||

job.category===category



return matchSearch && matchCategory



})

.sort((a,b)=>{


if(a.isNew && !b.isNew)
return -1


if(!a.isNew && b.isNew)
return 1


return 0


})





return(


<div className="app">


<h1>
🚀 SkillJobs India
</h1>



<p>
Government, Private, ITI, Diploma &
Apprenticeship Jobs
</p>



<FeaturedJobs />



<SearchBar

search={search}

setSearch={setSearch}

/>



<FilterBar

category={category}

setCategory={setCategory}

/>



<h2>
🔥 Latest Jobs
</h2>




{

filteredJobs.length===0

?

<p>
No Jobs Found
</p>


:


filteredJobs.map((job,index)=>(


<JobCard

key={job.id || index}

job={job}

index={index}

/>


))


}




<Footer />


</div>


)


}


export default Home
