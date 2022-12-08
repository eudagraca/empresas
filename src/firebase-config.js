// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  query,
  where,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz3TmgWKPQ5WtYUyYKJQZjs75-3oI7lX8",
  authDomain: "empresa-9e930.firebaseapp.com",
  projectId: "empresa-9e930",
  storageBucket: "empresa-9e930.appspot.com",
  messagingSenderId: "223670347729",
  appId: "1:223670347729:web:70ebb380ff65e6111862f0",
  measurementId: "G-0LQYG1T3SV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  collection,
  doc,
  setDoc,
  getDocs,
  addDoc,
  getAuth,
  query,
  signOut,
  where,
  
};
