import firebase from 'firebase';
  
  var firebaseConfig = {
    apiKey: "AIzaSyA8vGeBJUcAuChoPz8Xps6k58-alBD-aXM",
    authDomain: "login-ddede.firebaseapp.com",
    projectId: "login-ddede",
    storageBucket: "login-ddede.appspot.com",
    messagingSenderId: "286111630435",
    appId: "1:286111630435:web:d69dffff69eb3fc54b6456"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;