// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

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

// Google Sign-In Function
document.querySelector(".google_btn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("User signed in:", user);
            window.location.href = "email-verification.html";  // ✅ Redirect to verification page
        })
        .catch((error) => {
            console.error("Google Sign-In Error:", error);
        });
});

console.log("Firebase initialized successfully!");
