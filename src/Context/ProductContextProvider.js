import React,{ useEffect, useState } from 'react';
import { getData } from"../services/api"

export const productContext = React.createContext()

const ProductContextProvider = (props) => {
    const [products , setProducts] = useState([])
    
    useEffect(()=>{
        const fetchApi = async () => {
            setProducts(await getData())
        }
        fetchApi()
    },[])
    return (
        <div>
            <productContext.Provider value={products}>
                {props.children}
            </productContext.Provider>

        </div>
    );
}
 
export default ProductContextProvider;