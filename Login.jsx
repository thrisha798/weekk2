// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"

// function Login(){
//     return(
//         <>
//      <div className="container mt-5">
//     <div className="row justify-content-center">
//         <div className="col-md-4">
//             <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title text-center">Login</h5>
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
// export default Login;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Simulate successful login logic here
    // After successful login, navigate to the Attendance page
    navigate("/attend");
  };

  const handleCreateAccountClick = () => {
    // Navigate to the create account page
    navigate("/create-account");
  };

  const handleForgotClick = () => {
    // Navigate to the forgot password page
    navigate("/forgot");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Student's Login</h5>
              <form>
                <div className="form-group">
                  <input type="text" 
                    id="username" placeholder="Enter your USN"/>
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="password"
                    // className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <br />
                <div className="d-grid">
                  <button
                    type="submit" className="btn btn-primary btn-block"
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

export default Login;

