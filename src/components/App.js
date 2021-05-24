import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import './Home.css'
import Login from "./Login";
import Signup from "./Signup";
import Videos from "./Videos";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/videos" component={Videos} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
