// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdpVPyAFCaxg0dloVK0myWmLUAko2RSlc",
  authDomain: "secquraise-technologies-task.firebaseapp.com",
  databaseURL: "https://secquraise-technologies-task-default-rtdb.firebaseio.com",
  projectId: "secquraise-technologies-task",
  storageBucket: "secquraise-technologies-task.appspot.com",
  messagingSenderId: "450641975784",
  appId: "1:450641975784:web:b800c9dcd62c3440beac5d",
  measurementId: "G-SFYNH619GJ"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default app;

