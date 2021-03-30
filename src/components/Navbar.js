import React, { Component } from "react";
import Identicon from "identicon.js";
import dvideo from "../pics/logo.png";
import './App.css';
const Navbar = ({ account }) => {
  return (
    <div className="Navbar">
      <div class="navbar-home d-flex justify-content-between align-items-center p-1">
         <div class="d-flex justify-content-center align-items-center">
           <img src={dvideo} alt="hello"></img>
           <h5>newtube</h5>
         </div>
         <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{/* Account... */}</small>
            </small>
            {/* Return Account&Identicon... */}
            {
              account?
              <img 
              className="ml-2 mx-2"
              width="30"
              height="30"
              src={`data:image/png;base64,${new Identicon(account,30).toString()}`}
              />:
              <span></span>
                        
            }
            <b className="text-white">{account}</b>
            
          </li>
        </ul>
      </div>
      
      
    </div>
  );
};

export default Navbar;
