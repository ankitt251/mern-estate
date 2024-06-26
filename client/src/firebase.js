// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c59f2.firebaseapp.com",
  projectId: "mern-estate-c59f2",
  storageBucket: "mern-estate-c59f2.appspot.com",
  messagingSenderId: "790966736287",
  appId: "1:790966736287:web:b0681fc133697bef3fd9aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);