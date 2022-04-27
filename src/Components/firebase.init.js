
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2qkrRrcCI4yfwchO8SgG3sdDYn3R0qHw",
  authDomain: "independent-provider-6842f.firebaseapp.com",
  projectId: "independent-provider-6842f",
  storageBucket: "independent-provider-6842f.appspot.com",
  messagingSenderId: "746175288780",
  appId: "1:746175288780:web:1076765f59ea57a6457969"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;