// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = { 
//     apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPII,
//   measurementId: process.env.REACT_APP_MEASUREMENTID
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export default app;

import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPII,
  measurementId: process.env.REACT_APP_MEASUREMENTID

    // apiKey: "AIzaSyA7jiFTr-CiaTUzUDU95LjxA1LWoFSiWbc",
    // authDomain: "react-student-admin-dashboard.firebaseapp.com",
    // projectId: "react-student-admin-dashboard",
    // storageBucket: "react-student-admin-dashboard.appspot.com",
    // messagingSenderId: "963535668772",
    // appId: "1:963535668772:web:d8004ea8a2da48ff83fab1",
    // measurementId: "G-1VVSVV3T1J"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
