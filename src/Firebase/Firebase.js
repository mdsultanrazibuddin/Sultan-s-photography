
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB3Mx91fQqazlL-Hr1CtYkJzqF1lA4njI",
  authDomain: "assignment10-b1a48.firebaseapp.com",
  projectId: "assignment10-b1a48",
  storageBucket: "assignment10-b1a48.appspot.com",
  messagingSenderId: "845505551972",
  appId: "1:845505551972:web:4c74d6a40843cdc4380971"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app