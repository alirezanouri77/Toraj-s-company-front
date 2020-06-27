import React, { Fragment,useState } from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import './Toolbar.css'
import image from './Logo.jpg'
import shop from './Shoppingcart.png'
import {Backdrop} from '@material-ui/core'



const Toolbar = () => {
    const [hover,setHover]=useState(false)

    var triggerHover=()=>{
        setHover(true)
    }
    var triggerHover2=()=>{
        setHover(!hover)
    }
  
    console.log(hover)
 return(
     <Fragment >
         <Backdrop  style={{opacity:'0'}} open={hover} onClick={triggerHover2}/>
         <nav className='toolbar'>
                 <NavLink className='navigation' to="/aboutus">About Us</NavLink>
                 <NavLink className='navigation' to="contactus">Contact Us</NavLink>
                 <NavLink className='navigation' to="/"><img className='Logo' src={image} alt="logo"/></NavLink>
                 {/* <NavLink className='navigation' to="products">Products</NavLink> */}
                    <div   className="btn-group">
                    <NavLink to="#" onMouseOver={triggerHover} role="button"   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Products
                    </NavLink>
                    {hover ?       
                     <div  style={{display:"list-item"}} className="dropdown-menu">
                        <NavLink  className="" to="#">Action</NavLink>
                        <NavLink className="dropdown-tem" to="#">Another action</NavLink>
                        <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="#">Separated link</NavLink>
                    </div> :null}
            
                    </div>
                
                 <NavLink className='cart' to="cart"><img width="35" src={shop} alt="cart"/></NavLink>
         </nav> 
     
     </Fragment>
 )
}

export default withRouter(Toolbar);