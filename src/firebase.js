import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore functions

const firebaseConfig = {
  apiKey: "AIzaSyCCeewACB9W_K8Y4sCevsQqqLpDEIWk7lw",
  authDomain: "start-unselling-now.firebaseapp.com",
  projectId: "start-unselling-now",
  storageBucket: "start-unselling-now.appspot.com",
  messagingSenderId: "67196280394",
  appId: "1:67196280394:web:144724c57c6c3a9bec10b3",
  measurementId: "G-0CG57H6DVG",
  databaseURL: "https://start-unselling-now-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Firestore reference
const auth = getAuth(app);     // Authentication reference

export { db, auth };  // Export Firestore and Auth for usage
