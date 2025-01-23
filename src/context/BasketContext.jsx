import React, { createContext } from 'react'
import { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
const BasketContext = createContext();
export function BasketContextProvider({ children }) {
    const[basket,setBasket] = useLocalStorage("basket",[])
    const addToBasket = (x)=>{
        console.log("ADDED");
        console.log(basket);
        if (isInBasket(x)) {
            console.log("isinbakset");
            setBasket(basket=> basket.map(item=>item._id===x._id? {...item,count:item.count+1}:item))
            return
        }
        
        setBasket(basket=> [...basket,{...x,count:1}])
        
    }
    const reduceFromBasket = (x)=>{
        if (basket.find(item=>item._id===x._id).count ===1) {
            deleteFromBasket(x)
            return
        }
        setBasket(basket=> basket.map(item=>item._id===x._id? {...item,count:item.count-1}:item))
    }
    const deleteFromBasket = (x)=>{
        return setBasket(basket=> basket.filter(item=>item._id!==x._id))
    }
    const isInBasket = (x)=>{
        return Boolean(basket.find(item=>item._id===x._id))
    }
    return (
        <BasketContext.Provider value={{addToBasket,isInBasket,reduceFromBasket,deleteFromBasket,basket,setBasket}}>
            {children}
        </BasketContext.Provider>
    )
}

export function useBasketContext(){
    return useContext(BasketContext)
}