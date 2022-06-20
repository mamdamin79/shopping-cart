import React, { useContext }from 'react';
import { shortter } from "../helpers/shortter"
import { cartContext } from "../Context/CartContextProvider"
import { BiTrash, BiMinus ,BiPlus } from "react-icons/bi";
const Card = (props) => {
    const reducerObject = useContext(cartContext)
    return (
        <div className="bg-white rounded-md shadow-lg p-2 md:p-3 items-center flex justify-between mb-2">
            <img src={props.info.image} alt="product_image" style={{width:"80px",height:"80px",objectFit:"cover"}} />
            <div>
                <h3 className="font-bold text-slate-800">{shortter(props.info.title)}</h3>
                <p className="font-medium text-gray-600">{props.info.price} $</p>
            </div>
            <span className='bg-orange-500 text-white font-medium p-1 rounded-full flex justify-center items-center w-6 h-6'>{props.info.quantity}</span>
                <div>
                    <button className="mx-1 text-white bg-green-500 p-1 font-medium shadow-md rounded-sm hover:bg-green-600 transition-all duration-300 cursor-pointer" onClick={() => reducerObject.dispatch({type: "increment" , payLoad: props.info})}><BiPlus/></button>
                    {reducerObject.state.productsInCart.find(product => product.id === props.info.id).quantity !== 1 ?
                    <button className="text-white bg-red-500 p-1 cursor-pointer font-medium shadow-md rounded-sm hover:bg-red-600 transition-all duration-300" onClick={() => reducerObject.dispatch({type:"decrement" , payLoad: props.info})}><BiMinus/></button> 
                    :<button className="text-white bg-red-500 p-1 font-medium shadow-md rounded-sm hover:bg-red-600 transition-all duration-300" onClick={() => reducerObject.dispatch({type : "remove", payLoad: props.info})}><BiTrash/></button>}
                </div>
                
        </div>
    );
}
 
export default Card;