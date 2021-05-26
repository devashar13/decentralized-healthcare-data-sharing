import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBbwZOMVWXqMdAZahHcnR4YP8aGsxUU7fs",
    authDomain: "dapp-a4830.firebaseapp.com",
    projectId: "dapp-a4830",
    storageBucket: "dapp-a4830.appspot.com",
    messagingSenderId: "325907775479",
    appId: "1:325907775479:web:7c7ce0f2666c41278b78f2"
  };
  // Initialize Firebase


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  
  
  export const auth = firebase.auth() 
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()