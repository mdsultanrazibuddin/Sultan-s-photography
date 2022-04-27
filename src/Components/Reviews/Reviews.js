// import React, { useEffect, useState } from 'react';
import useReview from '../../Components/Hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [review] = useReview([])
    
    return (
        <div>
            
            <div className='card-container'>
                {
                    review.map(review => <Review
                        key = {review.id} 
                        review = {review}>
                    </Review>)
                }   
            </div>
        </div>
    );
};

export default Reviews;