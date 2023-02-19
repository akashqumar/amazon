import firebase from "firebase/compat/app";
// In new firebase version, these two new imports are also necessary
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from 'firebase/app';
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuwwb92Yq3E0VyL3nxsGu-okGdyPNhInk",
  authDomain: "challenge-fa250.firebaseapp.com",
  projectId: "challenge-fa250",
  storageBucket: "challenge-fa250.appspot.com",
  messagingSenderId: "1025974445855",
  appId: "1:1025974445855:web:21039438e0dc16db0b322a",
  measurementId: "G-G6LWL6QHNZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
