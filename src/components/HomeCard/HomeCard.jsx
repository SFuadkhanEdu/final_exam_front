import React from 'react'
import { useBasketContext } from '../../context/BasketContext'
import { useWishlistContext } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';
import "./index.css"
function HomeCard({key, product }) {
    const { addToBasket, reduceFromBasket, deleteFromBasket, basket, setBasket } = useBasketContext();
    const { addToWishlist, isInWishlist } = useWishlistContext();
    const basketHandle = () => {
        addToBasket(product)
    }
    return (
        <div key={key} className="card">
            <img src={product.img} alt="" />
            <Link to={"/products/detail/"+product._id}><h3>{product.title}</h3></Link>
            <p>${product.price}.00</p>
            <button className='add_basket' onClick={basketHandle}>add basket</button>
            {isInWishlist(product) ? <i onClick={()=>addToWishlist(product)} class="fa-solid fa-heart"></i> : <i onClick={()=>addToWishlist(product)} class="fa-regular fa-heart"></i>}
        </div>
    )
}

export default HomeCard