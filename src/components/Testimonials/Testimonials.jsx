import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import img10 from "../../assets/image/team-1.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section style={{ backgroundColor: "#131416", fontFamily:"Nunito" }} className="section dark-bg">
      <div className="container2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h2>Testimonials</h2>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {Array(4)
            .fill()
            .map((_, index) => (
              <div className="testimonial-col-01" key={index}>
                <div className="media align-items-center">
                  <div className="img">
                    <img src={img10} title="" alt="" />
                  </div>
                  <div className="media-body">
                    <h6>Nancy Bayers</h6>
                    <span>Founder &amp; CEO at Pxdraft</span>
                  </div>
                </div>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
