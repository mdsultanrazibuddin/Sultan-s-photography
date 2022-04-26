
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu1xBmZR4YzWCyroIWYDOK8eZV7ACMbtI",
  authDomain: "assignment-number-10.firebaseapp.com",
  projectId: "assignment-number-10",
  storageBucket: "assignment-number-10.appspot.com",
  messagingSenderId: "898519634844",
  appId: "1:898519634844:web:acea31471696f521f8ae59"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app