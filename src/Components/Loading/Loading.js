import React from 'react';
import { Spinner } from 'react-bootstrap';


const Loading = () => {
    return (
        <div>
            <div style={{height:'500px'}} className = 'w-100 d-flex justify-content-center align-items-center'>
               <Spinner annimation = 'border' variant='primary'/> 
            </div>
            
        </div>
    );
};

export default Loading;