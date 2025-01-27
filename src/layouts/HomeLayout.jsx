import React, { useEffect, useState } from 'react';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';


const HomeLayout = () => {

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div>
            {isHomePage ? '' : <Navbar></Navbar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;