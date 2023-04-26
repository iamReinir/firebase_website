// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxEtjr3_OrTI194lOv68BgLmLpyV4RK4o",
  authDomain: "test-39037.firebaseapp.com",
  projectId: "test-39037",
  storageBucket: "test-39037.appspot.com",
  messagingSenderId: "279239580701",
  appId: "1:279239580701:web:472ce5d72da3ab49807af4",
  measurementId: "G-RGSQGH6SJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
