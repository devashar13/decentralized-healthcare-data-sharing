import React from 'react'
import dotsLeft from '../pics/dotsLeft.png'
import dotsright from '../pics/dotsRight.png'
import photo from '../images/capture2.png'
import mainPageIllustration from '../pics/mainPageIllustration.png'
import { Link, useHistory } from 'react-router-dom';
function Home() {
    let history = useHistory();
    function handleclick(){
        history.push('/videos');
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
    <button onClick={handleclick}>Get Started</button>
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