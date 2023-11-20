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
            zIndex: window.innerWidth < 768 ? 0 : "",
          },
          {
            transform:
              window.innerWidth > 768
                ? "scale(0.266,0.266)"
                : "scale(0.266,0.266) translate(-130%,-20px)",
            top: window.innerWidth > 768 ? "45%" : "2.9pc",
            left: "0rem !important",
            margin: "auto",
            zIndex: window.innerWidth < 768 ? 1 : "",
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
            top: "45%",
            left: "0rem",
            margin: "auto",
            zIndex: window.innerWidth < 768 ? 1 : "",
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
            zIndex: window.innerWidth < 768 ? 0 : "",
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
