import React, { useEffect, useState } from 'react';
import DashContext from './DashContext';


const Provider = ({ children }) => {

    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [wish, setWish] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        fetch('/fake.json')
            .then(res => res.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])




    const info = {
        data, cart, setCart, wish, setWish, setCartItems, setWishlistItems, cartItems, wishlistItems
    }
    return (
        <DashContext.Provider value={info}>
            {children}
        </DashContext.Provider>
    );
};

export default Provider;