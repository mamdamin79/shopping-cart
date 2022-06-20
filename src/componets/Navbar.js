import React, { useContext } from 'react';
import { BiCart,BiStore } from "react-icons/bi";
import { cartContext } from "../Context/CartContextProvider"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const {state,dispatch} = useContext(cartContext)
    return (
        <nav className="shadow-lg rounded-md w-full py-4 px-8 flex items-center justify-between bg-white mb-5"> 
            <Link to="/products">
                <li className="list-none">
                    <BiStore className="w-6 h-6 lg:w-7 lg:h-7 text-slate-700 hover:text-slate-900 transition-all duration-300"/>
                </li>
            </Link>
            <Link to="/cart">
                <li className="list-none relative">
                    <BiCart className="w-6 h-6 lg:w-7 lg:h-7 text-slate-700 hover:text-slate-900 transition-all duration-300"/><span className="text-white bg-orange-500  absolute -top-3 -right-3 font-bold rounded-full h-6 w-6 flex items-center justify-center">{state.productsInCart.length}</span>
                </li>
            </Link>
        </nav>
    );
}
 
export default Navbar;