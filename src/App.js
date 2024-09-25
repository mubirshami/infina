import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgot-password";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
