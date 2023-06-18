import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJLTXApdyN5hhF5uXs_tJNBtGMSOMvtBI",
  authDomain: "blog-udemy-practice.firebaseapp.com",
  projectId: "blog-udemy-practice",
  storageBucket: "blog-udemy-practice.appspot.com",
  messagingSenderId: "762884925244",
  appId: "1:762884925244:web:ce02838cda161af8e3a039"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };