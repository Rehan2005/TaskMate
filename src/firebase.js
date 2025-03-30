// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtGynP2FSHrmrF0b2OS6T1qzeRDFJOUPM",
  authDomain: "task-manager-20917.firebaseapp.com",
  projectId: "task-manager-20917",
  storageBucket: "task-manager-20917.firebasestorage.app",
  messagingSenderId: "960603043954",
  appId: "1:960603043954:web:ab4627b709960a1f50aaeb",
  measurementId: "G-W5SJQR6J9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);