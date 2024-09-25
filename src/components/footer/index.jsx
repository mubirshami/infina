import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="footer-styles">
      <div className="footer-content">
        <div className="footer-buttons">
          <p className="terms" onClick={()=>navigate("/terms")}>Terms of use</p>
          <p className="terms" onClick={()=>navigate("/privacy")}>Privacy Policy</p>
        </div>
        <div className="footer-description">
          <p className="description">© 2024 Infiina. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
