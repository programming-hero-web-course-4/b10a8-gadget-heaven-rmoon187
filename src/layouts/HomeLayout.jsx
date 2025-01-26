import React, { useEffect, useState } from 'react';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar';


const HomeLayout = () => {



    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;