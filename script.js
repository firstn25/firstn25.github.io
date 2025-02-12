// ✅ Load Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// ✅ Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBmMWGITYVDOeeOG-ftmqj7EbqBQ16_oxc",
  authDomain: "firstn-f2ad1.firebaseapp.com",
  databaseURL: "https://firstn-f2ad1-default-rtdb.firebaseio.com",
  projectId: "firstn-f2ad1",
  storageBucket: "firstn-f2ad1.firebasestorage.app",
  messagingSenderId: "1074944578649",
  appId: "1:1074944578649:web:a893634322ee091b850d48",
  measurementId: "G-HNE0H866M3"
};


// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log("✅ Firebase initialized!");

// ✅ Handle form submission
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("subscribe-form").addEventListener("submit", function (event) {
        event.preventDefault(); // ❌ Prevents page reload

        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message-text").value.trim();

        if (email && message) {
            push(ref(db, "messages"), { email: email, message: message })
                .then(() => {
                    console.log("✅ Data stored successfully!");
                    document.getElementById("message").innerText = "Message sent successfully!";
                    document.getElementById("subscribe-form").reset();
                })
                .catch(error => {
                    console.error("❌ Firebase Error:", error);
                    document.getElementById("message").innerText = "Error! Try again.";
                });
        } else {
            console.warn("⚠️ Missing fields!");
            document.getElementById("message").innerText = "Please enter all fields.";
        }
    });
});
