import React, { useEffect, useState } from "react";
import LOGOFOOTER from "../assets/img/png/Foterlogo.png";
import ArrowUpper from "../assets/img/png/UpperArrow.png";

function Footer() {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <section className=" bg_DarkBlue rounded-4 py-5 mx-md-3 position-relative overflow-hidden">
        <div className="footer_color position-absolute"></div>
        <section className=" position-relative" style={{ zIndex: "2" }}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      className="bg_blue_faded outline_none px-3 rounded-1 py_13_custom w-100 fw-semibold fs_xl text_greyLight"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="bg_blue_faded outline_none px-3 rounded-1 py_13_custom w-100 fw-semibold fs_xl text_greyLight mt-2"
                      type="text"
                      placeholder="Email"
                    />
                    <div className="d-flex justify-content-between gap-xl-2 gap-1 mt-2">
                      <a
                        className=" fw-semibold fs_xl Footer-Btn px-xl-3 px-1 px-sm-4 px-lg-2  py_13_custom rounded-1 white_space"
                        href="#">
                        <svg
                          className="Svg_Footer_Real1 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          className="Svg_Footer_Real2 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#1AD079"
                          />
                        </svg>
                        Financial Services
                      </a>
                      <a
                        className=" fw-semibold fs_xl Footer-Btn px-xl-4 px-2 px-sm-5 px-lg-2 py_13_custom rounded-1 white_space"
                        href="#">
                        <svg
                          className="Svg_Footer_Real2 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          className="Svg_Footer_Real1 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#1AD079"
                          />
                        </svg>
                        Real Estate
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <textarea
                      className=" w-100 pt_10_custom pb-5 px-2 rounded-2 bg_blue_faded outline_none fw-semibold fs_xl text_greyLight mt-4 mt-lg-0"
                      placeholder="Message.."></textarea>
                    <a
                      className=" py-3 bg_green w-100 d-inline-block text-center fw-semibold mt-1 fs_xl text-white rounded-1 submit_btn_hover border_transperent"
                      href="#">
                      Submit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h2 className=" fw-semibold fs_4xl text-white mt-4 mt-md-0">
                  Contact us
                </h2>
                <p className=" fw-normal fs_xl text_greyLight mt-4">
                  Our Predictive Analytics utilize a combination of event-driven
                  data, historical data.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="Fooer_Before_line pt-sm-5 mt-5 px-4 position-relative d-flex justify-content-center"></div>
        <footer>
          <div className="container">
            <div className="row pt-5 mt-4">
              <div className="col-md-4">
                <div className="d-flex flex-column">
                  <a href="#">
                    <img
                      style={{ maxWidth: "170px" }}
                      className=" mb-1"
                      src={LOGOFOOTER}
                      alt="LOGOFOOTER"
                    />
                  </a>
                  <a
                    className=" fw-semibold fs_xl text-white mt-2 d-inline-block"
                    href="#">
                    info@catalyzeai.com <br /> (941) 867-1761
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-8 col-9">
                <div className="row justify-content-between mt-4 mt-md-0">
                  <div className="col-6">
                    <p className=" fw-semibold fs_xl text-white mb-0">
                      Financial Services
                    </p>
                    <div className=" d-flex flex-column">
                      <a
                        className=" fw-semibold fs_xl text-white mt-3 d-inline-block mb-1"
                        href="#">
                        Pricing
                      </a>
                      <a
                        className=" fw-semibold fs_xl text-white mt-2 mb-1 d-inline-block"
                        href="#">
                        Blog
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <p className=" fw-semibold fs_xl text-white mb-0">
                      Real Estate
                    </p>
                    <div className=" d-flex flex-column">
                      <a
                        className=" fw-semibold fs_xl text-white mt-3 d-inline-block mb-1"
                        href="#">
                        Pricing
                      </a>
                      <a
                        className=" fw-semibold fs_xl text-white mt-2 mb-1 d-inline-block"
                        href="#">
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-3">
                <div className="d-flex justify-content-between mt-4 mt-md-0">
                  <p className=" fw-semibold fs_xl text-white mb-0">LinkedIn</p>

                  <img
                    onClick={() => top()}
                    className=" mt-2"
                    style={{ maxHeight: "441px", cursor: "pointer" }}
                    src={ArrowUpper}
                    alt="ArrowUpper"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-between mt-md-4 pt-md-2">
              <div className="col-md-6">
                <div className="d-md-flex justify-content-between">
                  <p className=" mb-0 fw-normal fs_lg text_grey">
                    All rights reserved.©20022 Catalyze AI
                  </p>
                  <a
                    className=" fw-normal fs_lg text_grey me-4 Footer_LinkAfter position-relative px-xl-3 d-inline-block mt-3 mt-md-0"
                    href="#">
                    Do not sell my data
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-md-flex mt-4 mt-md-0">
                  <a
                    className=" fw-normal fs_lg text_grey me-md-4 Footer_LinkAfter position-relative px-xl-3"
                    href="#">
                    Terms & Conditions
                  </a>
                  <a
                    className=" fw-normal fs_lg text_grey me-4 Footer_LinkAfter position-relative px-xl-3 ms-5 ms-sm-4"
                    href="#">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
