import React from 'react';
import banner from '../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=''>
            <div className='bg-[rgb(149,56,226)]  h-[695px] text-white text-center p-7  space-y-7  rounded-2xl'>
                <h1 className='text-5xl font-bold w-3/5 mx-auto'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='w-2/5 mx-auto opacity-80'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <Link to={'/dashboard'}><button className="bg-white px-5 py-2 rounded-full text-[rgb(149,56,226)] font-bold hover:bg-gray-200 mt-5">Shop Now</button></Link>
            </div>
            <div className='box-border border-2 border-white bg-[rgba(255,255,255,0.3)] rounded-2xl 
              mx-auto p-5 relative bottom-72  w-[900px]'>
                <img className='  rounded-3xl' src={banner} />
            </div>
        </div>
    );
};

export default Banner;