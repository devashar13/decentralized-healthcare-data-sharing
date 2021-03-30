import React from 'react'
import dotsLeft from '../pics/dotsLeft.png'
import dotsright from '../pics/dotsRight.png'
import logo from '../pics/logo.png'
import mainPageIllustration from '../pics/mainPageIllustration.png'
import { useHistory } from 'react-router-dom';
function Home() {
    let history = useHistory();
    function handleclick(){
        history.push('/main');
    }
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
    class="navbar-home d-flex justify-content-between align-items-center p-1"
  >
    <div class="d-flex justify-content-center align-items-center">
      <img src={logo} alt="logo" />
      <h5>Info Scrapper</h5>
    </div>
    <button onClick={handleclick}>Get Started</button>
  </div>
  <div class="d-flex justify-content-between align-items-end container">
    <div class="d-flex flex-column">
      <div class="main-title">
        Generate leads <br />
        at lightning <br />
        speed ⚡
      </div>
      <div class="subtitle-home">
        Connect with people that matter in just seconds.
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <input type="search" placeholder="Search for companies" class="m-2" />
        <button onClick={handleclick}>Get Started</button>
      </div>
    </div>
    <div><img src={mainPageIllustration} alt="" /></div>
  </div>
            
        </div>
    )
}

export default Home
