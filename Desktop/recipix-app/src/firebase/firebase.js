import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword}from 'firebase/auth'
import {
    getFirestore,
    collection,
    addDoc,
  } from "firebase/firestore";

  
const firebaseConfig = {
    apiKey: "AIzaSyAaCBBySQo7yOZfOBrq3iwtBpOwJb8RQXI",
    authDomain: "recipix-ef8e1.firebaseapp.com",
    projectId: "recipix-ef8e1",
    storageBucket: "recipix-ef8e1.appspot.com",
    messagingSenderId: "331360729231",
    appId: "1:331360729231:web:316a72b30093f5ed6a58fa",
    measurementId: "G-XYRTC0Q5ZX"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
  };