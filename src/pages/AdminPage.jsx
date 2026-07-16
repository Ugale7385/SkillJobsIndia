import { useState, useEffect } from "react"

import AdminLogin from "../AdminLogin"
import Admin from "../Admin"

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"


function AdminPage({ jobList, setJobList }) {


  const [user,setUser] = useState(null)


  useEffect(()=>{


    const unsubscribe =
    onAuthStateChanged(
      auth,
      (currentUser)=>{

        setUser(currentUser)

      }
    )


    return ()=>unsubscribe()


  },[])



  return (

    <div>

      {
        user ? (

          <Admin
          jobList={jobList}
          setJobList={setJobList}
          />

        ) : (

          <AdminLogin />

        )
      }


    </div>

  )

}


export default AdminPage
