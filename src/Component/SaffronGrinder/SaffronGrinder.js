import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./SaffronGrinder.css";
import Cards from "./Card";
import Square from "./images/squared.jpg";
import Dimond from "./images/Dimond.jpg";
import SimplePearl from "./images/simple Pearl.jpg";
import PearlPattern from "./images/pearlpattern.jpg";
import Hexagonal from "./images/hexagonal.jpg";

const Saffron = () => {
  return (
    <Fragment>
      
      <div className='cardsforproductrow'>
        {/* <div className='cardsforproductcol'> */}
        <Cards code='1111'Model='Squared' src={Square} />
        <Cards code='1116'Model="Dimond" src={Dimond} />
        <Cards code='1115'Model="Simple Pearl" src={SimplePearl} />
        {/* </div>
       <div className="cardsforproductcol"> */}
       <Cards code='1114'Model="Pearl Pattern" src={PearlPattern} />
        <Cards code='1112'Model="Hexagonal" src={Hexagonal} />
       {/* </div> */}
        
      </div>
    </Fragment>
  );
};

export default withRouter(Saffron);
