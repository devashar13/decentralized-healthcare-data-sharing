import React, { useState } from "react";
import { auth } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import dotsLeft from "../../pics/dotsLeft.png";
import dotsright from "../../pics/dotsRight.png";
import navlogo from "../../pics/navlogo.png";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setemail] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(`Email is sent to ${email}`);
    window.localStorage.setItem("emailForRegistration", email);
    setemail("");
  };

  const registerform = () => (
    <form onSubmit={handlesubmit}>
      <div className="d-flex flex-column  justify-content-center align-items-center">
        <input
          type="email"
          className="form-control"
          style={{ width: "350px", borderRadius: "25px" }}
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="your email"
          autoFocus
        />
        <button
          type="submit"
          className="btn btn-raised mt-3"
          style={{
            backgroundColor: "#FFC266",
            width: "350px",
            borderRadius: "25px !important",
          }}
        >
          Register
        </button>
      </div>
    </form>
  );
  return (
    <div style={{ width: "100%" }}>
        <div
        class="navbar-home d-flex justify-content-between align-items-center p-1"
        style={{ backgroundColor: "#f2f2f5" }}
      >
        <div class="d-flex justify-content-center align-items-center">
        <a
        className="navbar-brand col-sm-3 col-md-2 mr-0"
        href="/"
        rel="noopener noreferrer"
      >
        <img
          src={navlogo}
          width="100"
          height="100"
        style={{marginLeft:"-50px"}}
          alt=""
        />
        DVIDEO
      </a>
        </div>
      </div>
      <img
        src={dotsLeft}
        alt=""
        style={{
          position: "fixed",
          width: 145,
          height: 145,
          left: 5,
          top: 123,
        }}
      />
      <img
        src={dotsright}
        alt=""
        style={{ position: "fixed", right: 0, top: 250 }}
      />
      <div className="container p-5 w-100">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={navlogo} alt="" style={{ height: "300px" }} />
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div
              style={{
                width: "100%",
                display: "flex",
                marginTop: "-30px",
                marginBottom: "3px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>Let's Get To Know You</h4>
            </div>
            <ToastContainer />
            {registerform()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
