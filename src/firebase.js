import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0NapoeJRG7NfR_NlOfzVvZSXm1EqQhHQ",
  authDomain: "krsuchat-22357.firebaseapp.com",
  projectId: "krsuchat-22357",
  storageBucket: "krsuchat-22357.appspot.com",
  messagingSenderId: "709925556757",
  appId: "1:709925556757:web:00f511c6ba2e31b177b41c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);