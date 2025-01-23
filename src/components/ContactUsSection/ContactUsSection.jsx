import React from 'react'
import "./index.css"
function ContactUsSection() {
  return (
    <div className='contact_div container'>
        <div className="text_box">
        <h2>CONTACT US</h2>
        <p>To get special offers to your email</p>
        <p>Amsterdam CA 90291</p>
        <p>email@site.com</p>
        <p>+1 (234) 56-78</p>
        <p>@natural.cosmetic</p>
        </div>
        <div className="form_box">
            <form action="">
                <input className='input' type="text" placeholder='Name*' />
                <input className='input' type="text" placeholder='Email*' />
                <br />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' ></textarea>
                <br />
                <button>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUsSection