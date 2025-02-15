// Initialize Firebase
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

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("messages");

// Form Submission
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message-text").value.trim();

    if (email && message) {
        db.push({ email: email, message: message })
            .then(() => {
                document.getElementById("message").innerText = "Message sent successfully!";
                document.getElementById("subscribe-form").reset();
            })
            .catch(error => {
                document.getElementById("message").innerText = "Error! Try again.";
                console.error("Firebase Error:", error);
            });
    } else {
        document.getElementById("message").innerText = "Please enter all fields.";
    }
});
