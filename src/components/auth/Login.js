import React, { useState } from "react";
import { auth, googleAuthProvider } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dotsLeft from "../../pics/dotsLeft.png";
import dotsright from "../../pics/dotsRight.png";
import navlogo from "../../pics/navlogo.png";

import { useDispatch } from "react-redux";
function Login({ history }) {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailAndPassword(email.password);
      const { user } = result;
      const IdTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: IdTokenResult,
        },
      });
      history.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const googlelogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult,
          },
        });
        history.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const loginform = () => (
    <form onSubmit={handlesubmit}>
      <div className="d-flex w-100 justify-content-center flex-column align-items-center">
        <input
          type="email"
          style={{ width: "350px", borderRadius: "25px" }}
          className="form-control mb-3"
          value={email}
          placeholder="your email"
          onChange={(e) => setemail(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          style={{ width: "350px", borderRadius: "25px" }}
          className="form-control mb-3"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="your password"
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#FFC266",
            width: "350px",
            borderRadius: "25px !important",
          }}
          onClick={handlesubmit}
          className="btn btn-raised"
        >
          Login with Email/Password
        </button>
      </div>
    </form>
  );
  return (
    <div style={{ height: "100vh" }}>
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
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-md-6 offset-md-3">
            <div
              className="mb-2"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={navlogo} alt="" style={{ height: "300px" }} />
              <h4 style={{ marginTop: "-50px", zIndex: "100" }}>
                Login To Your Account
              </h4>
            </div>
            <ToastContainer />
            {loginform()}
            <div className="d-flex w-100 justify-content-center mt-3">
              <button
                style={{
                  backgroundColor: "#DE5246",
                  width: "350px",
                  borderRadius: "25px !important",
                }}
                type="submit"
                onClick={googlelogin}
                className="btn btn-raised"
              >
                Login with google
              </button>
            </div>
            <div className="d-flex w-100 justify-content-center mt-3">
              <span>
                Do not have an account? <a href="/register">Sign Up</a>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
