import React from "react";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4">
                  <Link to="/">Dashboard</Link> | About
                </h4>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            Title
                          </label>
                          <input
                            type="text"
                            id="product-name"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                          Description One
                        </label>
                        <textarea
                          className="form-control bg-light-subtle"
                          id="description"
                          rows="7"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                          Description Two
                        </label>
                        <textarea
                          className="form-control bg-light-subtle"
                          id="description"
                          rows="7"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            List One
                          </label>
                          <input
                            type="text"
                            id="product-name"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            List Two
                          </label>
                          <input
                            type="text"
                            id="product-name"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            List Three
                          </label>
                          <input
                            type="text"
                            id="product-name"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            List Four
                          </label>
                          <input
                            type="text"
                            id="product-name"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            List Five
                          </label>
                          <input
                            type="text"
                            id="product-name"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            List Six
                          </label>
                          <input
                            type="text"
                            id="product-name"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">Image</label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            Video Link
                          </label>
                          <input
                            type="text"
                            id="product-name"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="p-3  my-3 rounded">
                  <div className="row justify-content-end g-2">
                    <div className="col-lg-2">
                      <Link to="#!" className="btn btn-outline-secondary w-100">
                        Save Change
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
