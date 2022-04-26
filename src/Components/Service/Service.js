
import React, { useEffect, useState } from 'react';
// import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

import Services from '../Services/Services';
// import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = () => {
  const[service, setService] = useState([])
  useEffect(() => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => setService(data))
        // .catch(error => console.log(error));
}, []);
  

  // Using From React Router DOM
  //  const navigate = useNavigate();

  // Using Props from Context API
    // const { service, headline, description, price, img} = props;

  //Using function to redirect to Dynamic Checkout Route
  //  const handleService = () => {
  //     Navigate(`/checkout/${service}`);  
  //   }
 
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
