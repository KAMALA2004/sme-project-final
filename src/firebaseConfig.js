// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCiiJdKDOaQOb4qr6zEn5frrOa6GeuRigs",
  authDomain: "sme-proj.firebaseapp.com",
  projectId: "sme-proj",
  storageBucket: "sme-proj.appspot.com",
  messagingSenderId: "668316477818",
  appId: "1:668316477818:web:14aede5b7fe5ce81ba4ec3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
