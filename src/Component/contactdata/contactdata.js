import React,{Fragment, useState} from 'react'
import './contactdata.css'
import image from './products.png'
import { FaPhone,FaMailBulk } from 'react-icons/fa';

const ContactData = (props) => {
    const [customer,setcostumer]=useState({firstname:"",lastname:"",email:'',phone:'',address:''})
    const [product,setproduct]=useState({Quantity:'',type:'',Detail:''})

    var settingCustomer=e=>{
        const { name, value } = e.target;
        console.log(name)
        setcostumer(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    var settingProduct=e=>{
        const { name, value } = e.target;
        console.log(name)
        setproduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


   

    console.log(product)

    
    return(
        <Fragment>
           
                <div className='leftwrap'>
                    <img className='image' src={image} alt="products"/>
                    <div className='contact'>
                        <p>
                            We're Here To help <br/>
                            For any Questions or inquiery please contact us at :<br/>
                            <FaPhone value={{className:'react-icons'}}/>:+1-416-666-2115 <br/>
                            <FaMailBulk/>: GoldenYasinc@yahoo.com
                        </p>
                        <button className='button'>Submit</button>
                    </div>
                </div>
                <div className='form'>
                         <input onChange={settingCustomer} className='rightwrap' value={customer.firstname}  type="text" name="firstname" placeholder='First Name (Required)'/>
                         <input onChange={settingCustomer} className='rightwrap' value={customer.lastname} type="text" name="lastname" placeholder='Lats Name (Required)'/>
                             <select name="type" value={product.type} onChange={settingProduct} className="rightwrap"  id="">
                                    <option>Product Type</option>
                                   <optgroup label='Saffron Grinder'>
                                       <option value="squared">Squared</option>
                                       <option value="Round">Round</option>
                                       <option value="Hexagonal">Hexagonal</option>
                                       <option value="Pearl Pattern">Pearl Pattern</option>
                                       <option value="Simple Pearl">Simple Pearl</option>
                                       <option value="Dimond">Dimond</option>
                                   </optgroup>
                                   <optgroup label='Mortars'>
                                       <option value="Size A">Size A</option>
                                       <option value="Size B">Size B</option>
                                   </optgroup>
                                   <optgroup label='Jras'>
                                       <option value="Simple Elin 4 Pack">Simple Elin 4 Pack</option>
                                       <option value="Spice Elin 4 Pack">Spice Elin 4 Pack</option>
                                       <option value="Simple Elin">Simple Elin</option>
                                       <option value="Spice Elin">Spice Elin (your choice of spice) </option>
                                   </optgroup>
                                   <optgroup label='Produce'>
                                       <option value="Dates">Dates</option>
                                       <option value="Walnut">Walnut</option>
                                   </optgroup>
                             </select>
                         <input className='rightwrap' onChange={settingCustomer} name='email' value={customer.email} type="email" placeholder='Email(Required)'/>
                         <input className='rightwrap' onChange={settingCustomer} name='phone' value={customer.phone} type="text" placeholder='Phone Number (Required)'/>
                         <input className='rightwrap' onChange={settingCustomer} name='address' value={customer.address} type="text" placeholder='Address(Optional)'/>
                         <input className='rightwrap' onChange={settingProduct} name='Quantity' value={product.Quantity} type="text" placeholder='Quantity (Required)'/>
                        <textarea className='textarea' onChange={settingProduct} name='detail' value={product.detail}
                         placeholder='Please enter details about your Order (Optional)' cols="45" rows="5"></textarea>
                </div>
            
        </Fragment>
    )
}

export default ContactData