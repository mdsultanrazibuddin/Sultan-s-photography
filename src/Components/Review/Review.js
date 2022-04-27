import React from 'react';
import './Review.css'
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Review = (props) => {
    const { name , rating, description} = props.review
    return (
        <div>
          <div className="card">
                <h2> Review</h2>
                <br />
                
                <p>{description}</p>
                
                
                <h4> Ratings : {rating} </h4>
                <h3>{name}</h3>
                
            </div>  
        </div>
    );
};

export default Review;