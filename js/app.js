
var firebaseConfig = {
  apiKey: "AIzaSyCSp6Ai0uPkK3eoGwYbxCG4zTJ_NJ7UVi4",
  authDomain: "msportfolio-360be.firebaseapp.com",
  databaseURL: "https://msportfolio-360be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "msportfolio-360be",
  storageBucket: "msportfolio-360be.appspot.com",
  messagingSenderId: "984228040975",
  appId: "1:984228040975:web:91cfee22f9687babd9ee7a",
  measurementId: "G-DRC22P5VXX"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  

  // Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit


function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
