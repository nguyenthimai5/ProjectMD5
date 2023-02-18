import { useState } from "react";


const Loginorlogout=()=> {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
    return (
        <>
        <header className="top-header"></header>
        <div id="mainCoantiner">
          <div className="main-header">
           
            <div className="folio-btn">
              <a
                className="folio-btn-item ajax"
                href="https://bit.ly/2y6huFG"
                target="_blank"
              >
                <span className="folio-btn-dot" />
                <span className="folio-btn-dot" />
                <span className="folio-btn-dot" />
                <span className="folio-btn-dot" />
                <span className="folio-btn-dot" />
                <span className="folio-btn-dot" />
                <span className="folio-btn-dot" />
                <span className="folio-btn-dot" />
                <span className="folio-btn-dot" />
              </a>
            </div>
          </div>
          {/*dust particel*/}
          <div>
            <div className="starsec" />
            <div className="starthird" />
            <div className="starfourth" />
            <div className="starfifth" />
          </div>
          {/*Dust particle end-*/}
          <div className="container text-center text-dark mt-5">
            <div className="row">
              <div className="col-lg-4 d-block mx-auto mt-5">
                <div className="row">
                  <div className="col-xl-12 col-md-12 col-md-12">
                    <div className="card">
                      <div className="card-body wow-bg" id="formBg">
                        <h3 className="colorboard">Login</h3>
                        <p className="text-muted">Sign In to your account</p>
                        <div className="input-group mb-3">
                          {" "}
                          <input
                            type="email"
                            className="form-control textbox-dg"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                          />{" "}
                        </div>
                        <div className="input-group mb-4">
                          {" "}
                          <input
                            type="password"
                            className="form-control textbox-dg"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                          />{" "}
                        </div>
                        <div className="row">
                          <div className="col-12">
                            {" "}
                            <button
                              type="submit"
                              className="btn btn-primary btn-block logn-btn"
                            >
                              Login
                            </button>{" "}
                          </div>
                          <div className="col-12">
                            {" "}
                            <a
                              href="forgot-password.html"
                              className="btn btn-link box-shadow-0 px-0"
                            >
                              Forgot password?
                            </a>{" "}
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      
    )
}
export default Loginorlogout;
