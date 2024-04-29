// create and initialize your own firebase here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9rL8MBzuDSkAm8HR2tLZuAvW1IknDMyI",
  authDomain: "photofolio-37a1c.firebaseapp.com",
  projectId: "photofolio-37a1c",
  storageBucket: "photofolio-37a1c.appspot.com",
  messagingSenderId: "664561815512",
  appId: "1:664561815512:web:18745757377a7a21d06cad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);