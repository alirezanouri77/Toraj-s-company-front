import React, { Fragment } from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'


const Sidebar = (props) => {

    return(
        <Fragment>
            <div >
                <ul className='sidebar'>
                    <NavLink to='/products/saffrongrinder'><li className='category'>Saffron Grinder</li></NavLink>
                    <NavLink to='/products/mortars'><li className='category'>Mortars</li></NavLink>
                    <NavLink to='/products/jars'><li className='category'>Jars</li></NavLink>
                    <NavLink to='/products/dates'><li className='category'>Dates</li></NavLink>
                    <NavLink to='/products/wallnuts'><li className='category'>Wallnut</li></NavLink>
                </ul>
            </div>
        </Fragment>
    )
}

export default Sidebar