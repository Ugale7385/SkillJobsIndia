import { useState } from "react"


function JobAlerts(){


const [category,setCategory] = useState("")


const saveAlert = ()=>{


localStorage.setItem(
"jobAlert",
category
)


alert("Job Alert Saved")


}




return(

<div className="app">


<h1>
🔔 Job Alerts
</h1>



<p>
Select your job category
</p>



<select

value={category}

onChange={
e=>setCategory(e.target.value)
}

>


<option value="">
Select Category
</option>


<option>
Government
</option>


<option>
Private
</option>


<option>
ITI
</option>


<option>
Diploma
</option>


<option>
Apprenticeship
</option>



</select>



<br/><br/>



<button onClick={saveAlert}>

Save Alert

</button>



</div>

)


}


export default JobAlerts
