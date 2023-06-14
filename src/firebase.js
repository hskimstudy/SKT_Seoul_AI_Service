import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import Options from './components/options/option';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXzzgkLiXKi4l0oWwz8J6A-Ssp8dlEKXw",
  authDomain: "mbti-d05d0.firebaseapp.com",
  databaseURL: "https://mbti-d05d0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mbti-d05d0",
  storageBucket: "mbti-d05d0.appspot.com",
  messagingSenderId: "304576884938",
  appId: "1:304576884938:web:828623322f0cf3dc210433",
  measurementId: "G-R3Z3X8PTCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);