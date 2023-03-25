import React from "react";
import star from "../assets/image/png/star.png";
import rating from "../assets/image/png/rating.png";
function Constructor() {
  return (
    <section className="py-5 bg_color">
      <div className="container">
        <div className="row align-items-center justify-content-evenly ps-5">
          <div className="col-sm-6 col-md-4">
            <h2 className="fw-bold fs_24 color_sky">Constructor</h2>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="d-flex gap-5 align-items-center">
              <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">
                Home
              </p>
              <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">
                Home
              </p>
              <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">
                Home
              </p>
            </div>
            <div className="d-flex gap-5 align-items-center">
              <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">
                Home
              </p>
              <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">
                Home
              </p>
              <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">
                Home
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="d-flex pt-3 pt-md-0">
              <img src={star} alt="dbh" />
              <img src={star} alt="dbh" />
              <img src={star} alt="dbh" />
              <img src={star} alt="dbh" />
            </div>

            <div className="d-flex align-items-center gap-3">
              <p className="fw-bold fs_14 ff_roboto color_light_sky m-0">
                5.244 Satisfied Сustomers
              </p>
              <img src={rating} alt="ndbm" />
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-evenly">
          <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">
            © 2030 Comapny. All Rights Reserved.
          </p>
          <div className="d-flex gap-4 ps-5">
            <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">Terms</p>
            <p className="fw-bold fs_13 ff_roboto color_light_sky m-0">
              Privacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Constructor;
