import React, { Fragment } from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'


const Sidebar = (props) => {

    return(
        // <Fragment>
        //     <div >
        //         <ul style={{marginBottom:"0"}} classNameName='sidebar'>
        //             <NavLink to='/products/saffrongrinder'><li classNameName='category'>Saffron Grinder</li></NavLink>
        //             <NavLink to='/products/mortars'><li classNameName='category'>Mortars</li></NavLink>
        //             <NavLink to='/products/jars'><li classNameName='category'>Jars</li></NavLink>
        //             <NavLink to='/products/dates'><li classNameName='category'>Dates</li></NavLink>
        //             <NavLink to='/products/wallnuts'><li classNameName='category'>Wallnut</li></NavLink>
        //         </ul>
        //     </div>
        // </Fragment>
        <aside className="sidebar">
    <nav className="sidebar-nav">
      <ul style={{margin:'30px'}}>
        <li>
          <a href="products/saffrongrinder"><i className="ion-bag"></i> <span>Saffron Grinder</span></a>
        </li>
        <li>
          <a href="products/mortars"><i className="ion-ios-settings"></i> <span className="">Mortars</span></a>
          
        </li>
        <li>
          <a href="products/jars"><i className="ion-ios-briefcase-outline"></i> <span className="">Jars</span></a>
        </li>
        <li>
          <a href="products/dates"><i className="ion-ios-analytics-outline"></i> <span className="">Dates</span></a>
          
        </li>
        <li>
          <a href="products/wallnut"><i className="ion-ios-paper-outline"></i> <span className="">Wallnut</span></a>
         
        </li>
        
          {/* <a href="#"><i className="ion-ios-navigate-outline"></i> <span className="">Ass Finder</span></a> */}
          {/* <ul className="nav-flyout">
            <li>
              <a href="#"><i className="ion-ios-flame-outline"></i>Burn</a>
            </li>
            <li>
              <a href="#"><i className="ion-ios-lightbulb-outline"></i>Bulbs</a>
            </li>
            <li>
              <a href="#"><i className="ion-ios-location-outline"></i>Where You</a>
            </li>
            <li>
              <a href="#"><i className="ion-ios-locked-outline"></i>On Lock</a>
            </li>
             <li>
              <a href="#"><i className="ion-ios-navigate-outline"></i>Ghostface</a>
            </li>
          </ul> */}
      </ul>
    </nav>
  </aside>
    )
}

export default Sidebar