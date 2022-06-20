import React, { useContext }from 'react';
import { useParams } from 'react-router-dom';
import { productContext} from '../Context/ProductContextProvider'
import Product from './Product'
const Category = () => {
    let products = useContext(productContext)
    console.log(products)
    let params = useParams()
    return (
        <div className="bg-gray-100 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5 lg:p-6 xl:p-8">
            {products.filter(product => product.category === params.type).map(product => <Product key={product.id} productData={product}/>)}
        </div>
    );
}
 
export default Category;