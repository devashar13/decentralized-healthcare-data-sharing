import React, { useState, useRef } from "react";
import Identicon from "identicon.js";
import dotsLeft from '../pics/dotsLeft.png'
import dotsright from '../pics/dotsRight.png'
import Card from "@material-ui/core/Card";
// import ReactAudioPlayer from 'react-audio-player';
import { FileDrop } from "react-file-drop";
// import ReactJkMusicPlayer from 'react-jinke-music-player';
// import 'react-jinke-music-player/assets/index.css';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import mp3Icon from "../images/mp3.svg";
import "./file-drag.css";
// import './player.scss';

const Main = ({ captureFile, uploadImage, images, tipImageOwner }) => {
  const [desc, setDesc] = useState("");
  const [tip, setTip] = useState(0.1);
  const [file, setFile] = useState("");
  const fileInputRef = useRef(null);
  const onTargetClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="container-fluid mt-5">
        <img
    src={dotsLeft}
    alt=""
    style=
    {{  position: "fixed",
      width: 145,
      height: 145,
      left: 5,
      top: 123
    }}
  />
  <img
    src={dotsright}
    alt=""
    style={{position: "fixed", right: 0, top: 250}}
  />
      <div className="row main-main">
        <div className="content" style={{ marginBottom: "50px" }}>
          <div className="left">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const description = desc;
                uploadImage(description);
              }}
            >
              
              <div className="browse-div">
                <label htmlFor="browse-input" id="browse-input-label">
                  Browse
                </label>
                <input
                  onChange={(event) => {
                    setFile(event.target.files.item(0));
                    captureFile(event, event.target.files);
                    setDesc(event.target.files.item(0).name);
                    // console.log(
                    //     'FILES:',
                    //     event.target.files.item(0).name
                    // );
                  }}
                  ref={fileInputRef}
                  type="file"
                  accept=".mp4,mov"
                  hidden={true}
                  id="browse-input"
                />
              </div>
              <div className="show-files-to-upload">
                {file ? (
                  <>
                    <img src={mp3Icon} className="mp3-icon" alt="" />
                    <h4 className="file-name">{file.name}</h4>
                    <div className="form-group mr-sm-2">
                      <br />
                      <label htmlFor="name-of-file" style={{ marginRight: 30 }}>
                        File Name:{" "}
                      </label>
                      <input
                        type="text"
                        onChange={(e) => {
                          setDesc(e.target.value);
                        }}
                        value={desc}
                        required
                        id="name-of-file imageDesc"
                      />
                    </div>
                    <button
                      className="btn btn-primary btn-block btn-lg"
                      type="submit"
                      style={{ margin: "20px 0" }}
                    >
                      Upload!
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
          <div>
            <hr
              style={{
                width: "100%",
                backgroundColor: "#4959E8",
                color: "#4959E8",
                height: "1.5px",
              }}
            />
          </div>
          <div className="right">
            {images.map((image, key) => {
              return (
                <Card style={{ marginBottom: 50 }} className="card-main">
                  <div className="card-header">
                    <img
                      className="mr-2"
                      width="30"
                      height="30"
                      src={`data:image/png;base64,${new Identicon(
                        image.author,
                        30
                      ).toString()}`}
                      alt="hh"
                    />
                    <small className="text-muted gray">{image.author}</small>
                  </div>
                  <ul id="imageList" className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="text-center">
                        {/* <ReactJkMusicPlayer theme='dark' audioLists={[{musicSrc: `https://ipfs.infura.io/ipfs/${image.hash}` }]} /> */}
                        {/* <ReactAudioPlayer
                                                    src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                                                    autoPlay
                                                    controls
                                                /> */}
                        <video
                          src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                          controls
                          style={{ width: '400px' }}
                        ></video>
                      </div>
                      <p className="white">{image.description}</p>
                    </li>
                    <li key={key} className="list-group-item py-2">
                      <small className="float-left mt-1 text-muted tips-value">
                        TIPS:{" "}
                        {window.web3.utils.fromWei(
                          image.tipAmount.toString(),
                          "Ether"
                        )}{" "}
                        ETH
                      </small>
                      <div style={{ float: "right" }} className="tip-enter-div">
                        <input
                          type="number"
                          placeholder="Tip in ETH"
                          style={{ width: "100px",height:"20px" }}
                          onChange={(e) => {
                            setTip(e.target.value);
                          }}
                          value={tip}
                        />
                        <button
                          className="btn btn-link btn-sm float-right btn-tip ml-3"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei(
                              tip + "",
                              "Ether"
                            );
                            // console.log(
                            //     event.target.name,
                            //     tipAmount
                            // );
                            tipImageOwner(event.target.name, tipAmount);
                          }}
                        >
                          TIP
                        </button>
                      </div>
                    </li>
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
