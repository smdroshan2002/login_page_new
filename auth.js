// Import Firebase for Node.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNt0Xx7U3K-6UhxeiXsRdo-yujl8RwYNY",
    authDomain: "api-integration-5702e.firebaseapp.com",
    projectId: "api-integration-5702e",
    storageBucket: "api-integration-5702e.appspot.com",
    messagingSenderId: "1008130634677",
    appId: "1:1008130634677:web:1c92e512b570dc36295ffc",
    measurementId: "G-JHVVYX596Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Print success message
console.log("Firebase initialized in Node.js!");
