// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8UKLI04IUkA7PRDylWCeIdDJkDqEMq7U",
  authDomain: "ai-travel-planner-a8b1a.firebaseapp.com",
  projectId: "ai-travel-planner-a8b1a",
  storageBucket: "ai-travel-planner-a8b1a.firebasestorage.app",
  messagingSenderId: "444577999390",
  appId: "1:444577999390:web:2d20d09300ecf6d8509c0f",
  measurementId: "G-NX1NF0VR4K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

