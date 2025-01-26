import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const WishCard = ({ item }) => {

    const { product_image, product_title, price, description, } = item

    return (
        <div className="border border-[rgba(19,19,19,0.1)] p-5 rounded-xl flex justify-between bg-white">
            <div className='flex gap-10'>
                <img className='w-44 rounded-2xl' src={product_image} alt="player" />
                <div className='space-y-3'>
                    <p className='font-bold text-2xl'>{product_title}</p>
                    <p className='text-[rgba(19,19,19,0.6)]'>{description}</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <button onClick={() => addToCart(id)} className='bg-[rgb(149,56,226)] text-white font-semibold rounded-3xl px-5 py-2  flex gap-3'>Add To Card</button>
                </div>
            </div>
            <button><TiDeleteOutline className='text-5xl text-red-500' /></button>
        </div>
    );
};

export default WishCard;