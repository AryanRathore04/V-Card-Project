import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";
import img1 from "../../assets/image/about-me.png";
import CountUp from "react-countup";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsCamera } from "react-icons/bs";
import { BiSolidMicrophoneAlt } from "react-icons/bi";

const About = () => {
  const [widths, setWidths] = useState({
    html: 0,
    wordpress: 0,
    magento: 0,
    uiux: 0,
  });

  const { ref: htmlRef, inView: htmlInView } = useInView({ triggerOnce: true });
  const { ref: wordpressRef, inView: wordpressInView } = useInView({
    triggerOnce: true,
  });
  const { ref: magentoRef, inView: magentoInView } = useInView({
    triggerOnce: true,
  });
  const { ref: uiuxRef, inView: uiuxInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (htmlInView) {
      setWidths((prevWidths) => ({ ...prevWidths, html: 92 }));
    }
    if (wordpressInView) {
      setWidths((prevWidths) => ({ ...prevWidths, wordpress: 72 }));
    }
    if (magentoInView) {
      setWidths((prevWidths) => ({ ...prevWidths, magento: 86 }));
    }
    if (uiuxInView) {
      setWidths((prevWidths) => ({ ...prevWidths, uiux: 88 }));
    }
  }, [htmlInView, wordpressInView, magentoInView, uiuxInView]);

  return (
    <>
      <div className="About_container">
        <section className="About_container_content section">
          <h1 style={{ fontSize: "38px", fontWeight: "800" }}>About Us</h1>
          <h3
            style={{
              color: "#ea4020",
              fontWeight: "800",
              fontSize: "20px",
              padding: "0 60px 0 0",
            }}
          >
            A Lead UX & UI designer based in India
          </h3>
          <p style={{ lineHeight: "27px" }}>
            I{" "}
            <span style={{ color: "#ea4020", fontWeight: "800" }}>
              design and develop
            </span>{" "}
            services for customers of all sizes, specializing in creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences through the bold interface and
            meaningful interactions.
          </p>
          <div className="information_container">
            <div className="left_info">
              <div>
                <strong>Birthday</strong>
              </div>
              <div>
                <strong>Age</strong>
              </div>
              <div>
                <strong>Residence</strong>
              </div>
              <div>
                <strong>Address</strong>
              </div>
              <div>
                <strong>Email</strong>
              </div>
              <div>
                <strong>Phone</strong>
              </div>
              <div>
                <strong>Skype</strong>
              </div>
              <div>
                <strong>Freelance</strong>
              </div>
            </div>
            <div className="right_info">
              <p>/ 29th January 2005</p>
              <p>/ 19 Yr</p>
              <p>/ India</p>
              <p>/ Indore, M.P.</p>
              <p>/ aryan4meu@gmail.com</p>
              <p>/ +91 98 93 47 73 56</p>
              <p>/ aryan4meu</p>
              <p>/ Available</p>
            </div>
          </div>

          <div className="person_image">
            <img src={img1} alt="" />
          </div>
        </section>
        <section className="achivements">
          <div className="achivements_content">
            <div className="achivements_content_content">
              <div className="achivements_content_left">
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div className="left_content">
                    <FaRegHeart
                      style={{
                        color: "#e84a2d",
                        fontSize: "46px",
                        marginTop: "10px",
                      }}
                    />
                  </div>

                  <div className="right_content">
                    <div className="upper_content">
                      <CountUp
                        style={{ fontSize: "30px", fontWeight: "900" }}
                        start={0}
                        end={500}
                        duration={10}
                      />
                    </div>
                    <div className="lower_content">
                      HAPPY <br />
                      CLIENTS
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div className="left_content">
                    <BsCamera
                      style={{
                        color: "#e84a2d",
                        fontSize: "46px",
                        marginTop: "10px",
                      }}
                    />
                  </div>

                  <div className="right_content">
                    <div className="upper_content">
                      <CountUp
                        style={{ fontSize: "30px", fontWeight: "900" }}
                        start={0}
                        end={850}
                        duration={10}
                      />
                    </div>
                    <div className="lower_content">
                      PHOTO <br />
                      CAPTURE
                    </div>
                  </div>
                </div>
              </div>
              <div className="achivements_content_right">
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div className="left_content">
                    <AiOutlineTrophy
                      style={{
                        color: "#e84a2d",
                        fontSize: "48px",
                        marginTop: "10px",
                      }}
                    />
                  </div>

                  <div className="right_content">
                    <div className="upper_content">
                      <CountUp
                        style={{ fontSize: "30px", fontWeight: "900" }}
                        start={0}
                        end={150}
                        duration={10}
                      />
                    </div>
                    <div className="lower_content">
                      PROJECT <br />
                      COMPLETED
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div className="left_content">
                    <BiSolidMicrophoneAlt
                      style={{
                        color: "#e84a2d",
                        fontSize: "48px",
                        marginTop: "10px",
                      }}
                    />
                  </div>

                  <div className="right_content">
                    <div className="upper_content">
                      <CountUp
                        style={{ fontSize: "30px", fontWeight: "900" }}
                        start={0}
                        end={190}
                        duration={10}
                      />
                    </div>
                    <div className="lower_content">
                      TELEPHONIC <br />
                      TALK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Skill-section section">
          <div className="container2">
            <div style={{marginLeft:"15px", marginRight:"15px"}} className="row">
              <div className="col">
                <div className="typo-box">
                  <h6>
                    I{" "}
                    <span style={{ color: "#ea4020", fontWeight: "800" }}>
                      design and develop services
                    </span>{" "}
                    for customers of all sizes, specializing in creating
                    stylish, modern websites, web services and online stores. My
                    passion is to{" "}
                    <span style={{ color: "#ea4020", fontWeight: "800" }}>
                      design digital user experiences
                    </span>{" "}
                    through the bold interface and meaningful interactions.
                  </h6>
                </div>
              </div>
              <div className="col">
                <div className="skill-lt">
                  <h6>HTML5</h6>
                  <div className="skill-bar">
                    <div
                      ref={htmlRef}
                      className="skill-bar-in theme-bg"
                      role="progressbar"
                      aria-valuenow="92"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${widths.html}%` }}
                    >
                      <span>92%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">Figma</h6>
                  <div className="skill-bar bg-dark">
                    <div
                      ref={wordpressRef}
                      className="skill-bar-in theme-bg"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${widths.wordpress}%` }}
                    >
                      <span>75%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">React</h6>
                  <div className="skill-bar bg-dark">
                    <div
                      ref={magentoRef}
                      className="skill-bar-in theme-bg"
                      role="progressbar"
                      aria-valuenow="86"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${widths.magento}%` }}
                    >
                      <span>86%</span>
                    </div>
                  </div>
                </div>
                <div className="skill-lt">
                  <h6 className="dark-color">UI/UX</h6>
                  <div className="skill-bar bg-dark">
                    <div
                      ref={uiuxRef}
                      className="skill-bar-in theme-bg"
                      role="progressbar"
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${widths.uiux}%` }}
                    >
                      <span>88%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
