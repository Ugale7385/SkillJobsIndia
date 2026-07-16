import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc,
  updateDoc
} from "firebase/firestore"


import app from "../firebase"


const db = getFirestore(app)


export const jobsCollection = collection(db,"jobs")



export const addJob = async(job)=>{

  const result = await addDoc(
    jobsCollection,
    job
  )

  return result

}




export const getJobs = async()=>{


  const snapshot = await getDocs(
    jobsCollection
  )


  const jobs = snapshot.docs.map((item)=>({

    id:item.id,
    ...item.data()

  }))


  return jobs

}




export const deleteJob = async(id)=>{


  await deleteDoc(
    doc(db,"jobs",id)
  )


}




export const updateJob = async(id,job)=>{


  await updateDoc(

    doc(db,"jobs",id),

    job

  )


}
