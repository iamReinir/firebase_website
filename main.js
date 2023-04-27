import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
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

let db = getFirestore(app);

import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

export function addU() {
  addUser(prompt("Your name:"), prompt("Year of birth"));
}

async function addUser(name, yob) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: name,
      born: yob,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const list = document.getElementById("list");
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  list.innerHTML +=
    "<li>" + `${doc.data().first}, ${doc.data().born}` + "</li>";
});
