// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVeGTx1Mcev3Mq9z-ToAL0cVOOtOOEa9I",
  authDomain: "dragon-news-site-d89a9.firebaseapp.com",
  projectId: "dragon-news-site-d89a9",
  storageBucket: "dragon-news-site-d89a9.appspot.com",
  messagingSenderId: "376655581936",
  appId: "1:376655581936:web:0ca62b6ce3f1ea4ca3e835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app