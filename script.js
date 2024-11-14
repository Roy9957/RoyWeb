import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBHfAq5M_UVM9x0N4UXmhv6a-gy7Bju6Jw",
    authDomain: "my-website-83ade.firebaseapp.com",
    databaseURL: "https://my-website-83ade-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-website-83ade",
    storageBucket: "my-website-83ade.appspot.com",
    messagingSenderId: "413269843809",
    appId: "1:413269843809:web:2502749bad2b404be0af20"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  // Function to save message to Firebase Realtime Database
  function saveMessage(email, message) {
    const messageRef = ref(database, 'messages/' + Date.now());
    set(messageRef, {
      email: email,
      message: message
    }).then(() => {
      alert("Your message sent successfully!"); // Success alert
    }).catch((error) => {
      alert("Error sending message: " + error.message); // Error alert
    });
  }

  // Handling form submission to save message
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    saveMessage(email, message);
  });

