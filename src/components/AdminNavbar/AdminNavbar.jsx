import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
    return (
        <div className='d-flex gap-5 w-100 justify-content-center'>
            <Link to={"/products/admin/addpage"}>Add Page</Link>
            <Link to={"/products/admin"}>Admin Home Page</Link>
            <Link to={"/products"}>Home Page</Link>
        </div>
    )
}

export default AdminNavbar