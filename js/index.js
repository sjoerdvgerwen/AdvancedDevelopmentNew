
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDDyPl3ToP9zKgJJFXVvkWGlmJaoMsKuZs",
    authDomain: "drip-4ae00.firebaseapp.com",
    databaseURL: "https://drip-4ae00.firebaseio.com",
    projectId: "drip-4ae00",
    storageBucket: "drip-4ae00.appspot.com",
    messagingSenderId: "618832173268",
    appId: "1:618832173268:web:a38b3a9a8e42c4ffdcc341",
    measurementId: "G-3Q8180VPTR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login(){

    var mail = document.getElementById("email").value;
    var wachtwoord = document.getElementById("wachtwoord").value;
    debugger;
}
































// function login() {

    
    

//     var firebaseConfig = {
//         apiKey: "AIzaSyDDyPl3ToP9zKgJJFXVvkWGlmJaoMsKuZs",
//         authDomain: "drip-4ae00.firebaseapp.com",
//         databaseURL: "https://drip-4ae00.firebaseio.com",
//         projectId: "drip-4ae00",
//         storageBucket: "drip-4ae00.appspot.com",
//         messagingSenderId: "618832173268",
//         appId: "1:618832173268:web:a38b3a9a8e42c4ffdcc341",
//         measurementId: "G-3Q8180VPTR"
//       };
//       // Initialize Firebase
//       if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//      }
//       firebase.analytics();

    
//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         alert('aaaa')
//         // ...
//       });

    // firebase.auth().signInWithEmailAndPassword(mail, wachtwoord).catch(function(error) {
    //     alert('aaa');        // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
        
    //     window.alert("Error : " + errorMessage);

    //   });
      
    // firebase.auth()
// }

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         //Als de gebruiker is ingelogd
//       document.getElementById("inloggen").style.display = "none";
//       document.getElementById("uitloggen").style.display = "block";
//     } else {

//         //Als de gebruiker moet inloggen
//         document.getElementById("inloggen").style.display = "block";
//         document.getElementById("uitloggen").style.display = "none";
//     }
//   });