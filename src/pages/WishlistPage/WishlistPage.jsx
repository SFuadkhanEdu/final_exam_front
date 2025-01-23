import React from 'react';
import { Helmet } from 'react-helmet-async';
import WishlistCard from '../../components/WishlistCard/WishlistCard';
import { useWishlistContext } from '../../context/WishlistContext';
import { useEffect } from 'react';

function WishlistPage() {
    const {wishlist} = useWishlistContext();
    useEffect(() => {
        console.log(wishlist);
    }, [])
    
    return (
      <>
      <Helmet>
          <title>Wishlist Page</title>
      </Helmet>
      <div className="row">
          {wishlist.length>0 ? wishlist.map(item=><WishlistCard product={item}/>) : <h1 style={{textAlign:"center", padding:"3rem 0"}}>WISHLIST IS EMPTY</h1>}
      </div>
      </>
    )
}

export default WishlistPage