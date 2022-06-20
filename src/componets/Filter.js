import React from 'react';
import { Link } from 'react-router-dom';
const Filter = () => {
    return (
        <div className="px-4">
            <ul className="shadow-md rounded-md bg-purple-500 font-medium flex items-center justify-between flex-wrap px-2 py-1">
                <li ><Link className="font-medium text-center text-white" to="/products">all</Link></li>
                <li ><Link  className="font-medium text-center text-white"to="/products/category/jewelery">jewelery</Link></li>
                <li ><Link className="font-medium text-center text-white" to="/products/category/men's clothing">men's</Link></li>
                <li ><Link className="font-medium text-center text-white" to="/products/category/women's clothing">women's</Link></li>
                <li ><Link className="font-medium text-center text-white" to="/products/category/electronics">electronics</Link></li>
            </ul>
        </div>
    );
}
 
export default Filter;