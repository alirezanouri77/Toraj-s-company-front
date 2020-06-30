import React, { Fragment } from 'react'
import Toolbar from './Toolbar/Toolbar'
import {withRouter,Switch,Route} from 'react-router-dom'
import Products from './Products/Products'
import contactdata from './contactdata/contactdata'
import Home from './Home/Home'


const AllComponents=(props)=>{

    return(
        <Fragment>
            <Toolbar isit={props.history.location.pathname==='/order' ? false :true} />
            <Switch>
            <Route path='/products' component={Products}/>
            <Route path='/order' component={contactdata}/>
            <Route path='/' component={Home}/>
            </Switch>
        </Fragment>
     
    )
}


export default withRouter(AllComponents);