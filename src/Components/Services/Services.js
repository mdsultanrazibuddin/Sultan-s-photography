import React from 'react';
import { Link } from 'react-router-dom';



import './Services.css'

const Services = (props) => {
    const { img, service, price, headline, description} = props.service
    
    return (
        <div className="col-lg-4 mb-5 mt-5  service-container">
        
            <div className="card service-card">
            <div className="card-body">
                    <img className="service-img" src={img} alt="img" />
                    <h4 className="card-title text-center my-4">{service}</h4>
                    <h6 className="card-headline text-center my-4">"{headline}"</h6>
                    <p className="card-text text-center">{description}</p>
                    <h4 className="card-price text-center">Price: {price}</h4>
                <div className="d-flex justify-content-center     align-items-center">
                        <div className="mt-1">
                            {/* <button onClick={ () => navigator('/OrderNow')}   className="btn button">Order Now</button> */}
                            <Link className='Button-title navbar' to ="/OrderNow">Order Now</Link>
                           
                        </div>
                    </div>
                    
            </div>
            </div>
        
      </div>
    );
};

export default Services;