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
                    <NavLink><li>HOME</li></NavLink>
                    <NavLink><li>BASKET</li></NavLink>
                    <NavLink><li>WISHLIST</li></NavLink>
                    <NavLink><li><i class="fa-brands fa-facebook"></i></li></NavLink>
                    <NavLink><li><i class="fa-brands fa-twitter"></i></li></NavLink>
                    <NavLink><li><i class="fa-brands fa-instagram"></i></li></NavLink>
                </ul>
            </div>
            <div className="nav_toggle_div">
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </nav>
    )
}

export default Navbar