import { auth, provider } from './firebase.js';
import { signInWithPopup } from "firebase/auth";

const googleLoginBtn = document.getElementById("googleLoginBtn");

googleLoginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      // Redirect to your dashboard or homepage
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    });
});
