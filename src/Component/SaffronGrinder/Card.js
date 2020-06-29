import React, { Fragment } from "react";
import {withRouter} from 'react-router-dom'
import './SaffronGrinder.css'


const Cards = (props) => {

  const order = () => {
      props.history.push('/order')
  }

  return (
    <Fragment>
      <div className="productss">
      <img style={{marginBottom:'20px'}} width="300" height="200" src={props.src} alt="" />
         <p style={{padding:'5px'}}>Saffron Grinder/Model:{props.Model}/Prodcut code:{props.code}</p>
      <button onClick={order} style={{margin:"30px",backgroundColor:'rgb(224, 195, 26)',pointerEvents:'all'}}>Add to basket</button>
      </div>
    
    </Fragment>
  );
};

export default withRouter(Cards);
