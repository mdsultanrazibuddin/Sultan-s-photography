// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';



import './SignUp.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../firebase.init';



const SignUp = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword, user
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  

  const handleEmailBlur = event =>{
  setEmail(event.target.value);
  }
  const handlePasswordBlur = event =>{
    setPassword(event.target.value);
  }
  const handleConfirmPasswordBlur = event =>{
    setConfirmPassword(event.target.value);
  }
  if(user){
    navigate('/')
  }

  const handleCreateUser = event =>{
    console.log(email, password);
   
    
    createUserWithEmailAndPassword(email, password)
  
  event.preventDefault();
    if(password !== confirmPassword){
      setError('your two password did not match')
      return;
    }
   
  }
  
  

  

  return (
    <div>
       <div className="conatiner mx-auto my-5 sign-up-container">
      <Form  onSubmit={handleCreateUser} className="form-container">
        <h1 className="text-center register">Register</h1>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          onBlur ={ handleEmailBlur}
            
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
          onBlur={ handlePasswordBlur}
           
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
          onBlur={handleConfirmPasswordBlur}
            
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        
        <h6 className="my-3">
          Already have an account?
          <span
            
            className="text-primary create-new-account ms-2"
          >
             <Link className='register form-link' to="/login">Login</Link> 
          </span>
        </h6>
        <div className=" d-flex justify-content-center align-items-center">
          <Button
            className=" button px-5"
           
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