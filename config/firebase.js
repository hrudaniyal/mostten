// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBnE5MW64YSENZ_QcjMvkQO5REh5q_ieCQ",
  authDomain: "hncode-1b326.firebaseapp.com",
  databaseURL: "https://hncode-1b326-default-rtdb.firebaseio.com",
  projectId: "hncode-1b326",
  storageBucket: "hncode-1b326.appspot.com",
  messagingSenderId: "425731859726",
  appId: "1:425731859726:web:3b0788af499fafd9f0e35f",
  measurementId: "G-QGT4Y8GHPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);