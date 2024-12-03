import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your Firebase project configuration details
const firebaseConfig = {

    apiKey: "AIzaSyCCeewACB9W_K8Y4sCevsQqqLpDEIWk7lw",
  
    authDomain: "start-unselling-now.firebaseapp.com",
  
    projectId: "start-unselling-now",
  
    storageBucket: "start-unselling-now.firebasestorage.app",
  
    messagingSenderId: "67196280394",
  
    appId: "1:67196280394:web:144724c57c6c3a9bec10b3",
  
    measurementId: "G-0CG57H6DVG"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };