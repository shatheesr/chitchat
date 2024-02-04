// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
  //   apiKey: "AIzaSyC3nVqJbHemHL6q8PsVkXcaUXrWqnwgEnU",
  //   authDomain: "chitchat-2d76a.firebaseapp.com",
  //   projectId: "chitchat-2d76a",
  //   storageBucket: "chitchat-2d76a.appspot.com",
  //   messagingSenderId: "821537752597",
  //   appId: "1:821537752597:web:6c6537ed7540390b7b701c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzTVMhPGGPv4y1FNggpWKpifpDHAFZbsA",
  authDomain: "chatapp-3f6b3.firebaseapp.com",
  projectId: "chatapp-3f6b3",
  storageBucket: "chatapp-3f6b3.appspot.com",
  messagingSenderId: "289789960289",
  appId: "1:289789960289:web:22466508e02eb5a0b74a20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);