import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const ClientAdd = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1 mb-3">
                <h4 className="card-title flex-grow-1 fs-4"><Link to="/">Dashboard</Link> | Add Client</h4>

                <Link to="/client" className="btn btn-sm btn-primary fs-4">
                  Client List
                </Link>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          id="product-name"
                          className="form-control"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-12">
                    <label className="form-label">Image</label>
                    <input type="file" name="image" className="form-control" />
                  </div>

                  <div className="p-3  my-3 rounded">
                    <div className="row justify-content-end g-2">
                      <div className="col-lg-2">
                        <Link
                          to="#!"
                          className="btn btn-outline-secondary w-100"
                        >
                          Add Client
                        </Link>
                      </div>
                      <div className="col-lg-2">
                        <Link to="#!" className="btn btn-primary w-100">
                          Cancel
                        </Link>
                      </div>
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

export default ClientAdd;
