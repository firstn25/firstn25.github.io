// Firebase Setup

const firebaseConfig = {
  apiKey: "AIzaSyBmMWGITYVDOeeOG-ftmqj7EbqBQ16_oxc",
  authDomain: "firstn-f2ad1.firebaseapp.com",
  databaseURL: "https://firstn-f2ad1-default-rtdb.firebaseio.com/",
  projectId: "firstn-f2ad1",
  storageBucket: "firstn-f2ad1.firebasestorage.app",
  messagingSenderId: "1074944578649",
  appId: "1:1074944578649:web:a893634322ee091b850d48",
  measurementId: "G-HNE0H866M3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("messages");

// Listen for form submission
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message-text").value.trim();

    if (email && message) {
        db.push({ email: email, message: message }) // Cleaner way to push data
            .then(() => {
                document.getElementById("message").innerText = "Message sent successfully!";
                document.getElementById("subscribe-form").reset();
            })
            .catch(error => {
                console.error("Firebase Error:", error); // Log error for debugging
                document.getElementById("message").innerText = "Error! Try again.";
            });
    } else {
        document.getElementById("message").innerText = "Please enter all fields.";
    }
});
