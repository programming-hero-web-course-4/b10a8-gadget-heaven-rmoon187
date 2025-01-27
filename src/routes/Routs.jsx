import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Statistics from '../pages/Statistics';
import Gadgets from '../components/Gadgets';
import Details from '../pages/Details';
import HomeLayout from '../layouts/HomeLayout';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Cart from '../components/Cart';
import Wish from '../components/Wish';
import ErrorPge from '../pages/error/ErrorPge';



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPge></ErrorPge>,
        children: [
            {
                path: '/',
                loader: () => fetch('/categories.json'),
                element: <Home></Home>,
                children: [
                    {
                        path: "/category/:category",
                        element: <Gadgets></Gadgets>,
                    },
                    {
                        path: "/",
                        element: <Gadgets></Gadgets>,
                    },
                ]
            },
            {
                path: "/details/gadget/:id",
                loader: () => fetch('/fake.json'),
                element: <Details></Details>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard/cart",
                        element: <Cart></Cart>
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <Wish></Wish>
                    },
                ]
            },
            {
                path: "/stats",
                element: <Statistics></Statistics>,
            },
        ]
    },


]);


export default routes;