import React, { useEffect, useState } from 'react';
import DashContext from './DashContext';


const Provider = ({ children }) => {

    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [wish, setWish] = useState([])

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
        data, cart, setCart, wish, setWish
    }
    return (
        <DashContext.Provider value={info}>
            {children}
        </DashContext.Provider>
    );
};

export default Provider;