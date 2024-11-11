import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { useState } from 'react';
import Details from '../pages/Details';
const Navbar = () => {

    const [count, setCount] = useState(0);
    const addToCart = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[rgba(11,11,11,0.7)]">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/stats'>Statistics</NavLink>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </ul>
                </div>
                <Link to='/' className='text-xl font-bold'>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-10 text-[rgba(11,11,11,0.7)]">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/stats'>Statistics</NavLink>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-10 relative">

                <Link className="w-10 h-10 box-border border border-[rgba(11,11,11,0.1)] rounded-full flex items-center justify-center"> <GiShoppingCart className="text-2xl" /> {count > 0 && (<span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"> {count}</span>)} </Link>

                <Link className='w-10 h-10 box-border border border-[rgba(11,11,11,0.1)] rounded-full flex items-center justify-center'><CiHeart className='text-2xl' /></Link>
            </div>

        </div>
    );
};

export default Navbar;