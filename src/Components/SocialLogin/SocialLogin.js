import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import auth from "../firebase.init";


import "./SocialLogin.css";






const provider = new GoogleAuthProvider();

const SocialLogin = () => {
 
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
       
        const user = result.user;
        console.log(user);
      
      })
      .catch((error) => {
        console.error(error)
      });
    
  };

  

  

  return (
    <div className="socials">
      <div className="d-flex  justify-content-center align-items-center my-3">
        <div className="line"></div>
        <p className="pb-0 mb-0 mx-3">or</p>
        <div className="line"></div>
      </div>

      <div className="social-btn">
        <div className="social-button-container">
          <button
            onClick={handleGoogleSignIn}
            className="d-block mx-auto mx-0 google-btn"
          >
            Continue with Google
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default SocialLogin;