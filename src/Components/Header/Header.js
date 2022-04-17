import React from 'react';
import { Link } from 'react-router-dom';



import './Header.css'


const Header = () => {
    return (
        <div >
            <div className='link'>
                
               <div className='header'>
                    <h1> Wild Photographer</h1>
                
               </div>
                <nav className='nav' >
                    
                
                    <Link className='navbar' to ="/">Home</Link>
                    <Link className='navbar' to ="/Service">Service</Link>
                    <Link className='navbar' to ="/Banner">Banner</Link>
                    
                    <Link className='navbar' to="/Blogs">Blogs</Link>
                    <Link className='navbar' to ="/About">About</Link>
                    

                </nav>
                
            </div>
            
        </div>
    );
};

export default Header;