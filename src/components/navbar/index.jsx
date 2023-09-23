/* eslint-disable */
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);
const index = () => {
  useEffect(() => {
    const menuBtnElement = document.querySelector(".cMenu-btn-inner");
    const donationBtnElement = document.querySelector(".button4");
    console.log(
      "🚀 ~ file: index.jsx:11 ~ useEffect ~ donationBtnElement:",
      donationBtnElement
    );
    const countryBtnElement = document.querySelector(".dropbtn");
    console.log(
      "🚀 ~ file: index.jsx:13 ~ useEffect ~ countryBtnElement:",
      countryBtnElement
    );

    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.fromTo(
      ".cMenu-bg",
      {
        transform: "scale(0,0)",
      },
      {
        transform: "translate(0, 0)",
      }
    );

    if (window.location.pathname != "/") {
      gsap.fromTo(
        ".cHeader-logo",
        {
          transform: "translate(-40px, 99.5825px)",
          top: 0,
          left: 0,
        },
        {
          transform: "scale(0.266,0.266)",
          top: "1.9rem",
          left: "0rem",
        }
      );
    }

    // Add a click event listener to the element
    menuBtnElement.addEventListener("click", function () {
      var menuBtn = document.querySelector(".cMenu-btn-inner");
      var menucontent = document.querySelector(".cModal");
      if (tl.reversed()) {
        tl.play();
        gsap.to(".cMenuContent-list-link", {
          opacity: 1,
        });
        gsap.to(".cMenuContent-text", {
          opacity: 1,
        });
      } else {
        gsap.to(".cMenu-bg", {
          // Create a new animation with the desired duration
          transform: "scale(0, 0)",
          duration: 0.5,
          onComplete: () => {
            tl.reverse(this);
          },
        });
        gsap.to(".cMenuContent-list-link", {
          opacity: 0,
        });
        gsap.to(".cMenuContent-text", {
          opacity: 0,
        });
      }

      menuBtn.classList.toggle("-isWhite");
      menuBtn.classList.toggle("-isOpen");
      donationBtnElement.classList.toggle("-isOpen");
      countryBtnElement.classList.toggle("-isOpen");
      menucontent.classList.toggle("-open");
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(1)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.5, delay: 0.3 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(2)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.6, delay: 0.4 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(3)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.7, delay: 0.5 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(4)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.7, delay: 0.5 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(5)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.7, delay: 0.5 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(6)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.8, delay: 0.6 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(7)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.8, delay: 0.6 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(8)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.8, delay: 0.6 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(9)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.9, delay: 0.7 } // To scale(1)
      );
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(10)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.9, delay: 0.7 } // To scale(1)
      );
    });
  }, []);

  return (
    <header
      className="cContainer -leftSmall -rightSmall -spLeftSmall -spRightSmall cHeader -menu"
      data-el=""
      data-header=""
    >
      <div className="cHeader-inner">
        <h1
          className="cHeader-logo -kvLoaded"
          data-header-logo=""
          style={{ transform: "translate(0px, 108.5825px)" }}
        >
          <svg
            className="cHeader-logo-item"
            // viewBox="0 0 165.25 37.02"
            style={{ willChange: "transform", marginLeft: "-1pc" }}
            width="504"
            height="75.1"
            viewBox="0 0 504 75.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="svgGroup"
              stroke-linecap="round"
              fill-rule="evenodd"
              font-size="9pt"
              stroke="#000"
              stroke-width="0.25mm"
              fill="#000"
              style={{
                stroke: "#000",
                strokeWidth: "0.25mm",
                fill: "#000",
              }}
            >
              <path
                d="M 239.84 55.6 L 239.84 57.84 L 266.08 57.84 L 266.08 55.6 A 260.502 260.502 0 0 1 264.765 55.319 C 256.473 53.517 254.865 52.485 254.56 43.12 A 2261.39 2261.39 0 0 0 254.451 40.224 C 254.229 34.371 254.007 28.62 254.007 22.698 A 211.064 211.064 0 0 1 254.08 17.04 A 963.919 963.919 0 0 0 261.249 24.676 C 273.281 37.373 287.282 51.732 293.899 59.762 A 92.731 92.731 0 0 1 294.16 60.08 L 297.76 58.32 L 297.76 22.72 A 246.678 246.678 0 0 1 297.791 18.27 C 297.964 8.883 299.04 6.24 305.2 5.68 L 305.2 3.44 L 280.88 3.44 L 280.88 5.68 A 147.569 147.569 0 0 1 281.148 5.717 C 290.366 6.984 292.722 8.251 292.88 17.68 L 293.36 43.12 L 293.2 43.28 A 491.216 491.216 0 0 0 279.198 27.843 C 273.006 21.217 266.814 14.63 261.392 8.083 A 162.468 162.468 0 0 1 257.68 3.44 L 239.28 3.44 L 239.28 5.68 C 246.841 6.99 248.908 10.515 249.471 15.629 A 54.678 54.678 0 0 1 249.68 21.44 L 249.68 44 A 31.918 31.918 0 0 1 249.536 47.194 C 248.797 54.503 245.272 54.605 240.338 55.507 A 58.103 58.103 0 0 0 239.84 55.6 Z M 92.72 39.68 L 94.96 39.68 C 94.56 32.88 94.88 26.16 95.28 19.36 L 93.2 19.36 A 17.507 17.507 0 0 1 92.079 22.428 C 90.098 26.467 87.003 27.115 82.025 27.191 A 85.189 85.189 0 0 1 80.72 27.2 L 73.92 27.2 L 73.92 6.8 L 79.76 6.8 C 87.189 6.8 93.457 6.916 95.496 13.431 A 16.352 16.352 0 0 1 96.16 17.44 L 98.64 17.44 L 100.16 3.44 L 52.8 3.44 L 52.8 5.68 A 201.178 201.178 0 0 0 52.828 5.685 C 61.298 7.107 63.038 6.827 63.314 17.021 A 156.653 156.653 0 0 1 63.36 21.2 L 63.36 40.08 C 63.36 54.331 62.353 54.014 53.245 55.526 A 222.775 222.775 0 0 0 52.8 55.6 L 52.8 57.84 L 101.28 57.84 A 56.493 56.493 0 0 0 104.175 40.623 A 46.153 46.153 0 0 0 104.16 39.44 L 101.76 39.44 C 99.52 48.64 95.04 54.48 84.64 54.48 C 74.945 54.48 74.017 51.358 73.929 44.63 A 160.311 160.311 0 0 1 73.92 42.56 L 73.92 32 L 80.4 32 A 880.133 880.133 0 0 0 80.806 32 C 87.118 31.997 90.718 31.994 92.426 38.418 A 22.178 22.178 0 0 1 92.72 39.68 Z M 222.64 15.28 L 223.2 34.64 A 56.795 56.795 0 0 1 223.231 36.47 C 223.231 45.484 220.827 53.749 209.204 54.145 A 25.983 25.983 0 0 1 208.32 54.16 C 202.72 54.16 196.24 52.24 193.04 47.36 A 13.38 13.38 0 0 1 191.33 42.878 C 190.694 39.843 190.706 36.442 190.717 33.528 A 293.588 293.588 0 0 0 190.72 32.4 L 190.72 21.2 A 555.319 555.319 0 0 0 190.719 20.24 C 190.702 10.102 190.571 6.611 201.28 5.68 L 201.28 3.44 L 169.6 3.44 L 169.6 5.68 A 201.178 201.178 0 0 0 169.628 5.685 C 178.098 7.107 179.838 6.827 180.114 17.021 A 156.653 156.653 0 0 1 180.16 21.2 L 180.16 33.84 A 177.647 177.647 0 0 1 180.14 36.113 C 180.061 42.251 179.982 48.88 184.96 53.36 A 21.872 21.872 0 0 0 193.486 57.828 C 196.524 58.714 199.735 59.133 202.7 59.193 A 36.883 36.883 0 0 0 203.44 59.2 C 210.08 59.2 217.36 57.52 222.08 52.56 A 18.472 18.472 0 0 0 226.624 41.697 C 226.948 39.205 227.028 36.658 227.12 34.24 L 227.68 22.24 C 228.32 8.88 228.32 7.68 236 5.68 L 236 3.44 L 211.04 3.44 L 211.04 5.68 C 217.923 7.071 221.723 6.787 222.501 13.293 A 21.965 21.965 0 0 1 222.64 15.28 Z M 161.84 55.6 L 166.88 38.8 L 164.48 38 A 35.682 35.682 0 0 1 156.294 51.007 C 153.643 53.417 150.392 55.063 146.296 55.438 A 19.893 19.893 0 0 1 144.48 55.52 A 19.552 19.552 0 0 1 127.367 44.201 C 125.794 41.281 124.715 38.045 124.17 34.809 A 29.069 29.069 0 0 1 123.76 30 C 123.76 18.306 129.743 6.972 141.777 5.851 A 21.377 21.377 0 0 1 143.76 5.76 C 152.452 5.76 157.694 10.816 160.204 18.005 A 29.514 29.514 0 0 1 161.2 21.6 L 163.6 21.6 L 163.6 6.24 C 157.68 3.28 151.04 2.08 144.48 2.08 A 37.293 37.293 0 0 0 120.379 10.274 C 115.187 14.694 111.645 20.835 110.932 28.533 A 31.526 31.526 0 0 0 110.8 31.44 C 110.8 49.84 126.64 59.2 143.84 59.2 C 150.08 59.2 156.08 58.08 161.84 55.6 Z M 25.76 32.8 L 26.32 35.12 C 36.08 33.2 48.48 29.84 48.48 17.68 A 14.721 14.721 0 0 0 47.747 12.899 C 44.666 3.867 32.601 3.459 25.806 3.441 A 338.366 338.366 0 0 0 24.88 3.44 L 0 3.44 L 0 5.68 C 9.144 6.944 10.413 6.826 10.546 16.433 A 171.806 171.806 0 0 1 10.56 18.8 L 10.56 40.08 C 10.56 54.331 9.553 54.014 0.445 55.526 A 222.775 222.775 0 0 0 0 55.6 L 0 57.84 L 33.52 57.84 L 33.52 55.6 A 43.133 43.133 0 0 1 29.224 55.092 C 20.754 53.587 21.12 49.576 21.12 40.08 L 21.12 6.64 C 30 6.64 36.48 10.56 36.48 19.76 A 14.449 14.449 0 0 1 35.599 24.94 C 34.374 28.153 31.919 30.424 28.529 31.861 A 20.631 20.631 0 0 1 25.76 32.8 Z M 377.92 36.4 L 379.84 41.44 A 146.692 146.692 0 0 1 380.766 43.87 C 384.123 52.953 383.164 54.344 376 55.6 L 376 57.84 L 403.2 57.84 L 403.2 55.6 A 73.347 73.347 0 0 1 402.009 55.22 C 395.515 53.08 395.257 51.636 391.326 41.525 A 417.819 417.819 0 0 0 390.32 38.96 L 375.36 0 L 373.84 0 C 371.92 2.72 369.36 5.04 366.24 6.16 L 367.04 8.56 L 349.36 49.84 C 347.52 54.08 345.68 54.24 341.36 55.6 L 341.36 57.84 L 366.24 57.84 L 366.24 55.6 A 704.415 704.415 0 0 1 365.179 55.473 C 357.578 54.555 354.674 53.806 358.523 42.013 A 88.419 88.419 0 0 1 359.04 40.48 L 360.48 36.4 L 377.92 36.4 Z M 340.72 5.68 L 340.72 3.44 L 309.04 3.44 L 309.04 5.68 A 201.178 201.178 0 0 0 309.068 5.685 C 317.538 7.107 319.278 6.827 319.554 17.021 A 156.653 156.653 0 0 1 319.6 21.2 L 319.6 40.08 C 319.6 54.331 318.593 54.014 309.485 55.526 A 222.775 222.775 0 0 0 309.04 55.6 L 309.04 57.84 L 340.72 57.84 L 340.72 55.6 A 201.178 201.178 0 0 0 340.692 55.595 C 332.222 54.173 330.482 54.453 330.206 44.259 A 156.653 156.653 0 0 1 330.16 40.08 L 330.16 21.2 C 330.16 6.72 331.2 7.28 340.72 5.68 Z M 362 31.6 L 368.88 13.04 L 376.16 31.6 L 362 31.6 Z"
                vector-effect="non-scaling-stroke"
              />
            </g>
          </svg>
        </h1>
        <div className="cHeader-menu">
          <div className="cMenu" data-el="">
            <div
              className="cMenu-bg"
              data-ref=""
              // style={{ transform: "scale(0, 0)" }}
            >
              <div className="cMenu-bg-overlay" data-menu-bg-overlay=""></div>
            </div>
            <div className="cMenu-btn">
              <div className="cMenu-btn-container">
                <a
                  className="cMenu-btn-inner-btn"
                  href="/donation"
                  style={{ margin: 0 }}
                >
                  <button
                    type="button"
                    className="custom_button button4"
                    style={{}}
                  >
                    DONATE
                  </button>
                </a>
                <a className="cMenu-btn-inner-btn" style={{ margin: 0 }}>
                  <div className="dropdown">
                    <button className="dropbtn">
                      COUNTRY <span className="caret"></span>
                    </button>
                    <div className="dropdown-content">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                </a>

                <a className="cMenu-btn-inner" data-ref="" data-menu-btn="">
                  <div className="cMenu-btn-circle-wrap _sp">
                    <span
                      className="cMenu-btn-circle"
                      data-menu-btn-circle=""
                      style={{ transform: "translate(0px, 0px)" }}
                    ></span>
                  </div>
                  <p className="cMenu-btn-text"></p>
                  <span className="cMenu-btn-icon" data-menu-icon=""></span>
                </a>
              </div>
            </div>

            <div
              className="cModal cMenucontent"
              data-modal="menu"
              data-menu-content=""
              data-el=""
            >
              <div
                className="cModal-content cMenuContent-content"
                data-modal-content=""
                data-ref=""
                style={{
                  willChange: "opacity, transform",
                  opacity: 1,
                }}
              >
                <div className="cMenuContent-inner">
                  <p
                    className="cMenuContent-text"
                    data-menu-text=""
                    style={{ opacity: 0 }}
                  >
                    MENU
                  </p>
                  <ul className="cMenuContent-list">
                    <li className="cMenuContent-list-item">
                      <a
                        className="cMenuContent-list-link -home"
                        href="/"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          className="cMenuContent-list-svg"
                          viewBox="0 0 303.4 70.4"
                        >
                          <g
                            className="box1"
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M21.2,52.8c0,11,0.2,13,13.3,14.9v1.5H0v-1.5c12-1.6,12.1-4.6,12.4-14.9V17.6C12.1,7.3,12,4.3,0,2.7V1.2h34.5v1.5                    C21.4,4.6,21.2,6.6,21.2,17.6v14.5h40.2V17.6c0-11-0.2-13-13.3-14.9V1.2h34.5v1.5c-12,1.6-12.1,4.6-12.4,14.9v35.2                    c0.3,10.3,0.4,13.3,12.4,14.9v1.5H48.1v-1.5c13.1-1.9,13.3-3.9,13.3-14.9V36.3H21.2V52.8z"
                            ></path>
                          </g>
                          <g
                            className="box2"
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M155.9,35.2c0,21.5-15.6,35.2-36.6,35.2c-21.1,0-36.6-13.7-36.6-35.3C82.7,13.8,98.3,0,119.2,0                    C144.8,0,155.9,17.4,155.9,35.2z M94.3,32.7c0,15.5,8.2,35.3,26.2,35.3c16.5,0,23.8-16.8,23.8-31.1C144,19.2,133.7,2.4,118.4,2.4                    C101.2,2.4,94.3,19.2,94.3,32.7z"
                            ></path>
                          </g>
                          <g
                            className="box3"
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M201.8,54.6l18.1-39.8c2.5-5.5,3.9-10.5,1.7-12l0.2-1.6h22v1.5c-6.4,1.3-10.3,3.7-9.9,10.7l2.2,36.4                    c1.1,13.9,1.1,16.1,11.8,17.9v1.5H215v-1.5c7.7-1.2,12.6-2.1,12.1-10.9l-2.7-43.7h-0.2l-25.5,56.1h-1.1l-23.7-53.8h-0.2                    c-1.6,15.3-2.4,26.4-3.1,41.9c-0.2,3.9-0.1,8.4,12,10.4v1.5h-27.9v-1.5c8.9-1.5,9.8-5.8,11.2-13.9l3.7-28.1l1.3-13.6                    c0.6-6.6-5.1-8.9-11-9.4V1.2h21.6l0.1,1.1c-2.2,2.3,0.5,8.3,1.2,9.9L201.8,54.6z"
                            ></path>
                          </g>
                          <g
                            className="box4"
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M244.4,67.7c12-1.6,12.1-4.6,12.4-14.9V17.6c-0.3-10.3-0.4-13.3-12.4-14.9V1.2h53.7l-1.2,15.4h-1.5                    c-0.7-12.9-10-13-20.1-13h-9.7v28.5H276c7.5,0,13.2-0.6,14.3-9.2h1.5v22.3h-1.5c-1.3-8.8-6.8-8.9-14.3-8.9h-10.4v16.4                    c0,5.9-1.4,14.1,15,14.1c12.6,0,18.8-4.8,21.3-17.4h1.5c-0.1,7.6-1.4,13.8-3.4,19.8h-55.6V67.7z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>

                    {/* vision */}
                    <li className="cMenuContent-list-item -anchor">
                      <a
                        className="cMenuContent-list-link -vision"
                        href="/#vision"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          className="cMenuContent-list-svg"
                          viewBox="0 0 767.78 151.37"
                        >
                          {/* v */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M159.69,3.23v3.15c-19.74,1.68-25.83,18.27-38.85,48.72l-40.11,95.76h-2.94L30.32,37.25                    C24.02,21.92,19.19,8.48,0.5,6.38V3.23h66.57v3.15C37.46,9.32,47.12,26.12,52.58,39.35l33.6,81.06l24.78-59.43                    c18.06-43.05,21.42-49.98-10.5-54.6V3.23H159.69z"
                            ></path>
                          </g>
                          {/* i */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M217.01,111.59c0.63,21.63,0.84,27.93,26.04,31.29v3.15h-70.56v-3.15c25.2-3.36,25.41-9.66,26.04-31.29V37.67                    c-0.63-21.63-0.84-27.93-26.04-31.29V3.23h70.56v3.15c-25.2,3.36-25.41,9.66-26.04,31.29V111.59z"
                            ></path>
                          </g>
                          {/* s */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M344.48,40.19h-3.36C337.76,23.18,332.3,6.8,311.51,6.8c-13.44,0-24.57,9.24-24.57,23.1                    c0,36.33,66.15,35.07,66.15,77.49c0,27.09-26.88,41.16-51.03,41.16c-12.81,0-26.25-3.78-36.96-10.71l-6.09-35.7h3.78                    c5.25,20.16,19.32,40.11,42.42,40.11c15.54,0,27.72-9.24,27.72-25.62c0-37.38-64.26-34.02-64.26-76.02                    c0-24.57,24.36-40.11,46.83-40.11c10.71,0,21.42,3.15,30.66,8.19L344.48,40.19z"
                            ></path>
                          </g>
                          {/* i */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M414.41,111.59c0.63,21.63,0.84,27.93,26.04,31.29v3.15h-70.56v-3.15c25.2-3.36,25.41-9.66,26.04-31.29V37.67                    c-0.63-21.63-0.84-27.93-26.04-31.29V3.23h70.56v3.15c-25.2,3.36-25.41,9.66-26.04,31.29V111.59z"
                            ></path>
                          </g>
                          {/* o */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M522.83,0.71c-43.89,0-76.65,28.98-76.65,73.71c0,45.36,32.55,74.13,76.86,74.13                    c44.1,0,76.86-28.77,76.86-73.92C599.91,37.25,576.6,0.71,522.83,0.71z M525.56,143.51c-37.8,0-55.02-41.58-55.02-74.13                    c0-28.35,14.49-63.63,50.61-63.63c32.13,0,53.76,35.28,54.39,72.45C575.54,108.23,560.21,143.51,525.56,143.51z"
                            ></path>
                          </g>
                          {/* n */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M740.39,113.06l-1.05-76.65c-0.21-19.95-5.67-25.83-29.4-30.03V3.23h57.33v3.15                    c-14.49,1.89-17.22,9.87-18.9,23.52c-2.94,23.1-1.89,73.71-0.84,119.49l-2.73,0.63c-33.6-39.69-70.98-76.44-106.47-114.66V74                    c0,52.08-1.26,62.79,29.19,68.88v3.15h-62.79v-3.15c28.35-2.94,27.3-22.26,27.3-69.93v-31.5c0-21-3.36-29.19-30.03-35.07V3.23h34.65                    L740.39,113.06z"
                            ></path>
                          </g>
                        </svg>
                        <svg
                          className="cMenuContent-list-linkArrow"
                          role="img"
                          fill="currentColor"
                          width="13"
                          height="8"
                          data-svg-title-item=""
                          style={{
                            transformOrigin: "left",
                            transform: "scale(0)",
                          }}
                        ></svg>
                      </a>
                    </li>

                    <li className="cMenuContent-list-item -anchor">
                      <a
                        className="cMenuContent-list-link -guideline"
                        href="/#guideline"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          className="cMenuContent-list-svg"
                          viewBox="0 0 1148.2 149.5"
                        >
                          {/* g */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M143.5,129.3v3.1c-22.5,9.5-39.7,15.5-63.4,15.5c-43.3,0-80-26.3-80-72.2c0-46.6,40.7-75.6,84.6-75.6                    c16.6,0,33.4,2.9,49.1,8.2L133,44.8h-2.7c-5.2-24.4-22.1-39.7-47.5-39.7c-36.3,0-58.4,27.7-58.4,62.8c0,41.6,29.6,72.9,71.4,72.9                    c19.1,0,18.9-5,18.9-18.7v-12.6c0-23.3-6.1-25.8-28.4-28.6v-3.1h62.2v3.1c-14.7,2.9-15.3,8.8-15.3,21.8v26.5h10.3V129.3z"
                            ></path>
                          </g>
                          {/* u */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M303.5,2.7v3.2c-19.1,2.1-20.4,13.9-21.2,41.6l-1.3,46c-0.6,27.1-12.2,54.6-58.8,54.6                    c-65.1,0-58.4-47-58.4-63.8v-47c-0.6-21.6-0.8-27.9-26-31.3V2.8h72.5V6c-27.5,4-27.9,8.2-27.9,31.3v43.1c0,4-6.7,58.2,50.8,58.2                    c45.4,0,41-43.3,41-68.9V47.4c0-26.7-2.1-38.9-31.5-41.6V2.6h60.8V2.7z"
                            ></path>
                          </g>
                          {/* i */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M354.9,111c0.6,21.6,0.8,27.9,26,31.3v3.1h-70.5v-3.1c25.2-3.4,25.4-9.7,26-31.3V37.1                    c-0.6-21.6-0.8-27.9-26-31.3V2.6H381v3.2c-25.2,3.4-25.4,9.7-26,31.3V111H354.9z"
                            ></path>
                          </g>
                          {/* d */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M437.9,2.2l-50.8,1.7v2.9c23.9,3.4,24.2,9.7,24.8,31.3V111c-0.6,21.6-0.8,27.9-26,31.3v3.1l62.6,0.4                    c72.2,0.6,91.6-41.4,91.6-71.4C540,52.6,530.3-0.7,437.9,2.2z M458.9,140.6c-26,0-28.6-13.4-28.6-27.5V6.4                    c45.6-0.2,85.3,20.8,85.3,71.2C515.6,125.5,483,140.6,458.9,140.6z"
                            ></path>
                          </g>
                          {/* e */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M524.4,142.3c25.2-3.4,25.4-9.7,26-31.3V37.1c-0.6-21.6-0.8-27.9-26-31.3V2.6h112.8l-2.5,32.3h-3.2                    c-1.5-27.1-21-27.3-42.2-27.3h-20.4v59.9h21.8c15.8,0,27.7-1.3,30-19.3h3.1V95h-3.1c-2.7-18.5-14.3-18.7-30-18.7h-21.8v34.4                    c0,12.4-2.9,29.6,31.5,29.6c26.5,0,39.5-10.1,44.7-36.5h3.2c-0.2,16-2.9,29-7.1,41.6H524.4V142.3z"
                            ></path>
                          </g>
                          {/* l */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M650.4,142.3c25.2-3.4,25.4-9.7,26-31.3V37.1c-0.6-21.6-0.8-27.9-26-31.3V2.6H721v3.2c-25.2,3.4-26,9.7-26,31.3                    V106c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H650.4V142.3z"
                            ></path>
                          </g>
                          {/* i */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M821.1,111c0.6,21.6,0.8,27.9,26,31.3v3.1h-70.6v-3.1c25.2-3.4,25.4-9.7,26-31.3V37.1                    c-0.6-21.6-0.8-27.9-26-31.3V2.6h70.6v3.2c-25.2,3.4-25.4,9.7-26,31.3V111z"
                            ></path>
                          </g>
                          {/* n */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M991.4,112.5l-1.1-76.7c-0.2-20-5.7-25.8-29.4-30V2.6h57.3v3.2c-14.5,1.9-17.2,9.9-18.9,23.5                    c-2.9,23.1-1.9,73.7-0.8,119.5l-2.7,0.6c-33.6-39.7-71-76.4-106.5-114.7v38.7c0,52.1-1.3,62.8,29.2,68.9v3.1h-62.8v-3.1                    c28.4-2.9,27.3-22.3,27.3-69.9V40.9c0-21-3.4-29.2-30-35.1V2.6h34.7L991.4,112.5z"
                            ></path>
                          </g>
                          {/* e */}
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M1024.2,142.3c25.2-3.4,25.4-9.7,26-31.3V37.1c-0.6-21.6-0.8-27.9-26-31.3V2.6H1137l-2.5,32.3h-3.2                    c-1.5-27.1-21-27.3-42.2-27.3h-20.4v59.9h21.8c15.8,0,27.7-1.3,30-19.3h3.2V95h-3.2c-2.7-18.5-14.3-18.7-30-18.7h-21.8v34.4                    c0,12.4-2.9,29.6,31.5,29.6c26.5,0,39.5-10.1,44.7-36.5h3.2c-0.2,16-2.9,29-7.1,41.6h-116.8V142.3z"
                            ></path>
                          </g>
                        </svg>
                        <svg
                          className="cMenuContent-list-linkArrow"
                          role="img"
                          fill="currentColor"
                          width="13"
                          height="8"
                          data-svg-title-item=""
                          style={{
                            transformOrigin: "left",
                            transform: "scale(0)",
                          }}
                        ></svg>
                      </a>
                    </li>
                    <li className="cMenuContent-list-item -anchor">
                      <a
                        className="cMenuContent-list-link -contact"
                        href="/#contact"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          className="cMenuContent-list-svg"
                          viewBox="0 0 230.9 37.1"
                        >
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M31.4,12.4h-0.8c-1-5.6-4.3-9.7-10.3-9.7C11.1,2.7,6,10.2,6,18.8c0,9.9,7.6,16.7,14.8,16.7                    c6.6,0,9.2-4.8,11.4-10.2l0.7,0.3c-0.6,3.1-1.6,6.1-2.8,9c-3.2,1.5-6.7,2.1-10.2,2.1c-10.5,0-19.8-6-19.8-17.3                    c0-8.9,7-17.9,20.2-17.9c3.8,0,7.7,0.8,11,2.7L31.4,12.4L31.4,12.4z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M52.6,1.5c-10.5,0-18.3,6.9-18.3,17.6c0,10.8,7.8,17.7,18.3,17.7S70.9,30,70.9,19.2                    C70.9,10.2,65.4,1.5,52.6,1.5z M53.2,35.5c-9,0-13.1-9.9-13.1-17.7c0-6.8,3.5-15.2,12.1-15.2c7.7,0,12.8,8.4,13,17.3                    C65.1,27.1,61.5,35.5,53.2,35.5z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M100.4,28.2l-0.2-18.3c0-4.8-1.4-6.2-7-7.2V1.9h13.7v0.8c-3.5,0.5-4.1,2.3-4.5,5.6c-0.7,5.5-0.5,17.6-0.2,28.5                    l-0.6,0.2c-8-9.5-16.9-18.2-25.4-27.3v9.2c0,12.4-0.3,15,7,16.4v0.8h-15v-0.8c6.8-0.7,6.5-5.3,6.5-16.7v-7.5c0-5-0.8-7-7.2-8.4V1.9                    h8.3L100.4,28.2z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M138.7,0.5h0.4l0.7,9.4l-0.7,0.2c-1.8-6.2-4.5-6.5-10.2-6.5h-3v23.1c0,6.2,0.3,7.9,7,8.7v0.8h-18.4v-0.8                    c6.7-0.8,7-2.5,7-8.7V3.6h-3c-5.8,0-8.5,0.2-10.3,6.5l-0.7-0.2l0.7-9.4h0.4l0.5,0.5c1.2,1.2,1.5,1.1,3.1,1.1h22.9                    c1.7,0,1.8,0,3.1-1.1L138.7,0.5z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M164.7,29.5l-11-29.3c-1.1,1.2-2.3,2.2-3.7,2.7c0.5,1-0.1,2.2-0.6,3.5l-3,8.2l-5.7,14.8c-1.5,3.9-2,4.9-6.5,6.1                    v0.8h13.7v-0.8c-2.2-0.3-5.7-0.3-5.7-3.4c0-2.4,2.2-7.6,3-10.1h11.4c1.3,3.5,3.2,8.2,3.2,10.3c0,2.2-2.1,2.8-3.8,3.2v0.8h14.7v-0.8                    C166.9,34.6,166,33.1,164.7,29.5z M146.3,19.5l4.7-13l5.2,13H146.3z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M196.4,12.4h-0.8c-1-5.6-4.2-9.7-10.3-9.7c-9.2,0-14.3,7.5-14.3,16.1c0,9.9,7.5,16.7,14.8,16.7                    c6.6,0,9.2-4.8,11.4-10.2l0.7,0.3c-0.6,3.1-1.5,6.1-2.8,9c-3.2,1.5-6.7,2.1-10.2,2.1c-10.5,0-19.8-6-19.8-17.3                    c0-8.9,6.9-17.9,20.2-17.9c3.8,0,7.7,0.8,11,2.7L196.4,12.4L196.4,12.4z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M229.7,0.5h0.4l0.7,9.4l-0.7,0.2c-1.8-6.2-4.5-6.5-10.3-6.5h-3v23.1c0,6.2,0.3,7.9,7,8.7v0.8h-18.4v-0.8                    c6.7-0.8,7-2.5,7-8.7V3.6h-3c-5.8,0-8.5,0.2-10.2,6.5l-0.7-0.2l0.7-9.4h0.4l0.5,0.5c1.2,1.2,1.5,1.1,3.1,1.1h22.9                    c1.7,0,1.9,0,3.1-1.1L229.7,0.5z"
                            ></path>
                          </g>
                        </svg>
                        <svg
                          className="cMenuContent-list-linkArrow"
                          role="img"
                          fill="currentColor"
                          width="13"
                          height="8"
                          data-svg-title-item=""
                          style={{
                            transformOrigin: "left",
                            transform: "scale(0)",
                          }}
                        ></svg>
                      </a>
                    </li>
                    <li className="cMenuContent-list-item">
                      <a
                        className="cMenuContent-list-link -fellows"
                        href="/fellow"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          className="cMenuContent-list-svg"
                          viewBox="0 0 936.1 150.5"
                        >
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M100.9,49v51.2h-3.1C96.1,79,85.2,79.4,67.6,79.4H44.7v31.7c0,22.5,1.1,26.9,30.2,31.3v3.2H0.1v-3.2                    c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h111.1l-3.4,33.2h-3.2c-1.3-27.1-18.9-28.1-41-28.1H44.5v62.8h22.9                    C85,70.6,96,68.9,97.6,49L100.9,49L100.9,49z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M121,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h112.8L231.3,35h-3.1                    c-1.5-27.1-21-27.3-42.2-27.3h-20.4v59.9h21.8c15.8,0,27.7-1.3,30-19.3h3.1v46.8h-3.1c-2.7-18.5-14.3-18.7-30-18.7h-21.8v34.4                    c0,12.4-2.9,29.6,31.5,29.6c26.5,0,39.5-10.1,44.7-36.5h3.1c-0.2,16-2.9,29-7.1,41.6H121V142.4z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M247,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h70.6v3.2c-25.2,3.4-26,9.7-26,31.3                    v68.9c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H247V142.4z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M373,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h70.6v3.2c-25.2,3.4-26,9.7-26,31.3                    v68.9c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H373V142.4z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M580.5,0.2c-43.9,0-76.7,29-76.7,73.7c0,45.4,32.6,74.1,76.9,74.1c44.1,0,76.9-28.8,76.9-73.9                    C657.6,36.8,634.3,0.2,580.5,0.2z M583.2,143c-37.8,0-55-41.6-55-74.1c0-28.4,14.5-63.6,50.6-63.6c32.1,0,53.8,35.3,54.4,72.5                    C633.2,107.8,617.9,143,583.2,143z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M706.1,150.4H704L669.8,33c-5.2-15.3-5.9-22.3-23.3-27.1V2.7h59.4v3.2c-25.6,3.8-20.4,14.5-15.3,31.7l22.1,74.6                    l33-87.8C741.5,11.6,734.6,8.2,722,5.9V2.7h61.3v3.2c-22.9,3.2-20.2,13-16.4,25.2l26.7,83.2L810.2,67c3.6-10.5,13-36.8,13-46.8                    c0-10.3-9.5-11.8-21-14.3V2.7H857v3.2c-12.6,0.8-18.9,8-23.3,19.1L819,65.1l-30.9,85.3h-2.3L748.3,33.6L706.1,150.4z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M927.4,39.7H924c-3.4-17-8.8-33.4-29.6-33.4c-13.4,0-24.6,9.2-24.6,23.1c0,36.3,66.2,35.1,66.2,77.5                    c0,27.1-26.9,41.2-51,41.2c-12.8,0-26.3-3.8-37-10.7l-6.1-35.7h3.8c5.2,20.2,19.3,40.1,42.4,40.1c15.5,0,27.7-9.2,27.7-25.6                    c0-37.4-64.3-34-64.3-76c0-24.6,24.4-40.1,46.8-40.1c10.7,0,21.4,3.1,30.7,8.2L927.4,39.7z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li className="cMenuContent-list-item">
                      <a
                        className="cMenuContent-list-link -updates"
                        href="/news"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          className="cMenuContent-list-svg"
                          viewBox="0 0 83.8 14"
                        >
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M15,0.8v0.3c-1.7,0.2-1.8,1.3-1.9,3.8L13,9c-0.1,2.5-1.1,4.9-5.3,4.9c-5.9,0-5.3-4.3-5.3-5.8V3.9C2.3,2,2.3,1.4,0,1.1V0.8h6.6v0.3C4.1,1.5,4.1,1.8,4.1,3.9v3.9c0,0.4-0.6,5.3,4.6,5.3c4.1,0,3.7-3.9,3.7-6.2v-2                    c0-2.4-0.2-3.5-2.8-3.8V0.8H15z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M15.4,0.9l4.1-0.2c5.6-0.2,6,2.8,6,3.5c0,2.7-2.6,3.6-4.9,3.9l-0.1-0.3c1.7-0.3,3-1.2,3-3.1                    c0-2.5-2.1-3.6-4.3-3.6v9.4c0,2.1,0,2.5,2.5,2.8v0.3h-6.6v-0.3c2.3-0.3,2.3-0.9,2.4-2.8V4.7c0-2.6,0-3.4-2.2-3.5V0.9z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M26,0.9l4.6-0.2c8.4-0.3,9.2,4.6,9.2,6.5c0,2.7-1.7,6.5-8.3,6.5l-5.7,0v-0.3c2.3-0.3,2.3-0.9,2.4-2.8V4                    c-0.1-2-0.1-2.5-2.2-2.8V0.9z M29.9,10.8c0,1.3,0.2,2.5,2.6,2.5c2.2,0,5.1-1.4,5.1-5.7c0-4.6-3.6-6.5-7.7-6.4V10.8z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M43.2,8.3c-0.3,1-1.2,2.9-1.2,3.8c0,1.2,1.3,1.2,2.2,1.3v0.3H39v-0.3c1.7-0.5,1.9-0.8,2.5-2.3l2.1-5.6                    l1.1-3.1c0.2-0.5,0.4-0.9,0.2-1.3c0.5-0.2,1-0.6,1.4-1l4.2,11.1c0.5,1.4,0.8,1.9,2.4,2.2v0.3h-5.6v-0.3c0.7-0.2,1.5-0.4,1.5-1.2                    c0-0.8-0.7-2.6-1.2-3.9H43.2z M45.3,2.5l-1.8,4.9h3.8L45.3,2.5z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M63,0.2h0.2l0.3,3.6l-0.3,0.1c-0.7-2.4-1.7-2.5-3.9-2.5h-1.1v8.8c0,2.4,0.1,3,2.7,3.3v0.3h-7v-0.3                    c2.5-0.3,2.7-0.9,2.7-3.3V1.4h-1.1c-2.2,0-3.2,0.1-3.9,2.5l-0.3-0.1l0.3-3.6h0.2l0.2,0.2c0.5,0.4,0.6,0.4,1.2,0.4h8.7                    c0.6,0,0.7,0,1.2-0.4L63,0.2z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M63.6,13.5c2.3-0.3,2.3-0.9,2.4-2.8V3.9c-0.1-2-0.1-2.5-2.4-2.8V0.8h10.2l-0.2,2.9h-0.3                    c-0.1-2.5-1.9-2.5-3.8-2.5h-1.8v5.4h2c1.4,0,2.5-0.1,2.7-1.7h0.3v4.2h-0.3C72,7.5,71,7.5,69.6,7.5h-2v3.1c0,1.1-0.3,2.7,2.8,2.7                    c2.4,0,3.6-0.9,4-3.3h0.3c0,1.4-0.3,2.6-0.6,3.8H63.6V13.5z"
                            ></path>
                          </g>
                          <g
                            data-svg-title-item=""
                            style={{
                              transformOrigin: "left",
                              transform: "scale(0)",
                            }}
                          >
                            <path
                              className="st0"
                              d="M82.9,4.2h-0.3c-0.3-1.5-0.8-3-2.7-3c-1.2,0-2.2,0.8-2.2,2.1c0,3.3,6,3.2,6,7c0,2.5-2.4,3.7-4.6,3.7                    c-1.2,0-2.4-0.3-3.3-1l-0.6-3.2h0.3c0.5,1.8,1.7,3.6,3.8,3.6c1.4,0,2.5-0.8,2.5-2.3c0-3.4-5.8-3.1-5.8-6.9c0-2.2,2.2-3.6,4.2-3.6                    c1,0,1.9,0.3,2.8,0.7L82.9,4.2z"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="cModal-backdrop cMenuContent-backdrop"
                data-modal-backdrop=""
              ></div>
            </div>
          </div>
        </div>

        <div className="cHeader-content" data-header-content="">
          <div
            className="cHeader-content-inner"
            style={{ transform: "translate(0px, 0%)" }}
          >
            <ul className="cHeader-list">
              <li
                className="cFlatText cHeader-list-item"
                data-flat-text=""
                style={{
                  padding: "0px 0.8px",
                  transform: "scaleX(1.05)",
                }}
              >
                <a className="cHeader-list-link" href="/" data-disable-hash="">
                  HOME
                </a>
              </li>
              <li
                className="cFlatText cHeader-list-item"
                data-flat-text=""
                style={{
                  padding: "0px 1.2px",
                  transform: "scaleX(1.05)",
                }}
              >
                <a
                  className="cHeader-list-link"
                  href="/updates"
                  data-disable-hash=""
                >
                  RESEARCH
                </a>
              </li>
              <li
                className="cFlatText cHeader-list-item"
                data-flat-text=""
                style={{
                  padding: "0px 1.175px",
                  transform: "scaleX(1.05)",
                }}
              >
                <a
                  className="cHeader-list-link"
                  href="/news"
                  data-disable-hash=""
                >
                  IDEAS
                </a>
              </li>
              <li
                className="cFlatText cHeader-list-item"
                data-flat-text=""
                style={{
                  padding: "0px 1.175px",
                  transform: "scaleX(1.05)",
                }}
              >
                <a
                  className="cHeader-list-link"
                  href="/fellows"
                  data-disable-hash=""
                >
                  FELLOWS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
