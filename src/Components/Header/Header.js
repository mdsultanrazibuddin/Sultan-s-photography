
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
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
                    <h2> Wild Photographer</h2>
                    
                
               </div>
                <nav className='nav' >
                    
                
                    <Link className='navbar' to ="/">Home</Link>
                    <Link className='navbar' to ="/Service">Service</Link>
                    <Link className='navbar' to="/Blogs">Blogs</Link>
                    <Link className='navbar' to ="/About">About</Link>
                    <Link className='navbar' to ="/SignUp">SignUp</Link>
                    

                    
                    
                    

                    {  
                         user ?
                         <Button onClick={handleLogOut}>LogOut</Button>
                         :
                        <Link className='navbar' to ="/Login">Login</Link>

                         
                
                        }
                
                   
                    

                </nav>
               
                
            </div>
            
        </div>
    );
};

export default Header;