
import React, {  useEffect } from 'react';
import Frontinit from './frontinit';
import './App.css';
import Home from './Home';
import login from "./auth/Login"
import register from "./auth/Register"
import RegisterComplete from "./auth/completereg"
import {Switch, Route} from "react-router-dom";

import {auth} from './firebase'
import {useDispatch} from 'react-redux'
function App() {
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
    <div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/frontinit" component={Frontinit}  />
          <Route exact path ='/login' component = {login} />
          <Route exact path ='/register' component = {register} />
          <Route exact path ='/register/complete' component = {RegisterComplete} />
      </Switch>
    </div>
  )
}

export default App
