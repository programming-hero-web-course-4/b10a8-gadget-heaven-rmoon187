import React from 'react';
import Banner from '../components/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {

    const data = useLoaderData()

    return (
        <div className='bg-gray-200 p-7'>
            <Banner></Banner>
            <h2 className='text-4xl font-bold text-center -mt-40'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex justify-start  gap-20 mt-20 ml-20 '>
                <Categories data={data} ></Categories>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Home;