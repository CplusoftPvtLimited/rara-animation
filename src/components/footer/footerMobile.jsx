import React from "react";
import footerLogo from "../../assets/images/footer-logo.jpeg";
import linkIcon from "../../assets/images/link.jpeg";
import "./index.css";

function FooterMobile() {
  return (
    <section className="relative">
      <div className=" bg-[#111111] w-[100%] pl-[25px] py-[30px]  md:py-[50px]">
        <div className="footer-logo">
          {/* <img className="w-[130px]" src={footerLogo} alt="footer logo" /> */}
          <h2 className="text-white text-[22px] mt-[5px]">Pecunia</h2>
        </div>
        <div className="footer-text">
          <p>Bridging Prosperity with Purpose</p>
          <div className=" ml-[-20px] ">
            <ul className="pl-[20px]">
              <a href="/donation">
                <li className="text-white text-[12px] flex cursor-pointer">
                  {" "}
                  Donate to Pecunia's Endowment Fund{" "}
                  <img
                    className="w-[25px] h-[20px] my-auto ml-[5px] cursor-pointer "
                    src={linkIcon}
                    alt="icon1"
                  />{" "}
                </li>
              </a>
              <a href="/sponsership">
                <li className="text-white text-[12px] flex cursor-pointer">
                  {" "}
                  Sponsor a Research Paper{" "}
                  <img
                    className="w-[25px] h-[20px] my-auto ml-[5px] cursor-pointer"
                    src={linkIcon}
                    alt="icon2"
                  />{" "}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterMobile;
