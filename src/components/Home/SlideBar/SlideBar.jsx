import React from "react";
import { FaTimes } from "react-icons/fa";
import "./SlideBar.css";

const Sidebar = ({ show, toggleSidebar }) => {
  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <FaTimes className="close-icon" onClick={toggleSidebar} />
      <ul>
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>About Me</span>
        </li>
        <li>
          <span>Services</span>
        </li>
        <li>
          <span>Portfolio</span>
        </li>
        <li>
          <span>Blog</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
      <div className="other">
        <div className="work-together">Let's work together?</div>
        <div className="talk-domain">talk@domain.com</div>
      </div>
    </div>
  );
};

export default Sidebar;
