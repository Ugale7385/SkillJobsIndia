import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBfytUrxNTgV3_4wloasJR7kQeYXnvu3pQ",
  authDomain: "skilljobsindia-51d8f.firebaseapp.com",
  projectId: "skilljobsindia-51d8f",
  storageBucket: "skilljobsindia-51d8f.firebasestorage.app",
  messagingSenderId: "580418603352",
  appId: "1:580418603352:web:51bfc822547de9f343bd2d"
}


const app = initializeApp(firebaseConfig)


export const auth = getAuth(app)


export default app
