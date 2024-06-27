import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  console.log("Firebase Config:", firebaseConfig);
const app = initializeApp(firebaseConfig);
console.log("Firebase Initialized"); // Log initialization success

const firestore = getFirestore(app);
const storage = getStorage(app);
console.log("Firestore Object:", firestore); 
export { firestore, storage};
