import firebase from "firebase";
// Authondication
import "firebase/auth";
// fire store database
import "firebase/firestore";
// realtime database
import "firebase/database";
// storage
import "firebase/storage";
// function
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyC_KwAZ3WHDQ-ttmMh_h8TobECHKNz2T0A",
  authDomain: "spotify-clone-2a39e.firebaseapp.com",
  projectId: "spotify-clone-2a39e",
  storageBucket: "spotify-clone-2a39e.appspot.com",
  messagingSenderId: "871981827669",
  appId: "1:871981827669:web:2a4c9d8e1dbe444313b6dc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
// Hosting
