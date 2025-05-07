import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const ChangePassword = () => {
  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex flex-column h-100 p-3">
            <div className="d-flex flex-column flex-grow-1">
              <div className="row h-100">
                <div className="col-xxl-12">
                  <div className="row justify-content-center h-100">
                    <div className="col-lg-6 py-lg-5">
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="auth-logo mb-4">
                          <Link to="/" className="logo-dark">
                            <img
                              src="/assets/images/csp-logo.png"
                              height="24"
                              alt="logo dark"
                            />
                          </Link>

                          <Link to="/" className="logo-light">
                            <img
                              src="/assets/images/csp-logo.png"
                              height="24"
                              alt="logo light"
                            />
                          </Link>
                        </div>

                        <h2 className="fw-bold fs-24">Change Password</h2>
                        <p className="text-muted mt-1 mb-4">
                          Change Your Password Here...
                        </p>

                        <div>
                          <form className="authentication-form">
                            <div className="mb-3">
                              <label className="form-label">Old Password</label>
                              <input
                                type="password"
                                id="example-email"
                                name="example-email"
                                className="form-control"
                                placeholder="Enter your password"
                              />
                            </div>

                            <div className="mb-3">
                              <label className="form-label">New Password</label>
                              <input
                                type="password"
                                id="example-emailffsf"
                                name="example-emailfgfg"
                                className="form-control"
                                placeholder="Enter your password"
                              />
                            </div>

                            <div className="mb-3">
                              <label className="form-label">
                                Confirm Your Password
                              </label>
                              <input
                                type="password"
                                id="example-emailfdf"
                                name="example-emailffdf"
                                className="form-control"
                                placeholder="Enter your password"
                              />
                            </div>

                            <div className="mb-1 text-center d-grid">
                              <button className="btn btn-primary" type="submit">
                                Change Password
                              </button>
                            </div>
                          </form>
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
      <Footer/>
    </div>
  );
};

export default ChangePassword;
