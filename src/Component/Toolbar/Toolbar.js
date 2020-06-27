import React, { Fragment } from 'react'
import {withRouter} from 'react-router-dom'
import './Toolbar.css'

const Toolbar = () => {
 return(
     <Fragment>
         <nav className='toolbar'>
                 <a className='navigation' href="/">Home Page</a>
                 <a className='navigation' href="/aboutus">About Us</a>
                 <a className='navigation' href="/"><img className='Logo' src="./Logo.jpg" alt="logo"/></a>
                 <a className='navigation' href="contactus">Contact Us</a>
                 <a className='navigation' href="products">Products</a>
                 <a className='cart' href="cart"><img src="./Shoppingcart.png" alt="cart"/></a>
         </nav> 
     </Fragment>
 )
}

export default withRouter(Toolbar);