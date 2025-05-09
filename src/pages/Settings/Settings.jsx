import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Settings = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4">
                  <Link to="/">Dashboard</Link> | Settings
                </h4>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            Address
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
                            Number
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
                            Email
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
                    <div className="col-lg-12 mb-3">
                      <label className="form-label">Logo</label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                          Mission
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
                          Vision
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
                            Facebook Link
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
                            Youtube Link
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
                            Instragram Link
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
                            Whatsapp Link
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
                  <div className="col-lg-12">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-name" className="form-label">
                            Map url
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

export default Settings;
