import React from 'react'
import"./index.css"
function AboutUsSection() {
  return (
    <div id='about_us_container' className='container'>
    <h1>About Us</h1>
    <div className="card_container">
        <div className="emo_card">
        <i class="fa-regular fa-heart"></i>
            <h5>MADE WITH LOVE</h5>
            <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
        </div>
        <div className="emo_card">
        <i class="fa-regular fa-face-smile"></i>
            <h5>FOR YOUR HAPPINESS</h5>
            <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
        </div>
        <div className="emo_card">
        <i class="fa-regular fa-sun"></i>
            <h5>NATURAL CARE</h5>
            <p>Magna at erat pretium mattis id non odio quisque nec tempor sapien quis eget ligula ispsum sagittis.</p>
        </div>
    </div>
    </div>
  )
}

export default AboutUsSection