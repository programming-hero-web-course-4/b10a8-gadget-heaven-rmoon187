import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div className='box-border border border-[rgba(9,8,15,0.1)] p-5 rounded-2xl w-60 bg-white flex flex-col justify-center h-4/6 gap-3  '>
            <NavLink to={'/'} className={({ isActive }) =>
                `bg-[rgba(9,8,15,0.05)] px-9 py-2 rounded-3xl text-[rgba(9,8,15,0.6)] font-medium ${isActive ? "bg-violet-500" : ""}`
            } > All Product</NavLink>
            {categories.map(category => <NavLink key={category.category_id} to={`/category/${category.category_name}`} className={({ isActive }) =>
                `bg-[rgba(9,8,15,0.05)] px-9 py-2 rounded-3xl text-[rgba(9,8,15,0.6)] font-medium ${isActive ? "bg-violet-500" : ""}`
            }   >{category.category_name}</NavLink>)}
        </div>
    );
};

export default Categories;