import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
function Navbar() {
    return (
        <nav className='container'>
            <div className="nav_logo_div">
                <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-2-96x96.png" alt="" />
                <h1>NATURAL COSMETIC</h1>
            </div>
            <div className="nav_right">
                <ul>
                    <NavLink to={"/products"}><li>HOME</li></NavLink>
                    <NavLink to={"/products/basket"}><li>BASKET</li></NavLink>
                    <NavLink to={"/products/wishlist"}><li>WISHLIST</li></NavLink>
                    <><li><i class="fa-brands fa-facebook"></i></li></>
                    <><li><i class="fa-brands fa-twitter"></i></li></>
                    <><li><i class="fa-brands fa-instagram"></i></li></>
                </ul>
            </div>
            <div className="nav_toggle_div">
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </nav>
    )
}

export default Navbar