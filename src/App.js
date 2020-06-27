import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import './App.css';
import Toolbar from './Component/Toolbar/Toolbar';
import Sidebar from './Component/Sidebar/sidebar';
import Products from './Component/Products/Products';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Toolbar/>
     <Switch>
       <Route  path='/products' component={Products}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
