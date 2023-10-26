// CreateAccount.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Forgot() {
  const navigate = useNavigate();

  const handleForgot = () => {
   
    navigate("/mark")
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Forgot Password</h5>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control"  placeholder="Enter your USN" />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Reset password"
                  />
                </div>
                <br />
                <div className="form-group">
                  <input type="password" className="form-control"  placeholder="Confirm a password" />
                </div>
                <br />
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleForgot}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
