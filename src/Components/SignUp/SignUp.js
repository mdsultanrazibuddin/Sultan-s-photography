// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../Firebase/Firebase'
import './SignUp.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
  // const [email,setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [error, setError] = useState('')
  // // const [
  // //   createUserWithEmailAndPassword
    
  // // ] = useCreateUserWithEmailAndPassword(auth);

  // const handleEmailBlur = event =>{
  //   setEmail(event.target.value)
  // }
  // const handlePasswordBlur = event =>{
  //   setPassword(event.target.value)
  // }
  // const handleConfirmPasswordBlur = event =>{
  //   setConfirmPassword(event.target.value)
  // }

  // const handleCreateUser = event =>{
  //   event.preventDefault();
  //   if(password !== confirmPassword){
  //     setError('your two password did not match')
  //     return;
  //   }
  //   createUserWithEmailAndPassword(auth, email, password)
  // .then((result) => {
  //   // Signed in 
  //   const user = result.user;
  //   console.log(user);
  //   // ...
  // })
  // .catch((error) => {
  //   console.error(error)
  // });
  // }
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);


  //Using React Firebase Hooks
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
     /*  {
      sendEmailVerification: true,
    } */
  );

  
  //Using React Router DOM
  const navigate = useNavigate();

  //Using Function to Redirect Login Route
  // const handleGoToLogin = () => {
  //   navigate("/login");
  // };

  //Using Function to Sign Up User with Email and Password
  const handleSignUp = (e) => {
    e.preventDefault();

   //Validating Password and Confirm Password
    // if (password.length < 8) {
    //   setError("Password must be at least 8 characters");
    //   return;
    // }

    // if (
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    //     password
    //   ) === false
    // ) {
    //   setError(
    //     "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
    //   );
    //   return;
    // }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password does not match");
      return;
    }

    //Creating User with Email and Password
    createUserWithEmailAndPassword(email, password);
    navigate("/");
  };

  return (
    <div>
       <div className="conatiner mx-auto my-5 sign-up-container">
      <Form  onSubmit={handleSignUp} className="form-container">
        <h1 className="text-center register">Register</h1>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          // onBlur={ handleEmailBlur}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
          // onBlur={ handlePasswordBlur}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
          // onBlur={handleConfirmPasswordBlur}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={() => setCheck(!check)}
            type="checkbox"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <h6 className="my-3">
          Already have an account?
          <span
            // onClick={handleGoToLogin}
            className="text-primary create-new-account ms-2"
          >
             <Link className='register form-link' to="/login">Login</Link> 
          </span>
        </h6>
        <div className=" d-flex justify-content-center align-items-center">
          <Button
            className=" button px-5"
            // disabled={check ? false : true}
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
    </div>
  );
};

export default SignUp;