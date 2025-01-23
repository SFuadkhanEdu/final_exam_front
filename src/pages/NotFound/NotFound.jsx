import React from 'react'
import "./index.css"
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div id='not_found_container'>
    <Helmet>
        <title>NotFound</title>
    </Helmet>
    <div>NotFoundPage</div>
    <Link to={"/products"}>Go Home</Link>
    </div>
  )
}

export default NotFound