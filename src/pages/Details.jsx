import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Star from '../components/Star';
import { CiHeart } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams()
    const data = useLoaderData()

    const unique = data.find(gadget => gadget.product_id === id)
    const { product_image, product_title, price, description, Specification, availability, rating } = unique

    return (
        <div className='relative'>
            <div className='h-[460px] bg-[rgb(149,56,226)] text-white text-center py-10 space-y-3'>
                <h2 className='font-bold text-3xl'>Product Details</h2>
                <p className='w-3/6 mx-auto'>Discover top-quality gadgets designed to enhance your daily life. Browse our collection for the latest innovations and best deals tailored just for you."</p>
            </div>
            <div className='w-[1100px] h-[520px] p-5 mx-auto  rounded-3xl  bg-white
             flex gap-10 absolute left-52 top-40 '>
                <div >
                    <img className='border-2 border-purple-500 w-[420px] h-[475px] rounded-2xl' src={product_image} />
                </div>
                <div className='space-y-3'>
                    <h3 className='text-3xl font-semibold'>{product_title}</h3>
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                    <button className="btn btn-outline btn-xs  btn-accent">{availability ? 'In Stock' : 'Out of Stock'}</button>
                    <p className='text-[rgba(9,8,15,0.6)] font-medium'>{description}</p>
                    <p className=' text-xl font-semibold'>Specification:</p>
                    {Specification.map((name, index) => <ol><li className='text-[rgba(9,8,15,0.6)] font-medium'>{index + 1}. {name}</li></ol>)}
                    <p className=' text-xl font-semibold'>Rating:</p>
                    <Star rating={rating}></Star>
                    <div className="flex items-center  gap-5">
                        <button className='bg-[rgb(149,56,226)] text-white font-semibold rounded-3xl px-5 py-2  flex gap-3'>Add To Card <GiShoppingCart className='text-2xl' /></button>
                        <Link className='w-10 h-10 box-border border border-[rgba(11,11,11,0.1)] rounded-full flex items-center justify-center'><CiHeart className='text-2xl' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;