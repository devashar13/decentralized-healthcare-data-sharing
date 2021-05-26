import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import './Home.css'
import login from "./auth/Login"
import register from "./auth/Register"
import RegisterComplete from "./auth/completereg"
import Videos from "./Videos";
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user) {
        const idTokenResult = await user.getIdTokenResult()
        dispatch({
          type : 'LOGGED_IN_USER',
          payload : {
            email : user.email,
            token : idTokenResult.token,
          },
        });
      }
    });
    return () => unsubscribe();
  }, [])
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path ='/login' component = {login} />
          <Route exact path ='/register' component = {register} />
          <Route exact path ='/register/complete' component = {RegisterComplete} />
          <Route exact path="/videos" component={Videos} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
