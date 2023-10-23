import React from "react";
import footerLogo from "../../assets/images/footer-logo.jpeg";
import linkIcon from "../../assets/images/link.jpeg";
import "./index.css";

function Footer() {
  return (
    <section className="relative">
      <div className=" bg-[#111111] w-[100%] pl-[25px] py-[50px] md:py-[50px] lg:p-8 ">
        <div className="footer-logo">
          {/* <img className="w-[130px]" src={footerLogo} alt="footer logo" /> */}
          <h2 className="text-white">Pecunia</h2>
        </div>
        <div className="footer-text flex lg:justify-center lg:text-center lg:mt-[-32px]">
          <p>Empowering Finance for a Social World</p>
          {/* <ul className="lg:flex gap-4 justify-center mt-[20px] lg:mt-auto">
            <li className="text-white text-[12px] lg:text flex cursor-pointer mt-4 lg:mt-auto">
              {" "}
              プライバシーポリシー{" "}
              <img
                className="w-[25px] h-[20px] my-auto ml-[5px] cursor-pointer "
                src={linkIcon}
                alt="icon1"
              />{" "}
            </li>
            <li className="text-white text-[12px] lg:text flex cursor-pointer mt-4 lg:mt-auto">
              {" "}
              立命館大学（研究・産学連携）{" "}
              <img
                className="w-[25px] h-[20px] my-auto ml-[5px] cursor-pointer"
                src={linkIcon}
                alt="icon2"
              />{" "}
            </li>
            <li className="text-white text-[12px] lg:text flex cursor-pointer mt-4 lg:mt-auto">
              {" "}
              立命館大学 研究部（学内者向け）
              <img
                className="w-[25px] h-[20px] my-auto ml-[5px] cursor-pointer"
                src={linkIcon}
                alt="icon3"
              />{" "}
            </li>
            <li className="text-white text-[12px] lg:text flex cursor-pointer mt-4 lg:mt-auto">
              {" "}
              学園ビジョンR2030{" "}
              <img
                className="w-[25px] h-[20px] my-auto ml-[5px] cursor-pointer"
                src={linkIcon}
                alt="icon4"
              />{" "}
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}

export default Footer;
