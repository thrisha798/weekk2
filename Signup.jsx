// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"

// function Signup(){
//     return(
//         <>
//      <div className="container mt-5">
//     <div className="row justify-content-center">
//         <div className="col-md-4">
//             <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title text-center">Sign Up</h5>
//                     <form>
//                         <div className="form-group">
                           
//                             <input type="text" className="form-control" id="username" placeholder="Enter your username"/>
//                         </div><br />
//                         <div className="form-group">
                        
//                             <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
//                         </div><br />
//                         <div className="d-grid">
//                         <button type="submit" className="btn btn-primary btn-block">Login</button>
//                         </div>
                        
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>


        
//         </>
//     );
// };
// export default Signup;

// /* <div className="borde border-primary-subtle p-2 mb-2">
//         <input type="text"  placeholder="username"/>
//         <br /><br />
//         <input type="password" placeholder="password" />
//         <br /><br />
//         <button className="btn btn-primary mx-1">Login</button>
//         </div> */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/mark");
  };

  const handleCreateAccountClick = () => {
    navigate("/create-account");
  };

  const handleForgotClick = () => {
    navigate("/forgot");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Teacher's Login</h5>
              <form>
                <div className="form-group">
                  <input type="text"  id="username" placeholder="Enter your USN"/>
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="password" id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <br />
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleLoginClick}
                  >
                    Login
                  </button>
                </div>
                <div className="text-center  ">
                  <a href="#create-account" onClick={handleCreateAccountClick}>
                    Create Account
                  </a>
                </div>
                <div className="text-center ">
                  <a href="#forgot" onClick={handleForgotClick}>
                    Forgot Password
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
