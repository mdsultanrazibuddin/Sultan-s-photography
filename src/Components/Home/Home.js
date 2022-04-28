import React from 'react';
import Banner from '../Banner/Banner';



import Service from '../Service/Service';
import Workshop from '../Workshop/Workshop';
import './Home.css'

const Home = () => {
    return (
        <div>
            
            <Banner/>

            <h2 className='title'>Services</h2>
            <Service/>

            <h2 className='title'> My Work-Shop</h2>

            <Workshop/>

          
            
        </div>
    );
};

export default Home;