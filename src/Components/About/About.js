import React from 'react';
import './About.css'
import image from '../../images/33522.jpg'

const About = () => {
    return (
        <div>
            <h1 className='Heading'>About Me</h1>
            <div className='Details'>
                 <img className='Image' src={image} alt=""/>
                 <h1>Sultan Razib Uddin</h1>
                 <h3>Goal: Full Stack Web Developer</h3>
                 <p className='paragraph'>The only goal was to become a web developer. Inshallah I am moving forward that way. The 5 month web developer journey is coming to an end next month Inshallah.</p>
            </div>
        </div>
    );
};

export default About;