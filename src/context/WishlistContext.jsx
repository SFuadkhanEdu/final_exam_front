import React, { createContext } from 'react'
import { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
const WishlistContext = createContext();
export function WishlistContextProvider({ children }) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

    const addToWishlist = (x) => {
        if (isInWishlist(x)) {
            deleteFromWishlist(x)
            return
        }
        setWishlist(basket => [...basket, x])

    }

    const deleteFromWishlist = (x) => {
        return setWishlist(wishlist => wishlist.filter(item => item._id !== x._id))
    }
    const isInWishlist = (x) => {
        return Boolean(wishlist.find(item => item._id === x._id))
    }
    return (
        <WishlistContext.Provider value={{ isInWishlist, addToWishlist, deleteFromWishlist, wishlist, setWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlistContext() {
    return useContext(WishlistContext)
}