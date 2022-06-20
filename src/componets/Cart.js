import React, { useContext } from 'react';
import { cartContext } from "../Context/CartContextProvider"
import Card from "./Card"
const Cart = () => {
    const {state , dispatch} = useContext(cartContext)
    return (
        <section className='flex flex-col md:flex-row justify-between items-start p-4 gap-2'>
            <main className='w-full  md:w-2/3 lg:w-3/4'>
                {
                 state.productsInCart.length > 0 ? state.productsInCart.map(product => <Card key={product.id} info={product}/>):
                 <h1 className='text-gray-600 font-bold'>no products available in cart :(</h1>
                }
            </main>
            <aside className="shadow-md rounded-md bg-white p-3 w-full md:w-1/3 lg:w-1/4">
                <section>
                    <p className="text-gray-600 font-medium">total items:{state.totalItems}</p>
                    <p className="text-gray-600 font-medium">total price:{state.totalPrice}</p>
                    <div className="flex flex-col items-start">
                        <button onClick={()=> dispatch({type: "clear"})} className="text-white font-medium bg-red-500 px-2 py-1 my-2 hover:bg-red-600 rounded-md shadow-md transition-all duration-300">clear</button>
                        <button className="text-white font-medium bg-green-500 px-2 py-1 rounded-md shadow-md hover:bg-green-600 transition-all duration-300">CheckOut</button>
                    </div>
                </section>
            </aside>
        </section>
    );
}
 
export default Cart;