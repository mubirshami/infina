import React from "react";
import "./index.css";
import LoginImage from "../../assets/nenja-logo.png"; // Make sure to replace with your actual image path
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-box">
        <form action="" className="form-styling">
          <div className="login-header">
            <img src={LoginImage} alt="Nenja Logo" className="login-logo" />
            <h2 className="login-title">Forgot Password</h2>
          </div>
          <div className="login-fields">
            <input
              type="text"
              placeholder="Username"
              className="login-input"
            />
          </div>
          <div className="login-button">
          <button type="submit" className="login-btn">FORGOT PASSWORD</button>
          </div>
          <div className="forgot-pass-signin-button">
            <p>Do you know the password already?</p>
            <button onClick={()=>navigate("/login")} className="forgot-pass-login">SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
