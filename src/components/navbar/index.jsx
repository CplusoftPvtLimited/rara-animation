/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./index.css";

import PecuniaRedLogo from "../../assets/images/Pecunia_red_symbol.png";

import { useNavigate } from "react-router-dom";
import { ScrollContext } from "../ScrollContext";

gsap.registerPlugin(ScrollTrigger);
const index = ({ updateScrollPos }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const ScrollContextValue = useContext(ScrollContext);
  console.log(
    "🚀 ~ file: index.jsx:17 ~ index ~ ScrollContextValue:",
    ScrollContextValue
  );

  const navigate = useNavigate();

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const scrollContainerScrollPosition = () => {
    const scrollContainer = document.querySelector(".custom-container");
    const onScroll = () => {
      // Clear any existing timeout to reset the timer
      clearTimeout(scrollTimeout);

      // Set a new timeout
      scrollTimeout = setTimeout(() => {
        // console.log("🚀 ~ scrollTop:", scrollContainer.scrollTop);
        ScrollContextValue.setScrollY(scrollContainer.scrollTop);

        // Remove the event listener once we're sure scrolling has stopped
        scrollContainer.removeEventListener("scroll", onScroll);
      }, 100); // 100ms delay to wait after the last scroll event
    };

    // Add the event listener to the scroll container
    scrollContainer.addEventListener("scroll", onScroll);
  };

  const scrollToHomeSection = () => {
    const homeSection = document.getElementById("home-section");

    if (window.location.pathname == "/") {
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
        scrollContainerScrollPosition();
      }
    } else {
      navigate("/");

      if (window.location.pathname == "/") {
        setTimeout(() => {
          const homeSection = document.getElementById("home-section");

          gsap.to(".cHeader-logo", {
            transform:
              window.innerWidth > 768 && window.innerHeight > 900
                ? "translate(0%, 43vh)"
                : window.innerWidth > 768
                ? "translate(0%, 40vh)"
                : window.innerWidth > 330
                ? "translate(0%, 40vh)"
                : "translate(0%, 40vh)",
            top: 0,
            left: 0,
            margin: "auto",
          });

          homeSection.scrollIntoView({ behavior: "smooth" });
          scrollContainerScrollPosition();
        }, 800);
      }
    }
  };

  let scrollTimeout;

  const scrollToVisionSection = () => {
    const visionSection = document.getElementById("vision-section");
    const scrollContainer = document.querySelector(".custom-container");

    if (window.location.pathname == "/") {
      if (visionSection) {
        visionSection.scrollIntoView({ behavior: "smooth" });
        scrollContainerScrollPosition();
      }
    } else {
      navigate("/");

      if (window.location.pathname == "/") {
        setTimeout(() => {
          const visionSection = document.getElementById("vision-section");
          visionSection.scrollIntoView({ behavior: "smooth" });
          scrollContainerScrollPosition();
        }, 800);
      }
    }
  };

  const scrollToGuidelinesSection = () => {
    const guidelinesSection = document.getElementById("guideline");
    const scrollContainer = document.querySelector(".custom-container");

    if (window.location.pathname == "/") {
      if (guidelinesSection) {
        guidelinesSection.scrollIntoView({ behavior: "smooth" });
        scrollContainerScrollPosition();
      }
    } else {
      navigate("/");

      if (window.location.pathname == "/") {
        setTimeout(() => {
          const guidelinesSection = document.getElementById("guideline");
          guidelinesSection.scrollIntoView({ behavior: "smooth" });
          scrollContainerScrollPosition();
        }, 800);
      }
    }
  };

  const scrollToFellowsSection = () => {
    const fellowsSection = document.getElementById("fellows");

    if (window.location.pathname == "/") {
      if (fellowsSection) {
        fellowsSection.scrollIntoView({ behavior: "smooth" });
        scrollContainerScrollPosition();
      }
    } else {
      navigate("/");

      if (window.location.pathname == "/") {
        setTimeout(() => {
          const fellowsSection = document.getElementById("fellows");
          fellowsSection.scrollIntoView({ behavior: "smooth" });
          scrollContainerScrollPosition();
        }, 800);
      }
    }
  };

  const scrollToUpdatesSection = () => {
    console.log("scrollToUpdatesSection");
    const updatesSection = document.getElementById("updates");

    if (window.location.pathname == "/") {
      if (updatesSection) {
        updatesSection.scrollIntoView({ behavior: "smooth" });
        scrollContainerScrollPosition();
      }
    } else {
      navigate("/");

      if (window.location.pathname == "/") {
        setTimeout(() => {
          const updatesSection = document.getElementById("updates");
          updatesSection.scrollIntoView({ behavior: "smooth" });
          scrollContainerScrollPosition();
        }, 800);
      }
    }
  };

  const scrollToContactSection = () => {
    const contactSection = document.getElementById("contact-container");

    if (window.location.pathname == "/") {
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        scrollContainerScrollPosition();
      }
    } else {
      navigate("/");

      if (window.location.pathname == "/") {
        setTimeout(() => {
          const contactSection = document.getElementById("contact-container");
          contactSection.scrollIntoView({ behavior: "smooth" });
          scrollContainerScrollPosition();
        }, 1000);
      }
    }
  };

  useEffect(() => {
    const menuBtnElement = document.querySelector(".cMenu-btn-inner");
    const sponsorBtnElement = document.querySelector(".button4");
    const donationBtnElement = document.querySelector(".button5");

    const tl = gsap.timeline({ paused: true, reversed: true });

    console.log("screenWidth: " + screenWidth);

    let transformValue = "translate(0, 0)";

    switch (true) {
      case screenWidth <= 320:
        transformValue = "translate(200px, -50px)";
        break;
      case screenWidth <= 380:
        transformValue = "translate(180px, -45px)";
        break;
      case screenWidth <= 450:
        transformValue = "translate(180px, -40px)";
        break;
      case screenWidth <= 768:
        transformValue = "translate(111px, -43px)";
        break;
      case screenWidth <= 1024:
        transformValue = "translate(114px, -19px)";
        break;
      case screenWidth <= 1440:
        transformValue = "translate(0px, 0px)";
        break;
    }

    tl.fromTo(
      ".cMenu-bg",
      {
        transform: "scale(0, 0)",
      },
      {
        transform: transformValue,
      }
    );

    window.removeEventListener("resize", handleResize);

    if (window.location.pathname != "/") {
      gsap.fromTo(
        ".cHeader-logo",
        {
          transform: "translate(0px, 99.5825px)",
          top: 0,
          left: 0,
        },
        {
          transform: "scale(0.266,0.266)",
          top: "2.9rem",
          left: window.innerWidth < 768 ? "-19rem" : "0rem",
        }
      );
    }
    // if ((window.location.pathname = "/research")) {
    //   gsap.fromTo(
    //     ".cHeader-logo",
    //     {
    //       transform: "translate(0px, 99.5825px)",
    //       top: 0,
    //       left: 0,
    //     },
    //     {
    //       transform: "scale(0.266,0.266)",
    //       top: "2.9rem",
    //       left: window.innerWidth < 768 ? "-19rem" : "0rem",
    //     }
    //   );
    // }

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
      if (window.innerWidth > 768) {
        sponsorBtnElement.classList.toggle("-isOpen");
        donationBtnElement.classList.toggle("-isOpen");
      }
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
      gsap.fromTo(
        ".cMenuContent-list-svg > :nth-child(11)",
        { transform: "scale(0)" }, // From scale(0)
        { transform: "scale(1)", duration: 0.9, delay: 0.77 } // To scale(1)
      );
    });
  }, []);

  useEffect(() => {
    // Check if the current page path is "/update"
    if (window.location.pathname === "/research") {
      // Animate the element
      gsap.fromTo(
        ".cHeader-logo",
        {
          transform: "translate(0px, 99.5825px)",
          top: 0,
          left: 0,
        },
        {
          transform: "scale(0.266,0.266)",
          top: "2.69rem",
          left: "-19rem",
        }
      );
    }

    // if (window.innerWidth > 768) {
    //   // Animate the element
    //   gsap.fromTo(
    //     ".cHeader-logo",
    //     {
    //       transform: "translate(0px, 99.5825px)",
    //       top: 0,
    //       left: 0,
    //     },
    //     {
    //       transform: "scale(0.266,0.266)",
    //       top: "2.69rem",
    //       left: "0rem",
    //     }
    //   );
    // }
  }, []);

  return (
    <header
      className="cContainer -leftSmall -rightSmall -spLeftSmall -spRightSmall cHeader -menu scrollColor"
      data-el=""
      data-header=""
    >
      <div className="cHeader-inner">
        {/** Home Page logo */}
        <h1
          className="cHeader-logo -kvLoaded"
          data-header-logo=""
          style={{
            width: "100%",
            margin: "auto",
            zIndex: window.innerWidth < 768 ? 0 : "",
            transform:
              window.innerWidth > 768 && window.innerHeight > 900
                ? "translate(0%, 42vh)"
                : "translate(0%, 39vh)",
          }}
        >
          <svg
            width="355.125"
            height="55.275"
            viewBox="0 0 355.125 55.275"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%" }}
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
                d="M 224.325 2.85 L 211.95 2.85 L 211.95 3.975 A 36.056 36.056 0 0 1 215.665 4.977 C 220.359 6.558 221.973 8.724 222.473 12.511 A 31.063 31.063 0 0 1 222.675 16.5 L 222.675 27.75 A 1943.881 1943.881 0 0 0 222.676 29.264 C 222.687 43.888 222.736 50.581 215.135 52.364 A 17.671 17.671 0 0 1 212.925 52.725 L 212.925 53.85 L 235.35 53.85 L 235.35 52.725 C 224.683 50.592 224.912 46.871 224.925 29.175 A 1466.905 1466.905 0 0 0 224.925 28.125 L 224.925 14.325 A 1225.409 1225.409 0 0 0 237.75 27.858 A 610.318 610.318 0 0 1 262.95 55.275 L 263.925 55.05 A 3266.563 3266.563 0 0 1 263.762 47.647 C 263.47 33.52 263.332 19.393 264.225 12.375 A 25.752 25.752 0 0 1 264.758 9.283 C 265.513 6.284 267.013 4.492 270.975 3.975 L 270.975 2.85 L 250.5 2.85 L 250.5 3.975 A 39.373 39.373 0 0 1 254.012 4.739 C 259.539 6.254 260.937 8.688 261 14.7 L 261.375 42.075 L 224.325 2.85 Z M 45.075 53.85 L 86.775 53.85 A 48.253 48.253 0 0 0 88.974 44.304 A 48.798 48.798 0 0 0 89.325 39 L 88.2 39 A 24.844 24.844 0 0 1 86.624 44.22 C 84.172 49.758 79.762 52.009 72.426 52.049 A 36.72 36.72 0 0 1 72.225 52.05 A 28.524 28.524 0 0 1 68.991 51.882 C 60.12 50.866 60.975 45.468 60.975 41.475 L 60.975 29.175 L 68.775 29.175 C 73.509 29.175 77.181 29.228 78.807 33.18 A 11.396 11.396 0 0 1 79.5 35.85 L 80.625 35.85 L 80.625 19.125 L 79.5 19.125 A 10.72 10.72 0 0 1 78.825 21.84 C 77.236 25.711 73.477 26.025 68.775 26.025 L 60.975 26.025 L 60.975 4.65 L 68.25 4.65 A 42.634 42.634 0 0 1 75.611 5.063 C 79.713 5.81 82.766 7.901 83.28 13.763 A 19.173 19.173 0 0 1 83.325 14.4 L 84.45 14.4 L 85.35 2.85 L 45.075 2.85 L 45.075 3.975 A 34.252 34.252 0 0 1 48.282 4.536 C 54.098 5.891 54.181 8.479 54.375 15.15 L 54.375 41.55 C 54.177 48.351 54.095 50.908 47.937 52.242 A 36.342 36.342 0 0 1 45.075 52.725 L 45.075 53.85 Z M 187.425 2.85 L 187.425 3.975 A 25.916 25.916 0 0 1 191.486 4.638 C 197.509 6.195 198.52 9.921 198.656 16.646 A 108.121 108.121 0 0 1 198.675 18.825 L 198.675 26.7 C 198.675 35.641 200.179 50.599 185.131 51.276 A 24.031 24.031 0 0 1 184.05 51.3 C 163.501 51.3 165.9 31.951 165.9 30.525 L 165.9 15.15 A 80.045 80.045 0 0 1 165.947 11.752 C 166.178 6.547 167.525 5.233 175.351 4.053 A 92.906 92.906 0 0 1 175.875 3.975 L 175.875 2.85 L 150 2.85 L 150 3.975 A 34.252 34.252 0 0 1 153.207 4.536 C 159.023 5.891 159.106 8.479 159.3 15.15 L 159.3 31.95 C 159.3 37.872 156.962 54.313 179.252 54.741 A 46.724 46.724 0 0 0 180.15 54.75 A 32.184 32.184 0 0 0 187.277 54.022 C 198.031 51.579 200.961 43.362 201.15 35.25 L 201.6 18.825 A 129.93 129.93 0 0 1 201.8 14.214 C 202.189 8.393 203.223 5.38 207.293 4.311 A 13.009 13.009 0 0 1 209.175 3.975 L 209.175 2.85 L 187.425 2.85 Z M 145.35 38.1 L 144.3 37.65 A 41.438 41.438 0 0 1 139.343 46.948 C 136.58 50.544 132.88 52.95 127.2 52.95 C 117.589 52.95 107.627 44.925 105.441 32.86 A 27.796 27.796 0 0 1 105 27.9 C 105 15.901 111.683 5.33 123.661 3.912 A 23.698 23.698 0 0 1 126.45 3.75 A 15.796 15.796 0 0 1 132.855 5.002 C 136.728 6.701 139.353 10.024 140.825 14.306 A 25.081 25.081 0 0 1 141.825 18.3 L 142.95 18.3 L 142.95 6 A 31.418 31.418 0 0 0 127.951 1.974 A 42.369 42.369 0 0 0 126.525 1.95 A 36.149 36.149 0 0 0 114.37 3.924 C 102.653 8.088 96.478 18.224 96.304 28.36 A 25.666 25.666 0 0 0 96.3 28.8 C 96.3 43.18 106.341 51.838 118.957 54.133 A 38.981 38.981 0 0 0 125.925 54.75 C 131.25 54.75 136.425 53.85 141.225 51.525 C 143.025 47.175 144.45 42.675 145.35 38.1 Z M 9.3 18.3 L 9.3 41.55 C 9.102 48.351 9.02 50.908 2.862 52.242 A 36.342 36.342 0 0 1 0 52.725 L 0 53.85 L 25.875 53.85 L 25.875 52.725 C 16.05 51.3 15.9 49.8 15.9 41.55 L 15.9 4.5 A 25.633 25.633 0 0 1 16.119 4.499 C 24.811 4.499 32.85 8.931 32.85 18.6 A 13.088 13.088 0 0 1 32.074 23.238 C 30.8 26.624 28.043 28.74 24.441 29.897 A 21.918 21.918 0 0 1 21.075 30.675 L 21.3 31.8 A 42.425 42.425 0 0 0 24.959 31.235 C 32.729 29.674 40.5 25.64 40.5 16.575 C 40.5 13.65 38.85 1.875 16.875 2.7 L 0.525 3.3 L 0.525 4.425 A 21.4 21.4 0 0 1 3.881 4.823 C 9.3 5.986 9.3 9.614 9.3 18.3 Z M 333.075 52.725 L 333.075 53.85 L 355.125 53.85 L 355.125 52.725 A 19.898 19.898 0 0 1 352.56 52.087 C 349.009 50.914 347.732 48.904 346.232 45.029 A 77.264 77.264 0 0 1 345.825 43.95 L 329.325 0 A 14.617 14.617 0 0 1 326.101 2.872 A 13.428 13.428 0 0 1 323.85 4.05 A 2.425 2.425 0 0 1 324.166 5.294 C 324.166 6.467 323.516 7.806 323.025 9.225 L 318.525 21.45 L 310.05 43.575 A 243.569 243.569 0 0 1 309.687 44.484 C 307.705 49.414 306.756 50.92 301.002 52.552 A 50.33 50.33 0 0 1 300.375 52.725 L 300.375 53.85 L 320.925 53.85 L 320.925 52.725 A 34.761 34.761 0 0 0 320.114 52.61 C 316.782 52.173 312.375 51.847 312.375 47.625 C 312.375 44.163 315.426 36.819 316.794 32.925 A 46.959 46.959 0 0 0 316.95 32.475 L 334.05 32.475 C 336 37.725 338.85 44.775 338.85 47.925 A 4.195 4.195 0 0 1 338.542 49.57 C 337.837 51.244 336.029 51.971 334.221 52.447 A 35.701 35.701 0 0 1 333.075 52.725 Z M 299.85 3.975 L 299.85 2.85 L 274.65 2.85 L 274.65 3.975 A 34.252 34.252 0 0 1 277.857 4.536 C 283.673 5.891 283.756 8.479 283.95 15.15 L 283.95 41.55 C 283.752 48.351 283.67 50.908 277.512 52.242 A 36.342 36.342 0 0 1 274.65 52.725 L 274.65 53.85 L 299.85 53.85 L 299.85 52.725 A 34.252 34.252 0 0 1 296.643 52.164 C 290.827 50.809 290.744 48.221 290.55 41.55 L 290.55 15.15 C 290.748 8.349 290.83 5.792 296.988 4.458 A 36.342 36.342 0 0 1 299.85 3.975 Z M 333.075 29.025 L 318.225 29.025 L 325.275 9.525 L 333.075 29.025 Z"
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
                {window.innerWidth > 768 && (
                  <>
                    <a
                      className="cMenu-btn-inner-btn"
                      href="/sponsership"
                      style={{ margin: 0 }}
                    >
                      <button
                        type="button"
                        className="custom_button button4"
                        style={{}}
                      >
                        SPONSORSHIP
                      </button>
                    </a>

                    <a
                      className="cMenu-btn-inner-btn"
                      href="/donation"
                      style={{ margin: 0 }}
                    >
                      <button
                        type="button"
                        className="custom_button button5"
                        style={{}}
                      >
                        DONATE
                      </button>
                    </a>
                  </>
                )}
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
                          style={{
                            width: window.innerWidth <= 768 ? "100%" : "",
                          }}
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

                    {/* discover */}
                    <li className="cMenuContent-list-item -anchor">
                      <a
                        className="cMenuContent-list-link -guideline"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                        onClick={scrollToHomeSection}
                      >
                        <svg
                          viewBox="0 0 767.78 151.37"
                          style={{
                            width: window.innerWidth <= 768 ? "100%" : "",
                          }}
                        >
                          <g
                            className="cMenuContent-list-svg"
                            id="svgGroup"
                            stroke-linecap="round"
                            fill-rule="evenodd"
                            font-size="9pt"
                            stroke="#000"
                            stroke-width="0.25mm"
                            fill="#FFF"
                            style={{
                              stroke: "#000",
                              strokeWidth: "0.25mm",
                              fill: "#FFF",
                            }}
                          >
                            <path
                              d="M 775 142.401 L 691 142.401 L 691 2.401 L 775 2.401 L 775 18.801 L 710 18.801 L 710 61.401 L 766 61.401 L 766 77.401 L 710 77.401 L 710 126.001 L 775 126.001 L 775 142.401 Z M 179.4 130.601 L 189 114.601 Q 196.2 120.601 205.2 124.401 A 46.697 46.697 0 0 0 215.941 127.421 A 64.236 64.236 0 0 0 226.2 128.201 Q 236.738 128.201 244.063 124.988 A 27.401 27.401 0 0 0 249 122.201 A 20.56 20.56 0 0 0 254.592 116.391 Q 257.225 112.179 257.389 106.733 A 24.232 24.232 0 0 0 257.4 106.001 Q 257.4 100.201 255 95.701 Q 252.612 91.223 245.768 86.943 A 51.798 51.798 0 0 0 245.7 86.901 Q 238.8 82.601 225.4 77.601 A 180.825 180.825 0 0 1 216.185 73.739 Q 208.044 70.042 202.4 66.301 A 43.863 43.863 0 0 1 196.221 61.406 Q 192.787 58.107 190.676 54.376 A 26.605 26.605 0 0 1 190.1 53.301 A 33.333 33.333 0 0 1 187.059 43.958 A 45.856 45.856 0 0 1 186.4 36.001 Q 186.4 26.001 191.9 17.901 A 34.355 34.355 0 0 1 200.806 9.026 A 46.771 46.771 0 0 1 208.1 4.901 Q 217.795 0.461 231.184 0.044 A 90.456 90.456 0 0 1 234 0.001 Q 246.4 0.001 256.3 2.501 Q 266.2 5.001 275.6 9.601 L 268.6 25.801 A 62.991 62.991 0 0 0 260.349 21.763 A 83.372 83.372 0 0 0 252.7 19.101 Q 243.6 16.401 233.6 16.401 A 54.374 54.374 0 0 0 225.54 16.961 Q 221.276 17.601 217.8 18.974 A 25.233 25.233 0 0 0 212.8 21.601 A 19.803 19.803 0 0 0 208.473 25.53 A 14.719 14.719 0 0 0 205.2 35.001 A 20.929 20.929 0 0 0 205.785 40.044 A 17.123 17.123 0 0 0 207.4 44.201 Q 209.511 48.04 215.582 51.694 A 47.005 47.005 0 0 0 216.1 52.001 Q 221.529 55.175 231.492 59.046 A 260.029 260.029 0 0 0 235.6 60.601 Q 246.641 64.706 254.426 69.112 A 71.007 71.007 0 0 1 260.3 72.801 Q 269.4 79.201 273.2 86.701 A 35.157 35.157 0 0 1 276.682 98.426 A 44.311 44.311 0 0 1 277 103.801 A 43.42 43.42 0 0 1 275.665 114.802 A 34.209 34.209 0 0 1 270.5 126.001 A 39.236 39.236 0 0 1 256.637 138.046 A 48.713 48.713 0 0 1 252.5 140.001 A 61.043 61.043 0 0 1 237.68 144.009 A 80.054 80.054 0 0 1 226.2 144.801 A 94.734 94.734 0 0 1 210.649 143.576 A 76.098 76.098 0 0 1 199.6 140.901 A 76.412 76.412 0 0 1 188.867 136.536 A 56.865 56.865 0 0 1 179.4 130.601 Z M 619.8 142.401 L 598.4 142.401 L 547 7.401 L 565.6 0.201 L 609.6 121.601 L 653.8 0.801 L 671 7.401 L 619.8 142.401 Z M 901.4 136.401 L 883.6 144.801 L 866.2 106.801 Q 859.6 92.601 849.6 86.601 A 39.304 39.304 0 0 0 838.599 82.196 Q 833.682 81 827.929 80.701 A 75.695 75.695 0 0 0 824 80.601 L 821 80.601 L 821 142.401 L 802 142.401 L 802 2.801 A 495.801 495.801 0 0 1 817.394 1.582 A 431.558 431.558 0 0 1 822.3 1.301 A 375.882 375.882 0 0 1 834.933 0.871 A 452.536 452.536 0 0 1 843 0.801 Q 859.038 0.801 870.091 4.883 A 40.191 40.191 0 0 1 881.5 11.201 A 34.829 34.829 0 0 1 890.759 22.269 Q 894.386 29.261 894.4 37.933 A 41.617 41.617 0 0 1 894.4 38.001 A 39.76 39.76 0 0 1 893.099 48.441 A 29.344 29.344 0 0 1 885.7 61.501 Q 877 70.401 860.6 74.801 A 47.313 47.313 0 0 1 867.458 78.526 A 40.854 40.854 0 0 1 870.2 80.501 Q 874.4 83.801 878.3 89.301 Q 881.248 93.458 884.253 99.501 A 130.366 130.366 0 0 1 886.2 103.601 L 901.4 136.401 Z M 394.8 7.201 L 389 23.201 Q 382.8 20.201 376.3 18.401 Q 370.714 16.854 363.43 16.637 A 81.411 81.411 0 0 0 361 16.601 Q 348.2 16.601 338.1 23.201 A 42.334 42.334 0 0 0 325.369 36.364 A 53.956 53.956 0 0 0 322.2 42.201 Q 316.853 53.632 316.435 69.483 A 103.185 103.185 0 0 0 316.4 72.201 A 83.725 83.725 0 0 0 317.632 86.912 A 61.858 61.858 0 0 0 322.1 101.601 A 51.354 51.354 0 0 0 329.273 113.257 A 42.846 42.846 0 0 0 337.9 121.201 A 39.406 39.406 0 0 0 360.19 128.194 A 47.788 47.788 0 0 0 361 128.201 Q 369.752 128.201 376.43 126.287 A 38.56 38.56 0 0 0 378 125.801 Q 385.2 123.401 392 119.601 L 397.8 135.401 A 75.122 75.122 0 0 1 388.811 139.49 A 95.788 95.788 0 0 1 380.9 142.101 Q 372.012 144.627 360.411 144.79 A 114.832 114.832 0 0 1 358.8 144.801 A 64.769 64.769 0 0 1 340.15 142.199 A 55.921 55.921 0 0 1 326.6 136.101 A 57.201 57.201 0 0 1 306.847 115.21 A 69.832 69.832 0 0 1 304.8 111.301 A 75.222 75.222 0 0 1 298.602 91.867 Q 297 83.06 297 73.001 Q 297 51.601 304.9 35.101 A 63.271 63.271 0 0 1 318.858 15.839 A 59.721 59.721 0 0 1 327.3 9.301 A 58.742 58.742 0 0 1 352.661 0.478 A 74.584 74.584 0 0 1 361.2 0.001 A 91.277 91.277 0 0 1 371.317 0.537 A 70.399 70.399 0 0 1 379.4 1.901 A 76.448 76.448 0 0 1 394.349 6.99 A 71.217 71.217 0 0 1 394.8 7.201 Z M 0 142.001 L 0 2.801 Q 9.4 1.801 18.4 1.301 Q 26.134 0.871 35.789 0.811 A 513.172 513.172 0 0 1 39 0.801 Q 55.726 0.801 68.22 5.636 A 58.396 58.396 0 0 1 70.1 6.401 Q 83.2 12.001 91.7 21.801 Q 100.2 31.601 104.3 44.501 A 88.512 88.512 0 0 1 108.244 66.492 A 103.012 103.012 0 0 1 108.4 72.201 Q 108.4 86.801 104.2 99.801 Q 100 112.801 91.3 122.701 A 57.937 57.937 0 0 1 74.789 135.6 A 70.514 70.514 0 0 1 69.1 138.301 Q 56.549 143.6 39.418 143.973 A 120.384 120.384 0 0 1 36.8 144.001 Q 25.4 144.001 16.9 143.401 Q 8.4 142.801 0 142.001 Z M 459.616 143.286 A 73.021 73.021 0 0 0 474.8 144.801 A 76.7 76.7 0 0 0 485.123 144.127 A 60.148 60.148 0 0 0 502.6 139.101 Q 514.8 133.401 523.4 123.501 A 65.277 65.277 0 0 0 526.05 120.245 A 69.469 69.469 0 0 0 536.5 100.401 A 81.046 81.046 0 0 0 538.253 94.54 A 88.89 88.89 0 0 0 541 72.201 A 96.43 96.43 0 0 0 540.842 66.646 A 82.879 82.879 0 0 0 536.5 44.201 Q 532 31.201 523.4 21.201 Q 514.8 11.201 502.5 5.601 A 59.851 59.851 0 0 0 490.717 1.676 A 72.841 72.841 0 0 0 474.8 0.001 A 78.699 78.699 0 0 0 462.345 0.952 A 59.321 59.321 0 0 0 439.4 9.501 Q 424.6 19.001 416.7 35.301 A 75.977 75.977 0 0 0 411.03 51.527 A 92.363 92.363 0 0 0 408.8 72.201 A 97.827 97.827 0 0 0 408.87 75.923 A 85.537 85.537 0 0 0 413.3 100.401 A 78.751 78.751 0 0 0 414.179 102.847 A 68.705 68.705 0 0 0 426.3 123.501 Q 434.8 133.401 447 139.101 A 58.284 58.284 0 0 0 459.616 143.286 Z M 474.8 128.401 A 53.033 53.033 0 0 0 486.696 127.132 A 38.631 38.631 0 0 0 500.6 121.001 A 44.94 44.94 0 0 0 515.25 103.259 A 54.503 54.503 0 0 0 516.3 100.901 A 68.215 68.215 0 0 0 520.945 83.043 A 87.007 87.007 0 0 0 521.6 72.201 Q 521.6 61.401 518.4 51.401 A 59.47 59.47 0 0 0 510.12 34.748 A 56.239 56.239 0 0 0 509.2 33.501 Q 503.2 25.601 494.5 21.001 A 39.843 39.843 0 0 0 479.666 16.637 A 49.156 49.156 0 0 0 474.8 16.401 A 48.172 48.172 0 0 0 461.816 18.082 A 39.089 39.089 0 0 0 449.7 23.801 A 46.295 46.295 0 0 0 434.498 42.055 A 55.569 55.569 0 0 0 433.7 43.801 A 65.586 65.586 0 0 0 428.792 62.177 A 82.513 82.513 0 0 0 428.2 72.201 Q 428.2 83.001 431.3 93.101 A 58.758 58.758 0 0 0 439.661 110.193 A 55.847 55.847 0 0 0 440.4 111.201 Q 446.4 119.201 455.1 123.801 A 39.843 39.843 0 0 0 469.934 128.165 A 49.156 49.156 0 0 0 474.8 128.401 Z M 155.4 142.401 L 136.4 142.401 L 136.4 2.401 L 155.4 2.401 L 155.4 142.401 Z M 19 18.201 L 19 126.401 Q 23.2 127.001 27.8 127.201 Q 32.4 127.401 37.4 127.401 Q 55.4 127.401 66.8 120.401 Q 78.2 113.401 83.6 100.901 A 64.583 64.583 0 0 0 88.109 84.753 A 85.005 85.005 0 0 0 89 72.201 Q 89 57.801 83.6 45.201 Q 78.2 32.601 67 24.901 A 41.79 41.79 0 0 0 52.896 18.782 Q 47.214 17.423 40.592 17.232 A 76.016 76.016 0 0 0 38.4 17.201 Q 32.6 17.201 27.8 17.501 Q 23 17.801 19 18.201 Z M 821 17.601 L 821 64.601 L 843 64.601 Q 857.4 64.601 866.4 58.201 A 20.577 20.577 0 0 0 875.212 43.153 A 29.024 29.024 0 0 0 875.4 39.801 Q 875.4 29.801 867 23.301 A 27.846 27.846 0 0 0 858.272 18.858 Q 854.414 17.637 849.754 17.14 A 63.889 63.889 0 0 0 843 16.801 Q 836.2 16.801 830.8 17.001 Q 825.4 17.201 821 17.601 Z"
                              vector-effect="non-scaling-stroke"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>

                    {/* Explore */}
                    <li className="cMenuContent-list-item -anchor">
                      <a
                        className="cMenuContent-list-link -guideline"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                        onClick={scrollToVisionSection}
                      >
                        <svg
                          viewBox="0 0 767.78 151.37"
                          style={{
                            width: window.innerWidth <= 768 ? "100%" : "",
                          }}
                        >
                          <g
                            className="cMenuContent-list-svg"
                            id="svgGroup"
                            stroke-linecap="round"
                            fill-rule="evenodd"
                            font-size="9pt"
                            stroke="#000"
                            stroke-width="0.25mm"
                            fill="#FFF"
                            style={{
                              stroke: "#000",
                              strokeWidth: "0.25mm",
                              fill: "#FFF",
                            }}
                          >
                            <path
                              d="M 84 142.401 L 0 142.401 L 0 2.401 L 84 2.401 L 84 18.801 L 19 18.801 L 19 61.401 L 75 61.401 L 75 77.401 L 19 77.401 L 19 126.001 L 84 126.001 L 84 142.401 Z M 802.4 142.401 L 718.4 142.401 L 718.4 2.401 L 802.4 2.401 L 802.4 18.801 L 737.4 18.801 L 737.4 61.401 L 793.4 61.401 L 793.4 77.401 L 737.4 77.401 L 737.4 126.001 L 802.4 126.001 L 802.4 142.401 Z M 212.4 132.601 L 197 144.401 L 152.8 84.401 L 110 144.001 L 95 132.601 L 142 71.201 L 97 12.401 L 112.8 0.601 L 153.4 57.401 L 193.6 1.201 L 208.4 12.401 L 164.8 70.201 L 212.4 132.601 Z M 694.4 136.401 L 676.6 144.801 L 659.2 106.801 Q 652.6 92.601 642.6 86.601 A 39.304 39.304 0 0 0 631.599 82.196 Q 626.682 81 620.929 80.701 A 75.695 75.695 0 0 0 617 80.601 L 614 80.601 L 614 142.401 L 595 142.401 L 595 2.801 A 495.801 495.801 0 0 1 610.394 1.582 A 431.558 431.558 0 0 1 615.3 1.301 A 375.882 375.882 0 0 1 627.933 0.871 A 452.536 452.536 0 0 1 636 0.801 Q 652.038 0.801 663.091 4.883 A 40.191 40.191 0 0 1 674.5 11.201 A 34.829 34.829 0 0 1 683.759 22.269 Q 687.386 29.261 687.4 37.933 A 41.617 41.617 0 0 1 687.4 38.001 A 39.76 39.76 0 0 1 686.099 48.441 A 29.344 29.344 0 0 1 678.7 61.501 Q 670 70.401 653.6 74.801 A 47.313 47.313 0 0 1 660.458 78.526 A 40.854 40.854 0 0 1 663.2 80.501 Q 667.4 83.801 671.3 89.301 Q 674.248 93.458 677.253 99.501 A 130.366 130.366 0 0 1 679.2 103.601 L 694.4 136.401 Z M 431.8 142.401 L 348.6 142.401 L 348.6 2.401 L 367.6 2.401 L 367.6 125.401 L 431.8 125.401 L 431.8 142.401 Z M 485.616 143.286 A 73.021 73.021 0 0 0 500.8 144.801 A 76.7 76.7 0 0 0 511.123 144.127 A 60.148 60.148 0 0 0 528.6 139.101 Q 540.8 133.401 549.4 123.501 A 65.277 65.277 0 0 0 552.05 120.245 A 69.469 69.469 0 0 0 562.5 100.401 A 81.046 81.046 0 0 0 564.253 94.54 A 88.89 88.89 0 0 0 567 72.201 A 96.43 96.43 0 0 0 566.842 66.646 A 82.879 82.879 0 0 0 562.5 44.201 Q 558 31.201 549.4 21.201 Q 540.8 11.201 528.5 5.601 A 59.851 59.851 0 0 0 516.717 1.676 A 72.841 72.841 0 0 0 500.8 0.001 A 78.699 78.699 0 0 0 488.345 0.952 A 59.321 59.321 0 0 0 465.4 9.501 Q 450.6 19.001 442.7 35.301 A 75.977 75.977 0 0 0 437.03 51.527 A 92.363 92.363 0 0 0 434.8 72.201 A 97.827 97.827 0 0 0 434.87 75.923 A 85.537 85.537 0 0 0 439.3 100.401 A 78.751 78.751 0 0 0 440.179 102.847 A 68.705 68.705 0 0 0 452.3 123.501 Q 460.8 133.401 473 139.101 A 58.284 58.284 0 0 0 485.616 143.286 Z M 251.4 142.401 L 232.4 142.401 L 232.4 2.801 Q 240.6 1.801 250.5 1.301 A 401.613 401.613 0 0 1 268.361 0.809 A 443.908 443.908 0 0 1 271 0.801 A 91.917 91.917 0 0 1 284.279 1.709 Q 291.371 2.745 297.343 4.965 A 52.022 52.022 0 0 1 300.6 6.301 A 49.213 49.213 0 0 1 310.763 12.358 A 38.747 38.747 0 0 1 319.2 21.401 Q 325.6 31.001 325.6 43.401 A 50.516 50.516 0 0 1 324.184 55.646 A 38.536 38.536 0 0 1 318.2 68.801 A 44.625 44.625 0 0 1 303.097 82.06 A 56.131 56.131 0 0 1 297.6 84.701 Q 284.4 90.201 267 90.201 A 208.046 208.046 0 0 1 257.93 90.011 A 165.858 165.858 0 0 1 251.4 89.601 L 251.4 142.401 Z M 500.8 128.401 A 53.033 53.033 0 0 0 512.696 127.132 A 38.631 38.631 0 0 0 526.6 121.001 A 44.94 44.94 0 0 0 541.25 103.259 A 54.503 54.503 0 0 0 542.3 100.901 A 68.215 68.215 0 0 0 546.945 83.043 A 87.007 87.007 0 0 0 547.6 72.201 Q 547.6 61.401 544.4 51.401 A 59.47 59.47 0 0 0 536.12 34.748 A 56.239 56.239 0 0 0 535.2 33.501 Q 529.2 25.601 520.5 21.001 A 39.843 39.843 0 0 0 505.666 16.637 A 49.156 49.156 0 0 0 500.8 16.401 A 48.172 48.172 0 0 0 487.816 18.082 A 39.089 39.089 0 0 0 475.7 23.801 A 46.295 46.295 0 0 0 460.498 42.055 A 55.569 55.569 0 0 0 459.7 43.801 A 65.586 65.586 0 0 0 454.792 62.177 A 82.513 82.513 0 0 0 454.2 72.201 Q 454.2 83.001 457.3 93.101 A 58.758 58.758 0 0 0 465.661 110.193 A 55.847 55.847 0 0 0 466.4 111.201 Q 472.4 119.201 481.1 123.801 A 39.843 39.843 0 0 0 495.934 128.165 A 49.156 49.156 0 0 0 500.8 128.401 Z M 251.4 17.601 L 251.4 73.401 A 95.938 95.938 0 0 0 253.997 73.687 Q 256.325 73.914 259.2 74.101 Q 263.8 74.401 269.4 74.401 Q 287.2 74.401 297 66.401 A 25.793 25.793 0 0 0 306.71 47.516 A 34.64 34.64 0 0 0 306.8 45.001 A 28.904 28.904 0 0 0 305.278 35.414 A 24.271 24.271 0 0 0 297.4 24.401 A 30.925 30.925 0 0 0 287.239 19.074 Q 282.787 17.653 277.4 17.121 A 69.16 69.16 0 0 0 270.6 16.801 Q 265.2 16.801 260.4 17.001 Q 255.6 17.201 251.4 17.601 Z M 614 17.601 L 614 64.601 L 636 64.601 Q 650.4 64.601 659.4 58.201 A 20.577 20.577 0 0 0 668.212 43.153 A 29.024 29.024 0 0 0 668.4 39.801 Q 668.4 29.801 660 23.301 A 27.846 27.846 0 0 0 651.272 18.858 Q 647.414 17.637 642.754 17.14 A 63.889 63.889 0 0 0 636 16.801 Q 629.2 16.801 623.8 17.001 Q 618.4 17.201 614 17.601 Z"
                              vector-effect="non-scaling-stroke"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>

                    {/* Contact */}
                    <li
                      className="cMenuContent-list-item -anchor"
                      style={{ marginBottom: "10px" }}
                    >
                      <a
                        className="cMenuContent-list-link -guideline"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                        onClick={scrollToContactSection}
                      >
                        <svg
                          viewBox="0 0 767.78 151.37"
                          style={{
                            width: window.innerWidth <= 768 ? "100%" : "",
                          }}
                        >
                          <g
                            className="cMenuContent-list-svg"
                            id="svgGroup"
                            stroke-linecap="round"
                            fill-rule="evenodd"
                            font-size="9pt"
                            stroke="#000"
                            stroke-width="0.25mm"
                            fill="#FFF"
                            style={{
                              stroke: "#000",
                              strokeWidth: "0.25mm",
                              fill: "#FFF",
                            }}
                          >
                            <path
                              d="M 290.001 142.401 L 272.001 142.401 L 272.001 2.401 L 297.201 2.401 L 359.001 118.801 L 359.001 2.401 L 377.001 2.401 L 377.001 142.401 L 352.201 142.401 L 290.001 26.801 L 290.001 142.401 Z M 97.801 7.201 L 92.001 23.201 Q 85.801 20.201 79.301 18.401 Q 73.715 16.854 66.431 16.637 A 81.411 81.411 0 0 0 64.001 16.601 Q 51.201 16.601 41.101 23.201 A 42.334 42.334 0 0 0 28.37 36.364 A 53.956 53.956 0 0 0 25.201 42.201 Q 19.854 53.632 19.437 69.483 A 103.185 103.185 0 0 0 19.401 72.201 A 83.725 83.725 0 0 0 20.633 86.912 A 61.858 61.858 0 0 0 25.101 101.601 A 51.354 51.354 0 0 0 32.274 113.257 A 42.846 42.846 0 0 0 40.901 121.201 A 39.406 39.406 0 0 0 63.192 128.194 A 47.788 47.788 0 0 0 64.001 128.201 Q 72.753 128.201 79.432 126.287 A 38.56 38.56 0 0 0 81.001 125.801 Q 88.201 123.401 95.001 119.601 L 100.801 135.401 A 75.122 75.122 0 0 1 91.812 139.49 A 95.788 95.788 0 0 1 83.901 142.101 Q 75.014 144.627 63.413 144.79 A 114.832 114.832 0 0 1 61.801 144.801 A 64.769 64.769 0 0 1 43.151 142.199 A 55.921 55.921 0 0 1 29.601 136.101 A 57.201 57.201 0 0 1 9.848 115.21 A 69.832 69.832 0 0 1 7.801 111.301 A 75.222 75.222 0 0 1 1.603 91.867 Q 0.001 83.06 0.001 73.001 Q 0.001 51.601 7.901 35.101 A 63.271 63.271 0 0 1 21.859 15.839 A 59.721 59.721 0 0 1 30.301 9.301 A 58.742 58.742 0 0 1 55.662 0.478 A 74.584 74.584 0 0 1 64.201 0.001 A 91.277 91.277 0 0 1 74.318 0.537 A 70.399 70.399 0 0 1 82.401 1.901 A 76.448 76.448 0 0 1 97.35 6.99 A 71.217 71.217 0 0 1 97.801 7.201 Z M 729.401 7.201 L 723.601 23.201 Q 717.401 20.201 710.901 18.401 Q 705.315 16.854 698.031 16.637 A 81.411 81.411 0 0 0 695.601 16.601 Q 682.801 16.601 672.701 23.201 A 42.334 42.334 0 0 0 659.97 36.364 A 53.956 53.956 0 0 0 656.801 42.201 Q 651.454 53.632 651.037 69.483 A 103.185 103.185 0 0 0 651.001 72.201 A 83.725 83.725 0 0 0 652.233 86.912 A 61.858 61.858 0 0 0 656.701 101.601 A 51.354 51.354 0 0 0 663.874 113.257 A 42.846 42.846 0 0 0 672.501 121.201 A 39.406 39.406 0 0 0 694.792 128.194 A 47.788 47.788 0 0 0 695.601 128.201 Q 704.353 128.201 711.032 126.287 A 38.56 38.56 0 0 0 712.601 125.801 Q 719.801 123.401 726.601 119.601 L 732.401 135.401 A 75.122 75.122 0 0 1 723.412 139.49 A 95.788 95.788 0 0 1 715.501 142.101 Q 706.614 144.627 695.013 144.79 A 114.832 114.832 0 0 1 693.401 144.801 A 64.769 64.769 0 0 1 674.751 142.199 A 55.921 55.921 0 0 1 661.201 136.101 A 57.201 57.201 0 0 1 641.448 115.21 A 69.832 69.832 0 0 1 639.401 111.301 A 75.222 75.222 0 0 1 633.203 91.867 Q 631.601 83.06 631.601 73.001 Q 631.601 51.601 639.501 35.101 A 63.271 63.271 0 0 1 653.459 15.839 A 59.721 59.721 0 0 1 661.901 9.301 A 58.742 58.742 0 0 1 687.262 0.478 A 74.584 74.584 0 0 1 695.801 0.001 A 91.277 91.277 0 0 1 705.918 0.537 A 70.399 70.399 0 0 1 714.001 1.901 A 76.448 76.448 0 0 1 728.95 6.99 A 71.217 71.217 0 0 1 729.401 7.201 Z M 623.601 137.401 L 606.201 144.401 L 590.601 104.401 L 525.801 104.401 L 510.201 144.001 L 494.001 137.401 L 548.801 2.401 L 569.601 2.401 L 623.601 137.401 Z M 459.001 142.401 L 440.001 142.401 L 440.001 19.201 L 397.001 19.201 L 397.001 2.401 L 502.001 2.401 L 502.001 19.201 L 459.001 19.201 L 459.001 142.401 Z M 804.401 142.401 L 785.401 142.401 L 785.401 19.201 L 742.401 19.201 L 742.401 2.401 L 847.401 2.401 L 847.401 19.201 L 804.401 19.201 L 804.401 142.401 Z M 162.618 143.286 A 73.021 73.021 0 0 0 177.801 144.801 A 76.7 76.7 0 0 0 188.125 144.127 A 60.148 60.148 0 0 0 205.601 139.101 Q 217.801 133.401 226.401 123.501 A 65.277 65.277 0 0 0 229.051 120.245 A 69.469 69.469 0 0 0 239.501 100.401 A 81.046 81.046 0 0 0 241.255 94.54 A 88.89 88.89 0 0 0 244.001 72.201 A 96.43 96.43 0 0 0 243.843 66.646 A 82.879 82.879 0 0 0 239.501 44.201 Q 235.001 31.201 226.401 21.201 Q 217.801 11.201 205.501 5.601 A 59.851 59.851 0 0 0 193.718 1.676 A 72.841 72.841 0 0 0 177.801 0.001 A 78.699 78.699 0 0 0 165.346 0.952 A 59.321 59.321 0 0 0 142.401 9.501 Q 127.601 19.001 119.701 35.301 A 75.977 75.977 0 0 0 114.031 51.527 A 92.363 92.363 0 0 0 111.801 72.201 A 97.827 97.827 0 0 0 111.872 75.923 A 85.537 85.537 0 0 0 116.301 100.401 A 78.751 78.751 0 0 0 117.18 102.847 A 68.705 68.705 0 0 0 129.301 123.501 Q 137.801 133.401 150.001 139.101 A 58.284 58.284 0 0 0 162.618 143.286 Z M 177.801 128.401 A 53.033 53.033 0 0 0 189.697 127.132 A 38.631 38.631 0 0 0 203.601 121.001 A 44.94 44.94 0 0 0 218.251 103.259 A 54.503 54.503 0 0 0 219.301 100.901 A 68.215 68.215 0 0 0 223.946 83.043 A 87.007 87.007 0 0 0 224.601 72.201 Q 224.601 61.401 221.401 51.401 A 59.47 59.47 0 0 0 213.122 34.748 A 56.239 56.239 0 0 0 212.201 33.501 Q 206.201 25.601 197.501 21.001 A 39.843 39.843 0 0 0 182.668 16.637 A 49.156 49.156 0 0 0 177.801 16.401 A 48.172 48.172 0 0 0 164.817 18.082 A 39.089 39.089 0 0 0 152.701 23.801 A 46.295 46.295 0 0 0 137.5 42.055 A 55.569 55.569 0 0 0 136.701 43.801 A 65.586 65.586 0 0 0 131.794 62.177 A 82.513 82.513 0 0 0 131.201 72.201 Q 131.201 83.001 134.301 93.101 A 58.758 58.758 0 0 0 142.663 110.193 A 55.847 55.847 0 0 0 143.401 111.201 Q 149.401 119.201 158.101 123.801 A 39.843 39.843 0 0 0 172.935 128.165 A 49.156 49.156 0 0 0 177.801 128.401 Z M 558.201 21.201 L 531.801 88.401 L 584.401 88.401 L 558.201 21.201 Z"
                              vector-effect="non-scaling-stroke"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>

                    {/* Research */}
                    <li className="cMenuContent-list-item">
                      <a
                        className="cMenuContent-list-link -research"
                        href="/research"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          width="219.32"
                          height="29.204"
                          viewBox="0 0 219.32 29.204"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            width: window.innerWidth <= 768 ? "100%" : "",
                          }}
                        >
                          <g
                            className="cMenuContent-list-svg"
                            id="svgGroup"
                            stroke-linecap="round"
                            fill-rule="evenodd"
                            font-size="9pt"
                            stroke="#ffffff"
                            stroke-width="0.25mm"
                            fill="#ffffff"
                            style={{
                              stroke: "#ffffff",
                              strokeWidth: "0.25mm",
                              fill: "#ffffff",
                            }}
                          >
                            <path
                              d="M 0 28.12 L 0 28.72 L 14.04 28.72 L 14.04 28.12 A 33.469 33.469 0 0 1 12.228 27.826 C 8.541 27.104 8.48 26.01 8.48 22.16 L 8.48 15.72 C 11.28 16.2 12.72 15.24 14.32 18.56 A 24.277 24.277 0 0 0 14.874 19.62 C 15.909 21.494 17.704 24.285 19.88 26.56 A 7.731 7.731 0 0 0 24.81 28.75 C 26.119 28.917 27.577 28.952 29.204 29.024 A 116.316 116.316 0 0 1 29.56 29.04 L 29.68 28.44 A 15.492 15.492 0 0 1 20.763 22.095 C 19.085 19.908 17.678 17.462 16.406 15.231 A 14555.735 14555.735 0 0 0 16.16 14.8 L 15.96 14.52 A 10.515 10.515 0 0 0 18.988 12.589 C 19.999 11.622 20.679 10.411 20.867 8.859 A 7.479 7.479 0 0 0 20.92 7.96 A 6.483 6.483 0 0 0 20.855 7.038 C 20.54 4.847 18.822 1.295 10.507 1.429 A 29.912 29.912 0 0 0 10.04 1.44 L 0.28 1.76 L 0.28 2.32 A 15.961 15.961 0 0 1 2.081 2.563 C 4.818 3.134 4.96 4.596 4.96 9.76 L 4.96 22.16 A 555.494 555.494 0 0 1 4.954 22.362 C 4.837 26.32 4.721 27.491 0 28.12 Z M 8.48 15.04 L 8.48 2.28 C 12.68 2.24 16.8 4.12 16.8 8.8 C 16.8 13.24 12.32 15 8.48 15.04 Z"
                              id="0"
                            />
                            <path
                              d="M 28.04 28.72 L 50.28 28.72 A 25.735 25.735 0 0 0 51.453 23.629 A 26.026 26.026 0 0 0 51.64 20.8 L 51.04 20.8 A 13.25 13.25 0 0 1 50.199 23.584 C 48.892 26.538 46.54 27.738 42.627 27.76 A 19.593 19.593 0 0 1 42.52 27.76 C 36.438 27.76 36.476 24.941 36.514 22.649 A 32.362 32.362 0 0 0 36.52 22.12 L 36.52 15.56 L 40.68 15.56 A 21.062 21.062 0 0 1 42.944 15.639 C 44.362 15.798 45.445 16.273 46.03 17.696 A 6.078 6.078 0 0 1 46.4 19.12 L 47 19.12 L 47 10.2 L 46.4 10.2 A 5.717 5.717 0 0 1 46.04 11.648 C 45.192 13.712 43.188 13.88 40.68 13.88 L 36.52 13.88 L 36.52 2.48 L 40.4 2.48 A 22.738 22.738 0 0 1 44.326 2.701 C 46.514 3.098 48.142 4.214 48.416 7.34 A 10.225 10.225 0 0 1 48.44 7.68 L 49.04 7.68 L 49.52 1.52 L 28.04 1.52 L 28.04 2.12 C 32.761 2.749 32.877 3.92 32.994 7.878 A 555.494 555.494 0 0 1 33 8.08 L 33 22.16 A 555.494 555.494 0 0 1 32.994 22.362 C 32.877 26.32 32.761 27.491 28.04 28.12 L 28.04 28.72 Z"
                              id="1"
                            />
                            <path
                              d="M 54.88 20.36 L 54.16 20.36 L 55.32 27.16 A 13.15 13.15 0 0 0 60.979 29.125 A 12.881 12.881 0 0 0 62.36 29.2 A 12.172 12.172 0 0 0 63.641 29.132 C 66.377 28.842 69.113 27.63 70.699 25.536 A 6.777 6.777 0 0 0 72.08 21.36 A 6.459 6.459 0 0 0 71.411 18.42 C 69.6 14.795 64.537 13.374 61.621 10.843 A 5.44 5.44 0 0 1 59.48 6.6 C 59.48 3.96 61.6 2.2 64.16 2.2 A 5.617 5.617 0 0 1 66.165 2.535 C 67.741 3.132 68.608 4.47 69.163 6.074 A 18.812 18.812 0 0 1 69.8 8.56 L 70.44 8.56 L 70.76 2.56 C 69 1.6 66.96 1 64.92 1 A 9.57 9.57 0 0 0 63.992 1.046 C 59.996 1.435 56 4.297 56 8.64 C 56 16.64 68.24 16 68.24 23.12 A 5.082 5.082 0 0 1 67.754 25.366 C 67.086 26.738 65.781 27.607 64.177 27.895 A 6.905 6.905 0 0 1 62.96 28 A 7.34 7.34 0 0 1 57.047 24.919 A 12.783 12.783 0 0 1 54.88 20.36 Z"
                              id="2"
                            />
                            <path
                              d="M 75.24 28.72 L 97.48 28.72 A 25.735 25.735 0 0 0 98.653 23.629 A 26.026 26.026 0 0 0 98.84 20.8 L 98.24 20.8 A 13.25 13.25 0 0 1 97.399 23.584 C 96.092 26.538 93.74 27.738 89.827 27.76 A 19.593 19.593 0 0 1 89.72 27.76 C 83.638 27.76 83.676 24.941 83.714 22.649 A 32.362 32.362 0 0 0 83.72 22.12 L 83.72 15.56 L 87.88 15.56 A 21.062 21.062 0 0 1 90.144 15.639 C 91.562 15.798 92.645 16.273 93.23 17.696 A 6.078 6.078 0 0 1 93.6 19.12 L 94.2 19.12 L 94.2 10.2 L 93.6 10.2 A 5.717 5.717 0 0 1 93.24 11.648 C 92.392 13.712 90.388 13.88 87.88 13.88 L 83.72 13.88 L 83.72 2.48 L 87.6 2.48 A 22.738 22.738 0 0 1 91.526 2.701 C 93.714 3.098 95.342 4.214 95.616 7.34 A 10.225 10.225 0 0 1 95.64 7.68 L 96.24 7.68 L 96.72 1.52 L 75.24 1.52 L 75.24 2.12 C 79.961 2.749 80.077 3.92 80.194 7.878 A 555.494 555.494 0 0 1 80.2 8.08 L 80.2 22.16 A 555.494 555.494 0 0 1 80.194 22.362 C 80.077 26.32 79.961 27.491 75.24 28.12 L 75.24 28.72 Z"
                              id="3"
                            />
                            <path
                              d="M 116.84 28.12 L 116.84 28.72 L 128.6 28.72 L 128.6 28.12 C 125.619 27.561 124.825 26.516 123.857 24.016 A 41.205 41.205 0 0 1 123.64 23.44 L 114.84 0 A 7.796 7.796 0 0 1 113.121 1.532 A 7.162 7.162 0 0 1 111.92 2.16 C 112.36 2.92 111.84 3.88 111.48 4.92 L 109.08 11.44 L 104.56 23.24 A 129.912 129.912 0 0 1 104.366 23.725 C 103.272 26.447 102.768 27.212 99.4 28.12 L 99.4 28.72 L 110.36 28.72 L 110.36 28.12 A 18.538 18.538 0 0 0 109.928 28.059 C 108.15 27.825 105.8 27.652 105.8 25.4 C 105.8 23.554 107.427 19.637 108.157 17.56 A 25.048 25.048 0 0 0 108.24 17.32 L 117.36 17.32 A 224.966 224.966 0 0 0 117.752 18.364 C 118.712 20.912 119.848 23.892 119.917 25.419 A 3.128 3.128 0 0 1 119.92 25.56 C 119.92 27.103 118.686 27.647 117.451 27.972 A 19.041 19.041 0 0 1 116.84 28.12 Z M 116.84 15.48 L 108.92 15.48 L 112.68 5.08 L 116.84 15.48 Z"
                              id="4"
                            />
                            <path
                              d="M 128.8 28.12 L 128.8 28.72 L 142.84 28.72 L 142.84 28.12 A 33.469 33.469 0 0 1 141.028 27.826 C 137.341 27.104 137.28 26.01 137.28 22.16 L 137.28 15.72 C 140.08 16.2 141.52 15.24 143.12 18.56 A 24.277 24.277 0 0 0 143.674 19.62 C 144.709 21.494 146.504 24.285 148.68 26.56 A 7.731 7.731 0 0 0 153.61 28.75 C 154.919 28.917 156.377 28.952 158.004 29.024 A 116.316 116.316 0 0 1 158.36 29.04 L 158.48 28.44 A 15.492 15.492 0 0 1 149.563 22.095 C 147.885 19.908 146.478 17.462 145.206 15.231 A 14555.735 14555.735 0 0 0 144.96 14.8 L 144.76 14.52 A 10.515 10.515 0 0 0 147.788 12.589 C 148.799 11.622 149.479 10.411 149.667 8.859 A 7.479 7.479 0 0 0 149.72 7.96 A 6.483 6.483 0 0 0 149.655 7.038 C 149.34 4.847 147.622 1.295 139.307 1.429 A 29.912 29.912 0 0 0 138.84 1.44 L 129.08 1.76 L 129.08 2.32 A 15.961 15.961 0 0 1 130.881 2.563 C 133.618 3.134 133.76 4.596 133.76 9.76 L 133.76 22.16 A 555.494 555.494 0 0 1 133.754 22.362 C 133.637 26.32 133.521 27.491 128.8 28.12 Z M 137.28 15.04 L 137.28 2.28 C 141.48 2.24 145.6 4.12 145.6 8.8 C 145.6 13.24 141.12 15 137.28 15.04 Z"
                              id="5"
                            />
                            <path
                              d="M 183.92 20.32 L 183.36 20.08 A 22.1 22.1 0 0 1 180.716 25.039 C 179.484 26.642 177.903 27.802 175.648 28.139 A 9.506 9.506 0 0 1 174.24 28.24 C 168.44 28.24 162.4 22.76 162.4 14.88 C 162.4 8.481 165.964 2.843 172.353 2.086 A 12.639 12.639 0 0 1 173.84 2 A 8.425 8.425 0 0 1 177.256 2.668 C 179.321 3.574 180.722 5.346 181.507 7.63 A 13.376 13.376 0 0 1 182.04 9.76 L 182.64 9.76 L 182.64 3.2 A 16.756 16.756 0 0 0 174.641 1.053 A 22.597 22.597 0 0 0 173.88 1.04 A 19.28 19.28 0 0 0 167.397 2.093 C 161.148 4.314 157.855 9.719 157.762 15.125 A 13.689 13.689 0 0 0 157.76 15.36 C 157.76 24.4 165.2 29.2 173.56 29.2 C 176.4 29.2 179.16 28.72 181.72 27.48 C 182.68 25.16 183.44 22.76 183.92 20.32 Z"
                              id="6"
                            />
                            <path
                              d="M 194.76 15.56 L 210.84 15.56 L 210.84 22.16 C 210.84 26.48 210.763 27.33 205.8 28.079 A 49.539 49.539 0 0 1 205.52 28.12 L 205.52 28.72 L 219.32 28.72 L 219.32 28.12 C 214.599 27.491 214.483 26.32 214.366 22.362 A 555.494 555.494 0 0 1 214.36 22.16 L 214.36 8.08 A 555.494 555.494 0 0 1 214.366 7.878 C 214.483 3.92 214.599 2.749 219.32 2.12 L 219.32 1.52 L 205.52 1.52 L 205.52 2.12 A 29.713 29.713 0 0 1 207.347 2.433 C 210.392 3.074 210.783 4.019 210.833 6.888 A 70.694 70.694 0 0 1 210.84 8.08 L 210.84 13.88 L 194.76 13.88 L 194.76 8.08 C 194.76 3.76 194.837 2.91 199.8 2.161 A 49.539 49.539 0 0 1 200.08 2.12 L 200.08 1.52 L 186.28 1.52 L 186.28 2.12 C 191.001 2.749 191.117 3.92 191.234 7.878 A 555.494 555.494 0 0 1 191.24 8.08 L 191.24 22.16 A 555.494 555.494 0 0 1 191.234 22.362 C 191.117 26.32 191.001 27.491 186.28 28.12 L 186.28 28.72 L 200.08 28.72 L 200.08 28.12 A 29.713 29.713 0 0 1 198.253 27.807 C 195.208 27.166 194.817 26.221 194.767 23.352 A 70.694 70.694 0 0 1 194.76 22.16 L 194.76 15.56 Z"
                              id="7"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>

                    {/* Idea */}
                    <li className="cMenuContent-list-item">
                      <a
                        className="cMenuContent-list-link -idea"
                        href="/ideas"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          width="102.12"
                          height="28.802"
                          viewBox="0 0 102.12 28.802"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            width: window.innerWidth <= 768 ? "100%" : "",
                          }}
                        >
                          <g
                            className="cMenuContent-list-svg"
                            id="svgGroup"
                            stroke-linecap="round"
                            fill-rule="evenodd"
                            font-size="9pt"
                            stroke="#ffffff"
                            stroke-width="0.25mm"
                            fill="#ffffff"
                            style={{
                              stroke: "#ffffff",
                              strokeWidth: "0.25mm",
                              fill: "#ffffff",
                            }}
                          >
                            <path
                              d="M 13.44 2.12 L 13.44 1.52 L 0 1.52 L 0 2.12 C 4.721 2.749 4.837 3.92 4.954 7.878 A 555.494 555.494 0 0 1 4.96 8.08 L 4.96 22.16 A 555.494 555.494 0 0 1 4.954 22.362 C 4.837 26.32 4.721 27.491 0 28.12 L 0 28.72 L 13.44 28.72 L 13.44 28.12 C 8.719 27.491 8.603 26.32 8.486 22.362 A 555.494 555.494 0 0 1 8.48 22.16 L 8.48 8.08 A 555.494 555.494 0 0 1 8.486 7.878 C 8.603 3.92 8.719 2.749 13.44 2.12 Z"
                              id="0"
                            />
                            <path
                              d="M 20.92 8.28 L 20.92 22.16 A 555.494 555.494 0 0 1 20.914 22.362 C 20.797 26.32 20.681 27.491 15.96 28.12 L 15.96 28.72 L 27.88 28.8 A 34.954 34.954 0 0 0 28.185 28.801 C 41.018 28.801 44.932 21.651 45.292 16.068 A 13.509 13.509 0 0 0 45.32 15.2 C 45.32 11.04 43.48 0.88 25.88 1.44 L 16.2 1.76 L 16.2 2.32 C 20.681 2.949 20.797 4.118 20.914 8.068 A 556.148 556.148 0 0 1 20.92 8.28 Z M 24.44 22.56 L 24.44 2.24 A 27.925 27.925 0 0 1 24.569 2.24 C 33.195 2.24 40.68 6.247 40.68 15.8 C 40.68 24.92 34.48 27.8 29.88 27.8 A 10.563 10.563 0 0 1 28.053 27.657 C 25.595 27.224 24.789 25.855 24.542 24.219 A 11.187 11.187 0 0 1 24.44 22.56 Z"
                              id="1"
                            />
                            <path
                              d="M 48.76 28.72 L 71 28.72 A 25.735 25.735 0 0 0 72.173 23.629 A 26.026 26.026 0 0 0 72.36 20.8 L 71.76 20.8 A 13.25 13.25 0 0 1 70.919 23.584 C 69.612 26.538 67.26 27.738 63.347 27.76 A 19.593 19.593 0 0 1 63.24 27.76 C 57.158 27.76 57.196 24.941 57.234 22.649 A 32.362 32.362 0 0 0 57.24 22.12 L 57.24 15.56 L 61.4 15.56 A 21.062 21.062 0 0 1 63.664 15.639 C 65.082 15.798 66.165 16.273 66.75 17.696 A 6.078 6.078 0 0 1 67.12 19.12 L 67.72 19.12 L 67.72 10.2 L 67.12 10.2 A 5.717 5.717 0 0 1 66.76 11.648 C 65.912 13.712 63.908 13.88 61.4 13.88 L 57.24 13.88 L 57.24 2.48 L 61.12 2.48 A 22.738 22.738 0 0 1 65.046 2.701 C 67.234 3.098 68.862 4.214 69.136 7.34 A 10.225 10.225 0 0 1 69.16 7.68 L 69.76 7.68 L 70.24 1.52 L 48.76 1.52 L 48.76 2.12 C 53.481 2.749 53.597 3.92 53.714 7.878 A 555.494 555.494 0 0 1 53.72 8.08 L 53.72 22.16 A 555.494 555.494 0 0 1 53.714 22.362 C 53.597 26.32 53.481 27.491 48.76 28.12 L 48.76 28.72 Z"
                              id="2"
                            />
                            <path
                              d="M 90.36 28.12 L 90.36 28.72 L 102.12 28.72 L 102.12 28.12 C 99.139 27.561 98.345 26.516 97.377 24.016 A 41.205 41.205 0 0 1 97.16 23.44 L 88.36 0 A 7.796 7.796 0 0 1 86.641 1.532 A 7.162 7.162 0 0 1 85.44 2.16 C 85.88 2.92 85.36 3.88 85 4.92 L 82.6 11.44 L 78.08 23.24 A 129.912 129.912 0 0 1 77.886 23.725 C 76.792 26.447 76.288 27.212 72.92 28.12 L 72.92 28.72 L 83.88 28.72 L 83.88 28.12 A 18.538 18.538 0 0 0 83.448 28.059 C 81.67 27.825 79.32 27.652 79.32 25.4 C 79.32 23.554 80.947 19.637 81.677 17.56 A 25.048 25.048 0 0 0 81.76 17.32 L 90.88 17.32 A 224.966 224.966 0 0 0 91.272 18.364 C 92.232 20.912 93.368 23.892 93.437 25.419 A 3.128 3.128 0 0 1 93.44 25.56 C 93.44 27.103 92.206 27.647 90.971 27.972 A 19.041 19.041 0 0 1 90.36 28.12 Z M 90.36 15.48 L 82.44 15.48 L 86.2 5.08 L 90.36 15.48 Z"
                              id="3"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>

                    {/* Fellows */}
                    <li className="cMenuContent-list-item">
                      <a
                        className="cMenuContent-list-link -fellows"
                        href="/fellows"
                        data-menu-item=""
                        data-disable-hash=""
                        style={{ opacity: 0 }}
                      >
                        <svg
                          width="190.28"
                          height="28.64"
                          viewBox="0 0 190.28 28.64"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            width: window.innerWidth <= 768 ? "100%" : "",
                          }}
                        >
                          <g
                            className="cMenuContent-list-svg"
                            id="svgGroup"
                            stroke-linecap="round"
                            fill-rule="evenodd"
                            font-size="9pt"
                            stroke="#ffffff"
                            stroke-width="0.25mm"
                            fill="#ffffff"
                            style={{
                              stroke: "#ffffff",
                              strokeWidth: "0.25mm",
                              fill: "#ffffff",
                            }}
                          >
                            <path
                              d="M 12.84 13.44 L 8.48 13.44 L 8.48 1.48 L 12.12 1.48 C 16.061 1.48 19.263 1.656 19.841 5.941 A 10.313 10.313 0 0 1 19.92 6.84 L 20.52 6.84 L 21.16 0.52 L 0 0.52 L 0 1.12 C 4.721 1.749 4.837 2.92 4.954 6.878 A 555.494 555.494 0 0 1 4.96 7.08 L 4.96 21.16 A 555.494 555.494 0 0 1 4.954 21.362 C 4.837 25.32 4.721 26.491 0 27.12 L 0 27.72 L 14.24 27.72 L 14.24 27.12 A 33.44 33.44 0 0 1 12.296 26.777 C 8.954 26.065 8.534 25.067 8.486 22.084 A 57.973 57.973 0 0 1 8.48 21.16 L 8.48 15.12 L 12.84 15.12 A 412.579 412.579 0 0 0 13.031 15.12 C 16.279 15.118 18.286 15.117 18.6 19.08 L 19.2 19.08 L 19.2 9.32 L 18.6 9.32 C 18.28 13.12 16.2 13.44 12.84 13.44 Z"
                              id="0"
                            />
                            <path
                              d="M 23.84 27.72 L 46.08 27.72 A 25.735 25.735 0 0 0 47.253 22.629 A 26.026 26.026 0 0 0 47.44 19.8 L 46.84 19.8 A 13.25 13.25 0 0 1 45.999 22.584 C 44.692 25.538 42.34 26.738 38.427 26.76 A 19.593 19.593 0 0 1 38.32 26.76 C 32.238 26.76 32.276 23.941 32.314 21.649 A 32.362 32.362 0 0 0 32.32 21.12 L 32.32 14.56 L 36.48 14.56 A 21.062 21.062 0 0 1 38.744 14.639 C 40.162 14.798 41.245 15.273 41.83 16.696 A 6.078 6.078 0 0 1 42.2 18.12 L 42.8 18.12 L 42.8 9.2 L 42.2 9.2 A 5.717 5.717 0 0 1 41.84 10.648 C 40.992 12.712 38.988 12.88 36.48 12.88 L 32.32 12.88 L 32.32 1.48 L 36.2 1.48 A 22.738 22.738 0 0 1 40.126 1.701 C 42.314 2.098 43.942 3.214 44.216 6.34 A 10.225 10.225 0 0 1 44.24 6.68 L 44.84 6.68 L 45.32 0.52 L 23.84 0.52 L 23.84 1.12 C 28.561 1.749 28.677 2.92 28.794 6.878 A 555.494 555.494 0 0 1 28.8 7.08 L 28.8 21.16 A 555.494 555.494 0 0 1 28.794 21.362 C 28.677 25.32 28.561 26.491 23.84 27.12 L 23.84 27.72 Z"
                              id="1"
                            />
                            <path
                              d="M 50.24 27.72 L 72.6 27.72 L 74.88 20.28 L 74.36 20.04 C 71.423 24.922 70.378 26.858 65.017 26.646 A 24.979 24.979 0 0 1 64.201 26.6 L 59.32 26.24 A 14.625 14.625 0 0 1 58.752 22.484 A 55.374 55.374 0 0 1 58.72 20.2 L 58.72 7.08 A 33.126 33.126 0 0 1 58.757 5.202 C 58.912 2.564 59.705 1.65 63.68 1.12 L 63.68 0.52 L 50.24 0.52 L 50.24 1.12 C 54.961 1.749 55.077 2.92 55.194 6.878 A 555.494 555.494 0 0 1 55.2 7.08 L 55.2 21.16 A 555.494 555.494 0 0 1 55.194 21.362 C 55.077 25.32 54.961 26.491 50.24 27.12 L 50.24 27.72 Z"
                              id="2"
                            />
                            <path
                              d="M 75.84 27.72 L 98.2 27.72 L 100.48 20.28 L 99.96 20.04 C 97.023 24.922 95.978 26.858 90.617 26.646 A 24.979 24.979 0 0 1 89.801 26.6 L 84.92 26.24 A 14.625 14.625 0 0 1 84.352 22.484 A 55.374 55.374 0 0 1 84.32 20.2 L 84.32 7.08 A 33.126 33.126 0 0 1 84.357 5.202 C 84.512 2.564 85.305 1.65 89.28 1.12 L 89.28 0.52 L 75.84 0.52 L 75.84 1.12 C 80.561 1.749 80.677 2.92 80.794 6.878 A 555.494 555.494 0 0 1 80.8 7.08 L 80.8 21.16 A 555.494 555.494 0 0 1 80.794 21.362 C 80.677 25.32 80.561 26.491 75.84 27.12 L 75.84 27.72 Z"
                              id="3"
                            />
                            <path
                              d="M 116.96 0.04 A 15.879 15.879 0 0 0 108.886 2.105 C 105.467 4.108 103.122 7.478 102.515 11.806 A 16.378 16.378 0 0 0 102.36 14.08 C 102.36 21.687 107.167 26.845 114.077 27.969 A 18.204 18.204 0 0 0 117 28.2 A 16.03 16.03 0 0 0 125.011 26.197 C 128.437 24.235 130.801 20.914 131.456 16.61 A 16.54 16.54 0 0 0 131.64 14.12 A 13.416 13.416 0 0 0 124.337 1.58 C 122.328 0.606 119.88 0.04 116.96 0.04 Z M 124.559 5.989 A 9.382 9.382 0 0 0 116.64 1 A 10.375 10.375 0 0 0 116.323 1.005 C 110.784 1.174 108.003 5.782 107.229 10.389 A 16.572 16.572 0 0 0 107 13.12 A 17.74 17.74 0 0 0 107.002 13.354 C 107.083 19.517 110.37 27.24 117.48 27.24 C 124.08 27.24 127 20.52 127 14.8 A 17.691 17.691 0 0 0 124.559 5.989 Z"
                              id="4"
                            />
                            <path
                              d="M 152.12 6.4 L 159.24 28.64 L 159.68 28.64 L 165.56 12.4 L 168.36 4.76 A 7.998 7.998 0 0 1 169.333 2.934 C 169.97 2.075 170.796 1.485 171.948 1.237 A 5.894 5.894 0 0 1 172.8 1.12 L 172.8 0.52 L 162.36 0.52 L 162.36 1.12 A 25.782 25.782 0 0 0 162.365 1.121 C 164.43 1.571 166.141 1.847 166.341 3.503 A 2.821 2.821 0 0 1 166.36 3.84 A 5.556 5.556 0 0 1 166.289 4.644 C 165.954 6.867 164.529 10.859 163.911 12.668 A 80.627 80.627 0 0 0 163.88 12.76 L 160.72 21.76 L 155.64 5.92 A 18.084 18.084 0 0 1 155.304 4.741 C 154.934 3.174 155.113 1.923 157.68 1.317 A 11.585 11.585 0 0 1 158.76 1.12 L 158.76 0.52 L 147.08 0.52 L 147.08 1.12 C 149.049 1.481 150.291 1.977 151.115 3.49 A 6.878 6.878 0 0 1 151.6 4.64 L 145.32 21.36 L 141.12 7.16 A 47.238 47.238 0 0 0 141.101 7.094 C 140.21 4.069 139.32 2.11 143.146 1.28 A 13.608 13.608 0 0 1 144.04 1.12 L 144.04 0.52 L 132.72 0.52 L 132.72 1.12 A 10.179 10.179 0 0 1 133.898 1.517 C 136.088 2.425 136.295 3.754 137.16 6.28 L 143.68 28.64 L 144.08 28.64 L 152.12 6.4 Z"
                              id="5"
                            />
                            <path
                              d="M 173.08 19.36 L 172.36 19.36 L 173.52 26.16 A 13.15 13.15 0 0 0 179.179 28.125 A 12.881 12.881 0 0 0 180.56 28.2 A 12.172 12.172 0 0 0 181.841 28.132 C 184.577 27.842 187.313 26.63 188.899 24.536 A 6.777 6.777 0 0 0 190.28 20.36 A 6.459 6.459 0 0 0 189.611 17.42 C 187.8 13.795 182.737 12.374 179.821 9.843 A 5.44 5.44 0 0 1 177.68 5.6 C 177.68 2.96 179.8 1.2 182.36 1.2 A 5.617 5.617 0 0 1 184.365 1.535 C 185.941 2.132 186.808 3.47 187.363 5.074 A 18.812 18.812 0 0 1 188 7.56 L 188.64 7.56 L 188.96 1.56 C 187.2 0.6 185.16 0 183.12 0 A 9.57 9.57 0 0 0 182.192 0.046 C 178.196 0.435 174.2 3.297 174.2 7.64 C 174.2 15.64 186.44 15 186.44 22.12 A 5.082 5.082 0 0 1 185.954 24.366 C 185.286 25.738 183.981 26.607 182.377 26.895 A 6.905 6.905 0 0 1 181.16 27 A 7.34 7.34 0 0 1 175.247 23.919 A 12.783 12.783 0 0 1 173.08 19.36 Z"
                              id="6"
                            />
                          </g>
                        </svg>
                      </a>
                    </li>

                    {/* Donate */}
                    {window.innerWidth < 768 && (
                      <li className="cMenuContent-list-item">
                        <a
                          className="cMenuContent-list-link -donate"
                          href="/donation"
                          data-menu-item=""
                          data-disable-hash=""
                          style={{ opacity: 0 }}
                        >
                          <svg
                            width="175.48"
                            height="29.48"
                            viewBox="0 0 175.48 29.48"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ width: "100%" }}
                          >
                            <g
                              className="cMenuContent-list-svg"
                              id="svgGroup"
                              stroke-linecap="round"
                              fill-rule="evenodd"
                              font-size="9pt"
                              stroke="#ffffff"
                              stroke-width="0.25mm"
                              fill="#ffffff"
                              style={{
                                stroke: "#ffffff",
                                strokeWidth: "0.25mm",
                                fill: "#ffffff",
                              }}
                            >
                              <path
                                d="M 4.96 8.28 L 4.96 22.16 A 555.494 555.494 0 0 1 4.954 22.362 C 4.837 26.32 4.721 27.491 0 28.12 L 0 28.72 L 11.92 28.8 A 34.954 34.954 0 0 0 12.225 28.801 C 25.058 28.801 28.972 21.651 29.332 16.068 A 13.509 13.509 0 0 0 29.36 15.2 C 29.36 11.04 27.52 0.88 9.92 1.44 L 0.24 1.76 L 0.24 2.32 C 4.721 2.949 4.837 4.118 4.954 8.068 A 556.148 556.148 0 0 1 4.96 8.28 Z M 8.48 22.56 L 8.48 2.24 A 27.925 27.925 0 0 1 8.609 2.24 C 17.235 2.24 24.72 6.247 24.72 15.8 C 24.72 24.92 18.52 27.8 13.92 27.8 A 10.563 10.563 0 0 1 12.093 27.657 C 9.635 27.224 8.829 25.855 8.582 24.219 A 11.187 11.187 0 0 1 8.48 22.56 Z"
                                id="0"
                              />
                              <path
                                d="M 48.32 1.04 A 15.879 15.879 0 0 0 40.246 3.105 C 36.827 5.108 34.482 8.478 33.875 12.806 A 16.378 16.378 0 0 0 33.72 15.08 C 33.72 22.687 38.527 27.845 45.437 28.969 A 18.204 18.204 0 0 0 48.36 29.2 A 16.03 16.03 0 0 0 56.371 27.197 C 59.797 25.235 62.161 21.914 62.816 17.61 A 16.54 16.54 0 0 0 63 15.12 A 13.416 13.416 0 0 0 55.697 2.58 C 53.688 1.606 51.24 1.04 48.32 1.04 Z M 55.919 6.989 A 9.382 9.382 0 0 0 48 2 A 10.375 10.375 0 0 0 47.683 2.005 C 42.144 2.174 39.363 6.782 38.589 11.389 A 16.572 16.572 0 0 0 38.36 14.12 A 17.74 17.74 0 0 0 38.362 14.354 C 38.443 20.517 41.73 28.24 48.84 28.24 C 55.44 28.24 58.36 21.52 58.36 15.8 A 17.691 17.691 0 0 0 55.919 6.989 Z"
                                id="1"
                              />
                              <path
                                d="M 72.4 1.52 L 65.8 1.52 L 65.8 2.12 C 70.88 3.24 71.52 4.8 71.52 8.8 L 71.52 14.8 A 1036.747 1036.747 0 0 0 71.52 15.607 C 71.526 23.407 71.552 26.977 67.498 27.928 A 9.425 9.425 0 0 1 66.32 28.12 L 66.32 28.72 L 78.28 28.72 L 78.28 28.12 C 72.591 26.982 72.713 24.998 72.72 15.56 A 782.043 782.043 0 0 0 72.72 15 L 72.72 7.64 C 79.48 14.92 86.6 21.92 93 29.48 L 93.52 29.36 A 1742.076 1742.076 0 0 1 93.433 25.412 C 93.277 17.877 93.204 10.343 93.68 6.6 C 93.945 4.449 94.346 3.037 96.04 2.41 A 5.687 5.687 0 0 1 97.28 2.12 L 97.28 1.52 L 86.36 1.52 L 86.36 2.12 C 90.88 2.92 91.92 4.04 91.96 7.84 L 92.16 22.44 L 72.4 1.52 Z"
                                id="2"
                              />
                              <path
                                d="M 114.4 28.12 L 114.4 28.72 L 126.16 28.72 L 126.16 28.12 C 123.179 27.561 122.385 26.516 121.417 24.016 A 41.205 41.205 0 0 1 121.2 23.44 L 112.4 0 A 7.796 7.796 0 0 1 110.681 1.532 A 7.162 7.162 0 0 1 109.48 2.16 C 109.92 2.92 109.4 3.88 109.04 4.92 L 106.64 11.44 L 102.12 23.24 A 129.912 129.912 0 0 1 101.926 23.725 C 100.832 26.447 100.328 27.212 96.96 28.12 L 96.96 28.72 L 107.92 28.72 L 107.92 28.12 A 18.538 18.538 0 0 0 107.488 28.059 C 105.71 27.825 103.36 27.652 103.36 25.4 C 103.36 23.554 104.987 19.637 105.717 17.56 A 25.048 25.048 0 0 0 105.8 17.32 L 114.92 17.32 A 224.966 224.966 0 0 0 115.312 18.364 C 116.272 20.912 117.408 23.892 117.477 25.419 A 3.128 3.128 0 0 1 117.48 25.56 C 117.48 27.103 116.246 27.647 115.011 27.972 A 19.041 19.041 0 0 1 114.4 28.12 Z M 114.4 15.48 L 106.48 15.48 L 110.24 5.08 L 114.4 15.48 Z"
                                id="3"
                              />
                              <path
                                d="M 146.2 1.52 L 127.88 1.52 C 126.56 1.52 126.4 1.56 125.4 0.64 L 125 0.28 L 124.68 0.28 L 124.12 7.76 L 124.68 7.88 A 12.927 12.927 0 0 1 125.401 5.886 C 126.826 2.862 128.999 2.72 132.88 2.72 L 135.28 2.72 L 135.28 21.2 A 40.877 40.877 0 0 1 135.239 23.36 C 135.083 26.214 134.354 27.331 131.057 27.92 A 24.178 24.178 0 0 1 129.68 28.12 L 129.68 28.72 L 144.4 28.72 L 144.4 28.12 A 20.418 20.418 0 0 1 142.429 27.801 C 138.977 27.037 138.8 25.463 138.8 21.2 L 138.8 2.72 L 141.2 2.72 A 35.598 35.598 0 0 1 143.719 2.783 C 146.661 2.998 148.284 3.927 149.4 7.88 L 149.96 7.76 L 149.4 0.28 L 149.08 0.28 L 148.68 0.64 C 147.68 1.56 147.52 1.52 146.2 1.52 Z"
                                id="4"
                              />
                              <path
                                d="M 151.88 28.72 L 174.12 28.72 A 25.735 25.735 0 0 0 175.293 23.629 A 26.026 26.026 0 0 0 175.48 20.8 L 174.88 20.8 A 13.25 13.25 0 0 1 174.039 23.584 C 172.732 26.538 170.38 27.738 166.467 27.76 A 19.593 19.593 0 0 1 166.36 27.76 C 160.278 27.76 160.316 24.941 160.354 22.649 A 32.362 32.362 0 0 0 160.36 22.12 L 160.36 15.56 L 164.52 15.56 A 21.062 21.062 0 0 1 166.784 15.639 C 168.202 15.798 169.285 16.273 169.87 17.696 A 6.078 6.078 0 0 1 170.24 19.12 L 170.84 19.12 L 170.84 10.2 L 170.24 10.2 A 5.717 5.717 0 0 1 169.88 11.648 C 169.032 13.712 167.028 13.88 164.52 13.88 L 160.36 13.88 L 160.36 2.48 L 164.24 2.48 A 22.738 22.738 0 0 1 168.166 2.701 C 170.354 3.098 171.982 4.214 172.256 7.34 A 10.225 10.225 0 0 1 172.28 7.68 L 172.88 7.68 L 173.36 1.52 L 151.88 1.52 L 151.88 2.12 C 156.601 2.749 156.717 3.92 156.834 7.878 A 555.494 555.494 0 0 1 156.84 8.08 L 156.84 22.16 A 555.494 555.494 0 0 1 156.834 22.362 C 156.717 26.32 156.601 27.491 151.88 28.12 L 151.88 28.72 Z"
                                id="5"
                              />
                            </g>
                          </svg>
                        </a>
                      </li>
                    )}

                    {/* Sponsorship */}
                    {window.innerWidth < 768 && (
                      <li className="cMenuContent-list-item">
                        <a
                          className="cMenuContent-list-link -sponsorship"
                          href="/donation"
                          data-menu-item=""
                          data-disable-hash=""
                          style={{ opacity: 0 }}
                        >
                          <svg
                            width="287.44"
                            height="28.48"
                            viewBox="0 0 287.44 28.48"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ width: "100%" }}
                          >
                            <g
                              className="cMenuContent-list-svg"
                              id="svgGroup"
                              stroke-linecap="round"
                              fill-rule="evenodd"
                              font-size="9pt"
                              stroke="#ffffff"
                              stroke-width="0.25mm"
                              fill="#ffffff"
                              style={{
                                stroke: "#ffffff",
                                strokeWidth: "0.25mm",
                                fill: "#ffffff",
                              }}
                            >
                              <path
                                d="M 0.72 19.36 L 0 19.36 L 1.16 26.16 A 13.15 13.15 0 0 0 6.819 28.125 A 12.881 12.881 0 0 0 8.2 28.2 A 12.172 12.172 0 0 0 9.481 28.132 C 12.217 27.842 14.953 26.63 16.539 24.536 A 6.777 6.777 0 0 0 17.92 20.36 A 6.459 6.459 0 0 0 17.251 17.42 C 15.44 13.795 10.377 12.374 7.461 9.843 A 5.44 5.44 0 0 1 5.32 5.6 C 5.32 2.96 7.44 1.2 10 1.2 A 5.617 5.617 0 0 1 12.005 1.535 C 13.581 2.132 14.448 3.47 15.003 5.074 A 18.812 18.812 0 0 1 15.64 7.56 L 16.28 7.56 L 16.6 1.56 C 14.84 0.6 12.8 0 10.76 0 A 9.57 9.57 0 0 0 9.832 0.046 C 5.836 0.435 1.84 3.297 1.84 7.64 C 1.84 15.64 14.08 15 14.08 22.12 A 5.082 5.082 0 0 1 13.594 24.366 C 12.926 25.738 11.621 26.607 10.017 26.895 A 6.905 6.905 0 0 1 8.8 27 A 7.34 7.34 0 0 1 2.887 23.919 A 12.783 12.783 0 0 1 0.72 19.36 Z"
                                id="0"
                              />
                              <path
                                d="M 26 8.76 L 26 21.16 A 555.494 555.494 0 0 1 25.994 21.362 C 25.877 25.32 25.761 26.491 21.04 27.12 L 21.04 27.72 L 34.84 27.72 L 34.84 27.12 A 29.713 29.713 0 0 1 33.013 26.807 C 29.968 26.166 29.577 25.221 29.527 22.352 A 70.694 70.694 0 0 1 29.52 21.16 L 29.52 1.4 C 33.778 1.364 37.77 3.314 38.456 7.581 A 8.428 8.428 0 0 1 38.56 8.92 C 38.56 12.226 36.756 14.084 34.075 14.945 A 11.689 11.689 0 0 1 32.28 15.36 L 32.4 15.96 A 22.626 22.626 0 0 0 34.351 15.659 C 38.496 14.826 42.64 12.675 42.64 7.84 A 5.402 5.402 0 0 0 42.589 7.124 C 42.294 4.945 40.454 0.19 30.479 0.427 A 31.907 31.907 0 0 0 30.04 0.44 L 21.32 0.76 L 21.32 1.36 A 11.413 11.413 0 0 1 23.11 1.572 C 25.835 2.157 25.991 3.911 25.999 7.993 A 356.939 356.939 0 0 1 26 8.76 Z"
                                id="1"
                              />
                              <path
                                d="M 60.6 0.04 A 15.879 15.879 0 0 0 52.526 2.105 C 49.107 4.108 46.762 7.478 46.155 11.806 A 16.378 16.378 0 0 0 46 14.08 C 46 21.687 50.807 26.845 57.717 27.969 A 18.204 18.204 0 0 0 60.64 28.2 A 16.03 16.03 0 0 0 68.651 26.197 C 72.077 24.235 74.441 20.914 75.096 16.61 A 16.54 16.54 0 0 0 75.28 14.12 A 13.416 13.416 0 0 0 67.977 1.58 C 65.968 0.606 63.52 0.04 60.6 0.04 Z M 68.199 5.989 A 9.382 9.382 0 0 0 60.28 1 A 10.375 10.375 0 0 0 59.963 1.005 C 54.424 1.174 51.643 5.782 50.869 10.389 A 16.572 16.572 0 0 0 50.64 13.12 A 17.74 17.74 0 0 0 50.642 13.354 C 50.723 19.517 54.01 27.24 61.12 27.24 C 67.72 27.24 70.64 20.52 70.64 14.8 A 17.691 17.691 0 0 0 68.199 5.989 Z"
                                id="2"
                              />
                              <path
                                d="M 84.68 0.52 L 78.08 0.52 L 78.08 1.12 C 83.16 2.24 83.8 3.8 83.8 7.8 L 83.8 13.8 A 1036.747 1036.747 0 0 0 83.8 14.607 C 83.806 22.407 83.832 25.977 79.778 26.928 A 9.425 9.425 0 0 1 78.6 27.12 L 78.6 27.72 L 90.56 27.72 L 90.56 27.12 C 84.871 25.982 84.993 23.998 85 14.56 A 782.043 782.043 0 0 0 85 14 L 85 6.64 C 91.76 13.92 98.88 20.92 105.28 28.48 L 105.8 28.36 A 1742.076 1742.076 0 0 1 105.713 24.412 C 105.557 16.877 105.484 9.343 105.96 5.6 C 106.225 3.449 106.626 2.037 108.32 1.41 A 5.687 5.687 0 0 1 109.56 1.12 L 109.56 0.52 L 98.64 0.52 L 98.64 1.12 C 103.16 1.92 104.2 3.04 104.24 6.84 L 104.44 21.44 L 84.68 0.52 Z"
                                id="3"
                              />
                              <path
                                d="M 111.92 19.36 L 111.2 19.36 L 112.36 26.16 A 13.15 13.15 0 0 0 118.019 28.125 A 12.881 12.881 0 0 0 119.4 28.2 A 12.172 12.172 0 0 0 120.681 28.132 C 123.417 27.842 126.153 26.63 127.739 24.536 A 6.777 6.777 0 0 0 129.12 20.36 A 6.459 6.459 0 0 0 128.451 17.42 C 126.64 13.795 121.577 12.374 118.661 9.843 A 5.44 5.44 0 0 1 116.52 5.6 C 116.52 2.96 118.64 1.2 121.2 1.2 A 5.617 5.617 0 0 1 123.205 1.535 C 124.781 2.132 125.648 3.47 126.203 5.074 A 18.812 18.812 0 0 1 126.84 7.56 L 127.48 7.56 L 127.8 1.56 C 126.04 0.6 124 0 121.96 0 A 9.57 9.57 0 0 0 121.032 0.046 C 117.036 0.435 113.04 3.297 113.04 7.64 C 113.04 15.64 125.28 15 125.28 22.12 A 5.082 5.082 0 0 1 124.794 24.366 C 124.126 25.738 122.821 26.607 121.217 26.895 A 6.905 6.905 0 0 1 120 27 A 7.34 7.34 0 0 1 114.087 23.919 A 12.783 12.783 0 0 1 111.92 19.36 Z"
                                id="4"
                              />
                              <path
                                d="M 147.8 0.04 A 15.879 15.879 0 0 0 139.726 2.105 C 136.307 4.108 133.962 7.478 133.355 11.806 A 16.378 16.378 0 0 0 133.2 14.08 C 133.2 21.687 138.007 26.845 144.917 27.969 A 18.204 18.204 0 0 0 147.84 28.2 A 16.03 16.03 0 0 0 155.851 26.197 C 159.277 24.235 161.641 20.914 162.296 16.61 A 16.54 16.54 0 0 0 162.48 14.12 A 13.416 13.416 0 0 0 155.177 1.58 C 153.168 0.606 150.72 0.04 147.8 0.04 Z M 155.399 5.989 A 9.382 9.382 0 0 0 147.48 1 A 10.375 10.375 0 0 0 147.163 1.005 C 141.624 1.174 138.843 5.782 138.069 10.389 A 16.572 16.572 0 0 0 137.84 13.12 A 17.74 17.74 0 0 0 137.842 13.354 C 137.923 19.517 141.21 27.24 148.32 27.24 C 154.92 27.24 157.84 20.52 157.84 14.8 A 17.691 17.691 0 0 0 155.399 5.989 Z"
                                id="5"
                              />
                              <path
                                d="M 165.84 27.12 L 165.84 27.72 L 179.88 27.72 L 179.88 27.12 A 33.469 33.469 0 0 1 178.068 26.826 C 174.381 26.104 174.32 25.01 174.32 21.16 L 174.32 14.72 C 177.12 15.2 178.56 14.24 180.16 17.56 A 24.277 24.277 0 0 0 180.714 18.62 C 181.749 20.494 183.544 23.285 185.72 25.56 A 7.731 7.731 0 0 0 190.65 27.75 C 191.959 27.917 193.417 27.952 195.044 28.024 A 116.316 116.316 0 0 1 195.4 28.04 L 195.52 27.44 A 15.492 15.492 0 0 1 186.603 21.095 C 184.925 18.908 183.518 16.462 182.246 14.231 A 14555.735 14555.735 0 0 0 182 13.8 L 181.8 13.52 A 10.515 10.515 0 0 0 184.828 11.589 C 185.839 10.622 186.519 9.411 186.707 7.859 A 7.479 7.479 0 0 0 186.76 6.96 A 6.483 6.483 0 0 0 186.695 6.038 C 186.38 3.847 184.662 0.295 176.347 0.429 A 29.912 29.912 0 0 0 175.88 0.44 L 166.12 0.76 L 166.12 1.32 A 15.961 15.961 0 0 1 167.921 1.563 C 170.658 2.134 170.8 3.596 170.8 8.76 L 170.8 21.16 A 555.494 555.494 0 0 1 170.794 21.362 C 170.677 25.32 170.561 26.491 165.84 27.12 Z M 174.32 14.04 L 174.32 1.28 C 178.52 1.24 182.64 3.12 182.64 7.8 C 182.64 12.24 178.16 14 174.32 14.04 Z"
                                id="6"
                              />
                              <path
                                d="M 194.32 19.36 L 193.6 19.36 L 194.76 26.16 A 13.15 13.15 0 0 0 200.419 28.125 A 12.881 12.881 0 0 0 201.8 28.2 A 12.172 12.172 0 0 0 203.081 28.132 C 205.817 27.842 208.553 26.63 210.139 24.536 A 6.777 6.777 0 0 0 211.52 20.36 A 6.459 6.459 0 0 0 210.851 17.42 C 209.04 13.795 203.977 12.374 201.061 9.843 A 5.44 5.44 0 0 1 198.92 5.6 C 198.92 2.96 201.04 1.2 203.6 1.2 A 5.617 5.617 0 0 1 205.605 1.535 C 207.181 2.132 208.048 3.47 208.603 5.074 A 18.812 18.812 0 0 1 209.24 7.56 L 209.88 7.56 L 210.2 1.56 C 208.44 0.6 206.4 0 204.36 0 A 9.57 9.57 0 0 0 203.432 0.046 C 199.436 0.435 195.44 3.297 195.44 7.64 C 195.44 15.64 207.68 15 207.68 22.12 A 5.082 5.082 0 0 1 207.194 24.366 C 206.526 25.738 205.221 26.607 203.617 26.895 A 6.905 6.905 0 0 1 202.4 27 A 7.34 7.34 0 0 1 196.487 23.919 A 12.783 12.783 0 0 1 194.32 19.36 Z"
                                id="7"
                              />
                              <path
                                d="M 223 14.56 L 239.08 14.56 L 239.08 21.16 C 239.08 25.48 239.003 26.33 234.04 27.079 A 49.539 49.539 0 0 1 233.76 27.12 L 233.76 27.72 L 247.56 27.72 L 247.56 27.12 C 242.839 26.491 242.723 25.32 242.606 21.362 A 555.494 555.494 0 0 1 242.6 21.16 L 242.6 7.08 A 555.494 555.494 0 0 1 242.606 6.878 C 242.723 2.92 242.839 1.749 247.56 1.12 L 247.56 0.52 L 233.76 0.52 L 233.76 1.12 A 29.713 29.713 0 0 1 235.587 1.433 C 238.632 2.074 239.023 3.019 239.073 5.888 A 70.694 70.694 0 0 1 239.08 7.08 L 239.08 12.88 L 223 12.88 L 223 7.08 C 223 2.76 223.077 1.91 228.04 1.161 A 49.539 49.539 0 0 1 228.32 1.12 L 228.32 0.52 L 214.52 0.52 L 214.52 1.12 C 219.241 1.749 219.357 2.92 219.474 6.878 A 555.494 555.494 0 0 1 219.48 7.08 L 219.48 21.16 A 555.494 555.494 0 0 1 219.474 21.362 C 219.357 25.32 219.241 26.491 214.52 27.12 L 214.52 27.72 L 228.32 27.72 L 228.32 27.12 A 29.713 29.713 0 0 1 226.493 26.807 C 223.448 26.166 223.057 25.221 223.007 22.352 A 70.694 70.694 0 0 1 223 21.16 L 223 14.56 Z"
                                id="8"
                              />
                              <path
                                d="M 263.36 1.12 L 263.36 0.52 L 249.92 0.52 L 249.92 1.12 C 254.641 1.749 254.757 2.92 254.874 6.878 A 555.494 555.494 0 0 1 254.88 7.08 L 254.88 21.16 A 555.494 555.494 0 0 1 254.874 21.362 C 254.757 25.32 254.641 26.491 249.92 27.12 L 249.92 27.72 L 263.36 27.72 L 263.36 27.12 C 258.639 26.491 258.523 25.32 258.406 21.362 A 555.494 555.494 0 0 1 258.4 21.16 L 258.4 7.08 A 555.494 555.494 0 0 1 258.406 6.878 C 258.523 2.92 258.639 1.749 263.36 1.12 Z"
                                id="9"
                              />
                              <path
                                d="M 270.8 8.76 L 270.8 21.16 A 555.494 555.494 0 0 1 270.794 21.362 C 270.677 25.32 270.561 26.491 265.84 27.12 L 265.84 27.72 L 279.64 27.72 L 279.64 27.12 A 29.713 29.713 0 0 1 277.813 26.807 C 274.768 26.166 274.377 25.221 274.327 22.352 A 70.694 70.694 0 0 1 274.32 21.16 L 274.32 1.4 C 278.578 1.364 282.57 3.314 283.256 7.581 A 8.428 8.428 0 0 1 283.36 8.92 C 283.36 12.226 281.556 14.084 278.875 14.945 A 11.689 11.689 0 0 1 277.08 15.36 L 277.2 15.96 A 22.626 22.626 0 0 0 279.151 15.659 C 283.296 14.826 287.44 12.675 287.44 7.84 A 5.402 5.402 0 0 0 287.389 7.124 C 287.094 4.945 285.254 0.19 275.279 0.427 A 31.907 31.907 0 0 0 274.84 0.44 L 266.12 0.76 L 266.12 1.36 A 11.413 11.413 0 0 1 267.91 1.572 C 270.635 2.157 270.791 3.911 270.799 7.993 A 356.939 356.939 0 0 1 270.8 8.76 Z"
                                id="10"
                              />
                            </g>
                          </svg>
                        </a>
                      </li>
                    )}
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
                  padding: "0px 1.2px",
                  transform: "scaleX(1.05)",
                }}
              >
                <a
                  className="cHeader-list-link"
                  data-disable-hash=""
                  onClick={scrollToHomeSection}
                >
                  DISCOVER
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
                  data-disable-hash=""
                  onClick={scrollToVisionSection}
                >
                  EXPLORE
                </a>
              </li>

              <li
                className="cFlatText cHeader-list-item"
                id="focusArea"
                data-flat-text=""
                style={{
                  padding: "0px 1.175px",
                  transform: "scaleX(1.05)",
                }}
              >
                <a
                  className="cHeader-list-link"
                  data-disable-hash=""
                  onClick={scrollToGuidelinesSection}
                >
                  FOCUS AREA
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
                  // href="http://localhost:3000/#fellows"
                  data-disable-hash=""
                  onClick={scrollToFellowsSection}
                >
                  FELLOWS
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
                  data-disable-hash=""
                  onClick={scrollToUpdatesSection}
                  id=""
                >
                  RESEARCH
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
