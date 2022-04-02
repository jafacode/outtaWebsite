  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyB90cQbGDwDqCnIuBWWg0JCjBHuvQUdP9g",
      authDomain: "personalouttatest.firebaseapp.com",
      projectId: "personalouttatest",
      storageBucket: "personalouttatest.appspot.com",
      messagingSenderId: "28608049451",
      appId: "1:28608049451:web:2a43489b749b6440d3956e",
      measurementId: "G-X7EKNGL8Y2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);  
  
  // Login Function
  document.getElementById("login").addEventListener("click", function(){
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Declare user variable
    var user = userCredential.user;

    const dt = new Date();
        update(ref(database, 'users/' + user.uid),{
            last_login: dt,
        })

        alert("User Logged in!");
        location.href = "userIndex.html"
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message
    alert(error_message)
  })
})

document.getElementById("goRegister").addEventListener("click", function (){
    location.href = "register.html"
  })

document.getElementById("backToMain").addEventListener("click", function (){
location.href = "index.html"
})

  // Validate Functions
  function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      return true
    } else {
      return false
    }
  }

  function validate_password(password) {
    const expression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    if(expression.test(password)==true){
      return true
    } else {
      return false
    }
  }
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }