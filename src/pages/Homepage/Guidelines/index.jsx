/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./mobile.css";

gsap.registerPlugin(ScrollTrigger);

const index = ({ data }) => {
  const [homeData, setHomeData] = useState("");
  useEffect(() => {
    setHomeData(data);

    // const apiURL = `${process.env.REACT_APP_SERVER}/home/getHome`;

    // const getHomeData = async () => {
    //   try {
    //     const response = await fetch(apiURL);
    //     if (!response.ok) {
    //       throw new Error(`Request failed with status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     console.log(
    //       "***🚀 ~ file: home.jsx:323 ~ getHomeData ~ data:",
    //       data.home[0]
    //     );
    //     setHomeData(data.home[0]);
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    if (document.documentElement.clientWidth > 500) {
      console.log("Window width is greater than 425 pixels");
      console.log("***********Inner Width: ", window.innerWidth);
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
          if (pinSpacer && guidelineItem) {
            guidelineItem.style.height = "700px";
            pinSpacer.style.height = "4400px";
          }

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
    } else {
      const scrollContainer = document.querySelector(".custom-container");
      function toggleDivOnScrollMobile() {
        const animationDuration = 1.5; // Adjust the duration of the animation in seconds
        const animationDelay = 0.5; // Adjust the delay before the animation starts in seconds
        let isActive = false; // Flag to track if animation is active

        ScrollTrigger.create({
          trigger: "#guideline",
          scroller: scrollContainer,
          start: "top bottom", // Adjust the start position based on your preference
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

        ScrollTrigger.create({
          trigger: ".guideline_item",
          scroller: scrollContainer,
          start: "start top",
          end: "+=1800",
          scrub: true,
          onEnter: () => {
            console.log("🚀 ~ file: index.jsx:570 ~ useEffect ~ onEnter:");
            // gsap.to(".-mobile_card1", {
            //   transform: "rotateY(180deg)",
            // });
          },
          onUpdate: (self) => {
            console.log("🚀 ~ file: index.jsx:576 ~ useEffect ~ onUpdate:");
            const scrollProgress = self.progress;
            console.log(
              "🚀 ~ file: index.jsx:176 ~ useEffect ~ scrollProgress:",
              scrollProgress
            );
            if (scrollProgress >= 0.045) {
              gsap.to(".-mobile_card1", {
                transform: "rotateY(180deg)",
                duration: 0.5,
              });
            }
            if (scrollProgress >= 0.3) {
              gsap.to(".-mobile_card2", {
                transform: "rotateY(180deg)",
                duration: 0.5,
              });
            }
            if (scrollProgress >= 0.5) {
              gsap.to(".-mobile_card3", {
                transform: "rotateY(180deg)",
                duration: 0.5,
              });
            }
            if (scrollProgress >= 0.767) {
              gsap.to(".-mobile_card4", {
                transform: "rotateY(180deg)",
                duration: 0.5,
              });
            }
          },
          onEnterBack: () => {
            console.log("🚀 ~ file: index.jsx:582 ~ useEffect ~ onEnterBack:");
          },
          onLeave: () => {
            console.log("🚀 ~ file: index.jsx:586 ~ useEffect ~ onLeave:");
            gsap.to(".lGuideline-text-child", {
              transform: "translate(0px,0%)",
            });
          },
          onLeaveBack: () => {
            console.log("🚀 ~ file: index.jsx:590 ~ useEffect ~ onLeaveBack:");
          },
        });
      }

      toggleDivOnScrollMobile();
    }
    // getHomeData();
  }, []);

  return (
    <>
      <div className="guideline " id="guideline">
        <div className="guideline_item">
          <div className="lGuideline-title-inner">
            <h2
              className="lGuideline-title-svg"
              data-svg-title=""
              style={{ width: window.innerWidth < 700 ? "90%" : "" }}
            >
              <svg
                width="541.99"
                height="60.598"
                viewBox="0 0 541.99 60.598"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: window.innerWidth < 700 ? "100%" : "" }}
              >
                <g
                  id="svgGroup"
                  stroke-linecap="round"
                  fill-rule="evenodd"
                  font-size="9pt"
                  stroke="#000"
                  stroke-width="0.1"
                  fill="#e6e6e6"
                  style={{
                    stroke: "#000",
                    strokeWidth: "0.1",
                    fill: "#e6e6e6",
                  }}
                >
                  <path
                    d="M 26.643 29.963 L 17.596 29.963 L 17.596 5.146 L 25.149 5.146 C 33.327 5.146 39.97 5.511 41.169 14.404 A 21.4 21.4 0 0 1 41.334 16.268 L 42.579 16.268 L 43.907 3.154 L 0 3.154 L 0 4.399 C 9.96 5.727 10.043 8.217 10.292 16.766 L 10.292 45.982 C 10.073 53.508 9.982 56.339 3.168 57.814 A 40.218 40.218 0 0 1 0 58.349 L 0 59.594 L 29.548 59.594 L 29.548 58.349 A 69.388 69.388 0 0 1 25.515 57.638 C 18.58 56.16 17.708 54.09 17.608 47.9 A 120.294 120.294 0 0 1 17.596 45.982 L 17.596 33.449 L 26.643 33.449 A 856.782 856.782 0 0 0 27.039 33.449 C 33.318 33.446 37.363 33.443 38.413 40.093 A 20.452 20.452 0 0 1 38.595 41.666 L 39.84 41.666 L 39.84 21.414 L 38.595 21.414 C 37.931 29.299 33.615 29.963 26.643 29.963 Z"
                    id="0"
                    className="gt0 gt1"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                  <path
                    d="M 81.672 2.158 A 32.95 32.95 0 0 0 64.918 6.442 C 57.825 10.599 52.958 17.591 51.699 26.572 A 33.985 33.985 0 0 0 51.377 31.291 A 30.775 30.775 0 0 0 54.728 45.716 C 59.648 55.093 69.578 60.59 81.755 60.59 A 33.262 33.262 0 0 0 98.379 56.434 C 105.487 52.362 110.392 45.472 111.751 36.541 A 34.32 34.32 0 0 0 112.133 31.374 A 27.838 27.838 0 0 0 96.979 5.354 C 92.811 3.332 87.731 2.158 81.672 2.158 Z M 97.44 14.502 A 19.468 19.468 0 0 0 81.008 4.15 C 69.076 4.15 63.116 13.891 61.481 23.632 A 34.388 34.388 0 0 0 61.005 29.299 A 36.809 36.809 0 0 0 61.008 29.785 C 61.177 42.574 67.998 58.598 82.751 58.598 A 19.66 19.66 0 0 0 83.739 58.573 C 95.012 58.006 100.846 47.736 102.197 37.467 A 36.006 36.006 0 0 0 102.505 32.785 A 36.709 36.709 0 0 0 97.44 14.502 Z"
                    id="1"
                    className="gt0 gt2"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                  <path
                    d="M 175.379 42.164 L 174.217 41.666 C 170.836 49.78 166.98 57.078 158.215 58.389 A 19.725 19.725 0 0 1 155.293 58.598 C 143.258 58.598 130.725 47.227 130.725 30.876 A 30.146 30.146 0 0 1 135.642 13.829 C 139.15 8.717 144.467 5.147 151.377 4.329 A 26.225 26.225 0 0 1 154.463 4.15 A 17.481 17.481 0 0 1 161.551 5.536 C 165.837 7.416 168.742 11.093 170.372 15.832 A 27.756 27.756 0 0 1 171.478 20.252 L 172.723 20.252 L 172.723 6.64 C 167.245 3.403 160.854 2.158 154.546 2.158 A 40.005 40.005 0 0 0 141.094 4.343 C 127.94 9.018 121.097 20.494 121.097 31.872 A 27.887 27.887 0 0 0 124.46 45.585 C 128.778 53.365 136.837 58.21 146.171 59.907 A 43.139 43.139 0 0 0 153.882 60.59 C 159.775 60.59 165.502 59.594 170.814 57.021 C 172.806 52.207 174.383 47.227 175.379 42.164 Z"
                    id="2"
                    className="gt0 gt3"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                  <path
                    d="M 221.942 3.154 L 221.942 4.399 C 232.636 5.392 234.191 9.549 234.371 18.422 A 119.653 119.653 0 0 1 234.392 20.833 L 234.392 29.548 A 159.319 159.319 0 0 0 234.407 31.475 C 234.532 41.698 235.041 56.772 218.207 56.772 A 29.803 29.803 0 0 1 212.933 56.332 C 195.899 53.27 198.121 35.225 198.121 33.781 L 198.121 16.766 A 88.583 88.583 0 0 1 198.173 13.005 C 198.429 7.246 199.92 5.791 208.58 4.485 A 102.801 102.801 0 0 1 209.16 4.399 L 209.16 3.154 L 180.525 3.154 L 180.525 4.399 C 190.485 5.727 190.568 8.217 190.817 16.766 L 190.817 35.358 A 41.394 41.394 0 0 1 190.805 36.273 C 190.644 43.455 189.299 60.127 212.898 60.581 A 51.708 51.708 0 0 0 213.891 60.59 C 232.317 60.59 236.882 49.717 237.131 39.01 L 237.629 20.833 C 237.927 10.985 238.36 6.234 243.929 4.771 A 14.397 14.397 0 0 1 246.012 4.399 L 246.012 3.154 L 221.942 3.154 Z"
                    id="3"
                    className="gt0 gt4"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                  <path
                    d="M 251.241 42.247 L 249.747 42.247 L 252.154 56.357 C 256.387 59.096 261.699 60.59 266.762 60.59 C 276.307 60.59 286.931 55.029 286.931 44.322 C 286.931 31.948 272.691 28.978 265.229 22.499 A 11.289 11.289 0 0 1 260.786 13.695 A 8.867 8.867 0 0 1 262.45 8.41 C 264.012 6.26 266.537 4.89 269.42 4.616 A 11.382 11.382 0 0 1 270.497 4.565 C 276.544 4.565 279.31 8.072 280.878 12.603 A 39.036 39.036 0 0 1 282.2 17.762 L 283.528 17.762 L 284.192 5.312 C 280.54 3.32 276.307 2.075 272.074 2.075 A 19.858 19.858 0 0 0 270.148 2.17 C 261.856 2.978 253.565 8.916 253.565 17.928 A 13.317 13.317 0 0 0 254.722 23.527 C 259.691 34.453 278.963 35.104 278.963 47.974 C 278.963 53.529 275.418 57.007 270.532 57.882 A 14.328 14.328 0 0 1 268.007 58.1 C 258.877 58.1 253.316 50.215 251.241 42.247 Z"
                    id="4"
                    className="gt0 gt5"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                  <path
                    d="M 348.268 58.349 L 348.268 59.594 L 372.67 59.594 L 372.67 58.349 C 366.485 57.189 364.837 55.021 362.829 49.832 A 85.505 85.505 0 0 1 362.378 48.638 L 344.118 0 C 342.375 2.075 340.3 3.569 338.059 4.482 A 2.684 2.684 0 0 1 338.409 5.858 C 338.409 7.157 337.689 8.639 337.146 10.209 L 332.166 23.738 L 322.787 48.223 C 320.214 54.697 319.467 56.357 312.08 58.349 L 312.08 59.594 L 334.822 59.594 L 334.822 58.349 A 38.469 38.469 0 0 0 333.925 58.222 C 330.533 57.777 326.137 57.436 325.451 53.751 A 5.714 5.714 0 0 1 325.36 52.705 A 11.075 11.075 0 0 1 325.546 50.856 C 326.307 46.468 329.203 39.528 330.423 35.939 L 349.347 35.939 C 351.505 41.749 354.659 49.551 354.659 53.037 A 4.643 4.643 0 0 1 354.318 54.857 C 353.538 56.71 351.538 57.514 349.537 58.042 A 39.509 39.509 0 0 1 348.268 58.349 Z M 348.268 32.121 L 331.834 32.121 L 339.636 10.541 L 348.268 32.121 Z"
                    id="6"
                    className="gt0 gt6"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                  <path
                    d="M 373.085 58.349 L 373.085 59.594 L 402.218 59.594 L 402.218 58.349 A 69.448 69.448 0 0 1 398.458 57.739 C 390.808 56.24 390.681 53.971 390.681 45.982 L 390.681 32.619 A 23.213 23.213 0 0 0 392.378 32.844 C 396.976 33.288 399.668 32.38 402.554 38.018 A 22.982 22.982 0 0 1 402.799 38.512 C 404.025 41.021 406.522 45.377 409.801 49.733 A 60.169 60.169 0 0 0 414.336 55.112 A 16.041 16.041 0 0 0 424.565 59.656 C 427.281 60.002 430.308 60.075 433.684 60.224 A 241.261 241.261 0 0 1 434.422 60.258 L 434.671 59.013 A 32.147 32.147 0 0 1 416.168 45.846 C 412.461 41.014 409.391 35.573 406.617 30.71 L 406.202 30.129 A 21.818 21.818 0 0 0 412.485 26.123 C 414.584 24.115 415.995 21.604 416.385 18.382 A 15.518 15.518 0 0 0 416.494 16.517 A 13.452 13.452 0 0 0 416.36 14.603 C 415.694 9.973 412.008 2.414 393.918 2.988 L 373.666 3.652 L 373.666 4.814 C 382.962 5.644 383.377 7.553 383.377 20.252 L 383.377 45.982 C 383.158 53.508 383.067 56.339 376.253 57.814 A 40.218 40.218 0 0 1 373.085 58.349 Z M 390.681 31.208 L 390.681 4.731 C 399.396 4.648 407.945 8.549 407.945 18.26 A 11.173 11.173 0 0 1 406.434 24.047 C 403.969 28.218 398.84 30.371 393.711 31.006 A 27.027 27.027 0 0 1 390.681 31.208 Z"
                    id="7"
                    className="gt0 gt7"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                  <path
                    d="M 431.268 59.594 L 477.416 59.594 A 53.4 53.4 0 0 0 479.849 49.029 A 54.003 54.003 0 0 0 480.238 43.16 L 478.993 43.16 C 476.933 53.543 471.845 57.545 461.537 57.601 A 40.655 40.655 0 0 1 461.314 57.602 A 31.567 31.567 0 0 1 457.735 57.416 C 448.711 56.382 448.781 51.252 448.852 46.997 A 67.155 67.155 0 0 0 448.864 45.899 L 448.864 32.287 L 457.496 32.287 A 43.703 43.703 0 0 1 462.193 32.452 C 465.137 32.781 467.383 33.767 468.598 36.72 A 12.612 12.612 0 0 1 469.365 39.674 L 470.61 39.674 L 470.61 21.165 L 469.365 21.165 A 11.864 11.864 0 0 1 468.618 24.169 C 467.042 28.009 463.537 28.686 459.081 28.786 A 71.343 71.343 0 0 1 457.496 28.801 L 448.864 28.801 L 448.864 5.146 L 456.915 5.146 C 465.11 5.146 472.67 5.225 473.548 15.231 A 21.218 21.218 0 0 1 473.598 15.936 L 474.843 15.936 L 475.839 3.154 L 431.268 3.154 L 431.268 4.399 C 441.228 5.727 441.311 8.217 441.56 16.766 L 441.56 45.982 C 441.341 53.508 441.25 56.339 434.436 57.814 A 40.218 40.218 0 0 1 431.268 58.349 L 431.268 59.594 Z"
                    id="8"
                    className="gt0 gt8"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                  <path
                    d="M 517.588 58.349 L 517.588 59.594 L 541.99 59.594 L 541.99 58.349 C 535.805 57.189 534.157 55.021 532.149 49.832 A 85.505 85.505 0 0 1 531.698 48.638 L 513.438 0 C 511.695 2.075 509.62 3.569 507.379 4.482 A 2.684 2.684 0 0 1 507.729 5.858 C 507.729 7.157 507.009 8.639 506.466 10.209 L 501.486 23.738 L 492.107 48.223 C 489.534 54.697 488.787 56.357 481.4 58.349 L 481.4 59.594 L 504.142 59.594 L 504.142 58.349 A 38.469 38.469 0 0 0 503.245 58.222 C 499.853 57.777 495.457 57.436 494.771 53.751 A 5.714 5.714 0 0 1 494.68 52.705 A 11.075 11.075 0 0 1 494.866 50.856 C 495.627 46.468 498.523 39.528 499.743 35.939 L 518.667 35.939 C 520.825 41.749 523.979 49.551 523.979 53.037 A 4.643 4.643 0 0 1 523.638 54.857 C 522.858 56.71 520.858 57.514 518.857 58.042 A 39.509 39.509 0 0 1 517.588 58.349 Z M 517.588 32.121 L 501.154 32.121 L 508.956 10.541 L 517.588 32.121 Z"
                    id="9"
                    className="gt0 gt9"
                    vector-effect="non-scaling-stroke"
                    style={{ transformOrigin: "center", transform: "scale(0)" }}
                  />
                </g>
              </svg>
            </h2>
            <div
              className="lGuideline-title-sub"
              style={{ width: window.innerWidth < 700 ? "93%" : "" }}
            >
              <div
                className="cSubTitle -right"
                data-subtitle="true"
                style={{ overflow: "hidden" }}
              >
                <div
                  id="cSubtitle"
                  className="cFlatText subtitle cSubTitle-inner "
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
                    style={{
                      marginLeft: 5,
                      transform: "translate(0px, 130%)",
                    }}
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
                    style={{
                      marginLeft: 5,
                      transform: "translate(0px, 130%)",
                    }}
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
          {window.innerWidth > 768 ? (
            <div className="hidden h-auto md:h-[4500px] md:block">
              <div
                className="lGuideline-card card_1 "
                data-guideline-card-container=""
                style={{ transform: "translate(105%, 0px)" }}
              >
                <div
                  className="lGuideline-card-item -card1 mobile-card-back-01"
                  data-guideline-card=""
                  style={{ transform: "perspective(3225.81px)" }}
                >
                  <div className="lGuideline-card-item-front mobile-card-back-01">
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
                        style={{
                          padding: "0px 0.825px",
                          transform: "scaleX(1.05)",
                        }}
                      >
                        {homeData.card1Title}
                      </div>
                    </div>
                    <div
                      className="cFlatText lGuideline-card-item-text"
                      data-flat-text=""
                      style={{
                        padding: "0px 6.3px",
                        transform: "scaleX(1.05)",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: homeData.card1Description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="lGuideline-card-item-back ">
                    <img
                      className="lGuideline-card-item-back-illust -l01"
                      src={homeData.card1Image}
                      width="234"
                      height="302"
                      alt=""
                      // srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust01.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust01@2x.png 2x"
                      srcSet={homeData.card1Image}
                    />
                  </div>
                </div>
                <div
                  className="lGuideline-card-item -card2 -large mobile-card-back-02"
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
                        style={{
                          padding: "0px 1.65px",
                          transform: "scaleX(1.05)",
                        }}
                      >
                        {homeData.card2Title}
                      </div>
                    </div>
                    <div
                      className="cFlatText lGuideline-card-item-text"
                      data-flat-text=""
                      style={{
                        padding: "0px 6.3px",
                        transform: "scaleX(1.05)",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: homeData.card2Description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="lGuideline-card-item-back">
                    <img
                      className="lGuideline-card-item-back-illust -l02"
                      src={homeData.card2Image}
                      width="235"
                      height="307"
                      alt=""
                      // srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust02.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust02@2x.png 2x"
                      srcSet={homeData.card2Image}
                    />
                  </div>
                </div>
                <div
                  className="lGuideline-card-item -card3 mobile-card-back-03"
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
                        style={{
                          padding: "0px 1.65px",
                          transform: "scaleX(1.05)",
                        }}
                      >
                        {homeData.card3Title}
                      </div>
                    </div>
                    <div
                      className="cFlatText lGuideline-card-item-text"
                      data-flat-text=""
                      style={{
                        padding: "0px 6.3px",
                        transform: "scaleX(1.05)",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: homeData.card3Description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="lGuideline-card-item-back">
                    <img
                      className="lGuideline-card-item-back-illust -l03"
                      src={homeData.card3Image}
                      width="220"
                      height="301"
                      alt=""
                      srcSet={homeData.card3Image}
                      // srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust03.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust03@2x.png 2x"
                    />
                  </div>
                </div>
                <div
                  className="lGuideline-card-item -card4 mobile-card-back-04"
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
                        style={{
                          padding: "0px 1.65px",
                          transform: "scaleX(1.05)",
                        }}
                      >
                        {homeData.card4Title}
                      </div>
                    </div>
                    <div
                      className="cFlatText lGuideline-card-item-text"
                      data-flat-text=""
                      style={{
                        padding: "0px 1.65px",
                        transform: "scaleX(1.05)",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: homeData.card4Description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="lGuideline-card-item-back">
                    <img
                      className="lGuideline-card-item-back-illust -l04"
                      src={homeData.card4Image}
                      width="295"
                      height="297"
                      alt=""
                      srcSet={homeData.card4Image}
                      // srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust04.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust04@2x.png 2x"
                    />
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html: homeData.cardGuidelineDescription,
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div id="card_container">
              <div
                className="lGuideline-card mobile_card_1 "
                data-guideline-card-container=""
                style={{ transform: "translate(0%, 0px)" }}
              >
                <div
                  className="lGuideline-card-item -mobile_card1 -large mobile-card-back-01"
                  data-guideline-card=""
                  style={{
                    transform: "perspective(0px) translate(0px, 0px);",
                    marginTop: "7pc",
                  }}
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
                        style={{
                          padding: "0px 0.825px",
                          transform: "scaleX(1.05)",
                        }}
                      >
                        {homeData.card1Title}
                      </div>
                    </div>
                    <div
                      className="cFlatText lGuideline-card-item-text"
                      data-flat-text=""
                      style={{
                        transform: "scaleX(1.05)",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: homeData.card1Description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="lGuideline-card-item-back">
                    <img
                      className="lGuideline-card-item-back-illust -l01"
                      src={homeData.card1Image}
                      width="234"
                      height="302"
                      alt=""
                      // srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust01.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust01@2x.png 2x"
                      srcSet={homeData.card1Image}
                    />
                  </div>
                </div>
                <div
                  className="lGuideline-card-item -mobile_card2 -large mobile-card-back-02"
                  data-guideline-card=""
                  style={{
                    transform: "perspective(0px) translate(0px, 0px);",
                    marginTop: "7pc",
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
                        style={{
                          padding: "0px 1.65px",
                          transform: "scaleX(1.05)",
                        }}
                      >
                        {homeData.card2Title}
                      </div>
                    </div>
                    <div
                      className="cFlatText lGuideline-card-item-text"
                      data-flat-text=""
                      style={{
                        transform: "scaleX(1.05)",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: homeData.card2Description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="lGuideline-card-item-back">
                    <img
                      className="lGuideline-card-item-back-illust -l02"
                      src={homeData.card2Image}
                      width="235"
                      height="307"
                      alt=""
                      srcSet={homeData.card2Image}
                      // srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust02.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust02@2x.png 2x"
                    />
                  </div>
                </div>
                <div
                  className="lGuideline-card-item -mobile_card3 -large mobile-card-back-03"
                  data-guideline-card=""
                  style={{
                    transform: "perspective(0px) translate(0px, 0px);",
                    marginTop: "7pc",
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
                        style={{
                          padding: "0px 1.65px",
                          transform: "scaleX(1.05)",
                        }}
                      >
                        {homeData.card3Title}
                      </div>
                    </div>
                    <div
                      className="cFlatText lGuideline-card-item-text"
                      data-flat-text=""
                      style={{
                        transform: "scaleX(1.05)",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: homeData.card3Description,
                        }}
                      />
                    </div>
                  </div>
                  <div className="lGuideline-card-item-back">
                    <img
                      className="lGuideline-card-item-back-illust -l03"
                      src={homeData.card3Image}
                      // src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust03.png"
                      width="220"
                      height="301"
                      alt=""
                      srcSet={homeData.card3Image}
                      // srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust03.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust03@2x.png 2x"
                    />
                  </div>
                </div>
                <div
                  className="lGuideline-card-item -mobile_card4 mobile-card-back-04"
                  data-guideline-card=""
                  style={{
                    transform: "perspective(0px) translate(0px, 0px);",
                    marginTop: "7pc",
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
                        style={{
                          transform: "scaleX(1.05)",
                        }}
                      >
                        {homeData.card4Title}
                      </div>
                    </div>
                    <div
                      className="cFlatText lGuideline-card-item-text"
                      data-flat-text=""
                      style={{
                        padding: "0px 1.65px",
                        transform: "scaleX(1.05)",
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: homeData.card4Description,
                        }}
                      />
                    </div>
                  </div>

                  <div className="lGuideline-card-item-back" id="fellows">
                    <img
                      className="lGuideline-card-item-back-illust -l04"
                      src={homeData.card4Image}
                      // src="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust04.png"
                      width="295"
                      height="297"
                      alt=""
                      srcSet={homeData.card4Image}
                      // srcSet="https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/1x/b-guideline_illust04.png 1x,https://rara.ritsumei.ac.jp/assets/img/index/guideline/pc/2x/b-guideline_illust04@2x.png 2x"
                    />
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html: homeData.cardGuidelineDescription,
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/**Bottom */}
    </>
  );
};

export default index;
