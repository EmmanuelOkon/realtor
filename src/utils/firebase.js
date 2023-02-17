// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuOIjWL1Oukl-TJecDpSpDMYDH2DiUce4",
  authDomain: "realtor-6e240.firebaseapp.com",
  projectId: "realtor-6e240",
  storageBucket: "realtor-6e240.appspot.com",
  messagingSenderId: "109863969787",
  appId: "1:109863969787:web:8d17d4a09f1d370d30e15e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()