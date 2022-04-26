

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq8VAiO1dw8-kbKQbqt3nCJbONLOmSnbI",
  authDomain: "assignment10-e22cf.firebaseapp.com",
  projectId: "assignment10-e22cf",
  storageBucket: "assignment10-e22cf.appspot.com",
  messagingSenderId: "877164512544",
  appId: "1:877164512544:web:b976df7e4e6d1f055e8345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app