import React from "react";
import home from "../assets/image/png/home.png";
import ware from "../assets/image/png/ware.png";
import appar from "../assets/image/png/appar.png";
import office from "../assets/image/png/office.png";
import parking from "../assets/image/png/parking.png";
function Service() {
  return (
    <section className="py-2 bg_color">
      <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <button className="fw-bolder fs_12 color_blue border-0 ff_roboto text-center rgb px-3 py-2">
            SERVICES
          </button>
          <span className="position-relative">
            <h2 className="fw-bolder fs_200 ff_roboto color-blue-op opacity text-center">
              SERVICES
            </h2>
            <h2 className="fw-bold fs_36 ff_roboto color_sky bottom_28">
              Services for Maximum Efficiency
            </h2>
          </span>
          <p className="fw_500 fs_14 ff_roboto color_light_sky text-center py-lg-0 py-5">
            We have developed a unique space where you can work and create. We
            thought of everything to the smallest <br /> detail. You will be
            able to conduct your business, conduct meetings, meetings
          </p>
        </div>
        <div className="row py-3 justify-content-center align-items-center">
          <div className="col-lg-2 col-md-4 col-6">
            <div className=" d-flex justify-content-center flex-column align-items-center">
              <img src={home} alt="jewbj" />
              <p className="fw-bold fs_13 ff_roboto color_sky pt-4 ">House</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className=" d-flex justify-content-center flex-column align-items-center">
              <img src={appar} alt="jewbj" />
              <p className="fw-bold fs_13 ff_roboto color_sky pt-4 ">
                Appartament
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className=" d-flex justify-content-center flex-column align-items-center">
              <img src={office} alt="jewbj" />
              <p className="fw-bold fs_13 ff_roboto color_sky pt-4 ">Office</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className=" d-flex justify-content-center flex-column align-items-center">
              <img src={ware} alt="jewbj" />
              <p className="fw-bold fs_13 ff_roboto color_sky pt-4 ">
                Warehouse
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className=" d-flex justify-content-center flex-column align-items-center">
              <img src={parking} alt="jewbj" />
              <p className="fw-bold fs_13 ff_roboto color_sky pt-4 ">Parking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
