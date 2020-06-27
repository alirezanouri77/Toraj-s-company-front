import React, { Fragment } from 'react'
import {withRouter} from 'react-router-dom'
import Sidebar from '../Sidebar/sidebar'
import SaffronGrinder from '../SaffronGrinder/SaffronGrinder'

const Products = (props) => {
    return(
        <Fragment>
            <Sidebar />
            <SaffronGrinder/>
        </Fragment>
    )
}

export default withRouter(Products)