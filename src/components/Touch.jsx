import React from "react";
import icon from "../assets/image/png/icon.png";
import mssg from "../assets/image/png/mssg.png";
import calls from "../assets/image/png/calls.png";
import calendr from "../assets/image/png/calendr.png";
function Touch() {
  return (
    <section className="bg_color py-5">
      <div className="container">
        <div className="model_box py-5">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <button className="fw-bolder fs_12 color_blue border-0 ff_roboto text-center rgb px-3 py-2">
              CONTACTS
            </button>
            <span className="position-relative">
              <h2 className="fw-bolder fs_150 ff_roboto color-blue-op opacity text-center">
                IN TOUCH
              </h2>
              <h2 className="fw-bold fs_36 ff_roboto color_sky bottom_28 ps-5">
                Get It Touch Now
              </h2>
            </span>
            <p className="fw_500 fs_14 ff_roboto color_light_sky text-center py-lg-0 py-5">
              We have developed a unique space where you can work and create. We
              thought of everything to the smallest <br /> detail. You will be
              able to conduct your business, conduct meetings, meetings
            </p>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center">
            <div className="input_border d-flex justify-content-between w_30">
              {" "}
              <input
                className="border-0 input  fw-bold fs_12 ff_roboto color_light_sky w-100 "
                type="text"
                placeholder="First Name"
              />
              <img src={icon} alt="jjk" />
            </div>
            <div className="input_border d-flex justify-content-between w_30 ">
              {" "}
              <input
                className="border-0 input  fw-bold fs_12 ff_roboto color_light_sky w-100"
                type="text"
                placeholder="Last Name"
              />
              <img src={icon} alt="jjk" />
            </div>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-4">
            <div className="input_border d-flex justify-content-between w_30">
              {" "}
              <input
                className="border-0 input  fw-bold fs_12 ff_roboto color_light_sky w-100 "
                type="text"
                placeholder="Email Address"
              />
              <img src={mssg} alt="jjk" />
            </div>
            <div className="input_border d-flex justify-content-between w_30 ">
              {" "}
              <input
                className="border-0 input  fw-bold fs_12 ff_roboto color_light_sky w-100"
                type="text"
                placeholder="Phone Number"
              />
              <img src={calls} alt="jjk" />
            </div>
          </div>
          <div className="d-flex justify-content-center pt-4">
            <div className="input_border d-flex justify-content-between w_100 w_62">
              <input
                className="border-0 input w-100 fw-bold fs_12 ff_roboto color_light_sky"
                type="text"
                placeholder="Your Message"
              />
              <a href="#">
                <img src={calendr} alt="dnmbe" />
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="rounded-5 bg_color_blue border-0 py-2 px-3 mt-5">
              <a className="fw-bolder fs_14 ff_roboto text-white" href="#">
                Send Request
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Touch;
