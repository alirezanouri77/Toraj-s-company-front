import React from 'react';
import {BrowserRouter,Switch, Route} from "react-router-dom";
import './App.css';
import Toolbar from './Component/Toolbar/Toolbar';
import Sidebar from './Component/Sidebar/sidebar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Toolbar/>
     <Switch>
       <Route exact path='/products' component={Sidebar}/>
       
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
