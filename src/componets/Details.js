import React, { useContext } from 'react';
import { useParams,Link } from 'react-router-dom';
import { productContext } from '../Context/ProductContextProvider'
import styles from './Details.module.css';
const Details = (props) => {
    const id = useParams().id
    const products = useContext(productContext)

    return (
        <div className={styles.container}>
            <section className="shadow-lg rounded-md flex flex-col items-center md:flex-row md:justify-between md:items-center bg-white w-10/12 p-4">
                <img className="object-cover" src={products[id-1].image} alt="product_image"/>
                <div>
                    <h3 className="text-slate-800 font-bold">{products[id-1].title}</h3>
                    <p className="text-gray-700 font-medium my-3">{products[id-1].description}</p>
                    <p className="text-gray-800 font-medium"><span className="text-gray-800 font-medium">category : </span>{products[id-1].category}</p>
                    <div className='flex justify-between items-center my-2'>
                        <p className="text-white bg-orange-500 font-medium px-2 py-1 shadow-lg rounded-md hover:bg-orange-600 cursor-pointer duration-300 transition-all">{products[id-1].price} $</p>
                        <Link className="text-slate-800 font-medium hover:underline" to="/products">back to store</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Details;