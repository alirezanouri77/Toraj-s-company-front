import React, { Fragment } from 'react'
import './sidebar.css'

const Sidebar = (props) => {
    return(
        <Fragment>
            <div className='sidebar'>
                <ul className=''>
                    <li className='category'>Saffron Grinder</li>
                    <li className='category'>Mortars</li>
                    <li className='category'>Jars</li>
                    <li className='category'>Date</li>
                    <li className='category'>Wallnut</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Sidebar