
import React, { Component } from 'react';
import Frontinit from './frontinit';
import './App.css';
import Home from './Home';
import {Switch, Route} from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/frontinit" component={Frontinit}  />
      </Switch>
    </div>
  )
}

export default App
