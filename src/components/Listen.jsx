import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image/png/image1.png";
import image2 from "../assets/image/png/image2.png";
import image3 from "../assets/image/png/image3.png";
import image4 from "../assets/image/png/image4.png";
import image5 from "../assets/image/png/image5.png";
import image6 from "../assets/image/png/image6.png";
import image7 from "../assets/image/png/image7.png";
import image8 from "../assets/image/png/image8.png";
import camera from "../assets/image/png/camera.png";
import next from "../assets/image/png/next.png";
import prev from "../assets/image/png/prev.png";
function Listen() {
  const myBtn = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <section className="bg_color py-5 position-relative">
      <div className="container">
        <div className="d-xl-flex justify-content-between d-none">
          <button
            className="border-0 slider_button"
            onClick={() => myBtn.current.slickPrev()}
          >
            <img src={prev} alt="jhedje" />
          </button>
          <button
            className="border-0 slider_button1"
            onClick={() => myBtn.current.slickNext()}
          >
            <img src={next} alt="kjhkj" />
          </button>
        </div>
        <Slider ref={myBtn} {...settings}>
          <div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <button className="fw-bolder fs_12 color_green border-0 ff_roboto text-center rgba px-3 py-2">
                INSTAGRAM
              </button>
              <span className="position-relative">
                <h2 className="fw-bolder fs_200 ff_roboto color-blue-op opacity text-center">
                  INSTA
                </h2>
                <h2 className="fw-bold fs_30 ff_roboto color_sky bottom_28">
                  Listen to Our Сustomers @house
                </h2>
              </span>
            </div>{" "}
            <div className="row">
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image1} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image2} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image3} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image4} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image5} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image6} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image7} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image8} alt="jer" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <button className="fw-bolder fs_12 color_green border-0 ff_roboto text-center rgba px-3 py-2">
                INSTAGRAM
              </button>
              <span className="position-relative">
                <h2 className="fw-bolder fs_200 ff_roboto color-blue-op opacity text-center">
                  INSTA
                </h2>
                <h2 className="fw-bold fs_30 ff_roboto color_sky bottom_28">
                  Listen to Our Сustomers @house
                </h2>
              </span>
            </div>{" "}
            <div className="row">
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image1} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image2} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image3} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image4} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image5} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image6} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image7} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image8} alt="jer" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <button className="fw-bolder fs_12 color_green border-0 ff_roboto text-center rgba px-3 py-2">
                INSTAGRAM
              </button>
              <span className="position-relative">
                <h2 className="fw-bolder fs_200 ff_roboto color-blue-op opacity text-center">
                  INSTA
                </h2>
                <h2 className="fw-bold fs_30 ff_roboto color_sky bottom_28">
                  Listen to Our Сustomers @house
                </h2>
              </span>
            </div>{" "}
            <div className="row">
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image1} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image2} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image3} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image4} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image5} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image6} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image7} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image8} alt="jer" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <button className="fw-bolder fs_12 color_green border-0 ff_roboto text-center rgba px-3 py-2">
                INSTAGRAM
              </button>
              <span className="position-relative">
                <h2 className="fw-bolder fs_200 ff_roboto color-blue-op opacity text-center">
                  INSTA
                </h2>
                <h2 className="fw-bold fs_30 ff_roboto color_sky bottom_28">
                  Listen to Our Сustomers @house
                </h2>
              </span>
            </div>{" "}
            <div className="row">
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image1} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image2} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image3} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image4} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image5} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image6} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image7} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image8} alt="jer" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <button className="fw-bolder fs_12 color_green border-0 ff_roboto text-center rgba px-3 py-2">
                INSTAGRAM
              </button>
              <span className="position-relative">
                <h2 className="fw-bolder fs_200 ff_roboto color-blue-op opacity text-center">
                  INSTA
                </h2>
                <h2 className="fw-bold fs_30 ff_roboto color_sky bottom_28">
                  Listen to Our Сustomers @house
                </h2>
              </span>
            </div>{" "}
            <div className="row">
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image1} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image2} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image3} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image4} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image5} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image6} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image7} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image8} alt="jer" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center flex-column align-items-center">
              <button className="fw-bolder fs_12 color_green border-0 ff_roboto text-center rgba px-3 py-2">
                INSTAGRAM
              </button>
              <span className="position-relative">
                <h2 className="fw-bolder fs_200 ff_roboto color-blue-op opacity text-center">
                  INSTA
                </h2>
                <h2 className="fw-bold fs_30 ff_roboto color_sky bottom_28">
                  Listen to Our Сustomers @house
                </h2>
              </span>
            </div>{" "}
            <div className="row">
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image1} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image2} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image3} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image4} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image5} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image6} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image7} alt="jer" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3 py-3 play">
                <div className="position-relative">
                  <div className="position-absolute overlay">
                    <a href="#">
                      <img src={camera} alt="jedmndb" />
                    </a>
                  </div>

                  <img className="w-100" src={image8} alt="jer" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Listen;
