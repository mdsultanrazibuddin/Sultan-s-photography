
import React from "react";
import "./OrderNow.css";
import { Button,  Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../firebase.init';

const OrderNow = () => {
   
  const [authUser] = useAuthState(auth);
  
  return (
        <div>
                    
            <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center container">
                
                <div className="mx-auto my-5 checkout-container">
                <Form >
                    <h1 className="mb-lg-0 mb-5 text-center">
                    Please Fill Up
                    </h1>
                    <Form.Group
                    className="mb-3 mt-5"
                    controlId="exampleForm.ControlInput1"
                    >
                    <Form.Label className="checkout-labels">Your Name</Form.Label>
                    <Form.Control
                        disabled={authUser?.displayName ? true : false}
                        value={authUser?.displayName}
                        type="text"
                        placeholder="Type your name"
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="checkout-labels">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Type your email address"
                        required
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="checkout-labels">Phone Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Your Phone Number"
                        required
                    />
                    </Form.Group>
                    

                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <Form.Label className="checkout-labels">Your Address</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                    </Form.Group>
                    <Button
                    className="px-5 d-block mx-auto checkout-labels"
                    variant="primary"
                    type="submit"
                    >
                    Confirm Your Order
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    );
};

export default OrderNow;