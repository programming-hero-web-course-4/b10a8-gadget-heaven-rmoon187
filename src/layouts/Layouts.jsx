import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' bg-gray-200 min-h-screen '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;