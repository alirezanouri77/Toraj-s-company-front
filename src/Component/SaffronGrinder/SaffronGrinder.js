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
        <Cards  src={Square} />
        <Cards Model="Dimond" src={Dimond} />
        <Cards Model="Simple Pearl" src={SimplePearl} />
        {/* </div>
       <div className="cardsforproductcol"> */}
       <Cards Model="Pearl Pattern" src={PearlPattern} />
        <Cards Model="Hexagonal" src={Hexagonal} />
        <Cards Model="Hexagonal" src={Hexagonal} />
        <Cards Model="Hexagonal" src={Hexagonal} />
        <Cards Model="Hexagonal" src={Hexagonal} />
        <Cards Model="Hexagonal" src={Hexagonal} />
        <Cards Model="Hexagonal" src={Hexagonal} />

       {/* </div> */}
        
      </div>
    </Fragment>
  );
};

export default withRouter(Saffron);
