import React from "react";
import watch_ from "../assets/img/png/Watch.png";
import Greenlines from "../assets/img/png/GreenLines.png";
import Usericon from "../assets/img/png/Usericon.png";
import threelines from "../assets/img/png/ThreelineVarticle.png";
import Line1 from "../assets/img/png/Line_1.png";
import Line2 from "../assets/img/png/line_2.png";
import Line3 from "../assets/img/png/Line_3.png";
import DropeArow from "../assets/img/png/DownArrow.png";
import arrow from "../assets/img/png/NextArrow.png";
import BlackNextarrow from "../assets/img/png/NextArrowblack.png";
function Header() {
  return (
    <>
      <section
        className="   position-relative  py-lg-5 py-4"
        id="header"
        style={{ zIndex: "3" }}>
        <div className=" container">
          <div className="row justify-content-between flex-column-reverse flex-lg-row">
            <div className="col-lg-5">
              <div>
                <div className="d-flex justify-content-end">
                  <div className="Animationbox1">
                    <img
                      style={{ maxWidth: "163px", minHeight: "105px" }}
                      src={Greenlines}
                      alt=""
                    />
                  </div>
                  <div
                    style={{ width: "130px", borderRadius: "6px" }}
                    className="bg-white p-2 Animationbox2 ">
                    <div className="d-flex justify-content-end gap-1 align-items-center mb-2">
                      <img style={{ width: "15px" }} src={watch_} alt="" />
                      <h4 className="fs_md fw-normal ff_Seoge text_Black mb-0 ">
                        2 days ago
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between w-100">
                      <h3 className=" fs_md fw-normal ff_Seoge text_black">
                        Mihail Lacusta
                      </h3>
                    </div>
                    <h3 className="fs_md fw-normal ff_Seoge  text_green py-1 mb-0">
                      $1,293,200
                    </h3>
                    <h5 className="fs_sm fw-normal ff_Seoge text_lightBlack py-1 mb-0">
                      Business Sale
                    </h5>
                    <div className="d-flex gap-3 align-items-center mt-4">
                      <div
                        style={{
                          height: "14px",
                          width: "14px",
                          border: "1px solid #808080",
                        }}
                        className="rounded-1"></div>
                      <h3 className="fs_sm fw-normal ff_Seoge text_black mb-0 ">
                        Contacted
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <div
                    className="Animationbox3 bg-white px-2 py-2 d-flex flex-column justify-content-between d-none d-md-flex"
                    style={{ maxWidth: "160px", borderRadius: "8px" }}>
                    <div className="d-flex justify-content-between w-100">
                      <h3 className=" fs_lg fw-semibold ff_Seoge text_black">
                        Jordan Wentworth
                      </h3>
                      <div>
                        <h4
                          className="fs_md fw-semibold ff_Seoge p-1 d-inline-block rounded-1"
                          style={{ background: "#D4EAF2" }}>
                          New
                        </h4>
                      </div>
                    </div>
                    <h3 className="fs_lg fw-semibold ff_Seoge  text_green py-1 mb-0">
                      $1,293,200
                    </h3>
                    <p
                      className="fs_md fw-normal ff_Seoge text_lightBlack "
                      style={{ maxWidth: "60px" }}>
                      Boston, MA Inheritance
                    </p>
                    <div className="d-flex gap-3 align-items-center">
                      <div
                        style={{
                          height: "18px",
                          width: "18px",
                          border: "2px solid #808080",
                        }}
                        className="rounded-1"></div>
                      <h3 className="fs_md fw-semibold ff_Seoge text_black mb-0 ">
                        Contacted
                      </h3>
                    </div>
                    <div
                      className=" position-absolute bg-white d-flex justify-content-center align-items-center rounded-3"
                      style={{
                        bottom: "-40px",
                        width: "80px",
                        height: "25px",
                      }}>
                      <h2 className=" fs_sm fw-normal text_black mb-0">
                        Active leads{" "}
                        <span
                          style={{
                            height: "5px",
                            width: "4px",
                            background: "green",
                            borderRadius: "50%",
                          }}></span>
                      </h2>
                    </div>{" "}
                  </div>
                  <div
                    className="bg-white p-3 Animationbox4"
                    style={{ width: "228px", borderRadius: "8px" }}>
                    <div
                      className="d-flex justify-content-between align-items-center pb-2 mb-2"
                      style={{ borderBottom: "1px solid #CCCCCC" }}>
                      <div className="d-flex align-items-center gap-2">
                        <img style={{ width: "30px" }} src={Usericon} alt="" />
                        <div>
                          <h3 className=" ff_Seoge fs_md fw-semibold text_black mb-0">
                            Ciera Thomas
                          </h3>
                          <h6 className=" text_grey  ff_Seoge fs_sm fw-semibold text_black">
                            Edit
                          </h6>
                        </div>
                      </div>
                      <img style={{ height: "16px" }} src={threelines} alt="" />
                    </div>
                    <div className="d-flex gap-3 flex-column">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">1.</span>
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={Line1}
                          alt=""
                        />
                        <img style={{ width: "10px" }} src={DropeArow} alt="" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">2.</span>
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={Line2}
                          alt=""
                        />
                        <img style={{ width: "10px" }} src={DropeArow} alt="" />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md ff_Seoge fw-semibold ">3.</span>
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={Line3}
                          alt=""
                        />
                        <img style={{ width: "10px" }} src={DropeArow} alt="" />
                      </div>
                    </div>
                    <div
                      className="Animationbox5 p-2 position-absolute rounded-2"
                      style={{ maxWidth: "100px" }}>
                      <h3 className=" fs_sm fw-normal ff_Seoge text-black">
                        5500 72nd Ave N
                      </h3>
                      <h4 className=" fs_sm fw-normal ff_Seoge text_green">
                        $150,000
                      </h4>
                      <p className=" fs_xsm fw-normal ff_Seoge text_lightBlack opacity-75 mb-0">
                        Pinellas Park, FL inheritance
                      </p>
                      <div className="d-flex justify-content-center">
                        <a href="">
                          <img
                            style={{ width: "10px" }}
                            src={BlackNextarrow}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <h2 className=" ff_Seoge fs_5xl fw-semibold text_black">
                Grow your business with Event-Driven Predictive Analytics
              </h2>
              <p
                className=" ff_Seoge fs_xl fw-notrmal text_black"
                style={{ color: "#4C4C4C" }}>
                It is a long established fact that a reader will be distracted
                by the using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it the look at you.
              </p>
            </div>
          </div>
          <div className="mt-5 pt-3">
            {" "}
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="row pe-xl-5 me-lg-5">
                  <div className="col-4">
                    <div
                      style={{ zIndex: "-1" }}
                      className="d-flex flex-column position-relative align-items-center">
                      <span className=" fs_2xl fw-semibold text_black">
                        400mm+
                      </span>

                      <p className="mt-4 pt-1 fw-normal fs_xl text_black text-center opacity-75">
                        Data point used for analytics
                      </p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div
                      style={{ zIndex: "-1" }}
                      className="d-flex flex-column position-relative align-items-center ">
                      <span className=" fs_2xl fw-semibold text_black">
                        $3tn
                      </span>

                      <p className="mt-4 pt-1 fw-normal fs_xl text_black text-center opacity-75">
                        Investable assets predicted per year
                      </p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div
                      style={{ zIndex: "-1" }}
                      className="d-flex flex-column position-relative align-items-center">
                      <span className=" fs_2xl fw-semibold text_black">
                        $77Bn
                      </span>

                      <p className="mt-4 pt-1 fw-normal fs_xl text_black text-center opacity-75 px-xl-2">
                        Predicted home value transacted per year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex gap-2">
                  <div className="d-flex gap-2 mt-lg-5 mt-4 w-100">
                    {" "}
                    <div className="bg_green HOVER_BLUE w-50 rounded-2 px-sm-4 px-2 py-sm-4 py-2 position-relative overflow-hidden w-100">
                      {" "}
                      <p className=" fw-semibold fs_xl text-white opacity_07 pt-2 mb-0 px-lg-3">
                        boost your{" "}
                      </p>{" "}
                      <h2 className=" fw-semibold text-white fs_2xl mb-sm-4 mb-2 px-lg-3">
                        Financial <span className="d-block">Services</span>{" "}
                      </h2>{" "}
                      <div className="pt-2 px-lg-3 pb-3 d-flex justify-content-between cursor_pointer align-items-center">
                        {" "}
                        <a className=" fw-semibold text-white fs_xl" href="#">
                          Learn more{" "}
                        </a>
                        <img className="w_25" src={arrow} alt="arrow" />{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="HOVER_GREEN d-flex flex-column justify-content-between bg_DarkBlue w-50 rounded-2 px-sm-4 px-3 py-sm-4 py-2 position-relative overflow-hidden w-100">
                      {" "}
                      <div className="d-flex flex-column">
                        <p className=" fw-semibold fs_xl text-white opacity_07 pt-2 mb-0 px-lg-3">
                          boost your{" "}
                        </p>{" "}
                        <h2 className=" fw-semibold text-white fs_2xl mb-sm-4 mb-2 px-lg-3">
                          Real Estate
                        </h2>{" "}
                      </div>
                      <div className="pt-2 px-lg-3 pb-3 d-flex justify-content-between cursor_pointer align-items-center">
                        {" "}
                        <a className=" fw-semibold text-white fs_xl " href="#">
                          Learn more{" "}
                        </a>
                        <img className="w_25" src={arrow} alt="arrow" />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
