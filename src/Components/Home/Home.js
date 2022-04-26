import React from 'react';
import Banner from '../Banner/Banner';

import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    return (
        <div>
            
            <Banner/>

            <h2 className='title'>Services</h2>
            <Service/>
            
        </div>
    );
};

export default Home;