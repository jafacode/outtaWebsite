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

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var program = document.getElementById("programImage");
    var book = document.getElementById("bookImage");
    var resource = document.getElementById("resourceImage");
    
    if (document.documentElement.scrollTop > 450 && document.documentElement.scrollTop < 730)
        program.src = "./images/프로그램 일러 hover.png";   
    else
        program.src = "./images/프로그램 일러 default.png";
    if (document.documentElement.scrollTop > 730 && document.documentElement.scrollTop < 1100)
        book.src = "./images/책 hover.png"
    else
        book.src = "./images/책 default.png"
    if (document.documentElement.scrollTop > 1100 && document.documentElement.scrollTop < 1210)
        resource.src = "./images/자료실 hover.png"
    else
        resource.src = "./images/자료실 default.png"
}

document.getElementById("logout").addEventListener("click", function(){
    signOut(auth).then(function(){
        alert('Logged out successfully');
        location.href="index.html"
    }).catch((error) => {
        const error_code = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    })
})