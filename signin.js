// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCMfLMUfeFsIPK1WMDZG7TIsdTGMAD77XI",
  authDomain: "myshoplogin-a996e.firebaseapp.com",
  projectId: "myshoplogin-a996e",
  storageBucket: "myshoplogin-a996e.appspot.com",
  messagingSenderId: "997281054915",
  appId: "1:997281054915:web:083a08573cf09b99346276", // ⚠️ Remplace si différent
  measurementId: "G-S60G9B4DFD" // (optionnel, utile si tu utilises Google Analytics)
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Toggle Form
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Google Sign-In
document.getElementById('googleLogin').addEventListener('click', () => {
  auth.signInWithPopup(googleProvider)
    .then(result => {
      alert(`Welcome ${result.user.displayName}`);
    })
    .catch(error => {
      console.error("Google Sign-in Error:", error.message);
    });
});
