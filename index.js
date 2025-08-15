// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAM_tlHKwg6cZFnCyCCr2IGGnZRJ1tt4l4",
  authDomain: "cuties-portal.firebaseapp.com",
  projectId: "cuties-portal",
  storageBucket: "cuties-portal.firebasestorage.app",
  messagingSenderId: "475783224631",
  appId: "1:475783224631:web:6f1b42fc69b1b2133e8eb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-in
document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(result => {
      console.log("User signed in:", result.user);
    })
    .catch(error => {
      console.error("Error signing in:", error);
    });
});
