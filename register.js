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
  
  //Register Function
  document.getElementById("register").addEventListener("click", function () {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const username = document.getElementById('username').value

    //Validate inputs
    if(validate_email(email) == false) {
      alert('Not a valid email')
      return
    }
    if(validate_password(password) == false){
      alert('Password must contain one number, one uppercase and one lowercase')
      return
    }
    if(validate_field(username) == false){
      alert('Fill in all fields')
      return
    }

    //Validation: Success
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Declare user variable
      const user = userCredential.user;
  
      set(ref(database, 'users/' + user.uid),{
        username: username,
        email: email
      })

      alert('Registered Successfully!');
      location.href = "userIndex.html"
    })
    .catch((error) => {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  })

  document.getElementById("goLogin").addEventListener("click", function (){
    location.href = "login.html"
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