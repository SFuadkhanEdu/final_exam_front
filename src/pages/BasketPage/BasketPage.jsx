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
        {basket.map(item=><BasketCard product={item}/>)}
    </div>
    </>
  )
}

export default BasketPage