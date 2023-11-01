import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

import headOpenBGImage from "../../assets/home/images/b-vision_illust01.png";
import handOpenBGImage from "../../assets/home/images/b-vision_illust08.png";

import GuideLines from "./Guidelines/index";
import Fellows from "./Fellows/index";
import FellowsMobile from "./FellowsMobile/index";

import Blogs from "./Blogs/index";
import Contact from "./Contact/index";

import videoSrc from "../../assets/videos/WeAreOne.mp4";

import FooterContainer from "./FooterContainer/index";
import { ScrollContext } from "../../components/ScrollContext";

gsap.registerPlugin(ScrollTrigger, Draggable);

const index = () => {
  const [homeData, setHomeData] = useState("");

  const scrollContextValue = useContext(ScrollContext);

  useEffect(() => {
    const apiURL = `${process.env.REACT_APP_SERVER}/home/getHome`;

    const getHomeData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setHomeData(data.home[0]);
        const scrollContainer = document.querySelector(".custom-container");
        ScrollTrigger.addEventListener("refreshInit", () => {
          gsap.set(scrollContainer, { overflowY: "scroll" });
        });

        ScrollTrigger.refresh();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getHomeData();
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector(".custom-container");

    ScrollTrigger.create({
      trigger: ".spacer",
      scroller: scrollContainer,
      start: "top top", // Adjust the start position based on your preference
      onEnter: () => {
        gsap.fromTo(
          ".cHeader-logo",
          {
            transform:
              window.innerWidth > 768 && window.innerHeight > 900
                ? "translate(0%, 43vh)"
                : window.innerWidth > 768
                ? "translate(0%, 40vh)"
                : window.innerWidth > 330
                ? "translate(0%, 40vh)"
                : "translate(0%, 40vh)",
            top: 0,
            left: "0 !important",
            margin: "auto",
          },
          {
            transform:
              window.innerWidth > 768
                ? "scale(0.266,0.266)"
                : "scale(0.266,0.266) translate(-130%,-20px)",
            top: "2.9rem",
            left: "0rem !important",
            margin: "auto 3px",
          }
        );
        gsap.fromTo(
          ".lKv-subTitle-item > svg ",
          {
            transform: "translate(0px, 0%)",
          },
          {
            transform: "translate(0px, 130%)",
          }
        );
      },
      onLeaveBack: () => {
        // console.log("🚀 ~ file: home.jsx:2240 ~ useEffect ~ onLeave:");
        gsap.fromTo(
          ".cHeader-logo",
          {
            transform:
              window.innerWidth > 768
                ? "scale(0.266,0.266)"
                : "scale(0.266,0.266) translate(-130%,-20px)",
            top: "2.9rem",
            left: "0rem",
            margin: "auto 3px",
          },
          {
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
          }
        );
        gsap.fromTo(
          ".lKv-subTitle-item > svg ",
          {
            transform: "translate(0px, 130%)",
          },
          {
            transform: "translate(0px, 0%)",
          }
        );
      },
    });

    let scrollDirection = 1;

    function firstDivlVisionScrollAnimation() {
      const headOpenDiv = document.querySelector(
        ".lVision-section-image.-first"
      );
      const shipDiv = document.querySelector(".lVision-illust.-second");
      const shipDivImage = document.querySelector(
        ".lVision-illust.-second > img"
      );
      const penDiv = document.querySelector(".lVision-illust.-first");

      const runPoseDiv = document.querySelector(".lVision-illust.-third");

      gsap.to(headOpenDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "top top",
          scrub: true,
          onEnter: () => {
            headOpenDiv.classList.add("cPlaySprite");
          },
          onUpdate: (self) => {
            const progress = self.progress;
            // Determine the scroll direction based on the progress
            const currentScrollDirection = progress > 0.5 ? 1 : -1;
            // If the scroll direction changed, update the scrollDirection variable
            if (currentScrollDirection !== scrollDirection) {
              scrollDirection = currentScrollDirection;
            }
            const updatedValueY =
              35.8191 + 200 * progress * currentScrollDirection;
            if (updatedValueY > -36 && updatedValueY < 36) {
              headOpenDiv.style.transform = `matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });

      gsap.to(shipDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            // Determine the scroll direction based on the progress
            const currentScrollDirection = progress > 0.5 ? 1 : -1;
            // If the scroll direction changed, update the scrollDirection variable
            if (currentScrollDirection !== scrollDirection) {
              scrollDirection = currentScrollDirection;
            }
            const updatedValueY = 150 * progress;
            const updatedValueRotationImg = progress * 75;
            if (updatedValueRotationImg < 27) {
              shipDivImage.style.transform = `rotate(${-updatedValueRotationImg}deg)`;
            }
            if (updatedValueY > -45 && updatedValueY < 45) {
              shipDiv.style.transform = `matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });
      gsap.to(penDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const updatedValueY = -55.1816 + 200 * progress;
            if (updatedValueY > -56 && updatedValueY < 15) {
              penDiv.style.transform = `rotate(10deg) matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });

      gsap.to(runPoseDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const updatedValueY = 150 * progress;
            if (updatedValueY > -15 && updatedValueY < 15) {
              runPoseDiv.style.transform = `matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });
    }

    function secondDivlVisionScrollAnimation() {
      const nodeDiv = document.querySelector(".lVision-node.-left");
      const cartDiv = document.querySelector(".lVision-illust.-forth");
      const cartDivImage = document.querySelector(
        ".lVision-illust.-forth > img"
      );

      const skullWithBrainDiv = document.querySelector(
        ".lVision-illust.-fifth"
      );
      const skullWithBrainDivImage = document.querySelector(
        ".lVision-illust.-fifth > picture  > img"
      );

      gsap.to(nodeDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            // Determine the scroll direction based on the progress
            const currentScrollDirection = progress > 0.5 ? 1 : -1;
            // If the scroll direction changed, update the scrollDirection variable
            if (currentScrollDirection !== scrollDirection) {
              scrollDirection = currentScrollDirection;
            }
            const updatedValueY = 200 * progress * currentScrollDirection;
            if (updatedValueY > -55 && updatedValueY < 36) {
              nodeDiv.style.transform = `matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });
      gsap.to(cartDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            // Determine the scroll direction based on the progress
            const currentScrollDirection = progress > 0.5 ? 1 : -1;
            // If the scroll direction changed, update the scrollDirection variable
            if (currentScrollDirection !== scrollDirection) {
              scrollDirection = currentScrollDirection;
            }
            const updatedValueY = 100 * progress * currentScrollDirection;
            const updatedValueRotationImg = progress * 75;
            if (updatedValueRotationImg < 34) {
              cartDivImage.style.transform = `rotate(${-updatedValueRotationImg}deg)`;
            }
            if (updatedValueY > -9 && updatedValueY < 10) {
              cartDiv.style.transform = `matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });

      gsap.to(skullWithBrainDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            // Determine the scroll direction based on the progress
            const currentScrollDirection = progress > 0.5 ? 1 : -1;
            // If the scroll direction changed, update the scrollDirection variable
            if (currentScrollDirection !== scrollDirection) {
              scrollDirection = currentScrollDirection;
            }
            const updatedValueRotationImg = progress * 75;
            const updatedValueY = -75.0279 + 150 * progress;
            if (updatedValueRotationImg < 50) {
              skullWithBrainDivImage.style.transform = `rotate(${updatedValueRotationImg}deg)`;
            }
            if (updatedValueY > -50 && updatedValueY < 10) {
              skullWithBrainDiv.style.transform = `matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });
    }

    function thirdDivlVisionScrollAnimation() {
      const handOpenDiv = document.querySelector(
        ".lVision-section-image.-third"
      );
      const skullWithDotDiv = document.querySelector(".lVision-illust.-sixth");
      const skullWithDotDivImage = document.querySelector(
        ".lVision-illust.-sixth > picture > img"
      );

      gsap.to(handOpenDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "+=65%",
          scrub: true,
          onEnter: () => {
            handOpenDiv.classList.add("cPlaySpriteHand");
          },
          onUpdate: (self) => {
            const progress = self.progress;
            // Determine the scroll direction based on the progress
            const currentScrollDirection = progress > 0.5 ? 1 : -1;
            // If the scroll direction changed, update the scrollDirection variable
            if (currentScrollDirection !== scrollDirection) {
              scrollDirection = currentScrollDirection;
            }
            const updatedValueY =
              12.3016 + 200 * progress * currentScrollDirection;
            if (updatedValueY > -36 && updatedValueY < 36) {
              handOpenDiv.style.transform = `matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });
      gsap.to(skullWithDotDiv, {
        scrollTrigger: {
          trigger: ".lVision",
          scroller: scrollContainer,
          start: "+=50%",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            // Determine the scroll direction based on the progress
            const currentScrollDirection = progress > 0.5 ? 1 : -1;
            // If the scroll direction changed, update the scrollDirection variable
            if (currentScrollDirection !== scrollDirection) {
              scrollDirection = currentScrollDirection;
            }
            const updatedValueY = 150 * progress;
            const updatedValueRotationImg = 30 + progress * 100;

            if (updatedValueRotationImg < 50) {
              skullWithDotDivImage.style.transform = `rotate(${updatedValueRotationImg}deg)`;
            }
            if (updatedValueY > -45 && updatedValueY < 45) {
              skullWithDotDiv.style.transform = `matrix3d(
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            ${updatedValueY},
            0,
            1
          )`;
            }
          },
        },
      });
    }

    firstDivlVisionScrollAnimation();
    secondDivlVisionScrollAnimation();
    thirdDivlVisionScrollAnimation();
  }, []);

  useEffect(() => {
    const handleScrollForMobile = () => {
      const homeVideo = document.querySelector("#homeVideo");

      console.log(
        "🚀 ~ file: home.jsx:545 ~ handleScrollForMobile ~ scrollContainer?.scrollTop:",
        scrollContextValue?.scrollPos
      );
      if (homeVideo) {
        const homeVideoBottom = homeVideo.getBoundingClientRect().bottom;
        console.log(
          "🚀 ~ file: home.jsx:543 ~ handleScrollForMobile ~ homeVideo:",
          homeVideoBottom
        );
        const navbarSection =
          window.innerWidth > 500
            ? document.querySelector(".cHeader")
            : document.querySelector(".cMenu-btn-container");
        if (homeVideoBottom <= 0) {
          if (navbarSection) {
            navbarSection.classList.add("scrollColor");
          }
        } else {
          if (navbarSection) {
            navbarSection.classList.remove("scrollColor");
          }
        }
      }
    };
    if (scrollContextValue?.scrollPos >= 0) {
      handleScrollForMobile();
    }
  }, [scrollContextValue?.scrollPos]);

  return (
    <div>
      {/* canvas */}
      <div className="spacer" id="home-section">
        {window.innerWidth > 768 && (
          <div className="lKv-subTitle" data-kv-subtitle="">
            <div
              className="lKv-subTitle-item -lm01"
              data-kv-subtitle-item=""
              style={{ overflow: "hidden" }}
            >
              <svg
                width="707.35"
                height="48"
                viewBox="0 0 707.35 48"
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
                    d="M 446.6 21.2 L 452.55 36.4 L 453.25 36.4 L 461.05 19 C 461.955 17.062 462.636 15.309 464.63 14.733 A 5.136 5.136 0 0 1 465.7 14.55 L 465.7 13.8 L 457.25 13.8 L 457.25 14.55 A 24.711 24.711 0 0 0 457.568 14.585 C 458.6 14.696 459.727 14.806 459.992 15.846 A 2.038 2.038 0 0 1 460.05 16.35 A 5.406 5.406 0 0 1 459.892 17.48 C 459.189 20.594 456.297 26.962 454.55 30.85 L 449.65 17.85 A 10.492 10.492 0 0 1 449.334 16.884 C 449.021 15.652 449.303 14.67 452.3 14.55 L 452.3 13.8 L 441.6 13.8 L 441.6 14.55 C 444.396 14.976 444.587 15.672 445.919 19.149 A 165.743 165.743 0 0 0 446.15 19.75 L 441.45 30.85 L 436.65 18.6 A 34 34 0 0 1 436.266 17.568 C 435.711 15.959 435.673 14.857 437.999 14.602 A 9.787 9.787 0 0 1 438.8 14.55 L 438.8 13.8 L 428.25 13.8 L 428.25 14.55 C 430.856 14.695 431.459 16.283 432.307 18.326 A 78.401 78.401 0 0 0 432.4 18.55 L 439.6 36.4 L 440.35 36.4 L 446.6 21.2 Z M 207.15 12.2 L 207.15 27.7 A 697.378 697.378 0 0 1 207.143 27.952 C 206.997 32.899 206.851 34.363 200.95 35.15 L 200.95 35.9 L 218.2 35.9 L 218.2 35.15 C 211.65 34.2 211.55 33.2 211.55 27.7 L 211.55 3 A 17.092 17.092 0 0 1 211.696 2.999 C 217.49 2.999 222.85 5.954 222.85 12.4 A 8.725 8.725 0 0 1 222.333 15.492 C 221.483 17.75 219.645 19.16 217.244 19.932 A 14.612 14.612 0 0 1 215 20.45 L 215.15 21.2 A 28.283 28.283 0 0 0 217.589 20.823 C 222.461 19.845 227.332 17.409 227.896 12.096 A 9.906 9.906 0 0 0 227.95 11.05 C 227.95 9.125 226.878 1.447 212.749 1.783 A 39.884 39.884 0 0 0 212.2 1.8 L 201.3 2.2 L 201.3 2.95 A 14.267 14.267 0 0 1 203.538 3.215 C 207.15 3.991 207.15 6.409 207.15 12.2 Z M 544.65 12.2 L 544.65 27.7 A 697.378 697.378 0 0 1 544.643 27.952 C 544.497 32.899 544.351 34.363 538.45 35.15 L 538.45 35.9 L 555.7 35.9 L 555.7 35.15 C 549.15 34.2 549.05 33.2 549.05 27.7 L 549.05 3 A 17.092 17.092 0 0 1 549.196 2.999 C 554.99 2.999 560.35 5.954 560.35 12.4 A 8.725 8.725 0 0 1 559.833 15.492 C 558.983 17.75 557.145 19.16 554.744 19.932 A 14.612 14.612 0 0 1 552.5 20.45 L 552.65 21.2 A 28.283 28.283 0 0 0 555.089 20.823 C 559.961 19.845 564.832 17.409 565.396 12.096 A 9.906 9.906 0 0 0 565.45 11.05 C 565.45 9.125 564.378 1.447 550.249 1.783 A 39.884 39.884 0 0 0 549.7 1.8 L 538.8 2.2 L 538.8 2.95 A 14.267 14.267 0 0 1 541.038 3.215 C 544.65 3.991 544.65 6.409 544.65 12.2 Z M 514.45 24.35 L 514.45 30.1 A 42.599 42.599 0 0 1 514.413 31.559 C 514.301 33.895 513.842 34.548 511.463 34.998 A 23.595 23.595 0 0 1 510.55 35.15 L 510.55 35.9 L 522.2 35.9 L 522.2 35.15 A 49.876 49.876 0 0 1 521.988 35.118 C 518.562 34.594 518.309 34.139 518.3 30.336 A 103.086 103.086 0 0 1 518.3 30.1 L 518.3 21.2 A 24.08 24.08 0 0 0 518.27 19.914 C 518.136 17.391 517.423 14.271 513.852 13.486 A 8.621 8.621 0 0 0 512 13.3 C 508.8 13.3 506.05 15.05 503.4 16.6 L 503.4 0.2 L 502.85 0 L 497.1 2.2 L 497.1 2.7 A 19.658 19.658 0 0 1 497.671 3.126 C 499.552 4.586 499.551 5.294 499.55 7.13 A 254.454 254.454 0 0 0 499.55 7.25 L 499.55 30.1 A 42.599 42.599 0 0 1 499.513 31.559 C 499.401 33.895 498.942 34.548 496.563 34.998 A 23.595 23.595 0 0 1 495.65 35.15 L 495.65 35.9 L 507.3 35.9 L 507.3 35.15 A 49.876 49.876 0 0 1 507.088 35.118 C 503.662 34.594 503.409 34.139 503.4 30.336 A 103.086 103.086 0 0 1 503.4 30.1 L 503.4 17.6 A 19.079 19.079 0 0 1 504.324 17.044 C 505.608 16.325 506.841 15.9 508.5 15.9 A 8.447 8.447 0 0 1 510.491 16.116 C 514.456 17.078 514.453 21.062 514.45 24.102 A 252.672 252.672 0 0 0 514.45 24.35 Z M 131.15 35.15 L 131.15 35.9 L 142.8 35.9 L 142.8 35.15 A 49.876 49.876 0 0 1 142.588 35.118 C 139.162 34.594 138.909 34.139 138.9 30.336 A 103.086 103.086 0 0 1 138.9 30.1 L 138.9 18.05 A 13.241 13.241 0 0 1 139.575 17.474 C 140.951 16.382 142.235 15.9 144 15.9 A 8.447 8.447 0 0 1 145.991 16.116 C 149.956 17.078 149.953 21.062 149.95 24.102 A 252.672 252.672 0 0 0 149.95 24.35 L 149.95 30.1 A 42.599 42.599 0 0 1 149.913 31.559 C 149.801 33.895 149.342 34.548 146.963 34.998 A 23.595 23.595 0 0 1 146.05 35.15 L 146.05 35.9 L 157.7 35.9 L 157.7 35.15 A 49.876 49.876 0 0 1 157.488 35.118 C 154.062 34.594 153.809 34.139 153.8 30.336 A 103.086 103.086 0 0 1 153.8 30.1 L 153.8 21.2 A 24.08 24.08 0 0 0 153.77 19.914 C 153.636 17.391 152.923 14.271 149.352 13.486 A 8.621 8.621 0 0 0 147.5 13.3 C 144.882 13.3 142.565 14.471 140.248 16.048 A 50.608 50.608 0 0 0 138.7 17.15 L 139.1 13.5 L 138.55 13.3 L 132.6 15.5 L 132.6 16 A 19.658 19.658 0 0 1 133.171 16.426 C 135.052 17.886 135.051 18.594 135.05 20.43 A 254.454 254.454 0 0 0 135.05 20.55 L 135.05 30.1 A 42.599 42.599 0 0 1 135.013 31.559 C 134.901 33.895 134.442 34.548 132.063 34.998 A 23.595 23.595 0 0 1 131.15 35.15 Z M 402.5 37.25 L 400.85 41.1 C 400.5 41.85 399.6 44.55 398.5 44.55 A 0.885 0.885 0 0 1 398.267 44.512 C 397.59 44.321 396.376 43.474 395.895 43.178 A 4.466 4.466 0 0 0 395.85 43.15 C 394.85 43.5 394.25 44.45 394.25 45.5 A 2.511 2.511 0 0 0 395.027 47.332 A 2.421 2.421 0 0 0 396.7 48 C 398.497 48 399.729 46.748 401.303 43.119 A 46.814 46.814 0 0 0 401.85 41.8 L 409.55 22.45 L 411.65 17.6 C 412.585 15.73 413.278 14.829 415.397 14.562 A 8.74 8.74 0 0 1 415.5 14.55 L 415.5 13.8 L 406.75 13.8 L 406.75 14.55 A 7.369 7.369 0 0 1 407.871 14.778 C 410.107 15.449 409.865 17.188 408.311 21.808 A 181.823 181.823 0 0 1 407.8 23.3 L 404.7 32.3 L 399.8 19.6 A 32.24 32.24 0 0 1 399.205 18.016 C 398.592 16.162 398.613 14.707 401.6 14.55 L 401.6 13.8 L 391.25 13.8 L 391.25 14.55 A 12.68 12.68 0 0 1 392.125 14.717 C 393.673 15.079 394.016 15.642 394.663 17.235 A 95.645 95.645 0 0 1 394.85 17.7 L 402.5 37.25 Z M 110.7 16.85 L 116.8 17 L 116.8 14.9 L 109.65 14.9 C 107.672 14.001 105.937 13.425 103.827 13.318 A 14.32 14.32 0 0 0 103.1 13.3 A 10.211 10.211 0 0 0 95.571 16.35 C 94.471 17.568 93.768 19.133 93.705 21.019 A 8.339 8.339 0 0 0 93.7 21.3 A 7.262 7.262 0 0 0 97.331 27.419 A 9.903 9.903 0 0 0 97.8 27.7 C 96.679 28.578 94.131 30.454 94.005 31.984 A 1.417 1.417 0 0 0 94 32.1 A 2.926 2.926 0 0 0 95.279 34.384 C 96.382 35.249 97.971 35.751 99.1 35.9 C 96.25 37.4 92.4 39.15 92.4 42.9 C 92.4 44.953 94.741 47.866 100.405 47.996 A 17.266 17.266 0 0 0 100.8 48 C 108.711 48 114.844 43.575 116.11 39.151 A 6.001 6.001 0 0 0 116.35 37.5 A 4.816 4.816 0 0 0 113.439 33.024 C 112.084 32.357 110.274 32.017 108.05 32.1 L 101.65 32.35 A 10.457 10.457 0 0 1 101.371 32.358 C 97.049 32.431 97.034 29.618 98.65 28.1 A 10.307 10.307 0 0 0 101.139 28.681 A 11.585 11.585 0 0 0 102.4 28.75 C 107.01 28.75 111.525 25.959 111.695 21.039 A 8.356 8.356 0 0 0 111.7 20.75 A 8.797 8.797 0 0 0 111.596 19.347 C 111.461 18.507 111.19 17.748 110.757 16.954 A 10.029 10.029 0 0 0 110.7 16.85 Z M 178.7 16.85 L 184.8 17 L 184.8 14.9 L 177.65 14.9 C 175.672 14.001 173.937 13.425 171.827 13.318 A 14.32 14.32 0 0 0 171.1 13.3 A 10.211 10.211 0 0 0 163.571 16.35 C 162.471 17.568 161.768 19.133 161.705 21.019 A 8.339 8.339 0 0 0 161.7 21.3 A 7.262 7.262 0 0 0 165.331 27.419 A 9.903 9.903 0 0 0 165.8 27.7 C 164.679 28.578 162.131 30.454 162.005 31.984 A 1.417 1.417 0 0 0 162 32.1 A 2.926 2.926 0 0 0 163.279 34.384 C 164.382 35.249 165.971 35.751 167.1 35.9 C 164.25 37.4 160.4 39.15 160.4 42.9 C 160.4 44.953 162.741 47.866 168.405 47.996 A 17.266 17.266 0 0 0 168.8 48 C 176.711 48 182.844 43.575 184.11 39.151 A 6.001 6.001 0 0 0 184.35 37.5 A 4.816 4.816 0 0 0 181.439 33.024 C 180.084 32.357 178.274 32.017 176.05 32.1 L 169.65 32.35 A 10.457 10.457 0 0 1 169.371 32.358 C 165.049 32.431 165.034 29.618 166.65 28.1 A 10.307 10.307 0 0 0 169.139 28.681 A 11.585 11.585 0 0 0 170.4 28.75 C 175.01 28.75 179.525 25.959 179.695 21.039 A 8.356 8.356 0 0 0 179.7 20.75 A 8.797 8.797 0 0 0 179.596 19.347 C 179.461 18.507 179.19 17.748 178.757 16.954 A 10.029 10.029 0 0 0 178.7 16.85 Z M 590.1 13.8 L 581.35 14.45 L 581.35 15.2 C 585.241 15.2 585.842 16.247 585.934 19.342 A 55.932 55.932 0 0 1 585.95 20.95 L 585.95 31.7 C 584.45 33.05 582.5 33.9 580.45 33.9 C 574.6 33.9 575.2 28.2 575.2 26.15 L 575.2 13.8 L 567.65 14.45 L 567.65 15.2 C 571.8 15.15 571.35 16.9 571.35 20.4 L 571.35 29.15 A 142.782 142.782 0 0 1 571.35 29.26 C 571.348 31.4 571.347 36.285 576.71 36.398 A 9.064 9.064 0 0 0 576.9 36.4 A 14.447 14.447 0 0 0 584.925 33.467 A 38.825 38.825 0 0 0 585.95 32.75 L 585.8 36.65 L 594.3 34.6 L 594.1 33.85 L 591.8 34.05 A 3.406 3.406 0 0 1 591.073 33.98 C 589.436 33.621 589.756 31.946 589.8 30.35 L 590.1 13.8 Z M 10.45 1.8 L 0.3 2.2 L 0.3 2.95 A 20.488 20.488 0 0 1 2.354 3.312 C 6.016 4.184 6.071 5.912 6.2 10.35 L 6.2 27.7 A 697.378 697.378 0 0 1 6.193 27.952 C 6.047 32.899 5.901 34.363 0 35.15 L 0 35.9 L 13.75 36 C 16.25 36.05 28.2 36.25 28.2 27 C 28.2 21.488 22.483 19.293 18.022 18.172 A 48.932 48.932 0 0 0 17.1 17.95 L 17.1 17.85 A 30.182 30.182 0 0 0 18.95 17.323 C 22.29 16.247 25.669 14.362 25.933 10.537 A 7.062 7.062 0 0 0 25.95 10.05 A 7.304 7.304 0 0 0 25.265 6.831 C 23.06 2.266 16.017 1.686 11.269 1.777 A 49.631 49.631 0 0 0 10.45 1.8 Z M 301.45 36.25 L 304.8 36.4 A 14.334 14.334 0 0 0 305.415 36.413 C 312.915 36.413 318.373 30.474 318.82 24.534 A 10.446 10.446 0 0 0 318.85 23.75 A 10.787 10.787 0 0 0 314.318 14.765 A 8.779 8.779 0 0 0 309.4 13.3 A 13.819 13.819 0 0 0 301.997 15.978 A 28.974 28.974 0 0 0 301.45 16.35 L 301.65 13.3 L 301.1 13.1 L 295.15 15.5 L 295.15 16 A 19.658 19.658 0 0 1 295.721 16.426 C 297.602 17.886 297.601 18.594 297.6 20.43 A 254.454 254.454 0 0 0 297.6 20.55 L 297.6 42.2 A 44.623 44.623 0 0 1 297.564 43.659 C 297.455 45.998 297.02 46.649 294.795 47.1 A 20.779 20.779 0 0 1 293.95 47.25 L 293.95 48 L 306.9 48 L 306.9 47.25 A 96.579 96.579 0 0 1 306.599 47.218 C 302.116 46.734 301.53 46.309 301.459 43.259 A 46.317 46.317 0 0 1 301.45 42.2 L 301.45 36.25 Z M 620.45 36.25 L 623.8 36.4 A 14.334 14.334 0 0 0 624.415 36.413 C 631.915 36.413 637.373 30.474 637.82 24.534 A 10.446 10.446 0 0 0 637.85 23.75 A 10.787 10.787 0 0 0 633.318 14.765 A 8.779 8.779 0 0 0 628.4 13.3 A 13.819 13.819 0 0 0 620.997 15.978 A 28.974 28.974 0 0 0 620.45 16.35 L 620.65 13.3 L 620.1 13.1 L 614.15 15.5 L 614.15 16 A 19.658 19.658 0 0 1 614.721 16.426 C 616.602 17.886 616.601 18.594 616.6 20.43 A 254.454 254.454 0 0 0 616.6 20.55 L 616.6 42.2 A 44.623 44.623 0 0 1 616.564 43.659 C 616.455 45.998 616.02 46.649 613.795 47.1 A 20.779 20.779 0 0 1 612.95 47.25 L 612.95 48 L 625.9 48 L 625.9 47.25 A 96.579 96.579 0 0 1 625.599 47.218 C 621.116 46.734 620.53 46.309 620.459 43.259 A 46.317 46.317 0 0 1 620.45 42.2 L 620.45 36.25 Z M 90.05 34.95 L 89.85 34.1 C 86.113 34.634 85.701 34.218 85.656 30.879 A 105.272 105.272 0 0 1 85.65 29.5 L 85.65 0.2 L 85.1 0 L 79.35 2.2 L 79.35 2.7 A 19.658 19.658 0 0 1 79.921 3.126 C 81.802 4.586 81.801 5.294 81.8 7.13 A 254.454 254.454 0 0 0 81.8 7.25 L 81.8 13.8 C 80.45 13.45 79.05 13.3 77.65 13.3 A 14.121 14.121 0 0 0 68.26 16.696 C 65.913 18.769 64.378 21.693 64.173 25.196 A 13.807 13.807 0 0 0 64.15 26 A 9.91 9.91 0 0 0 64.166 26.557 C 64.427 31.2 67.916 35.842 72.679 36.354 A 8.163 8.163 0 0 0 73.55 36.4 A 10.372 10.372 0 0 0 80.206 33.513 A 30.086 30.086 0 0 0 81.8 32.05 L 81.8 36.8 L 90.05 34.95 Z M 278.7 28.8 L 277.55 29 L 277.95 34.55 C 279.7 35.8 281.85 36.4 284.05 36.4 A 9.944 9.944 0 0 0 284.597 36.385 C 287.171 36.243 289.745 35.106 291.185 33.113 A 6.146 6.146 0 0 0 292.35 29.45 A 5.037 5.037 0 0 0 291.779 27.059 C 289.62 22.955 282.074 22.421 282.001 18.064 A 3.809 3.809 0 0 1 282 18 C 282 16.193 283.02 14.794 284.729 14.541 A 3.892 3.892 0 0 1 285.3 14.5 A 3.586 3.586 0 0 1 287.08 14.945 C 288.659 15.826 289.419 17.856 289.95 19.6 L 291.05 19.4 L 290.9 14.95 A 9.784 9.784 0 0 0 286.001 13.32 A 10.443 10.443 0 0 0 285.35 13.3 C 281.8 13.3 278.15 15.55 278.15 19.45 A 5.935 5.935 0 0 0 278.517 21.578 C 280.345 26.394 288.387 26.099 288.499 31.046 A 4.635 4.635 0 0 1 288.5 31.15 A 4.169 4.169 0 0 1 287.845 33.457 C 287.275 34.322 286.365 34.913 285.228 35.063 A 4.43 4.43 0 0 1 284.65 35.1 C 281.306 35.1 279.603 32.216 278.832 29.332 A 15.345 15.345 0 0 1 278.7 28.8 Z M 670.7 28.8 L 669.55 29 L 669.95 34.55 C 671.7 35.8 673.85 36.4 676.05 36.4 A 9.944 9.944 0 0 0 676.597 36.385 C 679.171 36.243 681.745 35.106 683.185 33.113 A 6.146 6.146 0 0 0 684.35 29.45 A 5.037 5.037 0 0 0 683.779 27.059 C 681.62 22.955 674.074 22.421 674.001 18.064 A 3.809 3.809 0 0 1 674 18 C 674 16.193 675.02 14.794 676.729 14.541 A 3.892 3.892 0 0 1 677.3 14.5 A 3.586 3.586 0 0 1 679.08 14.945 C 680.659 15.826 681.419 17.856 681.95 19.6 L 683.05 19.4 L 682.9 14.95 A 9.784 9.784 0 0 0 678.001 13.32 A 10.443 10.443 0 0 0 677.35 13.3 C 673.8 13.3 670.15 15.55 670.15 19.45 A 5.935 5.935 0 0 0 670.517 21.578 C 672.345 26.394 680.387 26.099 680.499 31.046 A 4.635 4.635 0 0 1 680.5 31.15 A 4.169 4.169 0 0 1 679.845 33.457 C 679.275 34.322 678.365 34.913 677.228 35.063 A 4.43 4.43 0 0 1 676.65 35.1 C 673.306 35.1 671.603 32.216 670.832 29.332 A 15.345 15.345 0 0 1 670.7 28.8 Z M 327.1 20.65 L 341.6 20.65 A 8.514 8.514 0 0 0 340.674 17.03 C 339.433 14.678 337.029 13.3 333.9 13.3 C 327.344 13.3 322.911 18.535 322.661 24.746 A 13.8 13.8 0 0 0 322.65 25.3 C 322.65 31.258 326.89 36.329 333.021 36.399 A 11.263 11.263 0 0 0 333.15 36.4 C 337.05 36.4 340.45 33.85 342.35 30.6 L 341.6 30.05 C 340.236 31.869 338.624 32.985 336.388 33.172 A 8.234 8.234 0 0 1 335.7 33.2 C 330.34 33.2 326.869 28.834 326.869 23.946 A 10.38 10.38 0 0 1 326.9 23.15 L 327.1 20.65 Z M 692.1 20.65 L 706.6 20.65 A 8.514 8.514 0 0 0 705.674 17.03 C 704.433 14.678 702.029 13.3 698.9 13.3 C 692.344 13.3 687.911 18.535 687.661 24.746 A 13.8 13.8 0 0 0 687.65 25.3 C 687.65 31.258 691.89 36.329 698.021 36.399 A 11.263 11.263 0 0 0 698.15 36.4 C 702.05 36.4 705.45 33.85 707.35 30.6 L 706.6 30.05 C 705.236 31.869 703.624 32.985 701.388 33.172 A 8.234 8.234 0 0 1 700.7 33.2 C 695.34 33.2 691.869 28.834 691.869 23.946 A 10.38 10.38 0 0 1 691.9 23.15 L 692.1 20.65 Z M 39.75 19.4 L 39.65 19.4 L 39.85 13.5 L 39.3 13.3 L 33.35 15.5 L 33.35 16 A 19.658 19.658 0 0 1 33.921 16.426 C 35.802 17.886 35.801 18.594 35.8 20.43 A 254.454 254.454 0 0 0 35.8 20.55 L 35.8 30.1 A 44.623 44.623 0 0 1 35.764 31.559 C 35.655 33.898 35.22 34.549 32.995 35 A 20.779 20.779 0 0 1 32.15 35.15 L 32.15 35.9 L 44.65 35.9 L 44.65 35.15 A 81.401 81.401 0 0 1 44.375 35.118 C 39.842 34.583 39.65 34.12 39.65 30.1 L 39.65 25.05 C 39.65 24.321 39.319 17.873 43.207 17.148 A 3.829 3.829 0 0 1 43.55 17.1 C 44.65 17 45.9 18.1 46.75 18.75 A 5.377 5.377 0 0 0 47.128 18.55 C 47.938 18.079 48.801 17.316 49.168 16.447 A 2.174 2.174 0 0 0 49.35 15.6 A 2.185 2.185 0 0 0 48.917 14.263 C 48.457 13.654 47.678 13.3 46.8 13.3 C 43.835 13.3 41.181 16.356 39.961 18.925 A 10.485 10.485 0 0 0 39.75 19.4 Z M 237.75 19.4 L 237.65 19.4 L 237.85 13.5 L 237.3 13.3 L 231.35 15.5 L 231.35 16 A 19.658 19.658 0 0 1 231.921 16.426 C 233.802 17.886 233.801 18.594 233.8 20.43 A 254.454 254.454 0 0 0 233.8 20.55 L 233.8 30.1 A 44.623 44.623 0 0 1 233.764 31.559 C 233.655 33.898 233.22 34.549 230.995 35 A 20.779 20.779 0 0 1 230.15 35.15 L 230.15 35.9 L 242.65 35.9 L 242.65 35.15 A 81.401 81.401 0 0 1 242.375 35.118 C 237.842 34.583 237.65 34.12 237.65 30.1 L 237.65 25.05 C 237.65 24.321 237.319 17.873 241.207 17.148 A 3.829 3.829 0 0 1 241.55 17.1 C 242.65 17 243.9 18.1 244.75 18.75 A 5.377 5.377 0 0 0 245.128 18.55 C 245.938 18.079 246.801 17.316 247.168 16.447 A 2.174 2.174 0 0 0 247.35 15.6 A 2.185 2.185 0 0 0 246.917 14.263 C 246.457 13.654 245.678 13.3 244.8 13.3 C 241.835 13.3 239.181 16.356 237.961 18.925 A 10.485 10.485 0 0 0 237.75 19.4 Z M 352.25 19.4 L 352.15 19.4 L 352.35 13.5 L 351.8 13.3 L 345.85 15.5 L 345.85 16 A 19.658 19.658 0 0 1 346.421 16.426 C 348.302 17.886 348.301 18.594 348.3 20.43 A 254.454 254.454 0 0 0 348.3 20.55 L 348.3 30.1 A 44.623 44.623 0 0 1 348.264 31.559 C 348.155 33.898 347.72 34.549 345.495 35 A 20.779 20.779 0 0 1 344.65 35.15 L 344.65 35.9 L 357.15 35.9 L 357.15 35.15 A 81.401 81.401 0 0 1 356.875 35.118 C 352.342 34.583 352.15 34.12 352.15 30.1 L 352.15 25.05 C 352.15 24.321 351.819 17.873 355.707 17.148 A 3.829 3.829 0 0 1 356.05 17.1 C 357.15 17 358.4 18.1 359.25 18.75 A 5.377 5.377 0 0 0 359.628 18.55 C 360.438 18.079 361.301 17.316 361.668 16.447 A 2.174 2.174 0 0 0 361.85 15.6 A 2.185 2.185 0 0 0 361.417 14.263 C 360.957 13.654 360.178 13.3 359.3 13.3 C 356.335 13.3 353.681 16.356 352.461 18.925 A 10.485 10.485 0 0 0 352.25 19.4 Z M 603.25 19.4 L 603.15 19.4 L 603.35 13.5 L 602.8 13.3 L 596.85 15.5 L 596.85 16 A 19.658 19.658 0 0 1 597.421 16.426 C 599.302 17.886 599.301 18.594 599.3 20.43 A 254.454 254.454 0 0 0 599.3 20.55 L 599.3 30.1 A 44.623 44.623 0 0 1 599.264 31.559 C 599.155 33.898 598.72 34.549 596.495 35 A 20.779 20.779 0 0 1 595.65 35.15 L 595.65 35.9 L 608.15 35.9 L 608.15 35.15 A 81.401 81.401 0 0 1 607.875 35.118 C 603.342 34.583 603.15 34.12 603.15 30.1 L 603.15 25.05 C 603.15 24.321 602.819 17.873 606.707 17.148 A 3.829 3.829 0 0 1 607.05 17.1 C 608.15 17 609.4 18.1 610.25 18.75 A 5.377 5.377 0 0 0 610.628 18.55 C 611.438 18.079 612.301 17.316 612.668 16.447 A 2.174 2.174 0 0 0 612.85 15.6 A 2.185 2.185 0 0 0 612.417 14.263 C 611.957 13.654 611.178 13.3 610.3 13.3 C 607.335 13.3 604.681 16.356 603.461 18.925 A 10.485 10.485 0 0 0 603.25 19.4 Z M 383.35 16.4 L 391.25 16.4 L 391.25 14.3 L 383.35 14.3 L 383.35 9.1 L 382.9 9.1 L 375.9 16.05 L 376.15 16.4 L 379.5 16.4 L 379.5 30 C 379.5 33.85 379.25 36.4 384.1 36.4 C 386.85 36.4 389.5 35.75 392 34.8 L 391.8 34 C 390.85 34.25 389.85 34.35 388.85 34.35 C 383.4 34.35 383.35 31.55 383.35 27.1 L 383.35 16.4 Z M 486.35 16.4 L 494.25 16.4 L 494.25 14.3 L 486.35 14.3 L 486.35 9.1 L 485.9 9.1 L 478.9 16.05 L 479.15 16.4 L 482.5 16.4 L 482.5 30 C 482.5 33.85 482.25 36.4 487.1 36.4 C 489.85 36.4 492.5 35.75 495 34.8 L 494.8 34 C 493.85 34.25 492.85 34.35 491.85 34.35 C 486.4 34.35 486.35 31.55 486.35 27.1 L 486.35 16.4 Z M 274.25 24.75 A 11.426 11.426 0 0 0 272.707 18.849 C 270.62 15.333 266.622 13.3 262 13.3 C 255.406 13.3 249.829 17.901 249.654 24.624 A 12.537 12.537 0 0 0 249.65 24.95 C 249.65 32.05 255.1 36.4 261.95 36.4 A 12.497 12.497 0 0 0 272.244 31.221 A 11.207 11.207 0 0 0 274.25 24.75 Z M 666.25 24.75 A 11.426 11.426 0 0 0 664.707 18.849 C 662.62 15.333 658.622 13.3 654 13.3 C 647.406 13.3 641.829 17.901 641.654 24.624 A 12.537 12.537 0 0 0 641.65 24.95 C 641.65 32.05 647.1 36.4 653.95 36.4 A 12.497 12.497 0 0 0 664.244 31.221 A 11.207 11.207 0 0 0 666.25 24.75 Z M 61.55 35.9 L 61.55 35.15 A 49.876 49.876 0 0 1 61.338 35.118 C 57.912 34.594 57.659 34.139 57.65 30.336 A 103.086 103.086 0 0 1 57.65 30.1 L 57.65 13.5 L 57.1 13.3 L 50.75 15.5 L 50.75 16 A 24.983 24.983 0 0 1 51.458 16.426 C 53.842 17.918 53.8 18.624 53.8 20.55 L 53.8 30.1 A 42.599 42.599 0 0 1 53.763 31.559 C 53.651 33.895 53.192 34.548 50.813 34.998 A 23.595 23.595 0 0 1 49.9 35.15 L 49.9 35.9 L 61.55 35.9 Z M 129.55 35.9 L 129.55 35.15 A 49.876 49.876 0 0 1 129.338 35.118 C 125.912 34.594 125.659 34.139 125.65 30.336 A 103.086 103.086 0 0 1 125.65 30.1 L 125.65 13.5 L 125.1 13.3 L 118.75 15.5 L 118.75 16 A 24.983 24.983 0 0 1 119.458 16.426 C 121.842 17.918 121.8 18.624 121.8 20.55 L 121.8 30.1 A 42.599 42.599 0 0 1 121.763 31.559 C 121.651 33.895 121.192 34.548 118.813 34.998 A 23.595 23.595 0 0 1 117.9 35.15 L 117.9 35.9 L 129.55 35.9 Z M 374.05 35.9 L 374.05 35.15 A 49.876 49.876 0 0 1 373.838 35.118 C 370.412 34.594 370.159 34.139 370.15 30.336 A 103.086 103.086 0 0 1 370.15 30.1 L 370.15 13.5 L 369.6 13.3 L 363.25 15.5 L 363.25 16 A 24.983 24.983 0 0 1 363.958 16.426 C 366.342 17.918 366.3 18.624 366.3 20.55 L 366.3 30.1 A 42.599 42.599 0 0 1 366.263 31.559 C 366.151 33.895 365.692 34.548 363.313 34.998 A 23.595 23.595 0 0 1 362.4 35.15 L 362.4 35.9 L 374.05 35.9 Z M 477.05 35.9 L 477.05 35.15 A 49.876 49.876 0 0 1 476.838 35.118 C 473.412 34.594 473.159 34.139 473.15 30.336 A 103.086 103.086 0 0 1 473.15 30.1 L 473.15 13.5 L 472.6 13.3 L 466.25 15.5 L 466.25 16 A 24.983 24.983 0 0 1 466.958 16.426 C 469.342 17.918 469.3 18.624 469.3 20.55 L 469.3 30.1 A 42.599 42.599 0 0 1 469.263 31.559 C 469.151 33.895 468.692 34.548 466.313 34.998 A 23.595 23.595 0 0 1 465.4 35.15 L 465.4 35.9 L 477.05 35.9 Z M 269.444 27.273 A 13.59 13.59 0 0 0 269.6 25.25 C 269.6 22.008 268.482 17.945 265.914 15.83 A 6.155 6.155 0 0 0 261.9 14.4 C 256.5 14.4 254.3 20 254.3 24.6 A 12.719 12.719 0 0 0 254.304 24.93 C 254.362 27.139 254.992 29.618 256.215 31.599 A 7.067 7.067 0 0 0 262.3 35.3 A 5.877 5.877 0 0 0 266.257 33.813 C 268.04 32.26 269.075 29.715 269.444 27.273 Z M 661.444 27.273 A 13.59 13.59 0 0 0 661.6 25.25 C 661.6 22.008 660.482 17.945 657.914 15.83 A 6.155 6.155 0 0 0 653.9 14.4 C 648.5 14.4 646.3 20 646.3 24.6 A 12.719 12.719 0 0 0 646.304 24.93 C 646.362 27.139 646.992 29.618 648.215 31.599 A 7.067 7.067 0 0 0 654.3 35.3 A 5.877 5.877 0 0 0 658.257 33.813 C 660.04 32.26 661.075 29.715 661.444 27.273 Z M 301.45 27.5 L 301.45 17.25 C 302.796 16.338 303.954 15.917 305.446 15.821 A 11.055 11.055 0 0 1 306.15 15.8 A 6.437 6.437 0 0 1 307.238 15.901 C 310.098 16.398 314.6 18.827 314.6 25.45 A 13.383 13.383 0 0 1 314.434 27.532 C 313.859 31.167 311.754 34.85 307.65 34.85 C 301.7 34.85 301.45 30.2 301.45 27.5 Z M 620.45 27.5 L 620.45 17.25 C 621.796 16.338 622.954 15.917 624.446 15.821 A 11.055 11.055 0 0 1 625.15 15.8 A 6.437 6.437 0 0 1 626.238 15.901 C 629.098 16.398 633.6 18.827 633.6 25.45 A 13.383 13.383 0 0 1 633.434 27.532 C 632.859 31.167 630.754 34.85 626.65 34.85 C 620.7 34.85 620.45 30.2 620.45 27.5 Z M 81.8 21.9 L 81.8 30.45 C 80.795 32.077 78.6 33.749 76.66 33.89 A 3.588 3.588 0 0 1 76.4 33.9 A 6.858 6.858 0 0 1 75.023 33.759 C 71.711 33.079 68.4 29.918 68.4 23.6 C 68.4 19.6 70.4 14.85 75.05 14.85 A 7.462 7.462 0 0 1 76.09 14.925 C 78.501 15.267 81.8 16.878 81.8 21.9 Z M 10.6 18.95 L 12.55 18.85 A 13.066 13.066 0 0 1 13.163 18.835 C 19.852 18.835 22.607 24.14 22.835 27.197 A 5.44 5.44 0 0 1 22.85 27.6 C 22.85 32 19.8 34.85 15.45 34.85 C 10.578 34.85 10.588 31.473 10.599 27.771 A 180.741 180.741 0 0 0 10.6 27.25 L 10.6 18.95 Z M 100.7 35.9 L 105.6 35.6 C 106.756 35.554 112.398 34.952 113.244 38.575 A 4.279 4.279 0 0 1 113.35 39.55 C 113.35 44 107.75 45.55 104.15 45.55 A 13.86 13.86 0 0 1 103.07 45.506 C 101.29 45.366 99.045 44.874 97.579 43.767 A 3.498 3.498 0 0 1 96.05 40.9 A 3.487 3.487 0 0 1 96.796 38.884 C 97.765 37.544 99.475 36.444 100.7 35.9 Z M 168.7 35.9 L 173.6 35.6 C 174.756 35.554 180.398 34.952 181.244 38.575 A 4.279 4.279 0 0 1 181.35 39.55 C 181.35 44 175.75 45.55 172.15 45.55 A 13.86 13.86 0 0 1 171.07 45.506 C 169.29 45.366 167.045 44.874 165.579 43.767 A 3.498 3.498 0 0 1 164.05 40.9 A 3.487 3.487 0 0 1 164.796 38.884 C 165.765 37.544 167.475 36.444 168.7 35.9 Z M 10.6 17.9 L 10.6 2.95 A 20.684 20.684 0 0 1 11.157 2.957 C 16.078 3.09 21 5.018 21 10.8 A 6.737 6.737 0 0 1 20.47 13.535 C 19.243 16.332 16.07 17.426 12.897 17.769 A 23.844 23.844 0 0 1 10.6 17.9 Z M 103.2 27.65 C 100.95 27.65 97.95 25.4 97.95 20.45 C 97.95 17.905 98.883 14.782 101.713 14.432 A 4.379 4.379 0 0 1 102.25 14.4 C 105.526 14.4 107.047 17.3 107.379 20.2 A 11.015 11.015 0 0 1 107.45 21.45 C 107.45 24.25 106.55 27.65 103.2 27.65 Z M 171.2 27.65 C 168.95 27.65 165.95 25.4 165.95 20.45 C 165.95 17.905 166.883 14.782 169.713 14.432 A 4.379 4.379 0 0 1 170.25 14.4 C 173.526 14.4 175.047 17.3 175.379 20.2 A 11.015 11.015 0 0 1 175.45 21.45 C 175.45 24.25 174.55 27.65 171.2 27.65 Z M 336.85 19.3 L 327.25 19.7 A 9.477 9.477 0 0 1 327.442 18.969 C 328.14 16.684 329.776 14.4 332.35 14.4 C 334.726 14.4 336.097 16.49 336.68 18.58 A 9.43 9.43 0 0 1 336.85 19.3 Z M 701.85 19.3 L 692.25 19.7 A 9.477 9.477 0 0 1 692.442 18.969 C 693.14 16.684 694.776 14.4 697.35 14.4 C 699.726 14.4 701.097 16.49 701.68 18.58 A 9.43 9.43 0 0 1 701.85 19.3 Z M 55.5 1.3 C 54.1 1.3 52.95 2.45 52.95 3.85 C 52.95 5.25 54.1 6.4 55.5 6.4 C 56.9 6.4 58.05 5.25 58.05 3.85 C 58.05 2.45 56.9 1.3 55.5 1.3 Z M 123.5 1.3 C 122.1 1.3 120.95 2.45 120.95 3.85 C 120.95 5.25 122.1 6.4 123.5 6.4 C 124.9 6.4 126.05 5.25 126.05 3.85 C 126.05 2.45 124.9 1.3 123.5 1.3 Z M 368 1.3 C 366.6 1.3 365.45 2.45 365.45 3.85 C 365.45 5.25 366.6 6.4 368 6.4 C 369.4 6.4 370.55 5.25 370.55 3.85 C 370.55 2.45 369.4 1.3 368 1.3 Z M 471 1.3 C 469.6 1.3 468.45 2.45 468.45 3.85 C 468.45 5.25 469.6 6.4 471 6.4 C 472.4 6.4 473.55 5.25 473.55 3.85 C 473.55 2.45 472.4 1.3 471 1.3 Z"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </div>
            <div
              className="lKv-subTitle-item -lm02"
              data-kv-subtitle-item=""
              style={{ overflow: "hidden" }}
            >
              <svg
                width="596.96"
                height="29.2"
                viewBox="0 0 596.96 29.2"
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
                    d="M 71.32 19.84 L 71.32 24.08 A 35.698 35.698 0 0 1 71.291 25.247 C 71.204 27.118 70.856 27.639 69.076 28 A 16.623 16.623 0 0 1 68.4 28.12 L 68.4 28.72 L 77.2 28.72 L 77.2 28.12 C 74.702 27.704 74.424 27.395 74.402 24.583 A 62.988 62.988 0 0 1 74.4 24.08 L 74.4 14.68 A 13.483 13.483 0 0 1 74.617 14.46 C 75.602 13.487 76.587 12.847 77.967 12.737 A 5.455 5.455 0 0 1 78.4 12.72 A 5.624 5.624 0 0 1 79.801 12.884 C 83.424 13.814 82.924 18.442 82.92 19.826 A 5.587 5.587 0 0 0 82.92 19.84 L 82.92 24.08 A 35.698 35.698 0 0 1 82.891 25.247 C 82.804 27.118 82.456 27.639 80.676 28 A 16.623 16.623 0 0 1 80 28.12 L 80 28.72 L 88.8 28.72 L 88.8 28.12 C 86.302 27.704 86.024 27.395 86.002 24.583 A 62.988 62.988 0 0 1 86 24.08 L 86 18.84 A 16.618 16.618 0 0 1 86.004 18.496 C 86.05 16.323 86.364 11.616 82.202 10.771 A 7.045 7.045 0 0 0 80.8 10.64 A 8.83 8.83 0 0 0 75.548 12.756 C 75.068 13.118 74.606 13.5 74.16 13.88 C 73.44 11.84 71.36 10.64 69.28 10.64 A 8.946 8.946 0 0 0 64.017 12.756 C 63.584 13.082 63.169 13.424 62.772 13.766 A 36.491 36.491 0 0 0 62.64 13.88 L 62.96 10.8 L 62.52 10.64 L 57.76 12.4 L 57.76 12.8 A 15.727 15.727 0 0 1 58.217 13.14 C 59.754 14.334 59.72 14.899 59.72 16.44 L 59.72 24.08 A 35.698 35.698 0 0 1 59.691 25.247 C 59.604 27.118 59.256 27.639 57.476 28 A 16.623 16.623 0 0 1 56.8 28.12 L 56.8 28.72 L 65.6 28.72 L 65.6 28.12 C 63.102 27.704 62.824 27.395 62.802 24.583 A 62.988 62.988 0 0 1 62.8 24.08 L 62.8 14.72 C 63.89 13.591 65.057 12.765 66.705 12.722 A 5.203 5.203 0 0 1 66.84 12.72 C 71.599 12.72 71.35 17.286 71.322 19.564 A 22.637 22.637 0 0 0 71.32 19.84 Z M 267.84 14.44 L 263.48 14.44 L 263.48 2.48 L 267.12 2.48 C 271.061 2.48 274.263 2.656 274.841 6.941 A 10.313 10.313 0 0 1 274.92 7.84 L 275.52 7.84 L 276.16 1.52 L 255 1.52 L 255 2.12 C 259.721 2.749 259.837 3.92 259.954 7.878 A 555.494 555.494 0 0 1 259.96 8.08 L 259.96 22.16 A 555.494 555.494 0 0 1 259.954 22.362 C 259.837 26.32 259.721 27.491 255 28.12 L 255 28.72 L 269.24 28.72 L 269.24 28.12 A 33.44 33.44 0 0 1 267.296 27.777 C 263.954 27.065 263.534 26.067 263.486 23.084 A 57.973 57.973 0 0 1 263.48 22.16 L 263.48 16.12 L 267.84 16.12 A 412.579 412.579 0 0 0 268.031 16.12 C 271.279 16.118 273.286 16.117 273.6 20.08 L 274.2 20.08 L 274.2 10.32 L 273.6 10.32 C 273.28 14.12 271.2 14.44 267.84 14.44 Z M 420.36 1.52 L 402.04 1.52 C 400.72 1.52 400.56 1.56 399.56 0.64 L 399.16 0.28 L 398.84 0.28 L 398.28 7.76 L 398.84 7.88 A 12.927 12.927 0 0 1 399.561 5.886 C 400.986 2.862 403.159 2.72 407.04 2.72 L 409.44 2.72 L 409.44 21.2 A 40.877 40.877 0 0 1 409.399 23.36 C 409.243 26.214 408.514 27.331 405.217 27.92 A 24.178 24.178 0 0 1 403.84 28.12 L 403.84 28.72 L 418.56 28.72 L 418.56 28.12 A 20.418 20.418 0 0 1 416.589 27.801 C 413.137 27.037 412.96 25.463 412.96 21.2 L 412.96 2.72 L 415.36 2.72 A 35.598 35.598 0 0 1 417.879 2.783 C 420.821 2.998 422.444 3.927 423.56 7.88 L 424.12 7.76 L 423.56 0.28 L 423.24 0.28 L 422.84 0.64 C 421.84 1.56 421.68 1.52 420.36 1.52 Z M 533.96 1.52 L 515.64 1.52 C 514.32 1.52 514.16 1.56 513.16 0.64 L 512.76 0.28 L 512.44 0.28 L 511.88 7.76 L 512.44 7.88 A 12.927 12.927 0 0 1 513.161 5.886 C 514.586 2.862 516.759 2.72 520.64 2.72 L 523.04 2.72 L 523.04 21.2 A 40.877 40.877 0 0 1 522.999 23.36 C 522.843 26.214 522.114 27.331 518.817 27.92 A 24.178 24.178 0 0 1 517.44 28.12 L 517.44 28.72 L 532.16 28.72 L 532.16 28.12 A 20.418 20.418 0 0 1 530.189 27.801 C 526.737 27.037 526.56 25.463 526.56 21.2 L 526.56 2.72 L 528.96 2.72 A 35.598 35.598 0 0 1 531.479 2.783 C 534.421 2.998 536.044 3.927 537.16 7.88 L 537.72 7.76 L 537.16 0.28 L 536.84 0.28 L 536.44 0.64 C 535.44 1.56 535.28 1.52 533.96 1.52 Z M 4.96 9.76 L 4.96 22.16 A 555.494 555.494 0 0 1 4.954 22.362 C 4.837 26.32 4.721 27.491 0 28.12 L 0 28.72 L 13.8 28.72 L 13.8 28.12 A 29.713 29.713 0 0 1 11.973 27.807 C 8.928 27.166 8.537 26.221 8.487 23.352 A 70.694 70.694 0 0 1 8.48 22.16 L 8.48 2.4 C 12.738 2.364 16.73 4.314 17.416 8.581 A 8.428 8.428 0 0 1 17.52 9.92 C 17.52 13.226 15.716 15.084 13.035 15.945 A 11.689 11.689 0 0 1 11.24 16.36 L 11.36 16.96 A 22.626 22.626 0 0 0 13.311 16.659 C 17.456 15.826 21.6 13.675 21.6 8.84 A 5.402 5.402 0 0 0 21.549 8.124 C 21.254 5.945 19.414 1.19 9.439 1.427 A 31.907 31.907 0 0 0 9 1.44 L 0.28 1.76 L 0.28 2.36 A 11.413 11.413 0 0 1 2.07 2.572 C 4.795 3.157 4.951 4.911 4.959 8.993 A 356.939 356.939 0 0 1 4.96 9.76 Z M 440.4 19.48 L 440.4 24.08 C 440.364 26.92 440.261 27.573 438.011 27.999 A 18.876 18.876 0 0 1 437.28 28.12 L 437.28 28.72 L 446.6 28.72 L 446.6 28.12 C 443.698 27.689 443.487 27.373 443.48 24.269 A 82.407 82.407 0 0 1 443.48 24.08 L 443.48 16.96 C 443.48 14.871 443.292 11.53 439.922 10.789 A 6.897 6.897 0 0 0 438.44 10.64 C 435.88 10.64 433.68 12.04 431.56 13.28 L 431.56 0.16 L 431.12 0 L 426.52 1.76 L 426.52 2.16 A 15.727 15.727 0 0 1 426.977 2.5 C 428.514 3.694 428.48 4.259 428.48 5.8 L 428.48 24.08 C 428.444 26.92 428.341 27.573 426.091 27.999 A 18.876 18.876 0 0 1 425.36 28.12 L 425.36 28.72 L 434.68 28.72 L 434.68 28.12 C 431.778 27.689 431.567 27.373 431.56 24.269 A 82.407 82.407 0 0 1 431.56 24.08 L 431.56 14.08 A 15.263 15.263 0 0 1 432.299 13.635 C 433.155 13.157 433.982 12.841 435.001 12.748 A 7.071 7.071 0 0 1 435.64 12.72 C 440.406 12.72 440.403 16.497 440.4 19.281 A 202.306 202.306 0 0 0 440.4 19.48 Z M 145.68 20.36 L 144.96 20.36 L 146.12 27.16 A 13.15 13.15 0 0 0 151.779 29.125 A 12.881 12.881 0 0 0 153.16 29.2 A 12.172 12.172 0 0 0 154.441 29.132 C 157.177 28.842 159.913 27.63 161.499 25.536 A 6.777 6.777 0 0 0 162.88 21.36 A 6.459 6.459 0 0 0 162.211 18.42 C 160.4 14.795 155.337 13.374 152.421 10.843 A 5.44 5.44 0 0 1 150.28 6.6 C 150.28 3.96 152.4 2.2 154.96 2.2 A 5.617 5.617 0 0 1 156.965 2.535 C 158.541 3.132 159.408 4.47 159.963 6.074 A 18.812 18.812 0 0 1 160.6 8.56 L 161.24 8.56 L 161.56 2.56 C 159.8 1.6 157.76 1 155.72 1 A 9.57 9.57 0 0 0 154.792 1.046 C 150.796 1.435 146.8 4.297 146.8 8.64 C 146.8 16.64 159.04 16 159.04 23.12 A 5.082 5.082 0 0 1 158.554 25.366 C 157.886 26.738 156.581 27.607 154.977 27.895 A 6.905 6.905 0 0 1 153.76 28 A 7.34 7.34 0 0 1 147.847 24.919 A 12.783 12.783 0 0 1 145.68 20.36 Z M 288.56 28.12 L 288.56 28.72 L 297.88 28.72 L 297.88 28.12 C 294.978 27.689 294.767 27.373 294.76 24.269 A 82.407 82.407 0 0 1 294.76 24.08 L 294.76 14.44 A 10.593 10.593 0 0 1 295.3 13.979 C 296.401 13.106 297.428 12.72 298.84 12.72 C 303.606 12.72 303.603 16.497 303.6 19.281 A 202.306 202.306 0 0 0 303.6 19.48 L 303.6 24.08 C 303.564 26.92 303.461 27.573 301.211 27.999 A 18.876 18.876 0 0 1 300.48 28.12 L 300.48 28.72 L 309.8 28.72 L 309.8 28.12 C 306.898 27.689 306.687 27.373 306.68 24.269 A 82.407 82.407 0 0 1 306.68 24.08 L 306.68 16.96 C 306.68 14.871 306.492 11.53 303.122 10.789 A 6.897 6.897 0 0 0 301.64 10.64 C 299.08 10.64 296.88 12.04 294.6 13.72 L 294.92 10.8 L 294.48 10.64 L 289.72 12.4 L 289.72 12.8 A 15.727 15.727 0 0 1 290.177 13.14 C 291.714 14.334 291.68 14.899 291.68 16.44 L 291.68 24.08 C 291.644 26.92 291.541 27.573 289.291 27.999 A 18.876 18.876 0 0 1 288.56 28.12 Z M 328.56 28.12 L 328.56 28.72 L 337.88 28.72 L 337.88 28.12 C 334.978 27.689 334.767 27.373 334.76 24.269 A 82.407 82.407 0 0 1 334.76 24.08 L 334.76 14.44 A 10.593 10.593 0 0 1 335.3 13.979 C 336.401 13.106 337.428 12.72 338.84 12.72 C 343.606 12.72 343.603 16.497 343.6 19.281 A 202.306 202.306 0 0 0 343.6 19.48 L 343.6 24.08 C 343.564 26.92 343.461 27.573 341.211 27.999 A 18.876 18.876 0 0 1 340.48 28.12 L 340.48 28.72 L 349.8 28.72 L 349.8 28.12 C 346.898 27.689 346.687 27.373 346.68 24.269 A 82.407 82.407 0 0 1 346.68 24.08 L 346.68 16.96 C 346.68 14.871 346.492 11.53 343.122 10.789 A 6.897 6.897 0 0 0 341.64 10.64 C 339.08 10.64 336.88 12.04 334.6 13.72 L 334.92 10.8 L 334.48 10.64 L 329.72 12.4 L 329.72 12.8 A 15.727 15.727 0 0 1 330.177 13.14 C 331.714 14.334 331.68 14.899 331.68 16.44 L 331.68 24.08 C 331.644 26.92 331.541 27.573 329.291 27.999 A 18.876 18.876 0 0 1 328.56 28.12 Z M 458.16 28.12 L 458.16 28.72 L 467.48 28.72 L 467.48 28.12 C 464.578 27.689 464.367 27.373 464.36 24.269 A 82.407 82.407 0 0 1 464.36 24.08 L 464.36 14.44 A 10.593 10.593 0 0 1 464.9 13.979 C 466.001 13.106 467.028 12.72 468.44 12.72 C 473.206 12.72 473.203 16.497 473.2 19.281 A 202.306 202.306 0 0 0 473.2 19.48 L 473.2 24.08 C 473.164 26.92 473.061 27.573 470.811 27.999 A 18.876 18.876 0 0 1 470.08 28.12 L 470.08 28.72 L 479.4 28.72 L 479.4 28.12 C 476.498 27.689 476.287 27.373 476.28 24.269 A 82.407 82.407 0 0 1 476.28 24.08 L 476.28 16.96 C 476.28 14.871 476.092 11.53 472.722 10.789 A 6.897 6.897 0 0 0 471.24 10.64 C 468.68 10.64 466.48 12.04 464.2 13.72 L 464.52 10.8 L 464.08 10.64 L 459.32 12.4 L 459.32 12.8 A 15.727 15.727 0 0 1 459.777 13.14 C 461.314 14.334 461.28 14.899 461.28 16.44 L 461.28 24.08 C 461.244 26.92 461.141 27.573 458.891 27.999 A 18.876 18.876 0 0 1 458.16 28.12 Z M 554.8 28.12 L 554.8 28.72 L 564.12 28.72 L 564.12 28.12 C 561.218 27.689 561.007 27.373 561 24.269 A 82.407 82.407 0 0 1 561 24.08 L 561 14.44 A 10.593 10.593 0 0 1 561.54 13.979 C 562.641 13.106 563.668 12.72 565.08 12.72 C 569.846 12.72 569.843 16.497 569.84 19.281 A 202.306 202.306 0 0 0 569.84 19.48 L 569.84 24.08 C 569.804 26.92 569.701 27.573 567.451 27.999 A 18.876 18.876 0 0 1 566.72 28.12 L 566.72 28.72 L 576.04 28.72 L 576.04 28.12 C 573.138 27.689 572.927 27.373 572.92 24.269 A 82.407 82.407 0 0 1 572.92 24.08 L 572.92 16.96 C 572.92 14.871 572.732 11.53 569.362 10.789 A 6.897 6.897 0 0 0 567.88 10.64 C 565.32 10.64 563.12 12.04 560.84 13.72 L 561.16 10.8 L 560.72 10.64 L 555.96 12.4 L 555.96 12.8 A 15.727 15.727 0 0 1 556.417 13.14 C 557.954 14.334 557.92 14.899 557.92 16.44 L 557.92 24.08 C 557.884 26.92 557.781 27.573 555.531 27.999 A 18.876 18.876 0 0 1 554.8 28.12 Z M 232.48 28.04 L 232.48 27.44 A 15.136 15.136 0 0 1 231.266 27.147 C 228.816 26.429 229 25.402 229 22.32 L 229 16.64 A 9.071 9.071 0 0 0 228.505 13.472 C 227.998 12.13 227.059 11.121 225.49 10.773 A 5.94 5.94 0 0 0 224.2 10.64 C 221.238 10.64 217.306 14.118 216.653 15.539 A 0.862 0.862 0 0 0 216.56 15.88 C 216.56 16.303 217.115 16.282 217.442 16.28 A 5.644 5.644 0 0 1 217.48 16.28 L 219.48 16.16 C 219.48 13.96 219.2 12.64 221.96 12.64 A 5.508 5.508 0 0 1 223.605 12.859 C 225.508 13.455 226.176 15.305 225.92 18.8 L 217.08 22.8 A 7.362 7.362 0 0 0 216.916 23.571 C 216.865 23.898 216.84 24.223 216.84 24.56 A 5.114 5.114 0 0 0 217.786 27.62 C 218.392 28.429 219.278 28.987 220.411 29.099 A 4.342 4.342 0 0 0 220.84 29.12 C 222.88 29.12 224.64 27.84 225.92 26.4 A 4.708 4.708 0 0 0 226.181 27.502 C 226.448 28.189 226.905 28.655 227.66 28.836 A 3.349 3.349 0 0 0 228.44 28.92 C 229.64 28.92 230.96 28.48 232.48 28.04 Z M 327.68 28.04 L 327.68 27.44 A 15.136 15.136 0 0 1 326.466 27.147 C 324.016 26.429 324.2 25.402 324.2 22.32 L 324.2 16.64 A 9.071 9.071 0 0 0 323.705 13.472 C 323.198 12.13 322.259 11.121 320.69 10.773 A 5.94 5.94 0 0 0 319.4 10.64 C 316.438 10.64 312.506 14.118 311.853 15.539 A 0.862 0.862 0 0 0 311.76 15.88 C 311.76 16.303 312.315 16.282 312.642 16.28 A 5.644 5.644 0 0 1 312.68 16.28 L 314.68 16.16 C 314.68 13.96 314.4 12.64 317.16 12.64 A 5.508 5.508 0 0 1 318.805 12.859 C 320.708 13.455 321.376 15.305 321.12 18.8 L 312.28 22.8 A 7.362 7.362 0 0 0 312.116 23.571 C 312.065 23.898 312.04 24.223 312.04 24.56 A 5.114 5.114 0 0 0 312.986 27.62 C 313.592 28.429 314.478 28.987 315.611 29.099 A 4.342 4.342 0 0 0 316.04 29.12 C 318.08 29.12 319.84 27.84 321.12 26.4 A 4.708 4.708 0 0 0 321.381 27.502 C 321.648 28.189 322.105 28.655 322.86 28.836 A 3.349 3.349 0 0 0 323.64 28.92 C 324.84 28.92 326.16 28.48 327.68 28.04 Z M 553.92 28.04 L 553.92 27.44 A 15.136 15.136 0 0 1 552.706 27.147 C 550.256 26.429 550.44 25.402 550.44 22.32 L 550.44 16.64 A 9.071 9.071 0 0 0 549.945 13.472 C 549.438 12.13 548.499 11.121 546.93 10.773 A 5.94 5.94 0 0 0 545.64 10.64 C 542.678 10.64 538.746 14.118 538.093 15.539 A 0.862 0.862 0 0 0 538 15.88 C 538 16.303 538.555 16.282 538.882 16.28 A 5.644 5.644 0 0 1 538.92 16.28 L 540.92 16.16 C 540.92 13.96 540.64 12.64 543.4 12.64 A 5.508 5.508 0 0 1 545.045 12.859 C 546.948 13.455 547.616 15.305 547.36 18.8 L 538.52 22.8 A 7.362 7.362 0 0 0 538.356 23.571 C 538.305 23.898 538.28 24.223 538.28 24.56 A 5.114 5.114 0 0 0 539.226 27.62 C 539.832 28.429 540.718 28.987 541.851 29.099 A 4.342 4.342 0 0 0 542.28 29.12 C 544.32 29.12 546.08 27.84 547.36 26.4 A 4.708 4.708 0 0 0 547.621 27.502 C 547.888 28.189 548.345 28.655 549.1 28.836 A 3.349 3.349 0 0 0 549.88 28.92 C 551.08 28.92 552.4 28.48 553.92 28.04 Z M 42.52 16.52 L 54.12 16.52 A 6.811 6.811 0 0 0 53.379 13.624 C 52.386 11.742 50.463 10.64 47.96 10.64 C 42.56 10.64 38.96 15.08 38.96 20.24 C 38.96 25.007 42.352 29.063 47.257 29.119 A 9.014 9.014 0 0 0 47.36 29.12 C 50.48 29.12 53.2 27.08 54.72 24.48 L 54.12 24.04 A 6.949 6.949 0 0 1 52.452 25.678 C 51.731 26.161 50.913 26.457 49.95 26.538 A 6.588 6.588 0 0 1 49.4 26.56 A 6.887 6.887 0 0 1 45.502 25.405 C 43.34 23.948 42.146 21.296 42.36 18.52 L 42.52 16.52 Z M 104.92 16.52 L 116.52 16.52 A 6.811 6.811 0 0 0 115.779 13.624 C 114.786 11.742 112.863 10.64 110.36 10.64 C 104.96 10.64 101.36 15.08 101.36 20.24 C 101.36 25.007 104.752 29.063 109.657 29.119 A 9.014 9.014 0 0 0 109.76 29.12 C 112.88 29.12 115.6 27.08 117.12 24.48 L 116.52 24.04 A 6.949 6.949 0 0 1 114.852 25.678 C 114.131 26.161 113.313 26.457 112.35 26.538 A 6.588 6.588 0 0 1 111.8 26.56 A 6.887 6.887 0 0 1 107.902 25.405 C 105.74 23.948 104.546 21.296 104.76 18.52 L 104.92 16.52 Z M 372.92 16.52 L 384.52 16.52 A 6.811 6.811 0 0 0 383.779 13.624 C 382.786 11.742 380.863 10.64 378.36 10.64 C 372.96 10.64 369.36 15.08 369.36 20.24 C 369.36 25.007 372.752 29.063 377.657 29.119 A 9.014 9.014 0 0 0 377.76 29.12 C 380.88 29.12 383.6 27.08 385.12 24.48 L 384.52 24.04 A 6.949 6.949 0 0 1 382.852 25.678 C 382.131 26.161 381.313 26.457 380.35 26.538 A 6.588 6.588 0 0 1 379.8 26.56 A 6.887 6.887 0 0 1 375.902 25.405 C 373.74 23.948 372.546 21.296 372.76 18.52 L 372.92 16.52 Z M 203.84 25.8 L 203.36 25.2 A 14.525 14.525 0 0 1 202.66 25.681 C 201.608 26.356 200.585 26.76 199.24 26.76 A 7.28 7.28 0 0 1 192.745 22.659 C 192.183 21.557 191.833 20.259 191.77 18.799 A 11.119 11.119 0 0 1 191.76 18.32 A 8.214 8.214 0 0 1 191.857 17.082 C 192.106 15.458 192.836 13.736 194.074 12.737 A 3.751 3.751 0 0 1 196.48 11.88 C 198.48 11.88 199.92 14.48 201.32 14.48 C 202.24 14.48 203.2 13.52 203.2 12.64 A 1.525 1.525 0 0 0 202.323 11.285 C 201.419 10.77 200.02 10.66 199.131 10.643 A 14.843 14.843 0 0 0 198.84 10.64 C 193.44 10.64 188.56 14.76 188.56 20.36 A 8.951 8.951 0 0 0 191.967 27.522 A 7.9 7.9 0 0 0 196.8 29.12 C 199.56 29.12 202.04 27.84 203.84 25.8 Z M 367.04 25.8 L 366.56 25.2 A 14.525 14.525 0 0 1 365.86 25.681 C 364.808 26.356 363.785 26.76 362.44 26.76 A 7.28 7.28 0 0 1 355.945 22.659 C 355.383 21.557 355.033 20.259 354.97 18.799 A 11.119 11.119 0 0 1 354.96 18.32 A 8.214 8.214 0 0 1 355.057 17.082 C 355.306 15.458 356.036 13.736 357.274 12.737 A 3.751 3.751 0 0 1 359.68 11.88 C 361.68 11.88 363.12 14.48 364.52 14.48 C 365.44 14.48 366.4 13.52 366.4 12.64 A 1.525 1.525 0 0 0 365.523 11.285 C 364.619 10.77 363.22 10.66 362.331 10.643 A 14.843 14.843 0 0 0 362.04 10.64 C 356.64 10.64 351.76 14.76 351.76 20.36 A 8.951 8.951 0 0 0 355.167 27.522 A 7.9 7.9 0 0 0 360 29.12 C 362.76 29.12 365.24 27.84 367.04 25.8 Z M 29.44 15.52 L 29.36 15.52 L 29.52 10.8 L 29.08 10.64 L 24.32 12.4 L 24.32 12.8 A 15.727 15.727 0 0 1 24.777 13.14 C 26.314 14.334 26.28 14.899 26.28 16.44 L 26.28 24.08 A 35.698 35.698 0 0 1 26.251 25.247 C 26.164 27.118 25.816 27.639 24.036 28 A 16.623 16.623 0 0 1 23.36 28.12 L 23.36 28.72 L 33.36 28.72 L 33.36 28.12 C 29.52 27.68 29.36 27.36 29.36 24.08 L 29.36 20.04 C 29.36 19.44 29.08 14 32.48 13.68 A 1.258 1.258 0 0 1 32.594 13.675 C 33.445 13.675 34.389 14.502 35.04 15 A 4.302 4.302 0 0 0 35.342 14.84 C 36.195 14.345 37.12 13.444 37.12 12.48 A 1.748 1.748 0 0 0 36.773 11.41 C 36.48 11.022 36.025 10.763 35.497 10.674 A 2.508 2.508 0 0 0 35.08 10.64 A 4.726 4.726 0 0 0 32.142 11.841 C 31.046 12.737 30.151 13.999 29.609 15.14 A 8.388 8.388 0 0 0 29.44 15.52 Z M 125.04 15.52 L 124.96 15.52 L 125.12 10.8 L 124.68 10.64 L 119.92 12.4 L 119.92 12.8 A 15.727 15.727 0 0 1 120.377 13.14 C 121.914 14.334 121.88 14.899 121.88 16.44 L 121.88 24.08 A 35.698 35.698 0 0 1 121.851 25.247 C 121.764 27.118 121.416 27.639 119.636 28 A 16.623 16.623 0 0 1 118.96 28.12 L 118.96 28.72 L 128.96 28.72 L 128.96 28.12 C 125.12 27.68 124.96 27.36 124.96 24.08 L 124.96 20.04 C 124.96 19.44 124.68 14 128.08 13.68 A 1.258 1.258 0 0 1 128.194 13.675 C 129.045 13.675 129.989 14.502 130.64 15 A 4.302 4.302 0 0 0 130.942 14.84 C 131.795 14.345 132.72 13.444 132.72 12.48 A 1.748 1.748 0 0 0 132.373 11.41 C 132.08 11.022 131.625 10.763 131.097 10.674 A 2.508 2.508 0 0 0 130.68 10.64 A 4.726 4.726 0 0 0 127.742 11.841 C 126.646 12.737 125.751 13.999 125.209 15.14 A 8.388 8.388 0 0 0 125.04 15.52 Z M 242.48 28.72 L 242.48 28.12 C 239.578 27.689 239.367 27.373 239.36 24.269 A 82.407 82.407 0 0 1 239.36 24.08 L 239.36 0.16 L 238.92 0 L 234.32 1.76 L 234.32 2.16 A 15.727 15.727 0 0 1 234.777 2.5 C 236.314 3.694 236.28 4.259 236.28 5.8 L 236.28 24.08 C 236.244 26.92 236.141 27.573 233.891 27.999 A 18.876 18.876 0 0 1 233.16 28.12 L 233.16 28.72 L 242.48 28.72 Z M 486.56 0.16 L 486.12 0 L 481.52 1.76 L 481.52 2.16 A 15.727 15.727 0 0 1 481.977 2.5 C 483.514 3.694 483.48 4.259 483.48 5.8 L 483.48 24.08 C 483.444 26.92 483.341 27.573 481.091 27.999 A 18.876 18.876 0 0 1 480.36 28.12 L 480.36 28.72 L 489.68 28.72 L 489.68 28.12 C 486.778 27.689 486.567 27.373 486.56 24.269 A 82.407 82.407 0 0 1 486.56 24.08 L 486.56 0.16 Z M 583.2 0.16 L 582.76 0 L 578.16 1.76 L 578.16 2.16 A 15.727 15.727 0 0 1 578.617 2.5 C 580.154 3.694 580.12 4.259 580.12 5.8 L 580.12 24.08 C 580.084 26.92 579.981 27.573 577.731 27.999 A 18.876 18.876 0 0 1 577 28.12 L 577 28.72 L 586.32 28.72 L 586.32 28.12 C 583.418 27.689 583.207 27.373 583.2 24.269 A 82.407 82.407 0 0 1 583.2 24.08 L 583.2 0.16 Z M 489.52 11.4 L 489.52 12 C 492.442 12.926 491.396 13.853 488.278 17.521 A 111.99 111.99 0 0 0 487.04 19 A 38.638 38.638 0 0 1 487.067 19.039 C 488.983 21.809 492.66 27.877 496.544 28.863 A 4.283 4.283 0 0 0 497.6 29 C 498.52 29 499.4 28.84 500.32 28.72 L 500.32 28.28 A 15.96 15.96 0 0 1 495.398 24.393 C 495.301 24.291 495.205 24.188 495.109 24.086 A 160.049 160.049 0 0 1 494.88 23.84 L 489.52 17.72 A 103.603 103.603 0 0 1 490.592 16.51 C 492.685 14.192 494.373 12.691 497.137 11.83 A 15.858 15.858 0 0 1 498.88 11.4 L 498.88 10.8 L 489.52 11.4 Z M 586.16 11.4 L 586.16 12 C 589.082 12.926 588.036 13.853 584.918 17.521 A 111.99 111.99 0 0 0 583.68 19 A 38.638 38.638 0 0 1 583.707 19.039 C 585.623 21.809 589.3 27.877 593.184 28.863 A 4.283 4.283 0 0 0 594.24 29 C 595.16 29 596.04 28.84 596.96 28.72 L 596.96 28.28 A 15.96 15.96 0 0 1 592.038 24.393 C 591.941 24.291 591.845 24.188 591.749 24.086 A 160.049 160.049 0 0 1 591.52 23.84 L 586.16 17.72 A 103.603 103.603 0 0 1 587.232 16.51 C 589.325 14.192 591.013 12.691 593.777 11.83 A 15.858 15.858 0 0 1 595.52 11.4 L 595.52 10.8 L 586.16 11.4 Z M 185.84 19.8 A 9.141 9.141 0 0 0 184.606 15.079 C 182.936 12.266 179.738 10.64 176.04 10.64 A 10.233 10.233 0 0 0 168.841 13.465 C 167.187 15.089 166.16 17.329 166.16 19.96 A 9.197 9.197 0 0 0 167.324 24.577 C 168.666 26.924 171.061 28.456 173.938 28.948 A 12.235 12.235 0 0 0 176 29.12 A 9.998 9.998 0 0 0 184.235 24.976 A 8.966 8.966 0 0 0 185.84 19.8 Z M 99.28 28.72 L 99.28 28.12 C 96.378 27.689 96.167 27.373 96.16 24.269 A 82.407 82.407 0 0 1 96.16 24.08 L 96.16 10.8 L 95.72 10.64 L 90.64 12.4 L 90.64 12.8 C 93.081 14.217 93.081 14.744 93.08 16.362 A 207.708 207.708 0 0 0 93.08 16.44 L 93.08 24.08 C 93.044 26.92 92.941 27.573 90.691 27.999 A 18.876 18.876 0 0 1 89.96 28.12 L 89.96 28.72 L 99.28 28.72 Z M 214.48 28.72 L 214.48 28.12 C 211.578 27.689 211.367 27.373 211.36 24.269 A 82.407 82.407 0 0 1 211.36 24.08 L 211.36 10.8 L 210.92 10.64 L 205.84 12.4 L 205.84 12.8 C 208.281 14.217 208.281 14.744 208.28 16.362 A 207.708 207.708 0 0 0 208.28 16.44 L 208.28 24.08 C 208.244 26.92 208.141 27.573 205.891 27.999 A 18.876 18.876 0 0 1 205.16 28.12 L 205.16 28.72 L 214.48 28.72 Z M 287.28 28.72 L 287.28 28.12 C 284.378 27.689 284.167 27.373 284.16 24.269 A 82.407 82.407 0 0 1 284.16 24.08 L 284.16 10.8 L 283.72 10.64 L 278.64 12.4 L 278.64 12.8 C 281.081 14.217 281.081 14.744 281.08 16.362 A 207.708 207.708 0 0 0 281.08 16.44 L 281.08 24.08 C 281.044 26.92 280.941 27.573 278.691 27.999 A 18.876 18.876 0 0 1 277.96 28.12 L 277.96 28.72 L 287.28 28.72 Z M 456.88 28.72 L 456.88 28.12 C 453.978 27.689 453.767 27.373 453.76 24.269 A 82.407 82.407 0 0 1 453.76 24.08 L 453.76 10.8 L 453.32 10.64 L 448.24 12.4 L 448.24 12.8 C 450.681 14.217 450.681 14.744 450.68 16.362 A 207.708 207.708 0 0 0 450.68 16.44 L 450.68 24.08 C 450.644 26.92 450.541 27.573 448.291 27.999 A 18.876 18.876 0 0 1 447.56 28.12 L 447.56 28.72 L 456.88 28.72 Z M 181.995 21.818 A 10.872 10.872 0 0 0 182.12 20.2 A 11.642 11.642 0 0 0 182.112 19.762 C 181.975 16.136 180.149 11.52 175.96 11.52 A 6.019 6.019 0 0 0 175.541 11.534 C 172.155 11.77 170.454 14.87 170.004 17.971 A 11.949 11.949 0 0 0 169.88 19.68 C 169.88 23.4 171.96 28.24 176.28 28.24 A 4.702 4.702 0 0 0 179.445 27.05 C 180.872 25.808 181.7 23.772 181.995 21.818 Z M 225.92 19.6 L 225.92 25.64 A 4.705 4.705 0 0 1 223.495 27.079 A 2.619 2.619 0 0 1 223.04 27.12 A 2.78 2.78 0 0 1 221.746 26.823 C 220.946 26.408 220.458 25.602 220.298 24.663 A 4.187 4.187 0 0 1 220.24 23.96 C 220.24 23.4 220.36 22.88 220.52 22.36 L 225.92 19.6 Z M 321.12 19.6 L 321.12 25.64 A 4.705 4.705 0 0 1 318.695 27.079 A 2.619 2.619 0 0 1 318.24 27.12 A 2.78 2.78 0 0 1 316.946 26.823 C 316.146 26.408 315.658 25.602 315.498 24.663 A 4.187 4.187 0 0 1 315.44 23.96 C 315.44 23.4 315.56 22.88 315.72 22.36 L 321.12 19.6 Z M 547.36 19.6 L 547.36 25.64 A 4.705 4.705 0 0 1 544.935 27.079 A 2.619 2.619 0 0 1 544.48 27.12 A 2.78 2.78 0 0 1 543.186 26.823 C 542.386 26.408 541.898 25.602 541.738 24.663 A 4.187 4.187 0 0 1 541.68 23.96 C 541.68 23.4 541.8 22.88 541.96 22.36 L 547.36 19.6 Z M 50.32 15.44 L 42.64 15.76 C 42.957 14.317 43.753 12.75 45.028 11.988 A 3.251 3.251 0 0 1 46.72 11.52 A 3.1 3.1 0 0 1 49.268 12.906 C 49.807 13.639 50.149 14.567 50.32 15.44 Z M 112.72 15.44 L 105.04 15.76 C 105.357 14.317 106.153 12.75 107.428 11.988 A 3.251 3.251 0 0 1 109.12 11.52 A 3.1 3.1 0 0 1 111.668 12.906 C 112.207 13.639 112.549 14.567 112.72 15.44 Z M 380.72 15.44 L 373.04 15.76 C 373.357 14.317 374.153 12.75 375.428 11.988 A 3.251 3.251 0 0 1 377.12 11.52 A 3.1 3.1 0 0 1 379.668 12.906 C 380.207 13.639 380.549 14.567 380.72 15.44 Z M 94.44 1.04 C 93.32 1.04 92.4 1.96 92.4 3.08 C 92.4 4.2 93.32 5.12 94.44 5.12 C 95.56 5.12 96.48 4.2 96.48 3.08 C 96.48 1.96 95.56 1.04 94.44 1.04 Z M 209.64 1.04 C 208.52 1.04 207.6 1.96 207.6 3.08 C 207.6 4.2 208.52 5.12 209.64 5.12 C 210.76 5.12 211.68 4.2 211.68 3.08 C 211.68 1.96 210.76 1.04 209.64 1.04 Z M 282.44 1.04 C 281.32 1.04 280.4 1.96 280.4 3.08 C 280.4 4.2 281.32 5.12 282.44 5.12 C 283.56 5.12 284.48 4.2 284.48 3.08 C 284.48 1.96 283.56 1.04 282.44 1.04 Z M 452.04 1.04 C 450.92 1.04 450 1.96 450 3.08 C 450 4.2 450.92 5.12 452.04 5.12 C 453.16 5.12 454.08 4.2 454.08 3.08 C 454.08 1.96 453.16 1.04 452.04 1.04 Z"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </div>
            {/* <div
            className="lKv-subTitle-item -lm03"
            data-kv-subtitle-item=""
            style={{ overflow: "hidden" }}
          >
            <img
              className="lKv-subTitle-item-image3"
              src="https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub03.svg"
              width="166"
              height="13"
              alt=""
              loading="lazy"
              srcSet="
                    https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub03.svg 1x,
                    https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub03.svg 2x"
            />
          </div> */}
          </div>
        )}
        <div
          style={{
            maxWidth: "100%",
            position: "relative",
            paddingBottom: "56.25%",
            height: window.innerWidth < 768 ? "100vh" : "100vh",
          }}
        >
          <video
            id="homeVideo"
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
            style={{
              objectFit: "fill",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* video */}

      <div className="lVision" id="vision-section" data-vision="">
        <div className="lVision-contents">
          <div
            className="lVision-section -first -flex "
            data-vision-section="1"
          >
            <div className="lVision-section-writing -first">
              <div
                className="cFlatText lVision-section-writing-text -mb"
                data-flat-text=""
                style={{
                  padding: "0px 8.425px",
                  transform: "scaleX(1.05)",
                  fontFamily: "sans-serif",
                  color: "#707070",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: homeData.mainAbout,
                  }}
                />
                <br />
              </div>
              <div
                className="cFlatText lVision-section-writing-text"
                data-flat-text=""
                style={{
                  padding: "0px 8.425px",
                  transform: "scaleX(1.05)",
                  color: "#707070",
                  fontFamily: "sans-serif",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: homeData.mainEstablish,
                  }}
                />
              </div>
            </div>
            <div
              className="lVision-section-image -first -view block"
              data-play-sprite=""
              data-play-sprite-step="25"
              data-play-sprite-duration="0.8"
              style={{
                backgroundImage: `url(${headOpenBGImage})`,
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,35.8191,0,1)",
              }}
              data-scroll-speed="0.7"
              data-scroll=""
            ></div>
            <div
              className="lVision-illust -first -view"
              data-scroll=""
              data-illust="1"
              data-scroll-speed="-0.5"
              style={{
                transform:
                  "rotate(10deg) matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,-55.1816,0,1)",
              }}
            >
              <picture>
                <source
                  srcSet="
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/sp/1x/b-vision_illust09.png    1x,
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/sp/2x/b-vision_illust09@2x.png 2x
                    "
                  media="(max-width: 767px)"
                />
                <img
                  src="https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust09.png"
                  width="91"
                  height="100"
                  alt=""
                  loading="lazy"
                  srcSet="
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust09.png    1x,
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/2x/b-vision_illust09@2x.png 2x
                    "
                  style={{
                    transform: "translate3d(0px, 0px, 0px) rotate(-13.2308deg)",
                  }}
                />
              </picture>
            </div>
            <div
              className="lVision-illust -second -view"
              data-scroll=""
              data-illust="2"
              data-scroll-speed="-0.3"
              style={{
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
              }}
            >
              <img
                src="https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust05.png"
                width="73"
                height="74"
                alt=""
                loading="lazy"
                srcSet="
                    https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust05.png    1x,
                    https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/2x/b-vision_illust05@2x.png 2x
                    "
                style={{
                  transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
                }}
              />
            </div>
            <div
              className="lVision-illust -third -view"
              data-scroll=""
              data-illust="3"
              data-scroll-speed="-0.5"
              style={{
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
              }}
            >
              <picture>
                <source
                  srcSet="
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/sp/1x/b-vision_illust03.png
                    "
                  media="(max-width: 767px)"
                />
                <img
                  src="https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust03.png"
                  width="138"
                  height="113"
                  alt=""
                  loading="lazy"
                  srcSet="
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust03.png    1x,
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/2x/b-vision_illust03@2x.png 2x
                    "
                  style={{
                    transform: "translate3d(0px, 0px, 0px) rotate(13.2308deg)",
                  }}
                />
              </picture>
            </div>
          </div>

          <div className="lVision-section -second" data-vision-section="2">
            <div className="lVision-section-writing">
              <div
                className="cFlatText lVision-section-writing-text -mb -isTracking-short"
                data-flat-text=""
                style={{ padding: "0px 14.25px", transform: "scaleX(1.05)" }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: homeData.mainResearchTitle,
                  }}
                />
              </div>
              <div
                className="cFlatText lVision-section-writing-text"
                data-flat-text=""
                style={{ padding: "0px 14.25px", transform: "scaleX(1.05)" }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: homeData.mainDescription,
                  }}
                />
              </div>
            </div>

            <div
              className="lVision-illust -forth -view"
              data-scroll=""
              data-illust="4"
              data-scroll-speed="-0.3"
              style={{
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
              }}
            >
              <img
                src="https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust04.png"
                width="74"
                height="92"
                alt=""
                loading="lazy"
                srcSet="
                    https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust04.png    1x,
                    https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/2x/b-vision_illust04@2x.png 2x
                    "
                style={{
                  transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
                }}
              />
            </div>
            <div
              className="lVision-illust -fifth -view"
              data-scroll=""
              data-illust="5"
              data-scroll-speed="-0.3"
              style={{
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,-75.0279,0,1)",
              }}
            >
              <picture className="hidden">
                <source
                  srcSet="
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/sp/1x/b-vision_illust06.png    1x,
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/sp/2x/b-vision_illust06@2x.png 2x
                    "
                  media="(max-width: 767px)"
                />
                <img
                  src="https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust06.png"
                  width="71"
                  height="75"
                  alt=""
                  loading="lazy"
                  srcSet="
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust06.png    1x,
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/2x/b-vision_illust06@2x.png 2x
                    "
                  style={{
                    transform: "translate3d(0px, 0px, 0px) rotate(46.3077deg)",
                  }}
                />
              </picture>
            </div>
            <div
              className="lVision-node -left -view"
              data-scroll=""
              data-scroll-speed="0.7"
              style={{
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
              }}
            >
              <img
                src="https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust10.png"
                width="934"
                height="695"
                alt=""
                loading="lazy"
                srcSet="
                    https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust10.png    1x,
                    https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/2x/b-vision_illust10@2x.png 2x
                    "
              />
            </div>
            <div className="lVision-node -right">
              <img
                src="https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust11.png"
                width="124"
                height="276"
                alt=""
                loading="lazy"
                srcSet="
                    https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust11.png    1x,
                    https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/2x/b-vision_illust11@2x.png 2x
                    "
              />
            </div>
          </div>
          <div className="lVision-section -third" data-vision-section="3">
            <div className="lVision-section-writing -third">
              <div
                className="cFlatText lVision-section-writing-text"
                data-flat-text=""
                style={{ padding: "0px 12.45px", transform: "scaleX(1.05)" }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: homeData.mainResearchDescription,
                  }}
                />
              </div>
            </div>
            <div
              className="lVision-section-image -third -view"
              data-play-sprite=""
              data-play-sprite-step="24"
              data-play-sprite-duration="0.8"
              style={{
                backgroundImage: `url(${handOpenBGImage})`,
                backgroundSize: "cover",
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,12.3016,0,1)",
              }}
              data-scroll=""
              data-scroll-speed="0.7"
            ></div>
            <div
              className="lVision-illust -sixth -view"
              data-scroll=""
              data-scroll-speed="-0.5"
              data-illust="6"
              style={{
                transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,-2.02998,,0,1)",
              }}
            >
              <picture>
                <source
                  srcSet="
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/sp/1x/b-vision_illust07.png    1x,
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/sp/2x/b-vision_illust07@2x.png 2x
                    "
                  media="(max-width: 767px)"
                />
                <img
                  src="https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust07.png"
                  width="68"
                  height="66"
                  alt=""
                  loading="lazy"
                  srcSet="
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/1x/b-vision_illust07.png    1x,
                        https://rara.ritsumei.ac.jp/assets/img/index/vision/pc/2x/b-vision_illust07@2x.png 2x
                    "
                  style={{
                    transform: "translate3d(0px, 0px, 0px) rotate(46.3077deg)",
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      {homeData && <GuideLines data={homeData} />}
      {/* <FellowsMobile /> */}
      {window.innerWidth < 767 && homeData && (
        <FellowsMobile homeData={homeData} />
      )}
      {window.innerWidth > 767 && homeData && <Fellows homeData={homeData} />}
      {homeData && (
        <>
          <Blogs homeData={homeData} />
          <Contact data={homeData} />
          <FooterContainer />
        </>
      )}
    </div>
  );
};

export default index;
