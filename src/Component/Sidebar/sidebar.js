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
         <header>
        Menu
      </header>
    <nav className="sidebar-nav">
 
      <ul>
        <li>
          <a href="#"><i className="ion-bag"></i> <span>product</span></a>
        </li>
        <li>
          <a href="#"><i className="ion-ios-settings"></i> <span className="">Controls</span></a>
          
        </li>
        <li>
          <a href="#"><i className="ion-ios-briefcase-outline"></i> <span className="">Folio</span></a>
          
        </li>
        <li>
          <a href="#"><i className="ion-ios-analytics-outline"></i> <span className="">Graphicals</span></a>
          
        </li>
        <li>
          <a href="#"><i className="ion-ios-paper-outline"></i> <span className="">Papers</span></a>
         
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