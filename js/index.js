
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



function login() {
    var mail = document.getElementById("email").value;
    var wachtwoord = document.getElementById("wachtwoord").value;

    

    firebase.auth().signInWithEmailAndPassword(mail, wachtwoord).catch(function(error) {
               // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error : " + errorMessage);

      });
      
    firebase.auth()
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //Als de gebruiker is ingelogd
      document.getElementById("inloggen").style.display = "none";
      document.getElementById("uitloggen").style.display = "block";
    } else {

//         //Als de gebruiker moet inloggen
        document.getElementById("inloggen").style.display = "block";
       document.getElementById("uitloggen").style.display = "none";
     }
 });

 function logout() {


 firebase.auth().signOut().then(function() {
    window.alert("Succesvol uitgelogd");
  }).catch(function(error) {
    window.alert("Er is iets foutgegaan bij het uitloggen");
  });
 }

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid; 
}

var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}


