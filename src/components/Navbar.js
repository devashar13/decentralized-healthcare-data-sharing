import React, { Component } from "react";
import Identicon from "identicon.js";
import './Navbar.css'
import photo from "../images/capture2.png"
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux";
import firebase from "./firebase"
import {useDispatch} from "react-redux";
const Navbar = ({ account }) => {
  let dispatch = useDispatch()
  let history = useHistory();
  function login(){
      window.location.href="/login"
  }
  function logout(){
    firebase.auth().signOut()
    dispatch({
      type : "LOGOUT",
      payload : null,

    });
    
}
  let {user} = useSelector((state) => ({...state}));
  return (
    <nav className="navbar custnav f flex-md-nowrap p-0 ">
      <a
        className="navbar-brand col-sm-3 col-md-2 mr-0"
        href="/"
        rel="noopener noreferrer"
      >
        <img
          src={photo}
          width="100"
          height="100"
          className="d-inline-block"
          alt=""
        />
        DVIDEO
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <div style={{display:'flex',flexDirection:'column'}}>
            {!user && (
              <button onClick={login}  style={{height:"50px",width:"140px",padding:"0px"}}>Login</button>
            )}
            {user && (
              <button onClick={logout}  style={{height:"50px",width:"140px",padding:"0px"}}>Logout</button>
            )}
          <small className="text-secondary">
            <small id="account">{account}</small>
          </small>
          {account ? (
            <img
              className="ml-2"
              width="30"
              height="30"
              src={`data:image/png;base64,${new Identicon(
                account,
                30
              ).toString()}`}
            />
          ) : (
            <span></span>
          )}
          </div>
         
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
