import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="mx-auto mt-5 login-container">
      
      <Form /*  onSubmit={handleLogin} */ className="form-container">
            <h1 className="text-center text-primary">Sign In</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                // onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                // onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            {/* <p className="text-danger">{error}</p> */}

            <p
              className="text-primary forget-pass"
              // onClick={handleForgetPassword}
            >
              Forget Password?
            </p>

            <h6>
              New to Wild Photographer?{" "}
              <span
                // onClick={handleCreateAccount}
                className="text-primary create-new-account"
              >
               <Link className='form-link' to="/signup">Create a new account</Link> 
              </span>
            </h6>

            <div className="d-flex justify-content-center mt-3 ">
              <Button className="px-5" variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
    </div>
  );
};

export default Login;