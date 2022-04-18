import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/Firebase';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const From = () => {
    const[registered, setRegistered] = useState(false)
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [error, setError]= useState('');
    const [user, setUser] = useState('')


    const handleEmailBlur = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) =>{
        setPassword(event.target.value);
    }
    const handleFormSubmit = (event) => {
        if(registered){
             signInWithEmailAndPassword(auth, email, password)
             .then(result =>{
                 const user =result.user;
                 console.log(user);
             })
             .catch(error =>{
                 console.error(error)
                 setError(error.message)
             })
        }
        else{
            createUserWithEmailAndPassword (auth, email, password)
            .then((result) => {
              // Signed in 
              const user = result.user;
              console.log(user);
              setEmail('');
              setPassword('');
              verifyEmail()
              // ...
            })
            .catch((error) => {
                console.error(error)
              setError(error.message) ;
             
              
            });
        }
       
        event.preventDefault();
    }
    const handlePasswordReset =() =>{
        sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log("reset Password send");
  })
  .catch((error) => {
    console.error(error)
    setError(error.message) ;
    // ..
  });
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('email verification');
  });
    }
    const handleRegisterChange = (event) => {
        setRegistered(event.target.checked);
    }
    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    setUser(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
    }
    return (
        <div>
            <div className="registration w-50 mx-auto my-5">
                <h2>Please {registered ? 'Login':'Register'} !!!</h2>
              <Form  onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                       
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                       
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={handleRegisterChange} type="checkbox" label="Already Register" />
                    </Form.Group>
                    <p className='primary'>{error}</p>
                    <Button onClick={handlePasswordReset} variant='link'>Forget Password?</Button> <br />
                    <Button variant="primary" type="submit">
                    {registered ? 'Login':'Register'}
                    </Button> <br />
                    <Button onClick={signInWithGoogle} className='my-5' variant="primary" type="submit">
                     Sign With Google
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default From;