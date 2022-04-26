import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase'
import './SignUp.css'

const SignUp = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [
    createUserWithEmailAndPassword
    
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = event =>{
    setEmail(event.target.value)
  }
  const handlePasswordBlur = event =>{
    setPassword(event.target.value)
  }
  const handleConfirmPasswordBlur = event =>{
    setConfirmPassword(event.target.value)
  }

  const handleCreateUser = event =>{
    event.preventDefault();
    if(password !== confirmPassword){
      setError('your two password did not match')
      return;
    }
    createUserWithEmailAndPassword(email, password)
  }

  return (
    <div>
       <div className="conatiner mx-auto my-5 sign-up-container">
      <Form onSubmit={handleCreateUser} className="form-container">
        <h1 className="text-center text-primary">Register</h1>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          onBlur={ handleEmailBlur}
            // onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          onBlur={ handlePasswordBlur}
            // onChange={(e) => setPassword(e.target.value)}
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
            // onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            // onChange={() => setCheck(!check)}
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
             <Link className='form-link' to="/login">Login</Link> 
          </span>
        </h6>
        <div className=" d-flex justify-content-center align-items-center">
          <Button
            className="px-5"
            // disabled={check ? false : true}
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </Form>

      {/* <SocialLogin></SocialLogin> */}
    </div>
    </div>
  );
};

export default SignUp;