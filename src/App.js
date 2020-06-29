import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';

import AllComponents from './Component/AllComponents';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <AllComponents/>
    </div>
    </BrowserRouter>
  );
}

export default App;
