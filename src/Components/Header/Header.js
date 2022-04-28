
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';





import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }
   
    return (
        <div >
            <div className='link'>
                
               <div className='header'>
                    <h2>Sultan's Photography</h2>
                    
                
               </div>
                {/* <nav className='nav' >
                    
                
                    <Link className='navbar' to ="/">Home</Link>
                    <Link className='navbar' to ="/Service">Service</Link>
                    <Link className='navbar' to="/Blogs">Blogs</Link>
                    <Link className='navbar' to ="/About">About</Link>
                    <Link className='navbar' to ="/SignUp">SignUp</Link>
                    
                    {  
                         user ?
                         <button className='logout-button'onClick={handleLogOut}>LogOut</button>
                         :
                        <Link className='navbar' to ="/Login">Login</Link>

                         
                
                        }
                
                   
                    

                </nav> */}
              <Navbar expand="lg">
                    <Container>
                       
                        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar me-auto">
                            <Nav.Link  as ={Link} to = {'/'} href="#home">Home</Nav.Link>
                            <Nav.Link as ={Link} to = {'/service'} href="#service">Service</Nav.Link>
                            <Nav.Link as ={Link} to = {'/Blogs'} href="#blog">Blogs</Nav.Link>
                            <Nav.Link as ={Link} to = {'/about'} href="#about">About</Nav.Link>
                            <Nav.Link as ={Link} to = {'/signup'} href="#signup">Sign Up</Nav.Link>
                            
                            {  
                                            user ?
                                            <button className='logout-button'onClick={handleLogOut}>LogOut</button>
                                            :
                                            <Nav.Link  as ={Link} to = {'/login'} href="#login">Log In</Nav.Link>
                                            

                                            
                                    
                                            }
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
              </Navbar>
               
                
            </div>
            
            
        </div>
    );
};

export default Header;