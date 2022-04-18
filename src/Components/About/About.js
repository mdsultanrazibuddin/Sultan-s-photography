import React from 'react';
import './About.css'
import image from '../../images/33522.jpg'
import { Card } from 'react-bootstrap';


const About = () => {
    return (
        <div >
           
                            <Card className='about-me' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Sultan Razib Uddin</Card.Title>
                    <h6>Goal: Full Stack Web Developer</h6>
                    <Card.Text>
                    The only goal was to become a web developer. Inshallah I am moving forward that way. The 5 month web developer journey is coming to an end next month Inshallah.
                    </Card.Text>
                    
                </Card.Body>
                </Card>
              
        </div>
    );
};

export default About;