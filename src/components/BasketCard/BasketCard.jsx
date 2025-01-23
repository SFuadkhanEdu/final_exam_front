import React from 'react'
import { useContext } from 'react'
import { useBasketContext } from '../../context/BasketContext'

function BasketCard({product}) {
    const {addToBasket,isInBasket,reduceFromBasket,deleteFromBasket,basket,setBasket} = useBasketContext()
  return (
    <div class="d-flex card align-items-center justify-content-center" style={{width: "18rem"}}>
  <img src={product.img} class="card-img-top" alt="..."/>
  <div class="card-body d-flex flex-column align-items-center">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">price:{product.price}</p>
        <div>
        <button type="button" class="btn btn-danger" onClick={()=>reduceFromBasket(product)}>-</button>
        <button type="button" class="btn btn-primary">{product.count}</button>
        <button type="button" class="btn btn-success" onClick={()=>addToBasket(product)}>+</button>
        </div>
  </div>
</div>
  )
}

export default BasketCard