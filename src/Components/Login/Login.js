import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase'
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Using React Firebase Hooks
  const [signInWithEmailAndPassword, signInUser,  signInError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, resetEmailSending, resetError] =
    useSendPasswordResetEmail(auth);

  //Using React Router DOM
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  //Using Function to Sign Up Route
  // const handleCreateAccount = () => {
  //   navigate("/sign-up");
  // };

  //Using Function to Sign In USer with Email and Password
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (
      signInError &&
      signInError?.message === "Firebase: Error (auth/user-not-found)."
    ) {
      setError("User Does Not Exist. Please Sign Up");
     
    } else if (
      signInError &&
      signInError?.message === "Firebase: Error (auth/wrong-password)."
    ) {
      setError("Wrong Password");
      
    }
  }, [signInError]);

  //Using React Built in Hook to Show Custom Error Message and Toast Message for successful login 
  useEffect(() => {
    if (signInUser) {
      navigate(from, { replace: true });
      
    }
  }, [signInUser, navigate, from]);

  // Using Function to Reset password if User forgets password
  const handleForgetPassword = async () => {
    await sendPasswordResetEmail(email);
  };

  //Using React Built in Hook to Show Custom Error Message and Toast Message for Reset Password
  useEffect(() => {
    if (resetEmailSending) {
     
    }
    if (resetError) {
      setError("Please Enter a Valid Email");
      
      return;
    }
  }, [resetError, resetEmailSending]);

 
  

  return (
    <div className="mx-auto mt-5 login-container">
      
      <Form onSubmit={handleLogin}  className="form-container">
            <h1 className="text-center register">Sign In</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <p className="text-danger">{error}</p>

            <p
              className="register forget-pass"
              onClick={handleForgetPassword}
            >
              Forget Password?
            </p>

            <h6>
              New to Wild Photographer?{" "}
              <span
                // onClick={handleCreateAccount}
                className="text-primary create-new-account"
              >
               <Link className='register form-link' to="/signup">Create a new account</Link> 
              </span>
            </h6>

            <div className="d-flex justify-content-center mt-3 ">
              <Button className="px-5 button" variant="primary" type="submit">
                Login
              </Button>
            </div>

          </Form>
          <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;