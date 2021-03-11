import firebase from "firebase"
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEmalYowOJ5qFFJQ7SrYZyf_j0TLhJAIo",
  authDomain: "waze-clone.firebaseapp.com",
  projectId: "waze-clone",
  storageBucket: "waze-clone.appspot.com",
  messagingSenderId: "393652483933",
  appId: "1:393652483933:web:070217fc304827819edab4",
  measurementId: "G-9CJBV73H5J"
};

let app; 
if ( !firebase.apps.length){
firebase.initializeApp(firebaseConfig); 
} 

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};