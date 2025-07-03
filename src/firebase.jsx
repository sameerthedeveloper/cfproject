
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJLLh74xMFOLwl67agdd6imcl3ZIglBG8",
  authDomain: "cinemafocusinventory.firebaseapp.com",
  projectId: "cinemafocusinventory",
  storageBucket: "cinemafocusinventory.firebasestorage.app",
  messagingSenderId: "232322170393",
  appId: "1:232322170393:web:296907062efd7ec75a7488",
  measurementId: "G-23G7G2N3PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


export {db};