import React, { useEffect } from "react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const index = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".custom-container");

    function toggleDivOnScroll1() {
      const animationDuration = 1.5; // Adjust the duration of the animation in seconds
      const animationDelay = 0.5; // Adjust the delay before the animation starts in seconds
      let isActive = false; // Flag to track if animation is active

      ScrollTrigger.create({
        trigger: "#guideline",
        scroller: scrollContainer,
        start: "top +50%", // Adjust the start position based on your preference
        onEnter: () => {
          console.log("ENTERED IN GUIDELINE ANIMATION");
          // When scrolling down, apply the styles to display the div
          gsap.fromTo(
            ".gt1",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1,
              delay: 0,
            }
          );
          gsap.fromTo(
            ".gt2",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1.3,
              delay: 0,
            }
          );
          gsap.fromTo(
            ".gt3",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1.3,
              delay: 0.2,
            }
          );
          gsap.fromTo(
            ".gt4",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1.3,
              delay: 0.3,
            }
          );
          gsap.fromTo(
            ".gt5",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1.3,
              delay: 0.4,
            }
          );
          gsap.fromTo(
            ".gt6",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1.3,
              delay: 0.5,
            }
          );
          gsap.fromTo(
            ".gt7",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1.3,
              delay: 0.6,
            }
          );
          gsap.fromTo(
            ".gt8",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1.3,
              delay: 0.7,
            }
          );
          gsap.fromTo(
            ".gt9",
            {
              transform: "scale(0)",
            },
            {
              transform: "scale(1)",
              duration: 1.3,
              delay: 0.8,
            }
          );
          gsap.fromTo(
            ".cSubTitle-text",
            { transform: "translate(0px, 130%)" },
            {
              transform: "translate(0px, 0%)",
              duration: 1,
            }
          );
        },
      });
    }
    // ScrollTrigger.create({
    //   trigger: "#guideline",
    //   scroller: scrollContainer,
    //   start: "start 20%",
    //   pin: true,
    //   onEnter: (self) => {
    //     const progress = 105 - 105 * self.progress;
    //     gsap.to(".lGuideline-card", {
    //       x: 0,
    //       scrollTrigger: {
    //         trigger: "#guideline",
    //         scroller: scrollContainer,
    //         start: "start 20%",
    //         scrub: true,
    //       },
    //     });
    //   },
    // });

    const guidelineItem = document.querySelector(".guideline_item");
    ScrollTrigger.create({
      trigger: ".guideline_item",
      scroller: scrollContainer,
      start: "start top",
      end: "+=3600",
      scrub: true,
      pin: true,
      pinType: "fixed",
      pinSpacing: false,
      onEnter: () => {
        gsap.to(".lGuideline-card", {
          x: window.innerWidth, // Animate from right to left
        });
        gsap.to(".-card2", {
          x: window.innerWidth, // Animate from right to left
        });
      },
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        // console.log(
        //   "🚀 ~ file: index.jsx:176 ~ useEffect ~ scrollProgress:",
        //   scrollProgress
        // );

        // Calculate the starting point for x position (right of the screen)
        const startingX = window.innerWidth; // Assuming you want the element to start from the right edge of the screen

        // Calculate the distance to animate based on scroll progress
        const xDistance = startingX - scrollProgress * startingX;

        // Use the calculated distance to animate the x position of .lGuideline-card
        gsap.to(".lGuideline-card", {
          x: xDistance, // Animate from right to left
        });

        const minProgressCard1 = 0.76;

        if (scrollProgress >= minProgressCard1) {
          // Animate rotation only when scroll progress is equal or greater than minProgress
          gsap.to(".-card1", {
            rotateY: -cardRotation(scrollProgress, 180, minProgressCard1, 1),
          });
        }

        // Calculate the starting point for x position (right of the screen)
        const startingX2 = window.innerWidth + 1021; // Assuming you want the element to start from the right edge of the screen

        // Calculate the distance to animate based on scroll progress
        const xDistance2 = startingX2 - scrollProgress * startingX2;

        const minProgressCard2 = 0.9;

        gsap.to(".-card2", {
          x: xDistance2, // Animate from right to left
        });
        if (scrollProgress >= minProgressCard2) {
          gsap.to(".-card2", {
            rotateY: -cardRotation(scrollProgress, 180, minProgressCard2, 1),
            duration: 1,
          });
        }

        // 614.4px

        // Calculate the starting point for x position (right of the screen)
        const startingX3 = window.innerWidth + 1021 + 3000; // Assuming you want the element to start from the right edge of the screen

        // Calculate the distance to animate based on scroll progress
        const xDistance3 = startingX3 - scrollProgress * startingX3;
        const minProgressCard3 = 0.96;

        gsap.to(".-card3", {
          x: xDistance3, // Animate from right to left
        });
        if (scrollProgress >= minProgressCard2) {
          gsap.to(".-card3", {
            rotateY: -cardRotation(scrollProgress, 180, minProgressCard3, 1),
            duration: 1,
          });
        }

        // 307.4

        // Calculate the starting point for x position (right of the screen)
        const startingX4 = window.innerWidth + 1021 + 3000 + 4000; // Assuming you want the element to start from the right edge of the screen

        // Calculate the distance to animate based on scroll progress
        const xDistance4 = startingX4 - scrollProgress * startingX4;
        const minProgressCard4 = 0.992;
        gsap.to(".-card4", {
          x: xDistance4, // Animate from right to left
        });
        if (scrollProgress >= minProgressCard2) {
          gsap.to(".-card4", {
            rotateY: -cardRotation(scrollProgress, 180, minProgressCard4, 1),
            duration: 2,
          });
        }
      },
      onEnterBack: () => {
        // console.log("🚀 ~ file: index.jsx:158 ~ useEffect ~ onEnterBack:");

        gsap.to(".lGuideline-text-child", {
          transform: "translate(0px,120%)",
        });
      },
      onLeave: () => {
        const pinSpacer = document.querySelector("#guideline .pin-spacer");
        // console.log("🚀 ~ file: index.jsx:158 ~ useEffect ~ onLeave:");
        // console.log("file PIN SPACER ---------------", pinSpacer);
        guidelineItem.style.height = "700px";
        pinSpacer.style.height = "4400px";

        gsap.to(".lGuideline-text-child", {
          transform: "translate(0px,0%)",
        });
      },
      onLeaveBack: () => {
        // console.log("🚀 ~ file: index.jsx:164 ~ useEffect ~ onLeaveBack:");
      },
    });

    function cardRotation(
      getScrollProgress,
      getRotationRange,
      getMinProgress,
      getMaxProgress
    ) {
      const scrollProgress = getScrollProgress;
      const rotationRange = getRotationRange; // Maximum rotation angle
      const minProgress = getMinProgress;
      const maxProgress = getMaxProgress;

      let cardRotation = 0;

      if (scrollProgress >= minProgress) {
        // Calculate the rotation angle based on progress between minProgress and maxProgress
        const progressInRange =
          (scrollProgress - minProgress) / (maxProgress - minProgress);
        cardRotation = progressInRange * rotationRange;
      }
      return cardRotation;
    }

    // gsap.to(".lGuideline-card", {
    //   x: 0,
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: ".guideline_item",
    //     scroller: scrollContainer,
    //     start: "start top",
    //     end: "+=3600",
    //     scrub: true,
    //     pin: true,
    //     pinType: "fixed",
    //     pinSpacing: false,
    //   },
    // });
    // gsap.to(".-card2", {
    //   x: 0,
    //   duration: 5,
    //   delay: 25000,
    //   scrollTrigger: {
    //     trigger: ".guideline_item",
    //     scroller: scrollContainer,
    //     start: "start center-=45%",
    //     end: "+=3600",
    //     scrub: true,
    //   },
    // });
    // ScrollTrigger.create({
    //   trigger: ".guideline_item",
    //   scroller: scrollContainer,
    //   start: "start top",
    //   end: "+=3600",
    //   scrub: true,
    //   onUpdate: (self) => {
    //     const progress = self.progress;
    //     const xValue = 0; // Set your desired value here

    //     gsap.to(".-card2", { x: xValue * progress });
    //   },
    // });
    // const animateCard = () => {
    //   gsap.to(".-card3", {
    //     x: 0,
    //     duration: 5,
    //     delay: 10,
    //   });
    // };

    // // Create the scroll trigger with a delay when entering
    // ScrollTrigger.create({
    //   trigger: ".guideline_item",
    //   scroller: scrollContainer,
    //   start: "start top",
    //   end: "+=3600",
    //   scrub: true,
    //   onEnter: () => {
    //     setTimeout(animateCard, 10000); // Delay the animation by 1 second (1000 milliseconds) after entering
    //   },
    // });
    // gsap.to(".-card4", {
    //   x: 0,
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: ".guideline_item",
    //     scroller: scrollContainer,
    //     start: "+=5%",
    //     end: "+=3600",
    //     scrub: true,
    //   },
    // });

    // ScrollTrigger.create({
    //   trigger: ".guideline_item",
    //   scroller: scrollContainer,
    //   start: "start top",
    //   end: "+=3600",
    //   pin: true,
    //   scrub: true,
    //   pinType: "fixed",
    // });

    // ScrollTrigger.create(".guideline_item", {
    //   trigger: "",
    // });

    // const cardsWidth = document.querySelector(".lGuideline-card");
    // function getScrollAmount() {
    //   let getCardsWidth = cardsWidth.scrollWidth;
    //   return -(getCardsWidth - window.innerWidth);
    // }
    // console.log(
    //   "🚀 ~ file: index.jsx:134 ~ useEffect ~ cardsWidth.scrollWidth:",
    //   cardsWidth.scrollWidth
    // );
    // console.log(
    //   "🚀 ~ file: index.jsx:134 ~ useEffect ~ window.innerWidth:",
    //   document.documentElement.clientWidth
    // );
    // console.log(
    //   "🚀 ~ file: index.jsx:134 ~ useEffect ~ getCardScrollAmount:",
    //   getScrollAmount()
    // );

    // const tween = gsap.to(".lGuideline-card", {
    //   x: getScrollAmount(),
    //   duration: 5,
    //   ease: "none",
    // });

    // ScrollTrigger.create({
    //   trigger: ".guideline_item",
    //   scroller: scrollContainer,
    //   start: "top 20%",

    //   pin: true,
    //   animation: tween,
    //   scrub: 1,
    //   invalidateOnRefresh: true,
    //   markers: true,
    //   onEnter: (self) => {
    //     console.log("SELF ----------------", self);
    //     const card2 = 921.6 - 921.6 * self.progress;
    //     gsap.fromTo(
    //       ".-card2",
    //       {
    //         transform: "translate(921.6px, 0px)",
    //       },
    //       {
    //         transform: `translate(${card2}px,0px)`,
    //       }
    //     );
    //   },
    // });

    toggleDivOnScroll1();
  }, []);

  return (
    <div className="guideline " id="guideline">
      <div className="guideline_item">
        <div className="lGuideline-title-inner">
          <h2 className="lGuideline-title-svg" data-svg-title="">
            <svg viewBox="0 0 1148.2 149.5">
              <path
                className="gt0 gt1"
                data-svg-title-item=""
                d="M143.5,129.3v3.1c-22.5,9.5-39.7,15.5-63.4,15.5c-43.3,0-80-26.3-80-72.2c0-46.6,40.7-75.6,84.6-75.6              c16.6,0,33.4,2.9,49.1,8.2L133,44.8h-2.7c-5.2-24.4-22.1-39.7-47.5-39.7c-36.3,0-58.4,27.7-58.4,62.8c0,41.6,29.6,72.9,71.4,72.9              c19.1,0,18.9-5,18.9-18.7v-12.6c0-23.3-6.1-25.8-28.4-28.6v-3.1h62.2v3.1c-14.7,2.9-15.3,8.8-15.3,21.8v26.5h10.3V129.3z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="gt0 gt2"
                data-svg-title-item=""
                d="M303.5,2.7v3.2c-19.1,2.1-20.4,13.9-21.2,41.6l-1.3,46c-0.6,27.1-12.2,54.6-58.8,54.6              c-65.1,0-58.4-47-58.4-63.8v-47c-0.6-21.6-0.8-27.9-26-31.3V2.8h72.5V6c-27.5,4-27.9,8.2-27.9,31.3v43.1c0,4-6.7,58.2,50.8,58.2              c45.4,0,41-43.3,41-68.9V47.4c0-26.7-2.1-38.9-31.5-41.6V2.6h60.8V2.7z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="gt0 gt3"
                data-svg-title-item=""
                d="M354.9,111c0.6,21.6,0.8,27.9,26,31.3v3.1h-70.5v-3.1c25.2-3.4,25.4-9.7,26-31.3V37.1              c-0.6-21.6-0.8-27.9-26-31.3V2.6H381v3.2c-25.2,3.4-25.4,9.7-26,31.3V111H354.9z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="gt0 gt4"
                data-svg-title-item=""
                d="M437.9,2.2l-50.8,1.7v2.9c23.9,3.4,24.2,9.7,24.8,31.3V111c-0.6,21.6-0.8,27.9-26,31.3v3.1l62.6,0.4              c72.2,0.6,91.6-41.4,91.6-71.4C540,52.6,530.3-0.7,437.9,2.2z M458.9,140.6c-26,0-28.6-13.4-28.6-27.5V6.4              c45.6-0.2,85.3,20.8,85.3,71.2C515.6,125.5,483,140.6,458.9,140.6z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="gt0 gt5"
                data-svg-title-item=""
                d="M524.4,142.3c25.2-3.4,25.4-9.7,26-31.3V37.1c-0.6-21.6-0.8-27.9-26-31.3V2.6h112.8l-2.5,32.3h-3.2              c-1.5-27.1-21-27.3-42.2-27.3h-20.4v59.9h21.8c15.8,0,27.7-1.3,30-19.3h3.1V95h-3.1c-2.7-18.5-14.3-18.7-30-18.7h-21.8v34.4              c0,12.4-2.9,29.6,31.5,29.6c26.5,0,39.5-10.1,44.7-36.5h3.2c-0.2,16-2.9,29-7.1,41.6H524.4V142.3z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="gt0 gt6"
                data-svg-title-item=""
                d="M650.4,142.3c25.2-3.4,25.4-9.7,26-31.3V37.1c-0.6-21.6-0.8-27.9-26-31.3V2.6H721v3.2c-25.2,3.4-26,9.7-26,31.3              V106c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H650.4V142.3z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="gt0 gt7"
                data-svg-title-item=""
                d="M821.1,111c0.6,21.6,0.8,27.9,26,31.3v3.1h-70.6v-3.1c25.2-3.4,25.4-9.7,26-31.3V37.1              c-0.6-21.6-0.8-27.9-26-31.3V2.6h70.6v3.2c-25.2,3.4-25.4,9.7-26,31.3V111z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="gt0 gt8"
                data-svg-title-item=""
                d="M991.4,112.5l-1.1-76.7c-0.2-20-5.7-25.8-29.4-30V2.6h57.3v3.2c-14.5,1.9-17.2,9.9-18.9,23.5              c-2.9,23.1-1.9,73.7-0.8,119.5l-2.7,0.6c-33.6-39.7-71-76.4-106.5-114.7v38.7c0,52.1-1.3,62.8,29.2,68.9v3.1h-62.8v-3.1              c28.4-2.9,27.3-22.3,27.3-69.9V40.9c0-21-3.4-29.2-30-35.1V2.6h34.7L991.4,112.5z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="gt0 gt9"
                data-svg-title-item=""
                d="M1024.2,142.3c25.2-3.4,25.4-9.7,26-31.3V37.1c-0.6-21.6-0.8-27.9-26-31.3V2.6H1137l-2.5,32.3h-3.2              c-1.5-27.1-21-27.3-42.2-27.3h-20.4v59.9h21.8c15.8,0,27.7-1.3,30-19.3h3.2V95h-3.2c-2.7-18.5-14.3-18.7-30-18.7h-21.8v34.4              c0,12.4-2.9,29.6,31.5,29.6c26.5,0,39.5-10.1,44.7-36.5h3.2c-0.2,16-2.9,29-7.1,41.6h-116.8V142.3z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
            </svg>
          </h2>
          <div className="lGuideline-title-sub">
            <div
              className="cSubTitle -right"
              data-subtitle="true"
              style={{ overflow: "hidden" }}
            >
              <div
                className="cFlatText cSubTitle-inner"
                data-flat-text=""
                style={{ padding: "0px 19.2px", transform: "scaleX(1.05)" }}
              >
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  E
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  X
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  P
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  L
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  O
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  R
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  I
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  N
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  G
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ marginLeft: 5, transform: "translate(0px, 130%)" }}
                >
                  T
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  H
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  E
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ marginLeft: 5, transform: "translate(0px, 130%)" }}
                >
                  H
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  O
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  R
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  I
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  Z
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  O
                </span>
                <span
                  className="cSubTitle-text"
                  data-subtitle-item=""
                  style={{ transform: "translate(0px, 130%)" }}
                >
                  N
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lGuideline-card card_1"
          data-guideline-card-container=""
          style={{ transform: "translate(105%, 0px)" }}
        >
          <div
            className="lGuideline-card-item -card1"
            data-guideline-card=""
            style={{ transform: "perspective(3225.81px)" }}
          >
            <div className="lGuideline-card-item-front">
              <div className="lGuideline-card-item-headline">
                <img
                  className="lGuideline-card-item-number -l01"
                  src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_number01.png"
                  width="72"
                  height="130"
                  alt=""
                  loading="lazy"
                  srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_number01.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_number01@2x.png 2x"
                />
                <div
                  className="cFlatText lGuideline-card-item-title"
                  data-flat-text=""
                  style={{ padding: "0px 0.825px", transform: "scaleX(1.05)" }}
                >
                  志
                </div>
              </div>
              <div
                className="cFlatText lGuideline-card-item-text"
                data-flat-text=""
                style={{ padding: "0px 6.3px", transform: "scaleX(1.05)" }}
              >
                Examining how cognitive biases and psychological factors
                influence financial decision-making while aiming to develop
                strategies that help individuals make more informed and
                responsible financial choices.
              </div>
            </div>
            <div className="lGuideline-card-item-back">
              <img
                className="lGuideline-card-item-back-illust -l01"
                src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust01.png"
                width="234"
                height="302"
                alt=""
                srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust01.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust01@2x.png 2x"
              />
            </div>
          </div>
          <div
            className="lGuideline-card-item -card2 -large"
            data-guideline-card=""
            style={{
              transform: "perspective(3225.81px) translate(921.6px, 0px)",
            }}
          >
            <div className="lGuideline-card-item-front">
              <div className="lGuideline-card-item-headline">
                <img
                  className="lGuideline-card-item-number -l02"
                  src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_number02.png"
                  width="93"
                  height="132"
                  alt=""
                  loading="lazy"
                  srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_number02.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_number02@2x.png 2x"
                />
                <div
                  className="cFlatText lGuideline-card-item-title"
                  data-flat-text=""
                  style={{ padding: "0px 1.65px", transform: "scaleX(1.05)" }}
                >
                  共創
                </div>
              </div>
              <div
                className="cFlatText lGuideline-card-item-text"
                data-flat-text=""
                style={{ padding: "0px 6.3px", transform: "scaleX(1.05)" }}
              >
                Exploring innovative ways to create inclusive financial systems
                by designing financial products that cater to unique needs of
                underserved and marginalized communities.
              </div>
            </div>
            <div className="lGuideline-card-item-back">
              <img
                className="lGuideline-card-item-back-illust -l02"
                src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust02.png"
                width="235"
                height="307"
                alt=""
                srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust02.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust02@2x.png 2x"
              />
            </div>
          </div>
          <div
            className="lGuideline-card-item -card3"
            data-guideline-card=""
            style={{
              transform: "perspective(3225.81px) translate(614.4px, 0px)",
            }}
          >
            <div className="lGuideline-card-item-front">
              <div className="lGuideline-card-item-headline">
                <img
                  className="lGuideline-card-item-number -l03"
                  src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_number03.png"
                  width="81"
                  height="135"
                  alt=""
                  loading="lazy"
                  srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_number03.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_number03@2x.png 2x"
                />
                <div
                  className="cFlatText lGuideline-card-item-title"
                  data-flat-text=""
                  style={{ padding: "0px 1.65px", transform: "scaleX(1.05)" }}
                >
                  変革
                </div>
              </div>
              <div
                className="cFlatText lGuideline-card-item-text"
                data-flat-text=""
                style={{ padding: "0px 6.3px", transform: "scaleX(1.05)" }}
              >
                Researching ethical banking practices, ethical investment
                vehicles, and how financial institutions can integrate ethical
                principles into their operations while maintaining
                profitability.
              </div>
            </div>
            <div className="lGuideline-card-item-back">
              <img
                className="lGuideline-card-item-back-illust -l03"
                src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust03.png"
                width="220"
                height="301"
                alt=""
                srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust03.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust03@2x.png 2x"
              />
            </div>
          </div>
          <div
            className="lGuideline-card-item -card4"
            data-guideline-card=""
            style={{
              transform: "perspective(3225.81px) translate(307.2px, 0px)",
            }}
          >
            <div className="lGuideline-card-item-front">
              <div className="lGuideline-card-item-headline">
                <img
                  className="lGuideline-card-item-number -l04"
                  src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_number04.png"
                  width="98"
                  height="133"
                  alt=""
                  loading="lazy"
                  srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_number04.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_number04@2x.png 2x"
                />
                <div
                  className="cFlatText lGuideline-card-item-title"
                  data-flat-text=""
                  style={{ padding: "0px 1.65px", transform: "scaleX(1.05)" }}
                >
                  信頼
                </div>
              </div>
              <div
                className="cFlatText lGuideline-card-item-text"
                data-flat-text=""
                style={{ padding: "0px 1.65px", transform: "scaleX(1.05)" }}
              >
                Pecunia focuses on research related to financing sustainable
                development goals (SDGs). This includes examining financial
                instruments, policies, and partnerships that can mobilize
                capital for projects aligned with the SDGs.
              </div>
            </div>
            <div className="lGuideline-card-item-back">
              <img
                className="lGuideline-card-item-back-illust -l04"
                src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust04.png"
                width="295"
                height="297"
                alt=""
                srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust04.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust04@2x.png 2x"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="cContainer -leftSmall -rightSmall -spLeftWide -spRightWide lGuideline-text"
        data-guideline-lead=""
      >
        <div
          className="cFlatText lGuideline-text-child"
          data-flat-text=""
          style={{
            padding: "0px 21.225px",
            transform: "translate(0px, 120%) scale(1.05, 1)",
          }}
        >
          Our focus areas represent Pecunia core mission, driving our relentless
          pursuit of transformative change in the realm of social finance.
          Through dedicated exploration, we strive to catalyze meaningful
          impact, fostering inclusivity and sustainability. We undertake
          in-depth research to reveal opportunities, address challenges, and
          advocate for best practices, shaping a more equitable financial
          landscape.
        </div>
      </div>
    </div>
  );
};

export default index;
