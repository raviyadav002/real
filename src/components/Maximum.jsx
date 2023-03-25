import React from "react";
import antkrish from "../assets/image/png/antkrish.png";
import noah from "../assets/image/png/noah.png";
import nelli from "../assets/image/png/nelli.png";
function Maximum() {
  return (
    <section className="py-5 bg_color">
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
        <div className="row justify-content-center py-5">
          <div className="col-sm-6 col-md-4 mt-sm-0 mt-2">
            <div className="box2">
              <p className=" color_light_sky fw-bold fs_13 ff_roboto py-4 px-4 mx_295">
                Thank you very much for the house found. This is an ideal option
                for our family at the location and price. The company employs
                real professionals who will always
              </p>
            </div>
            <div className="d-flex gap-4 align-items-center ps-4 pt-3">
              <img src={antkrish} alt="hhjm" />
              <div>
                <h2 className="color_light_sky fw-bold fs_14 ff_roboto">
                  Herbert Lindsey
                </h2>
                <p className="fw-bold fs_12 ff_roboto color_light_white m-0">
                  New York, USA
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mt-sm-0 mt-2">
            <div className="box2">
              <p className=" color_light_sky fw-bold fs_13 ff_roboto py-4 px-4 mx_295">
                A gentleman from New York discovered what he calls an
                “oversight” on the part of 99.9% of all marketers that allows
                him to get otherwise paid-for advertising at Google as well as
                all other search engines.
              </p>
            </div>
            <div className="d-flex gap-4 align-items-center pt-3 ps-4">
              <img src={noah} alt="hhjm" />
              <div>
                <h2 className="color_light_sky fw-bold fs_14 ff_roboto">
                  Noah Russell
                </h2>
                <p className="fw-bold fs_12 ff_roboto color_light_white m-0">
                  New York, USA
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mt-md-0 mt-3">
            <div className="box2">
              <p className=" color_light_sky fw-bold fs_13 ff_roboto py-4 px-4 mx_295">
                Thank you very much for the house found. This is an ideal option
                for our family at the location and price. The company employs
                real professionals who will always
              </p>
            </div>
            <div className="d-flex gap-4 align-items-center pt-3 ps-4">
              <img src={nelli} alt="hhjm" />
              <div>
                <h2 className="color_light_sky fw-bold fs_14 ff_roboto">
                  Nellie Griffith
                </h2>
                <p className="fw-bold fs_12 ff_roboto color_light_white m-0">
                  New York, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Maximum;
