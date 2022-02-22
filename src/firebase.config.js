// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPtq9g2k-G9HtZbljOWMrFwBjxC5qZ1Io",
  authDomain: "lawonyaungchyi-72c36.firebaseapp.com",
  projectId: "lawonyaungchyi-72c36",
  storageBucket: "lawonyaungchyi-72c36.appspot.com",
  messagingSenderId: "403286550142",
  appId: "1:403286550142:web:0735ff9f91a6be3d925a2f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
