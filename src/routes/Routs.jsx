import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layouts from '../layouts/Layouts';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashbord from '../pages/Dashbord';
import Gadgets from '../components/Gadgets';
import Details from '../pages/Details';


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layouts></Layouts>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [

                    {
                        path: "/",
                        element: <Gadgets></Gadgets>,
                        loader: () => fetch('../fake.json')
                    },
                    {
                        path: "/category/:category",
                        element: <Gadgets></Gadgets>,
                        loader: () => fetch('../fake.json')
                    },



                ]
            },
            {
                path: "/stats",
                element: <Statistics></Statistics>,
            },
            {
                path: "/dashboard",
                element: <Dashbord></Dashbord>,
            },
            {
                path: "/gadget/:id",
                element: <Details></Details>,
                loader: () => fetch('../fake.json')
            },
        ]
    },
]);


export default routes;