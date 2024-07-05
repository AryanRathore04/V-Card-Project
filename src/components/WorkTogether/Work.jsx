import React from "react";
import "./Work.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Work = () => {
  return (
    <>
      <section className="section dark-bg">
        <div className="container2">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Let's work together?</h2>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse no-gutters contactus-row mx-auto">
            <div className="col-md-7 col-lg-8">
              <div className="contact-form">
                <h2>Get In Touch</h2>
                <form id="contact-form" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="Name"
                          id="name"
                          //   placeholder="Name *"
                          className="form-control"
                          type="text"
                          required /* Added required attribute */
                        />
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>{" "}
                        {/* Added htmlFor attribute */}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="Email"
                          id="email"
                          //   placeholder="Email *"
                          className="form-control"
                          type="email"
                          required /* Added required attribute */
                        />
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>{" "}
                        {/* Added htmlFor attribute */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          name="Subject"
                          id="subject"
                          //   placeholder="Subject *"
                          className="form-control"
                          type="text"
                          required /* Added required attribute */
                        />
                        <label className="form-label" htmlFor="subject">
                          Subject
                        </label>{" "}
                        {/* Added htmlFor attribute */}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          //   placeholder="Your message *"
                          rows="3"
                          className="form-control"
                          required /* Added required attribute */
                        ></textarea>
                        <label className="form-label" htmlFor="message">
                          Comment
                        </label>{" "}
                        {/* Added htmlFor attribute */}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button
                          className="px-btn theme"
                          onClick={(e) => {
                            e.preventDefault();
                            // Add your send mail logic here
                          }}
                          type="button"
                        >
                          <span>Contact Us</span> <i className="arrow"></i>
                        </button>
                        <span
                          id="suce_message"
                          className="text-success"
                          style={{ display: "none" }}
                        >
                          Message Sent Successfully
                        </span>
                        <span
                          id="err_message"
                          className="text-danger"
                          style={{ display: "none" }}
                        >
                          Message Sending Failed
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="contact-info">
                <div className="contact-name">
                  <h5>Mail</h5>
                  <p>aryan4meu@gmail.com</p>
                  <p>berlin4meu@gmail.com</p>
                </div>
                <div className="contact-name">
                  <h5>Visit My Studio</h5>
                  <p>
                    Warnwe Park Streetperrine, <br />
                    FL 33157 New York City
                  </p>
                </div>
                <div className="contact-name">
                  <h5>Phone</h5>
                  <p>+91 98 93 47 73 56</p>
                  <p>+044 123 654 8096</p>
                </div>
                <div className="social-share nav">
                  <a className="dribbble" href="#">
                    <RiFacebookFill />
                  </a>
                  <a className="behance" href="#">
                    <FaTwitter />
                  </a>
                  <a className="linkedin" href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
