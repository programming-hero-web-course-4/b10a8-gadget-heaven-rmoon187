import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
const Navbar = () => {

    const location = useLocation();
    const isHomePage = location.pathname === "/";


    const bars = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `${isActive ? "font-bold" : ""} ${isHomePage
                        ? "text-white hover:text-gray-200"
                        : "text-gray-600 hover:text-gray-800"
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/stats"
                className={({ isActive }) =>
                    `${isActive ? "font-bold" : ""} ${isHomePage
                        ? "text-white hover:text-gray-200"
                        : "text-gray-600 hover:text-gray-800"
                    }`
                }
            >
                Statistics
            </NavLink>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    `${isActive ? "font-bold" : ""} ${isHomePage
                        ? "text-white hover:text-gray-200"
                        : "text-gray-600 hover:text-gray-800"
                    }`
                }
            >
                Dashboard
            </NavLink>
        </>
    )

    return (
        <div className={`navbar  max-w-screen-xl mx-auto`}  >
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ">
                        {bars}
                    </ul>
                </div>
                <Link to='/' className='text-xl font-bold'>Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-10 ">
                    {bars}
                </ul>
            </div>
            <div className="navbar-end flex gap-10 relative">

                <Link className="w-10 h-10 bg-white box-border border border-[rgba(11,11,11,0.1)] rounded-full flex items-center justify-center text-black"> <GiShoppingCart className="text-2xl" /> </Link>

                <Link className='w-10 h-10 box-border border bg-white text-black border-[rgba(11,11,11,0.1)] rounded-full flex items-center justify-center'><CiHeart className='text-2xl' /></Link>
            </div>

        </div>
    );
};

export default Navbar;