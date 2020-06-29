import React, { Fragment } from 'react'
import Toolbar from './Toolbar/Toolbar'
import {withRouter,Switch,Route} from 'react-router-dom'
import Products from './Products/Products'
import contactdata from './contactdata/contactdata'


const AllComponents=(props)=>{

    return(
        <Fragment>
            <Toolbar isit={props.history.location.pathname==='/order' ? false :true} />
            <Switch>
            <Route path='/products' component={Products}/>
            <Route path='/order' component={contactdata}/>
            </Switch>
        </Fragment>
     
    )
}


export default withRouter(AllComponents);