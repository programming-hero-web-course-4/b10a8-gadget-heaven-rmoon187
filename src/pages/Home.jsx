import React from 'react';
import Banner from '../components/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-bold text-center -mt-40'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex justify-start  gap-20 mt-20 ml-20 '>
                <Categories categories={categories} ></Categories>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Home;