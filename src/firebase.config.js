// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA57rZNkQRsKB1M6JNj1oDviSUrCSf-tG4",
  authDomain: "educate-next.firebaseapp.com",
  projectId: "educate-next",
  storageBucket: "educate-next.appspot.com",
  messagingSenderId: "679117937656",
  appId: "1:679117937656:web:78540ba15fe5b5c902d40d",
  measurementId: "G-WE47JQC9TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);