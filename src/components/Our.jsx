import React from "react";

function Our() {
  return (
    <section className="py-5 bg_color">
      <div className="container">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <button className="fw-bolder fs_12 color_green border-0 ff_roboto text-center rgba px-3 py-2">
            OUR STORY
          </button>
          <h2 className="fw-bolder fs_150 ff_roboto color-blue-op opacity text-center position-relative">
            OUR STORY
          </h2>
          <h2 className="fw-bold fs_36 ff_roboto color_sky bottom_40">
            We Will Find the Best Option
          </h2>
          <p className="fw_500 fs_14 ff_roboto color_light_sky py-lg-0 py-5">
            Real estate is "property consisting of land and the buildings on it,
            along with its natural resources such as crops, <br /> minerals or
            water, immovable property of this nature; an interest vested in this
            (also) an item of real property, <br /> (more generally) buildings
            or housing in general.
          </p>
        </div>
        <div className="row py-3 justify-content-center">
          <div className="col-sm-6 col-md-4">
            <div className="box py-5">
              <h2 className="fw_500 fs_30 ff_roboto color_light_sky text-center">
                15 Years
              </h2>
              <p className="fw_500 fs_14 color_light_white ff_roboto text-center">
                In Business
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4  mt-sm-0 mt-3">
            <div className="box py-5">
              <h2 className="fw_500 fs_30 ff_roboto color_light_sky text-center">
                $1 Billion
              </h2>
              <p className="fw_500 fs_14 color_light_white ff_roboto text-center">
                Property Brokered
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4  mt-md-0 mt-3">
            <div className="box py-5">
              <h2 className="fw_500 fs_30 ff_roboto color_light_sky text-center">
                10,000
              </h2>
              <p className="fw_500 fs_14 color_light_white ff_roboto text-center">
                Transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Our;
