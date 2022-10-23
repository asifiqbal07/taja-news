// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJchPtd3IrvfpVZVFMLyhBOtgcUkX9Dco",
  authDomain: "taja-news.firebaseapp.com",
  projectId: "taja-news",
  storageBucket: "taja-news.appspot.com",
  messagingSenderId: "386016161623",
  appId: "1:386016161623:web:d385114bc3491a8b671812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;