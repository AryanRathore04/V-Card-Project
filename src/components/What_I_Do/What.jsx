import React from "react";
import "./What.css";
import img1 from "../../assets/image/first.png";
import img2 from "../../assets/image/be-your-professional-logo-design.png";
import img3 from "../../assets/image/third.png"

const What = () => {
  return (
    <>
      <section style={{ backgroundColor: "#131416" }} className="section">
        <div className="container2">
          <div className="row2">
            <div className="col2">
              <div className="section-title">
                <h2>What I Do</h2>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
            <div className="row2">
              <div className="col3">
                <div className="feature-box-1">
                  <div className="icon">
                    <img src={img1} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Unique design</h5>
                    <p>
                      I design and develop services for customers of all sizes,
                      specializing in creating stylish, modern websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row2">
              <div className="col3">
                <div className="feature-box-1">
                  <div className="icon">
                    <img src={img2} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Different Layout</h5>
                    <p>
                      I design and develop services for customers of all sizes,
                      specializing in creating stylish, modern websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row2">
              <div className="col3">
                <div className="feature-box-1">
                  <div className="icon">
                    <img src={img3} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Make it Simple</h5>
                    <p>
                      I design and develop services for customers of all sizes,
                      specializing in creating stylish, modern websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row2">
              <div className="col3">
                <div className="feature-box-1">
                  <div className="icon">
                    <img src={img2} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Responsiveness</h5>
                    <p>
                      I design and develop services for customers of all sizes,
                      specializing in creating stylish, modern websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row2">
              <div className="col3">
                <div className="feature-box-1">
                  <div className="icon">
                    <img src={img1} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Testing for Perfection</h5>
                    <p>
                      I design and develop services for customers of all sizes,
                      specializing in creating stylish, modern websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row2">
              <div className="col3">
                <div className="feature-box-1">
                  <div className="icon">
                    <img src={img3} alt="" />
                  </div>
                  <div className="feature-content">
                    <h5>Advanced Option</h5>
                    <p>
                      I design and develop services for customers of all sizes,
                      specializing in creating stylish, modern websites.
                    </p>
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

export default What;
