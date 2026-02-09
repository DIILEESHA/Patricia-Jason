import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBmRKRxxsSoisVq7G3-rcZeL_Utj7DlXRU",
  authDomain: "patricia-caeb4.firebaseapp.com",
  projectId: "patricia-caeb4",
  storageBucket: "patricia-caeb4.firebasestorage.app",
  messagingSenderId: "965209061293",
  appId: "1:965209061293:web:0fae4cadfc4d58bad8d324",
  measurementId: "G-8N3SK88NNX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, GoogleAuthProvider };