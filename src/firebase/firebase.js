import firebase from "firebase/app";
import firestore from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAB0bpvWieeGXtSLFqNHiHpMvF8BdZCzjY",
    authDomain: "crud-e5792.firebaseapp.com",
    projectId: "crud-e5792",
    storageBucket: "crud-e5792.appspot.com",
    messagingSenderId: "360083838045",
    appId: "1:360083838045:web:5d431b9ebf174e69a9e9b4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);
  const db = firebase.firestore();

export { db };