import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where
} from "firebase/firestore"

import { getFirestore } from "firebase/firestore"

import app from "../firebase"


const db = getFirestore(app)



export const saveJobFirebase = async(userId, job)=>{


await addDoc(
collection(db,"savedJobs"),
{
userId,
job
}
)


}




export const getSavedJobsFirebase = async(userId)=>{


const q =
query(
collection(db,"savedJobs"),
where("userId","==",userId)
)


const snapshot =
await getDocs(q)



return snapshot.docs.map(item=>({

id:item.id,
...item.data()

}))



}




export const removeSavedJobFirebase = async(id)=>{


await deleteDoc(
doc(db,"savedJobs",id)
)


}
