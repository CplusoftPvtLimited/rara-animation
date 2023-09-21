import React from "react";
import { useState, useEffect } from "react";

import "./student.css";
import About from "../../assets/images/about-rara.jpeg";
import Program from "../../assets/images/program-rara.jpeg";
import Outline from "../../assets/images/outline-rara.jpeg";
import Application from "../../assets/images/application-rara.jpeg";
import Contact from "../../assets/images/contact-rara.jpeg";
import Logo from "../../assets/images/student-logo.jpeg";
import FooterLogo from "../../assets/images/student-footer.jpeg";
import FooterLink from "../../assets/images/footer-link.jpeg";
import MainLogo from "../../assets/images/student-main.svg";
import img1 from "../../assets/images/img_01.jpg";
import { AiOutlineMail } from "react-icons/ai";

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
    <section className="bg-[#FFFFFF]">
      {/** Outer most */}
      <div className="md:flex">
        {/** Left Side */}
        <div className="left-wrap z-50 hidden md:block">
          <div className="left-container w-[50%] h-[100%] bg-[#990001]">
            <div>
              <img className="logo-student" src={Logo} alt="" />
            </div>

            <div className="mx-auto">
              <img className="main-logo" src={MainLogo} alt="" />
            </div>

            <div className="logo-text w-[70%] m-auto xl:w-[80%]">
              <h4 className="">
                立命館先進研究アカデミー 次世代研究者育成プログラム
                RARA学生フェロー
              </h4>
            </div>
            {/** Buttons */}

            <div className="main-buttons w-[80%] mx-auto xl:w-[80%] z-50">
              <div className="flex gap-8 justify-center xl:gap-24 mt-[70px]">
                <a href="#about">
                  <div>
                    <h4 className="">RARAとは</h4>
                  </div>
                </a>
                <a href="#program">
                  <h4 className="cursor-pointer">プログラムについて</h4>
                </a>
                <a href="#outline">
                  <h4>プログラム概要</h4>
                </a>
              </div>
              <div className="flex gap-8 xl:gap-24 justify-center mt-8">
                <a href="#application" className="cursor-pointer">
                  <h4>募集について</h4>
                </a>
                <a href="#contact">
                  <h4 className="">お問い合わせ</h4>
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
                立命館先進研究アカデミー 次世代研究者育成プログラム
                RARA学生フェロー
              </h4>
            </div>
            {/** Buttons */}

            <div className="main-buttons w-[80%] mx-auto z-50">
              <div className="flex justify-between xl:gap-24 mt-[70px]">
                <a href="#about">
                  <h4 className="">RARAとは</h4>
                </a>
                <a href="#program">
                  <h4 className="cursor-pointer">プログラムについて</h4>
                </a>
              </div>

              <div className="flex justify-between xl:gap-24 mt-[70px]">
                <a href="#outline">
                  <h4>プログラム概要</h4>
                </a>
                <a href="#application" className="cursor-pointer">
                  <h4>募集について</h4>
                </a>
              </div>

              <div className="flex justify-between xl:gap-24 mt-[70px]">
                <a href="#contact">
                  <h4 className="">お問い合わせ</h4>
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
              <img className="w-[180px] xl:w-[270px]" src={About} alt="" />
              <p className="my-auto">RARAとは</p>
            </div>
            {/** About content */}
            <div className="about-content">
              <div dangerouslySetInnerHTML={{ __html: studentData.about }} />
            </div>
            {/** Image section */}
            <div className="mt-[3.75rem] flex justify-center">
              <img src={img1} alt="" />
            </div>
            {/** Below Image */}
            <div className="about-content">
              <div
                dangerouslySetInnerHTML={{ __html: studentData.aboutBottom }}
              />
            </div>
          </div>

          {/******************************/}

          {/** Program heading */}
          <div className="program-container mt-[4.5rem]" id="program">
            <div className="program-section flex gap-4">
              <img className="w-[130px] xl:w-[170px]" src={Program} alt="" />
              <p className="my-auto">プログラムについて</p>
            </div>

            {/** About content */}
            <div className="program-content">
              <div dangerouslySetInnerHTML={{ __html: studentData.program }} />
            </div>
          </div>

          {/******************************/}

          {/** Business heading */}
          <div className="business-container mt-[4.5rem]" id="business">
            <div className="business-section flex gap-4">
              <p className="my-auto">事業統括</p>
            </div>
            {/** Business content */}
            <div className="business-content md:flex ">
              {/**Left */}
              <div className="w-[50%]">
                <h2 className="my-auto">徳田 昭雄</h2>
              </div>
              {/**Right */}
              <div className="w-[100%]">
                <div className="business-divider">
                  <p>{studentData.businessPassage}</p>
                </div>
                {/** Specialized Field */}
                <div className=" business-divider-middle md:flex">
                  <div className="w-[50%]">
                    <p>専門分野</p>
                  </div>
                  <div className="w-[100%]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: studentData.specializedField,
                      }}
                    />
                  </div>
                </div>

                {/** Specialized Field */}
                <div className=" business-divider-bottom md:flex">
                  <div className="w-[50%]">
                    <p>学外委員</p>
                  </div>
                  <div className="w-[100%]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: studentData.externalCommittee,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/******************************/}

          {/** Outline heading */}
          <div className="outline-container mt-[4.5rem]" id="outline">
            <div className="outline-section flex gap-4">
              <img className="w-[130px] xl:w-[160px]" src={Outline} alt="" />
              <p className="my-auto">プログラム概要</p>
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
            <div className="outline-content flex">
              <div>
                {/** Target Audience*/}
                <div className=" outline-divider-middle md:flex">
                  <div className="w-[50%]">
                    <p>対象者</p>
                  </div>
                  <div className="w-[100%]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: studentData.targetAudience,
                      }}
                    />
                  </div>
                </div>

                {/** Responsibilities */}
                <div
                  className=" outline-divider-bottom md:flex"
                  id="responsibilities"
                >
                  <div className="w-[100%] md:w-[50%] pr-[70px]">
                    <p>RARA学生フェローの 責務</p>
                  </div>
                  <div className="w-[100%]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: studentData.targetAudience,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/******************************/}

          {/** Application heading */}
          <div className="application-container mt-[4.5rem]" id="application">
            <div className="application-section flex gap-4">
              <img
                className="w-[180px] xl:w-[250px]"
                src={Application}
                alt=""
              />
              <p className="letters mt-[50px]">RARA学生フェロー募集について</p>
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
              <img className="w-[140px] xl:w-[180px]" src={Contact} alt="" />
              <p className="my-auto">お問い合わせ</p>
            </div>

            {/** Contact content */}
            <div className="contact-content flex">
              <div className="divide w-[100%] mr-[10px] hidden md:block xl:mr-[80px]">
                <p>研究部 RARAオフィス</p>
              </div>
              <div className="email w-[100%] flex gap-4 justify-center">
                <AiOutlineMail
                  className="mt-auto md:my-auto md:hidden lg:block text-[26px] lg:text-[26px]"
                  style={{ color: "#990001" }}
                />
                <h2>rara@st.ritsumei.ac.jp</h2>
              </div>
            </div>
          </div>

          {/******************************/}

          {/** Student Footer */}
          <div className="footer-container mt-[4.5rem] bg-[#F1F4F6]">
            <div className="footer-section lg:flex">
              <div className="w-[55%]">
                <img
                  className="w-[200px] md:w-[150px] xl:w-[250px]"
                  src={FooterLogo}
                  alt=""
                />
              </div>
              <div className="footer-menu mt-8 lg:mt-0">
                <div className="flex gap-4 w-[100%] mx-auto">
                  <p className="my-auto">プライバシーポリシー</p>
                  <img
                    className="w-[17px] h-[17px] my-auto"
                    src={FooterLink}
                    alt=""
                  />
                </div>
                <div className="flex gap-4 w-[100%] mx-auto mt-4">
                  <p className="my-auto">立命館大学（研究・産学連携</p>
                  <img
                    className="w-[17px] h-[17px] my-auto"
                    src={FooterLink}
                    alt=""
                  />
                </div>
                <div className="flex gap-4 w-[100%] mx-auto mt-4">
                  <p className="my-auto">立命館大学　研究部（学内者向け</p>
                  <img
                    className="w-[17px] h-[17px] my-auto "
                    src={FooterLink}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/** Contact content */}
            <div className="footer-content flex justify-center w-[100%]">
              <div className="divide w-[100%]">
                <p>© Ritsumeikan Univ. All rights reserved.</p>
              </div>
            </div>
          </div>
          {/*********************************/}
        </div>
      </div>
    </section>
  );
}

export default Student;
