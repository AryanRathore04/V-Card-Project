import React from "react";
import "./LatestNews.css";
import img12 from "../../assets/image/blog-1.jpg"
import img13 from "../../assets/image/blog-2.jpg"
import img14 from "../../assets/image/blog-3.jpg"

const LatestNews = () => {
  return (
    <section className="section gray-bg">
      <div className="container2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>Latest News</h2>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blog-dark.html">
                  <img src={img12} title="" alt="" />
                </a>
              </div>
              <div className="blog-info">
                <h5>
                  <a href="blog-dark.html">
                    Prevent 75% of visitors from google analytics
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod.
                </p>
                <div className="btn-bar">
                  <a href="blog-dark.html" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blog-dark.html">
                  <img src={img13} title="" alt="" />
                </a>
              </div>
              <div className="blog-info">
                <h5>
                  <a href="blog-dark.html">
                    Prevent 75% of visitors from google analytics
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod.
                </p>
                <div className="btn-bar">
                  <a href="blog-dark.html" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-grid">
              <div className="blog-img">
                <div className="date">
                  <span>04</span>
                  <label>FEB</label>
                </div>
                <a href="blog-dark.html">
                  <img src={img14} title="" alt="" />
                </a>
              </div>
              <div className="blog-info">
                <h5>
                  <a href="blog-dark.html">
                    Prevent 75% of visitors from google analytics
                  </a>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod.
                </p>
                <div className="btn-bar">
                  <a href="blog-dark.html" className="px-btn-arrow">
                    <span>Read More</span>
                    <i className="arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
