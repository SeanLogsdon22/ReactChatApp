import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBElzsuuGas8aNPuru2jPy2KOXo_MQaatc",
  authDomain: "chat-74514.firebaseapp.com",
  projectId: "chat-74514",
  storageBucket: "chat-74514.appspot.com",
  messagingSenderId: "203803873582",
  appId: "1:203803873582:web:b2bf80268fd235fe60eabf",
  measurementId: "G-8M0PFN6YXK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore(app)