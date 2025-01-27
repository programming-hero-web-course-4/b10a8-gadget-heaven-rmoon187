import React, { useContext, useEffect, useState } from 'react';
import DashContext from '../provider/DashContext';
import Card from './Card';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cart, setCart } = useContext(DashContext)

    const [cost, setCost] = useState(0)
    const [arr, setArr] = useState([])



    const navigate = useNavigate()

    useEffect(() => {

        const total = cart.reduce((sum, item) => sum + item.price, 0)
        setCost(total.toFixed(2))

    }, [cart])

    useEffect(() => {
        setArr(cart)
    }, [cart])

    const sortCart = () => {
        const sortedCart = [...arr].sort((a, b) => b.price - a.price)
        setArr(sortedCart)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePurchase = () => {
        setIsModalOpen(true);
        setCart([])
        setArr([])
        setCost(0)

    }
    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/')
    }

    return (
        <div className='bg-gray-200 min-h-screen pb-10'>
            <div className='max-w-screen-xl mx-auto p-5 space-y-10'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-bold '>Cart</h1>
                    <div className='flex gap-5 items-center'>
                        <p className='text-xl font-bold'>Total cost: ${cost}</p>
                        <button onClick={sortCart} className="btn btn-outline btn-success">Sort by Price</button>
                        <button disabled={cart.length === 0 || cost === 0}
                            onClick={handlePurchase} className="btn bg-[rgba(149,56,226,0.6)]">Purchase</button>
                    </div>
                </div>
                <div className='flex flex-col  gap-5 '>
                    {arr.length === 0 ? <h2 className='text-center font-bold text-5xl'>No Items Here</h2> :
                        arr.map((item, index) => <Card item={item} key={index}></Card>)
                    }
                </div>
            </div>
            {isModalOpen && <Modal cost={cost} closeModal={closeModal}></Modal>}

        </div>
    );
};

export default Cart;