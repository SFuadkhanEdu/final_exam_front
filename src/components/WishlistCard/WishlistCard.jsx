import React from 'react'
import { useWishlistContext } from '../../context/WishlistContext'

function WishlistCard({product}) {
    const { isInWishlist, addToWishlist, deleteFromWishlist, wishlist, setWishlist } = useWishlistContext()
    return (
        <div class="d-flex card align-items-center justify-content-center" style={{ width: "18rem" }}>
            <img src={product.img} class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">price:{product.price}</p>
                <div>
                    <button type="button" class="btn btn-danger" onClick={() => deleteFromWishlist(product)}>delete</button>
                </div>
            </div>
        </div>
    )
}

export default WishlistCard