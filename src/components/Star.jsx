import React from 'react';
import ReactStars from "react-rating-stars-component";

const Star = ({ rating }) => {
    return (
        <div className='flex gap-5 items-center'>

            <ReactStars
                count={5}
                value={rating}
                size={24}
                activeColor="#ffd700"
                edit={false}
            />
            <p className='bg-gray-300 px-3 rounded-full'>{rating}</p>
        </div>
    );
};

export default Star;