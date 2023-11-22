import React, { useContext } from "react";
import { useState, useEffect } from "react";

import "./student.css";
import About from "../../assets/images/updatedAbout.png";
import Program from "../../assets/images/program-rara.jpeg";
import Outline from "../../assets/images/outline-rara.jpeg";
import Application from "../../assets/images/application-rara.jpeg";
import Contact from "../../assets/images/contact-rara.jpeg";
import Logo from "../../assets/images/pecunia_logo_bg.png";
import FooterLogo from "../../assets/images/pecunia_logo.png";
import FooterLink from "../../assets/images/footer-link.jpeg";
import MainLogo from "../../assets/images/student-main.svg";
import img1 from "../../assets/images/img_01.jpg";
import { AiOutlineMail } from "react-icons/ai";
import StudentContactFrom from "./StudentContactFrom";
import FooterMobile from "../../components/footer/footerMobile";

function Student() {
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    const getStudent = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/student/getStudentPage/1`
      );
      const data = await response.json();
      setStudentData(data.student[0]);
      console.log(
        "🚀 ~ file: index.jsx:13 ~ getStudent ~ data:",
        data.student[0]
      );
    };

    getStudent();
  }, []);

  return (
    <>
      <section className="bg-[#FFFFFF]">
        {/** Outer most */}
        <div className="md:flex">
          {/** Left Side */}
          <div className="left-wrap z-50 hidden md:block">
            <div className="left-container w-[50%] h-[100%] bg-[#990001]">
              <div className="mx-auto" style={{ marginTop: "9pc" }}>
                <img className="main-logo" src={Logo} alt="" />
              </div>

              <div className="logo-text w-[70%] m-auto xl:w-[80%]">
                <h4 className="">
                  Empowering Finance, Sustaining Impact: The Pecunia Endowment
                  Fund
                </h4>
              </div>
              {/** Buttons */}

              <div className="main-buttons w-[80%] mx-auto xl:w-[80%] z-50">
                <div className="flex gap-5 justify-center xl:gap-24 mt-[70px]">
                  <a
                    href="#about"
                    style={{ color: "#383838", textDecoration: "none" }}
                  >
                    <div>
                      <h4 className="">About Our Fellowships</h4>
                    </div>
                  </a>
                  <a
                    href="#program"
                    style={{ color: "#383838", textDecoration: "none" }}
                  >
                    <h4 className="cursor-pointer">Program Outline</h4>
                  </a>
                  <a
                    href="#outline"
                    style={{ color: "#383838", textDecoration: "none" }}
                  >
                    <h4>Duration</h4>
                  </a>
                </div>

                <div className="flex gap-3 xl:gap-24 justify-center mt-8">
                  <a
                    href="#application"
                    className="cursor-pointer"
                    style={{
                      color: "#383838",
                      textDecoration: "none",
                      width: "40%",
                    }}
                  >
                    <h4>Application Process</h4>
                  </a>
                  <a
                    href="#contact"
                    style={{
                      color: "#383838",
                      textDecoration: "none",
                      width: "35%",
                    }}
                  >
                    <h4 className="">Your Next Steps</h4>
                  </a>
                  <a
                    href="#contact"
                    style={{
                      color: "#383838",
                      textDecoration: "none",
                      width: "32%",
                    }}
                  >
                    <h4 className="">Join the Fellowship</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/** Mobile Only */}
          {/** Left Side */}
          <div className=" md:hidden">
            <div className=" bg-[#990001] pb-10">
              <div>
                <img className="logo-student" src={Logo} alt="" />
              </div>

              <div className="mx-auto">
                <img className="main-logo" src={MainLogo} alt="" />
              </div>

              <div className="logo-text w-[70%] m-auto xl:w-[80%]">
                <h4>
                  Empowering Finance, Sustaining Impact: The Pecunia Endowment
                  Fund
                </h4>
              </div>
              {/** Buttons */}

              <div className="main-buttons w-[80%] mx-auto z-50">
                <div className="flex justify-between xl:gap-24 mt-[70px]">
                  <a
                    href="#about"
                    style={{ color: "#383838", textDecoration: "none" }}
                  >
                    <h4 className="">e</h4>
                  </a>
                  <a
                    href="#program"
                    style={{ color: "#383838", textDecoration: "none" }}
                  >
                    <h4 className="cursor-pointer">Join</h4>
                  </a>
                </div>

                <div className="flex justify-between xl:gap-24 mt-[70px]">
                  <a
                    href="#outline"
                    style={{ color: "#383838", textDecoration: "none" }}
                  >
                    <h4>Structure</h4>
                  </a>
                  <a
                    href="#application"
                    className="cursor-pointer"
                    style={{ color: "#383838", textDecoration: "none" }}
                  >
                    <h4>Funding</h4>
                  </a>
                </div>

                <div className="flex justify-between xl:gap-24 mt-[70px]">
                  <a
                    href="#contact"
                    style={{ color: "#383838", textDecoration: "none" }}
                  >
                    <h4 className="">Contact</h4>
                  </a>
                </div>

                <div className="flex gap-8 xl:gap-24 justify-center mt-8"></div>
              </div>
            </div>
          </div>

          {/******************************/}
          {/** Right Side */}
          <div className="right-container pt-[75px] w-[100%]">
            <div className="about-container">
              {/** About heading */}
              <div className="about-section flex gap-4" id="about">
                {/* <img className="w-[80px] xl:w-[120px]" src={About} alt="" /> */}
                <h2>ABOUT OUR FOLLOWSHIPS</h2>
                {/* <p className="my-auto">The Endowment Fund</p> */}
              </div>
              {/** About content */}
              <div className="about-content">
                <div dangerouslySetInnerHTML={{ __html: studentData.about }} />
              </div>
              {/** Image section */}
              {/* <div className="mt-[3.75rem] flex justify-center">
              <img src={img1} alt="" />
            </div> */}
              {/** Below Image */}
              <div className="about-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: studentData.aboutBottom,
                  }}
                />
              </div>
            </div>

            {/******************************/}

            {/** Program heading */}
            <div className="program-container mt-[4.5rem]" id="program">
              <div className="program-section flex gap-4">
                {/* <img className="w-[130px] xl:w-[170px]" src={Program} alt="" /> */}
                <h2>PROGRAM OUTLINE</h2>
                {/* <p className="my-auto">Why Join Our Endowment Fund</p> */}
              </div>

              {/** About content */}
              <div className="program-content">
                <div
                  dangerouslySetInnerHTML={{ __html: studentData.program }}
                />
              </div>
            </div>

            {/******************************/}

            {/** Outline heading */}
            <div className="outline-container mt-[4.5rem]" id="outline">
              <div className="outline-section flex gap-4">
                {/* <img className="w-[130px] xl:w-[160px]" src={Outline} alt="" /> */}
                {/* <p className="my-auto">Governance and the Fund</p> */}
                <h2>DURATION</h2>
              </div>

              {/** Outline content */}
              <div className="outline-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: studentData.outline,
                  }}
                />
              </div>

              {/** Outline */}
              <div className="outline-section flex gap-4 mt-[150px]">
                <img className="w-[130px] xl:w-[160px]" src={Outline} alt="" />
                {/* <p className="my-auto">Investment Streams</p> */}
              </div>
              <div className="outline-content flex">
                <div>
                  {/** Research Excellence */}
                  <div className=" ">
                    {/* <div className="w-[50%]">
                    <p>Research Excellence</p>
                  </div> */}
                    <div className="w-[100%]">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: studentData.targetAudience,
                        }}
                      />
                    </div>
                  </div>

                  {/** Community Initiatives */}
                  {/* <div
                  className=" outline-divider-bottom md:flex"
                  id="responsibilities"
                >
                  <div className="w-[100%] md:w-[50%] pr-[70px]">
                    <p>Community Initiatives</p>
                  </div>
                  <div className="w-[100%]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: studentData.targetAudience,
                      }}
                    />
                  </div>
                </div> */}

                  {/** Advocacy and Outreach */}
                  {/* <div
                  className=" outline-divider-bottom md:flex"
                  id="responsibilities"
                >
                  <div className="w-[100%] md:w-[50%] pr-[70px]">
                    <p>Advocacy and Outreach</p>
                  </div>
                  <div className="w-[100%]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: studentData.targetAudience,
                      }}
                    />
                  </div>
                </div> */}
                </div>
              </div>
            </div>

            {/******************************/}

            {/** Application heading */}
            <div className="application-container mt-[4.5rem]" id="application">
              <div className="application-section flex gap-4">
                {/* <img
                className="w-[180px] xl:w-[250px]"
                src={Application}
                alt=""
              /> */}
                {/* <p className="letters mt-[50px]">How to Join</p> */}
                <h2>APPLICATION PROCESS</h2>
              </div>

              {/** Application content */}
              <div className="application-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: studentData.recruitment,
                  }}
                />
              </div>
            </div>

            {/******************************/}

            {/** Contact heading */}
            <div className="contact-container mt-[4.5rem]" id="contact">
              <div className="contact-section flex gap-4">
                {/* <img className="w-[140px] xl:w-[180px]" src={Contact} alt="" /> */}
                <h2>JOIN THE FOLLOWING</h2>
                {/* <p className="my-auto">Fostering Change</p> */}
              </div>

              <StudentContactFrom />
              {/** Contact content */}
              {/* <div className="contact-content flex">
              <div className="divide w-[100%] mr-[10px] hidden md:block xl:mr-[80px]">
                <p>Pecunia Office of Endownment</p>
              </div>
              <div className="email w-[100%] flex gap-4 justify-center">
                <AiOutlineMail
                  className="mt-auto md:my-auto md:hidden lg:block text-[28px] lg:text-[28px]"
                  style={{ color: "#990001" }}
                />
                <h2 className="my-auto">enquiries@pecunia.fund</h2>
              </div>
            </div> */}
            </div>

            {/******************************/}

            {/** Student Footer */}
            <div className="mobile pt-[2rem]">
              <FooterMobile />
            </div>
            {/*********************************/}
          </div>
        </div>
      </section>
    </>
  );
}

export default Student;
