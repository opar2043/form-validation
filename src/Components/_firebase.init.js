// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARweFhnbgerf975bwp8-qkpvdec74STRs",
  authDomain: "private-route-a5f8b.firebaseapp.com",
  projectId: "private-route-a5f8b",
  storageBucket: "private-route-a5f8b.firebasestorage.app",
  messagingSenderId: "378712677634",
  appId: "1:378712677634:web:b4cfe553a037413576f61b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth