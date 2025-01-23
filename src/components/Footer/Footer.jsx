import React from 'react'
import "./index.css"
function Footer() {
  return (
    <footer>
        <div className="container">
        <div className="left">
        <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/logo1-1-96x96.png" alt="" />
        <ul>
            <li>ABOUT</li>
            <li>FAQ</li>
            <li>PRODUCTS</li>
            <li>TERMS</li>
            <li>POLICY</li>
        </ul>
        </div>
        <ul>
            <li>INSTAGRAMM</li>
            <li>TWITTER</li>
            <li>FACEBOOK</li>
            <li>PİNTEREST</li>
            <li>BLOG</li>
        </ul>
        <div>
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            <form action="">
                <input type="email" placeholder='Your Email' />
                <button>Send</button>
            </form>
        </div>
        </div>
    </footer>
    )
}

export default Footer