import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailPage() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/products/"+id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div class="card d-flex flex-column align-items-center"  style={{width: "18rem"}}>
            <img src={product.img} class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">{product.price}</p>
                <p>{product.desc}</p>
            </div>
        </div>
    )
}

export default DetailPage