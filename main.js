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

var ui = new firebaseui.auth.AuthUI(firebase.auth());
