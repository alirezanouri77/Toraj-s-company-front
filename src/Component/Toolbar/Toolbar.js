import React, { Fragment,useState } from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import './Toolbar.css'
import image from './Logo.jpg'
import shop from './IMG_5075.PNG'
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
         <Backdrop  style={{opacity:'0'}} open={hover} onMouseOver={triggerHover2}/>
         <nav className='toolbar'>
                <NavLink className='navigation' to='/'>Home page</NavLink>
                 <NavLink className='navigation' to="/aboutus">About Us</NavLink>
                 <NavLink className='navigation' to="/"><img className='Logo' src={image} alt="logo"/></NavLink>
                 <NavLink className='navigation' to="contactus">Contact Us</NavLink>
                 {/* <NavLink className='navigation' to="products">Products</NavLink> */}
                    <div   className="btn-group">
                    <NavLink  style={{color:'white' , margin:'0 40px'}}to="products" onMouseOver={triggerHover} role="button"   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Products
                    </NavLink>
                    {hover ?       
                     <div  style={{display:"list-item" , backgroundColor:'#cccc'}} className="dropdown-menu">
                        <NavLink  className="dropdown-item"  to="/products/saffrongrinder">Saffron Grinder</NavLink>
                        <NavLink className="dropdown-item" to="/products/mortars">Mortars</NavLink>
                        <NavLink className="dropdown-item" to="/products/jars">Jars</NavLink>
                        <NavLink className="dropdown-item" to="/products/dates">Dates</NavLink>
                        <NavLink className="dropdown-item" to="/products/wallnut">Wallnut</NavLink>
                    </div> :null}
            
                    </div>
                
                 <NavLink className='cart' to="cart"><img width="35" className='cart' src={shop} alt="cart"/></NavLink>
         </nav> 
     
     </Fragment>
 )
}

export default withRouter(Toolbar);