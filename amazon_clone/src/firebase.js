
  
// import firebase from "src\node_modules\firebase";

// Prajakta Keer
// 11 months ago (edited)

// Few Updates :-

// Prajakta Keer
// 11 months ago (edited)
// Few Updates :-

// 1) As per the new updated Firebase we must import Firebase as follows (firebase.js file):
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// 2) useHistory is updated as useNavigate
// import { Link, useNavigate } from 'react-router-dom'
// const navigate = useNavigate ();
// navigate('/')

// 3) <Switch> is deprecated in the lastest version of React instead use <Routes>
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// <Router>
//       <div className="app">
//         <Routes>
//           <Route path = "/" element={[<Header />, <Home />]} />
//           <Route path="/checkout" element={<Header />, <Checkout />} />
//           <Route path = "/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>

// 4) Use this instead of history.replace
// navigate('/orders', { replace: true });

// 1) As per the new updated Firebase we must import Firebase as follows (firebase.js file):
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuwwb92Yq3E0VyL3nxsGu-okGdyPNhInk",
  authDomain: "challenge-fa250.firebaseapp.com",
  projectId: "challenge-fa250",
  storageBucket: "challenge-fa250.appspot.com",
  messagingSenderId: "1025974445855",
  appId: "1:1025974445855:web:21039438e0dc16db0b322a",
  measurementId: "G-G6LWL6QHNZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
