import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSO4lHSJmalQaqwAiVn4-YMEz9RqIVdB0",
  authDomain: "koli-10f83.firebaseapp.com",
  projectId: "koli-10f83",
  storageBucket: "koli-10f83.firebasestorage.app",
  messagingSenderId: "323929087548",
  appId: "1:323929087548:web:e6020c27e8a7ab033c2d39"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, GoogleAuthProvider };