// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhMsONg0sb2Q1xWG0s0mLnz6YFlFXg_qY",
  authDomain: "financial-website-b12a2.firebaseapp.com",
  projectId: "financial-website-b12a2",
  storageBucket: "financial-website-b12a2.appspot.com",
  messagingSenderId: "1063806684270",
  appId: "1:1063806684270:web:ed2161767b477e9827aa7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;