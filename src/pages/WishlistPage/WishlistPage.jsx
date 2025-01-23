import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useWishlistContext } from '../../context/WishlistContext';
import WishlistCard from '../../components/WishlistCard/WishlistCard';

function WishlistPage() {
    const {addToWishlist,deleteFromWishlist,wishlist,setWishlist} = useWishlistContext();
    return (
      <>
      <Helmet>
          <title>Wishlist Page</title>
      </Helmet>
      <div className="row">
          {wishlist.map(item=><WishlistCard product={item}/>)}
      </div>
      </>
    )
}

export default WishlistPage