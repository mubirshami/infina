import React, { useState, useEffect, useMemo } from "react";
import "./index.css";
import Header from "../header";
import HomeImage from "../../assets/home-nenja.png";
import Footer from "../footer";

const Home = () => {
  const texts = useMemo(() => [
    "Boost Your Portfolio with Infiina's AI-Backed Forex Expertise!",
    "Consistent Profits, Reliable Growth – Experience the Infiina Advantage!",
    "Secure, AI-Powered Trading for Returns You Can Count On!",
    "Join Infiina – Where Cutting-Edge Technology Meets Lucrative Returns!",
    "AI Precision, Expert Strategy – Infiina Ensures Your Path to 300% Return!",
    "Secure, Expert-Guided Investments for Consistent Monthly Returns of 8%-14%",
  ], []);

  const [text, setText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval); // Clean up on unmount
  }, [texts.length]);

  useEffect(() => {
    setText(texts[index]);
  }, [index, texts]);

  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <div className="home-content-text">
            <div className="home-heading">{text}</div>
          </div>
          <div className="home-content-image">
            <img src={HomeImage} alt="Home" className="home-img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
