import {initializeApp} from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";


  const firebaseConfig = {
  apiKey: "AIzaSyBZrGG2L3l7GkoO_r2uQcEwfqeX29JNfMY",
  authDomain: "boggle-firebase.firebaseapp.com",
  projectId: "boggle-firebase",
  storageBucket: "boggle-firebase.appspot.com",
  messagingSenderId: "454646657606",
  appId: "1:454646657606:web:086682a3c647c2c1c21047",
  measurementId: "G-SMDC3KC75B"

  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

