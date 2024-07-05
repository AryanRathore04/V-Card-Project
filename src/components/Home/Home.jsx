import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./SlideBar/SlideBar";
import "./Home.css";
import TypingAnimation from "../../TypingAnimation";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="Home_container">
      <div className="Home_Content">
        <FaBars className="toggle-icon" onClick={toggleSidebar} />
        <Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
        <div className="mainContent">
          <header className="header">Aryan</header>
          <div className="Hello">
            <h3>Hello,</h3>
            <h1>I'm Aryan Rathore</h1>
            <p>
              I Am Passionate <TypingAnimation />{" "}
            </p>
            <button style={{width:"50%"}} className="px-btn white">
              <span className="span">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
