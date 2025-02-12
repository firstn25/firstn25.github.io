// Firebase Setup
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("messages");

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let message = document.getElementById("message-text").value;
    
    if (message) {
        db.push().set({ message: message })
            .then(() => {
                document.getElementById("message").innerText = "Message sent successfully!";
                document.getElementById("message-text").value = "";
            })
            .catch(error => {
                document.getElementById("message").innerText = "Error! Try again.";
            });
    }
});
