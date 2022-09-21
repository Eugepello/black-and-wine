import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZtfwcZronCQ5A4eMk-cVWIJb6KD5aaho",
  authDomain: "black-and-wine.firebaseapp.com",
  projectId: "black-and-wine",
  storageBucket: "black-and-wine.appspot.com",
  messagingSenderId: "99197112100",
  appId: "1:99197112100:web:b7e11fa6ef68845da2adb1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);