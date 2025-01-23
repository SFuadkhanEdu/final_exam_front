import React from 'react'
import { Helmet } from 'react-helmet-async'
import BasketCard from '../../components/BasketCard/BasketCard'
import { useBasketContext } from '../../context/BasketContext';

function BasketPage() {
    const {addToBasket,reduceFromBasket,deleteFromBasket,basket,setBasket} = useBasketContext();
  return (
    <>
    <Helmet>
        <title>Basket Page</title>
    </Helmet>
    <div className="row">
        {}
        {basket ? basket.map(item=><BasketCard product={item}/>) : <h1 style={{textAlign:"center", padding:"3rem 0"}}>BASKET IS EMPTY</h1>}
    </div>
    </>
  )
}

export default BasketPage