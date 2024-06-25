import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn6FiuGFHXOx1XqnsiolYu_WN2k8paEFY",
  authDomain: "krsusisjhw.firebaseapp.com",
  projectId: "krsusisjhw",
  storageBucket: "krsusisjhw.appspot.com",
  messagingSenderId: "25639263091",
  appId: "1:25639263091:web:540f37a92675d611ca4306",
  measurementId: "G-H6YZ83VLYG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
