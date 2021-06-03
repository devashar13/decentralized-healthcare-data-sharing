import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import dotsLeft from "../../pics/dotsLeft.png";
import dotsright from "../../pics/dotsRight.png";
import navlogo from "../../pics/navlogo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
function RegisterComplete({ history }) {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    setemail(window.localStorage.getItem("emailForRegistration"));
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("email and password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("password must be at least 6 characters long");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        window.localStorage.removeItem("emailForRegistration");
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        // redux store
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult,
          },
        });

        history.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const completeRegisterform = () => (
    <form onSubmit={handlesubmit}>
        <div className="d-flex flex-column  justify-content-center align-items-center">
      <input
        type="email"
        className="form-control mb-3"
        style={{ width: "350px", borderRadius: "25px" }}
        value={email}
        disabled
      />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="enter your password"
        style={{ width: "350px", borderRadius: "25px" }}
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
        Compelete Registration
      </button>
      </div>
    </form>
  );
  return (
    <div className="w-100">
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
      <div className="container p-5">
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
            <h4>complete registration</h4>
            </div>
            <ToastContainer />
            {completeRegisterform()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComplete;
