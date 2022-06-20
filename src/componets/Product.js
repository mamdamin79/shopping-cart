import React, { useContext } from 'react';
import { shortter } from '../helpers/shortter';
import { Link } from 'react-router-dom'
import {cartContext} from '../Context/CartContextProvider'
import { BiTrash, BiMinus ,BiPlus } from "react-icons/bi";
const Product = (props) => {
    const reducerObject = useContext(cartContext)
    return (
        <div className="bg-white rounded-md shadow-lg p-3 hover:translate-y-2 transition-all duration-300 cursor-pointer">
            <img src={props.productData.image} alt="product_image" className="h-60 mx-auto w-full object-cover " />
            <h3 className="text-center text-slate-800 font-bold text-lg my-2">{shortter(props.productData.title)}</h3>
            <p><span className="text-white bg-orange-500 font-medium px-2 py-1 shadow-lg rounded-md hover:bg-orange-600 cursor-pointer duration-300 transition-all">{props.productData.price} $</span></p>
            <div className="mt-3 flex items-center justify-between">
                <Link className="text-slate-800 font-medium hover:underline" to ={`products/${props.productData.id}`}>details</Link>
                {!reducerObject.state.productsInCart.find(product => product.id === props.productData.id) > 0 ? 
                <button className="text-white bg-blue-500 px-2 py-1 rounded-md shadow-lg hover:bg-blue-600 font-medium transition-all duration-300" onClick={() => reducerObject.dispatch({type: "addToCart" , payLoad: props.productData})}>add to cart</button>:
                <div>
                    <button className="mx-1 text-white bg-green-500 p-1 font-medium shadow-md rounded-sm hover:bg-green-600 transition-all duration-300 cursor-pointer" onClick={() => reducerObject.dispatch({type: "increment" , payLoad: props.productData})}><BiPlus/></button>
                    {reducerObject.state.productsInCart.find(product => product.id === props.productData.id).quantity !== 1 ?
                    <button className="text-white bg-red-500 p-1 cursor-pointer font-medium shadow-md rounded-sm hover:bg-red-600 transition-all duration-300" onClick={() => reducerObject.dispatch({type:"decrement" , payLoad: props.productData})}><BiMinus/></button> 
                    : <button className="text-white bg-red-500 p-1 font-medium shadow-md rounded-sm hover:bg-red-600 transition-all duration-300" onClick={() => reducerObject.dispatch({type : "remove", payLoad: props.productData})}><BiTrash/></button>}
                </div>
                }
            </div>
        </div>
    );
}
 
export default Product;