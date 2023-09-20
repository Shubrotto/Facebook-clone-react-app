import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_left">
          <h3 className="login_logo">Facebook Lite</h3>
          <span className="login_desc">
            Connect with friends and the world around you on Facebook
          </span>
        </div>
        <div className="login_right">
          <div className="login_box">
            <input
              type="email"
              placeholder="Enter Email or Phone No"
              className="login_input"
            />
            <input placeholder="Password" type="text" className="login_input" />
            <button className="login_button">Log in</button>
            <span className="login_forget">Forget Password ?</span>
            <button className="login_registered">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
