import React, { Fragment } from "react";
import './SaffronGrinder.css'

const Cards = (props) => {
  return (
    <Fragment>
      <div className="productss">
      <img width="250" height="200" src={props.src} alt="" />
      <p>kos amat:{props.mdel}</p>
      <button style={{marginBottom:"10px"}}>add order</button>
      </div>
    
    </Fragment>
  );
};

export default Cards;
