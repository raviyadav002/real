import React, { useState } from "react";
import threeline from "../assets/image/png/threeline.png";
import search from "../assets/image/png/search.png";
import telegram from "../assets/image/png/call.png";
import call from "../assets/image/png/telegram.png";
import msg from "../assets/image/png/msg.png";
function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="bg_img position-relative  min-vh-100 d-flex flex-column">
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center w-100 ">
          <span className="d-flex gap-3 align-items-cente r">
            <a href="#">
              <img src={threeline} alt="bwebemb" />
            </a>{" "}
            <h2 className="fs_20 fw-bold text-white ff_roboto m-0">
              Constructor
            </h2>
          </span>
          <span className="d-flex gap-3 align-items-center py-3 list-unstyled d-none d-lg-flex">
            <a href="#">
              <img src={search} alt="mnm" />
            </a>
            <p className="m-0 fw_500 fs_14 ff_roboto text-white">Search</p>
          </span>
          <ul className="d-flex gap-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
            <li>
              <a
                class="  text-white text-decoration-none nav_text_hover position-relative  fw-bold fs_13 ff_roboto line position-realative"
                href="#feature"
              >
                About
              </a>
            </li>
            <li>
              <a
                class=" text-white text-decoration-none nav_text_hover position-relative   fw-bold fs_13 ff_roboto line position-realative"
                href="#lets"
              >
                Services
              </a>
            </li>
            <li>
              <a
                class=" text-white text-decoration-none nav_text_hover position-relative fw-bold fs_13 ff_roboto line position-realative"
                href="#popular"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                class=" text-white text-decoration-none nav_text_hover position-relative fw-bold fs_13 ff_roboto line position-realative"
                href="#best"
              >
                Contacts
              </a>
            </li>
          </ul>{" "}
          <li className="d-flex gap-3">
            <a
              class=" text-decoration-none  fs_22 fw-medium text_lightgrey ff_poppins d-flex gap-5 py-3 fw-bold fs_14 ff_roboto text-white list-unstyled d-none d-lg-flex"
              href="#subscribe"
            >
              Get In Touch
            </a>
          </li>
          <label
            className="menu_formatting d-flex justify-content-end d-lg-none"
            for="check"
          >
            <input
              onClick={() => setNavShow(!navShow)}
              className="menu bg-black "
              type="checkbox"
              id="check"
            />
            <span className="span_nav1"></span>
            <span className="span_nav2"></span>
            <span className="span_nav3"></span>
          </label>
        </div>
        <div className="d-lg-none d-flex ">
          <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
            <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-2 gap-md-5 pt-3 transition">
              <li className="d-flex gap-3 align-items-center py-3 list-unstyled  d-lg-flex">
                <a href="#">
                  <img src={search} alt="mnm" />
                </a>
                <p className="m-0 fw_500 fs_14 ff_roboto text-white">Search</p>
              </li>
              <li>
                <a
                  class="text-white text-decoration-none nav_text_hover position-relative fw-bold fs_13 ff_roboto line position-realative"
                  href="#foot"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  class="text-white text-decoration-none nav_text_hover position-relative fw-bold fs_13 ff_roboto line position-realative"
                  href="#"
                >
                  Services
                </a>
              </li>{" "}
              <li>
                <a
                  class="text-white text-decoration-none nav_text_hover position-relative fw-bold fs_13 ff_roboto line position-realativee"
                  href="#"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  class="text-white text-decoration-none nav_text_hover position-relative fw-bold fs_13 ff_roboto line position-realative"
                  href="#"
                >
                  Contacts
                </a>
              </li>
              <li className="d-flex gap-3">
                <a
                  class=" text-decoration-none  fs_22 fw-medium text_lightgrey ff_poppins d-flex gap-5 py-3 fw-bold fs_14 ff_roboto text-white list-unstyled d-none d-lg-flex"
                  href="#subscribe"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-grow-1 flex-column justify-content-center align-items-center">
        <a
          className="fw-bolder fs_12 ff_roboto bg_color_orange text-white px-3 py-2 rounded-5"
          href="#"
        >
          REAL ESTATE
        </a>
        <h2 className="fw-normal fs_64 ff_roboto text-white text-center mx_747 py-lg-5 py-3">
          Invest on Real Estate with Our Company
        </h2>
        <div className="d-flex gap-3 pt-lg-5 pt-3 flex-column flex-md-row">
          <span className="d-flex align-items-center gap-3">
            <a href="#">
              {" "}
              <img src={call} alt="jhjw" />
            </a>
            <p className="fw-bold fs_13 ff_roboto text-white mb-0">
              225 S 1st St Brooklyn, NY 11211
            </p>
          </span>
          <span className="d-flex align-items-center gap-3">
            <a href="#">
              {" "}
              <img src={telegram} alt="jhjw" />
            </a>
            <p className="fw-bold fs_13 ff_roboto text-white mb-0">
              (929) 356-0147
            </p>
          </span>
          <span className="d-flex align-items-center gap-3">
            <a href="#">
              {" "}
              <img src={msg} alt="jhjw" />
            </a>
            <p className="fw-bold fs_13 ff_roboto text-white mb-0">
              hotel@gmail.com
            </p>
          </span>
        </div>
        <div>
          <button className="right_47 fw-bolder fs_14 ff_roboto color-light-blue border-0 px-3 py-2 rounded-5 mt-sm-0 mt-4">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
