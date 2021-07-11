import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF2vOGyKXrRRlUtVrlmE1PXSTX3mfFPLw",
  authDomain: "my-portfolio-4c9d7.firebaseapp.com",
  projectId: "my-portfolio-4c9d7",
  storageBucket: "my-portfolio-4c9d7.appspot.com",
  messagingSenderId: "719536597746",
  appId: "1:719536597746:web:c7f67068b3684393a6be6b",
  measurementId: "G-DFGZ3EGK18",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const dbFirebase = firebase.firestore();

export default firebase;
