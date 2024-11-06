import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-white  p-10 flex flex-col py-20 mx-auto space-y-10">
            <div className='mx-auto text-center space-y-3  '>
                <h2 className='font-bold text-3xl'>Gadget Heaven</h2>
                <p className='text-[rgba(9,8,15,0.6)]'>Leading the way in cutting-edge technology and innovation.</p>

            </div>
            <hr className='w-4/5 mx-auto ' />
            <div className='mx-auto flex gap-44'>
                <nav>
                    <h6 className="font-bold text-xl mb-3">Services</h6>
                    <div className='text-[rgba(9,8,15,0.6)] space-y-1 flex flex-col'>
                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Order Tracking</a>
                        <a className="link link-hover">Shipping & Delivery</a>
                        <a className="link link-hover">Returns</a>
                    </div>
                </nav>
                <nav >
                    <h6 className="font-bold text-xl mb-3">Company</h6>
                    <div className='text-[rgba(9,8,15,0.6)] space-y-1 flex flex-col'>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Contact</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="font-bold text-xl mb-3">Legal</h6>
                    <div className='text-[rgba(9,8,15,0.6)] space-y-1 flex flex-col'>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
            </div>

        </footer>
    );
};

export default Footer;