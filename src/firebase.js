// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuOha43wZKR6G4DSNO7GM0ly46S-fJkLY",
  authDomain: "withmepeaceweb.firebaseapp.com",
  projectId: "withmepeaceweb",
  storageBucket: "withmepeaceweb.appspot.com",
  messagingSenderId: "1015950295732",
  appId: "1:1015950295732:web:d4c8fda89116d7c076cde1",
  measurementId: "G-GC268L8DBT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
