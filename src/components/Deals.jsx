import React from "react";
import modern from "../assets/image/png/modern.png";
import eye from "../assets/image/png/eye.png";
import town from "../assets/image/png/town.png";
import lake from "../assets/image/png/lake.png";
import center from "../assets/image/png/center.png";
import img from "../assets/image/png/img.png";
import img1 from "../assets/image/png/img1.png";
import img2 from "../assets/image/png/img2.png";
import img3 from "../assets/image/png/img3.png";
import img4 from "../assets/image/png/img4.png";
import ok from "../assets/image/png/ok.png";
function Deals() {
  return (
    <section className="py-2 bg_color">
      <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <button className="fw-bolder fs_12 color_orange border-0 ff_roboto text-center rgb px-3 py-2">
            DEALS
          </button>
          <span className="position-relative">
            <h2 className="fw-bolder fs_200 ff_roboto color-blue-op opacity text-center">
              DEALS
            </h2>
            <h2 className="fw-bold fs_36 ff_roboto color_sky bottom_28">
              Our Best Deals for Today
            </h2>
          </span>
          <p className="fw_500 fs_14 ff_roboto color_light_sky text-center py-lg-0 py-5">
            Real estate is "property consisting of land and the buildings on it,
            along with its natural resources such as crops, <br /> minerals or
            water, immovable property of this nature
          </p>
        </div>
        <div className="d-sm-flex justify-content-center text-center text-sm-start gap-5 py-5">
          <a href="#">
            <p className="fw-bolder fs_13 ff_roboto color_light_sky lines">
              House
            </p>
          </a>
          <a href="#">
            <p className="fw-bolder fs_13 ff_roboto color_light_sky lines">
              Appartament
            </p>
          </a>
          <a href="#">
            <p className="fw-bolder fs_13 ff_roboto color_light_sky lines">
              Office
            </p>
          </a>
          <a href="#">
            <p className="fw-bolder fs_13 ff_roboto color_light_sky lines">
              Warehouse
            </p>
          </a>
          <a href="#">
            <p className="fw-bolder fs_13 ff_roboto color_light_sky lines">
              Parking
            </p>
          </a>
          <a href="#">
            <p className="fw-bolder fs_13 ff_roboto color_light_sky lines">
              Сommercial
            </p>
          </a>
        </div>
        <div className="row py-5">
          <div className="col-sm-6 col-md-4 mb-4 mt-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={modern} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Modern Glass House
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 1,625,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  14 Patrick Brem Ct. Mahwah, NJ07430
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={lake} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Townhouse in the center
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 225,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  9832 Hidden Valley Way
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mt-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={town} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Townhouse in the center
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 225,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  9832 Hidden Valley Way
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={center} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Townhouse in the center
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 225,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  9832 Hidden Valley Way
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mt-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={img} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Townhouse in the center
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 225,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  9832 Hidden Valley Way
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={img1} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Townhouse in the center
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 225,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  9832 Hidden Valley Way
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mt-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={img2} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Flat in Center City
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 225,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  9832 Hidden Valley Way
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={img3} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Flat in Center City
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 225,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  9832 Hidden Valley Way
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mb-4 mt-4">
            <div className="box1">
              <div className="position-relative">
                <img className="w-100" src={img4} alt="bdbgd" />
                <div className=" d-flex justify-content-between">
                  <article className="top_35 d-flex gap-3">
                    <button className="eye py-1 border-0 px-2">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          65
                        </p>
                      </span>
                    </button>
                    <button className="eye py-1 border-0 px-1">
                      <span className="d-flex gap-2 align-items-center">
                        <a href="#">
                          <img src={eye} alt="jdj" />
                        </a>
                        <p className="fw-bolder fs_10 ff_roboto text-white m-0">
                          1995
                        </p>
                      </span>
                    </button>
                  </article>
                  <article className="right_35">
                    <img src={ok} alt="ok" />
                  </article>
                </div>
              </div>
              <div className="py-4">
                <h2 className="fw-bolder fs_15 ff_roboto color_light_blue ps-4">
                  Flat in Center City
                </h2>
                <p className="fw_bold fs_16 ff_roboto color_light_blue ps-4">
                  $ 225,000
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  9832 Hidden Valley Way
                </p>
                <p className="fw_bold fs_13 color_light_white ff_roboto ps-4">
                  3 Beds - 2 baths - 3,450 sqft
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deals;
