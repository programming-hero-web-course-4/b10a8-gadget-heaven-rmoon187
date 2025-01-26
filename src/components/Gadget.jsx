import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gadget = ({ data }) => {

    const navigate = useNavigate()
    const { product_image, product_title, price, product_id } = data
    return (
        <div className='w-[320px] bg-white p-5 rounded-xl space-y-3'>
            <img className='w-[300px] h-[250px] rounded-2xl border border-gray-500' src={product_image} />
            <h3 className='text-2xl font-semibold'>{product_title}</h3>
            <p className='text-[rgba(9,8,15,0.6)] text-xl font-semibold' > Price: ${price}</p>
            <button onClick={() => navigate(`/details/gadget/${product_id}`)} className="btn btn-outline rounded-3xl font-bold text-[rgb(149,56,226)]">View Details</button>
        </div>
    );
};

export default Gadget;