// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmWQqFVrXhvt7zWbDGxlIUDSoB6rSRd6g",
  authDomain: "ecommerce-shop-7f003.firebaseapp.com",
  projectId: "ecommerce-shop-7f003",
  storageBucket: "ecommerce-shop-7f003.appspot.com",
  messagingSenderId: "718315809738",
  appId: "1:718315809738:web:61fd09c30c4f9910ee7d33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {auth,app};