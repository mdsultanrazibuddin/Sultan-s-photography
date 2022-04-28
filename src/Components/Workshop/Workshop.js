import React from 'react';
import image1 from '../../images/img-1.jpg'
import image2 from '../../images/img-2.jpg'
import image3 from '../../images/img-3.jpg'
import image4 from '../../images/img-4.jpg'
import image5 from '../../images/img-5.jpg'
import image6 from '../../images/img-6.jpg'
import './Workshop.css'

const Workshop = () => {
    return (
        <div className='photo-container'>
            <img className='photo' src={image1} alt="" srcset="" />
            <img className='photo' src={image2} alt="" srcset="" />
            <img className='photo' src={image3} alt="" srcset="" />
            <img className='photo' src={image4} alt="" srcset="" />
            <img className='photo' src={image5} alt="" srcset="" />
            <img className='photo' src={image6} alt="" srcset="" />
        </div>
    );
};

export default Workshop;