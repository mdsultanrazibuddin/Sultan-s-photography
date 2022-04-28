
import React, { useEffect, useState } from 'react';


import Services from '../Services/Services';

import './Service.css'
const Service = () => {
  const[service, setService] = useState([])
  useEffect(() => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => setService(data))
        
}, []);
  

  
 
    return (
      
      <div>
        {
                    service.map(service => <Services
                        key = {service.id} 
                        service = {service}>
                    </Services>)
                } 
      </div>
    );
};


export default Service;
