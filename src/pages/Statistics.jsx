import React from "react";
import { useContext } from "react";
import {
    BarChart,
    Bar,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import DashContext from "../provider/DashContext";
import { Helmet } from "react-helmet-async";


const Statistics = () => {

    const { cartItems, wishlistItems } = useContext(DashContext);

    const data = [
        { name: "Cart", count: cartItems.length },
        { name: "Wishlist", count: wishlistItems.length },
    ];

    const detailedData = [
        { name: "Activity", Cart: cartItems.length, Wishlist: wishlistItems.length },
    ];

    return (
        <div className="">
            <Helmet>
                <title>Statistics - Gadget Heaven</title>
            </Helmet>

            <div className=' bg-[rgb(149,56,226)] text-white text-center py-10 space-y-5'>
                <h2 className='font-bold text-3xl'>Statistics</h2>
                <p className='w-3/6 mx-auto'>Dive into the Numbers: Comprehensive Insights on Sales, Trends, and Customer Behavior.Insights and Analytics to Keep You Ahead in the Gadget Game</p>
            </div>
            <div className="bg-gray-200 p-9 pb-20">
                <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-2xl font-bold mb-6">Statistics</h1>
                    <div className="grid gap-6">

                        <div className="bg-white border rounded-xl p-4 shadow">
                            <h2 className="text-lg font-semibold mb-4">Gadget Activities</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#4f46e5" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>


                        <div className="bg-white border rounded-xl p-4 shadow">
                            <h2 className="text-lg font-semibold mb-4">Activity Trends</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={detailedData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Cart" stroke="#4f46e5" fill="#6366f1" />
                                    <Area
                                        type="monotone"
                                        dataKey="Wishlist"
                                        stroke="#ec4899"
                                        fill="#f9a8d4"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
