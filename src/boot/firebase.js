// Firebase App (the core Firebase SDK) is always required and must be listed first
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

//import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBuycwdw3TiTzlArQ0WC0JW1cHpNWbgQUM",
  authDomain: "quasar-57098.firebaseapp.com",
  databaseURL: "https://quasar-57098-default-rtdb.firebaseio.com",
  projectId: "quasar-57098",
  storageBucket: "quasar-57098.appspot.com",
  messagingSenderId: "861802619606",
  appId: "1:861802619606:web:7f28824fa309967edf5f77",
  measurementId: "G-RT2BRCHQ2W"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
