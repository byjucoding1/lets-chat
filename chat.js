// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyC5uscrL0Uj2mNeIAhJSXbtlcEQW7X2L70",
    authDomain: "web-app-dde1f.firebaseapp.com",
    projectId: "web-app-dde1f",
    storageBucket: "web-app-dde1f.appspot.com",
    messagingSenderId: "458579319377",
    appId: "1:458579319377:web:2d56e237e1d9643043f670"
  };
  
  // Initialize Firebase
  firebase. initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



