import React, { useEffect, useState } from "react";
import Loader1 from "../assets/img/svg/Loader1.svg";
import Loader2 from "../assets/img/svg/Loader2.svg";
import Loader3 from "../assets/img/svg/loader3.svg";
import Loader4 from "../assets/img/svg/loader4.svg";
import Loader5 from "../assets/img/svg/Loader5.svg";
import Loader6 from "../assets/img/svg/Loader6.svg";
import Loader7 from "../assets/img/svg/loader8.svg";
import Loader8 from "../assets/img/svg/Loader9.svg";
import Loader9 from "../assets/img/svg/Loader10.svg";
import mp4 from "../assets/MP4/smoke.mp4";
function Loader() {
  const [loder, setloader] = useState(1);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 6200);
  }, []);
  {
    if (loder === 0) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "initial";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loder ? (
        <section
          className=" position-fixed w-100 min-vh-100 bg_DarkBlue "
          style={{ zIndex: "123456" }}>
          <div>
            <video autoPlay muted src={mp4} />
            <div className="Loader-Animation">
              <span>
                <img src={Loader1} alt="" />
              </span>
              <span>
                <img src={Loader2} alt="" />
              </span>
              <span>
                <img src={Loader3} alt="" />
              </span>
              <span>
                <img src={Loader4} alt="" />
              </span>
              <span>
                <img src={Loader5} alt="" />
              </span>
              <span>
                <img src={Loader6} alt="" />
              </span>
              <span>
                <img src={Loader8} alt="" />
              </span>
              <span>
                <img src={Loader9} alt="" />
              </span>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loader;
