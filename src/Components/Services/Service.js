import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';


import './Service.css'

const Service = () => {
   const [service, setService] = useState ([]);
   useEffect(() =>{
        fetch ('data.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[]);
    
    return (
        <div>
            <h1 className='heading'> My Service</h1>
              <div>
                {
                  service.map(service => <AllService
                    key = {service.id} 
                    review = {service}>
                </AllService>)
                }
              </div>
        </div>
    );
};

export default Service;