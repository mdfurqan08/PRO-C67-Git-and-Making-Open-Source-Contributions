import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrtM5YcGSVPkAiojr6fv25SWrefKN5jQ8",
    authDomain: "vote-now-e428a.firebaseapp.com",
    databaseURL: "https://vote-now-e428a-default-rtdb.firebaseio.com",
    projectId: "vote-now-e428a",
    storageBucket: "vote-now-e428a.appspot.com",
    messagingSenderId: "175775807045",
    appId: "1:175775807045:web:ae6b568f01b1f8278f552c",
    measurementId: "G-5K9X9FRSHK"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();