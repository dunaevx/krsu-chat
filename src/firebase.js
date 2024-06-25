import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbko79lT5pk8Da6h8be4Xx9tDXnZr1xvw",
  authDomain: "test-d6147.firebaseapp.com",
  projectId: "test-d6147",
  storageBucket: "test-d6147.appspot.com",
  messagingSenderId: "1045594451905",
  appId: "1:1045594451905:web:1397eed6dbfc96c7de4940",
  measurementId: "G-S4D5FEMJZ8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
