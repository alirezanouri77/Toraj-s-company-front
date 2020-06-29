import React,{Fragment} from 'react'
import './contactdata.css'
import image from './products.png'
import { FaPhone,FaMailBulk } from 'react-icons/fa';

const ContactData = (props) => {
    return(
        <Fragment>
            <div className='pagewrap'>
                <div className='leftwrap'>
                    <img className='image' src={image} alt="products"/>
                    <div className='contact'>
                        <p>
                            We're Here To help <br/>
                            For any Questions or inquiery please contact us at :<br/>
                            <FaPhone value={{className:'react-icons'}}/>:+1-416-666-2115 <br/>
                            <FaMailBulk/>: GoldenYasinc@yahoo.com
                        </p>
                    </div>
                </div>
                <div className='form'>
                         <input className='rightwrap' type="text" placeholder='First Name (Required)'/>
                         <input className='rightwrap' type="text" placeholder='Lats Name (Required)'/>
                             <select className="rightwrap" disabled id="Model">
                                   <option value="" disabled selected>Model</option>
                                   <option value="saab">Saffron Grinder</option>
                                   <option value="opel">Opel</option>
                                   <option value="audi">Audi</option>
                             </select>
                         <input className='rightwrap' type="text" placeholder='Quantity (Required)'/>
                         <input className='rightwrap' type="email" placeholder='Email(Required)'/>
                         <input className='rightwrap' type="text" placeholder='Phone Number (Required)'/>
                         <input className='rightwrap' type="text" placeholder='Address(Optional)'/>
                        <textarea className='textarea'
                         placeholder='Please enter details about your Order (Optional)' cols="55" rows="5"></textarea>
                </div>
            </div>  
        </Fragment>
    )
}

export default ContactData