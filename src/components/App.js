import React, { useState } from "react";
import Navbar from './Navbar'
import Main from './Main'
const App = () => {
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <Navbar account={account} />
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex">
            {loading ? (
              <div id="loader" className="text-center">
                <p className="Text Center">Loading..</p>
              </div>
            ) : (
              <Main />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
