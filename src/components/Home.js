import React from 'react'
import dotsLeft from '../pics/dotsLeft.png'
import dotsright from '../pics/dotsRight.png'
import photo from '../images/capture2.png'
import mainPageIllustration from '../pics/mainPageIllustration.png'
import { auth, googleAuthProvider } from "./firebase.js";
import {useDispatch} from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
function Home() {
    let history = useHistory();
    function handleclick(){
        history.push('/videos');
    }

  function login(){
    window.location.href="/login"
}
function logout(){
  auth.signOut()
  dispatch({
    type : "LOGOUT",
    payload : null,

  });
  
}
let dispatch = useDispatch()

let {user} = useSelector((state) => ({...state}));

    return (
        <div>
            <img
    src={dotsLeft}
    alt=""
    style=
    {{  position: "absolute",
      width: 145,
      height: 145,
      left: 5,
      top: 123
    }}
  />
  <img
    src={dotsright}
    alt=""
    style={{position: "absolute", right: 0, top: 250}}
  />
  <div
    class="navbar-home d-flex justify-content-between align-items-center p-1" style={{backgroundColor:'#f2f2f5'}}
  >
    <div class="d-flex justify-content-center align-items-center">
    <img
          src={photo}
          width="100"
          height="100"
          className="d-inline-block"
          alt=""
        />
      <h5>DVIDEO</h5>
    </div>
    {!user && (
              <button onClick={login}  style={{height:"50px",width:"140px",padding:"0px"}}>Login</button>
            )}
            {user && (
              <button onClick={logout}  style={{height:"50px",width:"140px",padding:"0px"}}>Logout</button>
            )}
  </div>
  <div class="d-flex justify-content-between align-items-end container">
    <div class="d-flex flex-column">
      <div class="main-title">
        Decentralizing <br />
        Video Sharing ⚡
      </div>
      <div class="subtitle-home">
        Connect with people that matter in just seconds.
      </div>
       
        <button onClick={handleclick}>Get Started</button>

      
    </div>
    <div><img src={mainPageIllustration} alt="" /></div>
  </div>
            
        </div>
    )
}

export default Home