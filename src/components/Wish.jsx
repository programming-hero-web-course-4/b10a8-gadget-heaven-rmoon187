import React, { useContext } from 'react';
import DashContext from '../provider/DashContext';
import WishCard from './WishCard';

const Wish = () => {

    const { wish } = useContext(DashContext)

    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className='max-w-screen-xl mx-auto p-5 space-y-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold '>WishList</h1>
                </div>
                <div className='flex flex-col  gap-5'>
                    {wish.length === 0 ? <h2 className='text-center font-bold text-5xl'>No Items Here</h2> :
                        wish.map((item, index) => <WishCard item={item} key={index}></WishCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Wish;