import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

function AdminHomePage() {
    const [products, setProducts] = useState([])
    const deleteHandle = (item)=>{
            fetch("http://localhost:3000/products/"+item._id, { 
                method: 'DELETE', 
                headers: { 
                    'Content-type': 'application/json'
                } 
            }); 
            setProducts([])
    }
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products,setProducts])
    return (
        <>
            <Helmet>
                <title>Admin Home Page</title>
            </Helmet>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Desccription</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item => (
                        <tr>
                            <th scope="row">{item._id}</th>
                            <th ><img style={{width:"50px"}} src={item.img} alt="" /></th>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.desc}</td>
                            <td><button type="button" class="btn btn-danger" onClick={()=>deleteHandle(item)}>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default AdminHomePage