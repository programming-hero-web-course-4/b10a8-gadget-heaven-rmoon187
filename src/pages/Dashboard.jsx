import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/dashboard/cart");
    }, [navigate]);

    const [activeButton, setActiveButton] = useState('btn-cart');

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };


    return (
        <div>

            <div className='h-[260px] bg-[rgb(149,56,226)] text-white text-center py-10 space-y-5'>
                <h2 className='font-bold text-3xl'>Dashboard</h2>
                <p className='w-3/6 mx-auto'>Discover top-quality gadgets designed to enhance your daily life. Browse our collection for the latest innovations and best deals tailored just for you."</p>
                <div className="space-x-4">
                    <button
                        id='btn-cart'
                        onClick={() => handleButtonClick('btn-cart')}
                        className={`px-9 py-2  rounded-3xl  ${activeButton === 'btn-cart'
                            ? "bg-white text-purple-600 font-bold  "
                            : "  hover:bg-white hover:text-purple-600 text-white outline outline-offset-0 outline-white outline-1 font-semibold "
                            }`}
                    >
                        <Link to={'/dashboard/cart'}>Cart</Link>
                    </button>

                    <button
                        id='btn-wish'
                        onClick={() => handleButtonClick('btn-wish')}
                        className={`px-9 py-2  rounded-3xl  ${activeButton === 'btn-wish'
                            ? "bg-white text-purple-600 font-bold  "
                            : " hover:bg-white hover:text-purple-600 text-white outline outline-offset-0 outline-white outline-1 font-semibold"
                            }`}
                    >
                        <Link to={'/dashboard/wishlist'}>Wishlist</Link>
                    </button>
                </div>
            </div>
            <Outlet></Outlet>


        </div>
    );
};

export default Dashboard;