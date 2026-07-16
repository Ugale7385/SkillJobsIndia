import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import app from "../firebase";

const db = getFirestore(app);

export async function addJob(job) {
  await addDoc(collection(db, "jobs"), job);
}

export async function getJobs() {
  const snapshot = await getDocs(collection(db, "jobs"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function deleteJob(id) {
  await deleteDoc(doc(db, "jobs", id));
}
