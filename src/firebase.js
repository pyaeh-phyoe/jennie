// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAU8rqYOIkHsSqJbiAJ2lmz8GIjIEiFes",
  authDomain: "jennie-4ba3a.firebaseapp.com",
  projectId: "jennie-4ba3a",
  storageBucket: "jennie-4ba3a.appspot.com",
  messagingSenderId: "553079894985",
  appId: "1:553079894985:web:9b7a14ec6445f14ceeae18",
  measurementId: "G-S2L0WE6474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };