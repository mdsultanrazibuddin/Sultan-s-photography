import { Button } from 'react-bootstrap';
import React, {  useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { Link, useLocation, useNavigate} from 'react-router-dom';


import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  
  const [
    signInWithEmailAndPassword,
    user,
    
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const handleEmailBlur = event =>{
    setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
      setPassword(event.target.value);
    }
    if(user){
         navigate (from, {replace: true})
    }

  

  
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
  };

  
 
  

  return (
    <div className="mx-auto mt-5 login-container">
      
      <Form onSubmit={handleLogin}  className="form-container">
            <h1 className="text-center register">Sign In</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                 onBlur ={ handleEmailBlur}
                type="email"
                placeholder="Enter email"
                required
              />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                 onBlur={ handlePasswordBlur}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <p className="text-danger">{error?.massage}</p>

            <p
              className="register forget-pass"
              
            >
              Forget Password?
            </p>

            <h6>
              New to Wild Photographer?{" "}
              <span
               
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