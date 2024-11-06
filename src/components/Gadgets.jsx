import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from './Gadget';


const Gadgets = () => {

    const { category } = useParams()

    const allData = useLoaderData()

    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        if (category) {
            const filtered = [...allData].filter(data => data.category === category)
            setGadgets(filtered)
        }
        else {
            setGadgets(allData.slice(0, 9))
        }
    }, [category, allData])


    return (
        <div className='grid grid-cols-3 gap-5 mb-20'>
            {gadgets.map(data => <Gadget key={data.product_id} data={data}></Gadget>)}
        </div>
    );
};

export default Gadgets;