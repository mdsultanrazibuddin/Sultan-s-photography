import React from 'react';
import './About.css'
import image from '../../images/33522.jpg'



const About = () => {
    return (
        <div className='group-container'>
          
            <div className='text-title'>
                <h1 className='register'>Sultan Razib Uddin</h1>
                <h5 className='register'>Goal: Full Stack Web Developer</h5>
                <p> Hello, I am Sultan Razib Uddin. I Have a Goal. My goal was to become a web developer. Inshallah I am moving forward that way. The 5 month web developer journey is coming to an end next month Inshallah.</p>
            </div>

            <div>
                <img className='picture' src={image} alt="" />
            </div>
              
        </div>
    );
};

export default About;