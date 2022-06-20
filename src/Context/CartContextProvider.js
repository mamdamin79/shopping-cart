import React,{ useReducer } from 'react';
const initialState = {
    productsInCart: [],
    totalItems: 0,
    checkOut: false,
    totalPrice: 0
}

const total = (list) =>{
    let jam = 0
    if(list.length > 0){
        list.map(product=> jam += Number(product.price) * Number(product.quantity))
    }
    return jam.toFixed(2)
}
const totalItems = (list) => {
    let totalQuantity = 0
    if(list.length > 0){
        list.map(product=> totalQuantity += Number(product.quantity))
    }
    return totalQuantity

}

export const cartContext = React.createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart" :
            if(!state.productsInCart.find(product => product.id === action.payLoad.id)){
                action.payLoad.quantity = 1
                state.productsInCart.push(action.payLoad)
            }
            return (
                {
                    ...state,
                    productsInCart: [...state.productsInCart],
                    totalPrice: total(state.productsInCart),
                    totalItems: totalItems(state.productsInCart)  
                }
            )
        case "remove" :
            const newProductsInCart =  state.productsInCart.filter(product => product.id !== action.payLoad.id )
            return (
                {
                    ...state,
                    productsInCart: newProductsInCart,
                    totalPrice: total(newProductsInCart),
                    totalItems: totalItems(newProductsInCart)  
                }
            )
        case  "increment" :
            const indexInc = state.productsInCart.findIndex(product => product.id === action.payLoad.id)
            state.productsInCart[indexInc].quantity++;
        return({
            ...state,
            totalPrice: total(state.productsInCart),
            totalItems: totalItems(state.productsInCart)  
            
        })
        case  "decrement" :
            const indexDec = state.productsInCart.findIndex(product => product.id === action.payLoad.id)
            state.productsInCart[indexDec].quantity--;
        return{
            ...state,
            totalPrice: total(state.productsInCart),
            totalItems: totalItems(state.productsInCart)  
        }
        case  "clear" :
            return {
                productsInCart: [],
                totalItems: 0,
                checkOut: false,
                totalPrice: 0
            } ;
        default :
            return state
    }
    

}

const CartContextProvider = (props) => {
    const [state ,dispatch] = useReducer(cartReducer,initialState);
    return (
        <div>
            <cartContext.Provider value={{state:state, dispatch:dispatch}}>
                {props.children}
            </cartContext.Provider>

        </div>
    );
}
 
export default CartContextProvider;