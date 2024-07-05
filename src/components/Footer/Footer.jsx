import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer ">
      <div class="container2">
        <div class="row align-items-center">
          <div class="col-md-6 m-10px-tb">
            <div style={{gap:"1rem",fontSize:"25px"}} class="nav justify-content-center justify-content-md-start">
              <a href="#">
                <RiFacebookFill />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div class="col-md-6 m-10px-tb text-center text-md-right">
            <p>© 2020 copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
