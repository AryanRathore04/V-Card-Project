import React from "react";
import "./Portfolio.css";
import img4 from "../../assets/image/m-portfolio-1.jpg";
import img5 from "../../assets/image/m-portfolio-2.jpg";
import img6 from "../../assets/image/m-portfolio-3.jpg";
import img7 from "../../assets/image/m-portfolio-5.jpg";
import img8 from "../../assets/image/m-portfolio-4.jpg";
import img9 from "../../assets/image/m-portfolio-6.jpg";

const Portfolio = () => {
  return (
    <>
      <section style={{ backgroundColor: "#1c1d24" }} className="section">
        <div className="container2">
          <div className="row">
            <div className="col6">
              <div className="section-title">
                <h2>Portfolio</h2>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-content">
            <div
              style={{ position: "absolute", left: "0px", top: "0px" }}
              className="grid-item"
            >
              <div className="portfolio-box-1">
                <div class="portfolio-info">
                  <h5>Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src={img4} alt="" />
                  <div className="portfolio-icon">
                    <a className="px-btn white gallery-link" href={img4}>
                      <span>View</span>
                      <i className="arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ position: "absolute", left: "0px", top: "319px" }}
              className="grid-item"
            >
              <div className="portfolio-box-1">
                <div class="portfolio-info">
                  <h5>Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src={img5} alt="" />
                  <div className="portfolio-icon">
                    <a className="px-btn white gallery-link" href={img5}>
                      <span>View</span>
                      <i className="arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ position: "absolute", left: "0px", top: "639px" }}
              className="grid-item"
            >
              <div className="portfolio-box-1">
                <div class="portfolio-info">
                  <h5>Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src={img6} alt="" />
                  <div className="portfolio-icon">
                    <a className="px-btn white gallery-link" href={img6}>
                      <span>View</span>
                      <i className="arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ position: "absolute", left: "0px", top: "959px" }}
              className="grid-item"
            >
              <div className="portfolio-box-1">
                <div class="portfolio-info">
                  <h5>Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src={img7} alt="" />
                  <div className="portfolio-icon">
                    <a className="px-btn white gallery-link" href={img7}>
                      <span>View</span>
                      <i className="arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ position: "absolute", left: "0px", top: "1279px" }}
              className="grid-item"
            >
              <div className="portfolio-box-1">
                <div class="portfolio-info">
                  <h5>Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src={img8} alt="" />
                  <div className="portfolio-icon">
                    <a className="px-btn white gallery-link" href={img8}>
                      <span>View</span>
                      <i className="arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ position: "absolute", left: "0px", top: "1598px" }}
              className="grid-item"
            >
              <div className="portfolio-box-1">
                <div class="portfolio-info">
                  <h5>Momb ios App</h5>
                  <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                  <img src={img9} alt="" />
                  <div className="portfolio-icon">
                    <a className="px-btn white gallery-link" href={img9}>
                      <span>View</span>
                      <i className="arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
