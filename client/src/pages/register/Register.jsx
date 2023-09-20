import React from "react";
import "./register.css";

const Register = () => {
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
              type="text"
              placeholder="Enter Username"
              className="login_input"
            />
            <input
              type="email"
              placeholder="Enter Email or Phone No"
              className="login_input"
            />
            <input placeholder="Password" type="text" className="login_input" />
            <input
              placeholder="Password Again"
              type="text"
              className="login_input"
            />
            <button className="login_button">Sign Up</button>
            <button className="login_registered">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
