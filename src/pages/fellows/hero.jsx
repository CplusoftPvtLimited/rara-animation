import React from "react";
import "./index.css";
import "./mobile.css";
import Hand from "../../assets/images/hand.png";
import handMob from "../../assets/images/hand-mob.webp";
import { useEffect, useState, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import { IoMdArrowDropdown } from "react-icons/io";
function Hero() {
  let letterF = useRef(null);
  let letterL = useRef(null);
  let letterE = useRef(null);
  let letterSecondL = useRef(null);
  let letterO = useRef(null);
  let letterW = useRef(null);
  let letterS = useRef(null);
  let [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [handClass, setHandClass] = useState("hand-3");
  const [positionIndex, setPositionIndex] = useState(0);

  const positions = [
    { right: "48%", top: "91%" },
    { right: "57%", top: "99%" },
    { right: "51%", top: "107%" },
  ];

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setPositionIndex((prevIndex) => (prevIndex + 1) % positions.length);
    }, 2000);

    return () => clearInterval(animationInterval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Initial state (small and hidden)
    TweenMax.set(letterF, {
      opacity: 0,
      scale: 0.5,
      x: -50,
    });

    // Animation
    TweenMax.to(letterF, 1, {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 1,
    });

    TweenMax.set(letterE, {
      opacity: 0,
      scale: 0.5,
      x: -50,
    });

    // Animation
    TweenMax.to(letterE, 1, {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 1.2,
    });

    TweenMax.set(letterL, {
      opacity: 0,
      scale: 0.5,
      x: -100,
    });

    // Animation
    TweenMax.to(letterL, 1, {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 1.4,
    });

    TweenMax.set(letterSecondL, {
      opacity: 0,
      scale: 0.5,
      x: -100,
    });

    // Animation
    TweenMax.to(letterSecondL, 1, {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 1.6,
    });

    TweenMax.set(letterO, {
      opacity: 0,
      scale: 0.5,
      x: -150,
    });

    // Animation
    TweenMax.to(letterO, 1, {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 1.8,
    });

    TweenMax.set(letterW, {
      opacity: 0,
      scale: 0.5,
      x: -200,
    });

    // Animation
    TweenMax.to(letterW, 1, {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 2,
    });

    TweenMax.set(letterS, {
      opacity: 0,
      scale: 0.5,
      x: -150,
    });

    // Animation
    TweenMax.to(letterS, 1, {
      opacity: 1,
      scale: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 2.2,
    });
  }, []);

  return (
    <div>
      {/************************** Svg ******************************/}
      <div className="gap-12 mt-[150px]  lg:mt-[300px] lg:ml-[200px] lg:flex">
        <div className=" w-[80%] pl-[30px] lg:w-[65%] xl:w-[65%]">
          <h1 className="lFellows-title-main" data-fellows-title="">
            <svg viewBox="0 0 936.1 150.5">
              <title>FELLOWS</title>
              <path
                className="st0 text-center"
                ref={(el) => {
                  letterF = el;
                }}
                data-svg-title-item=""
                d="M100.9,49v51.2h-3.1C96.1,79,85.2,79.4,67.6,79.4H44.7v31.7c0,22.5,1.1,26.9,30.2,31.3v3.2H0.1v-3.2 c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h111.1l-3.4,33.2h-3.2c-1.3-27.1-18.9-28.1-41-28.1H44.5v62.8h22.9 C85,70.6,96,68.9,97.6,49L100.9,49L100.9,49z"
              ></path>
              <path
                className="st0"
                ref={(el) => {
                  letterE = el;
                }}
                data-svg-title-item=""
                d="M121,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h112.8L231.3,35h-3.1          c-1.5-27.1-21-27.3-42.2-27.3h-20.4v59.9h21.8c15.8,0,27.7-1.3,30-19.3h3.1v46.8h-3.1c-2.7-18.5-14.3-18.7-30-18.7h-21.8v34.4          c0,12.4-2.9,29.6,31.5,29.6c26.5,0,39.5-10.1,44.7-36.5h3.1c-0.2,16-2.9,29-7.1,41.6H121V142.4z"
              ></path>
              <path
                className="st0"
                ref={(el) => {
                  letterL = el;
                }}
                data-svg-title-item=""
                d="M247,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h70.6v3.2c-25.2,3.4-26,9.7-26,31.3          v68.9c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H247V142.4z"
              ></path>
              <path
                className="st0"
                ref={(el) => {
                  letterSecondL = el;
                }}
                data-svg-title-item=""
                d="M373,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h70.6v3.2c-25.2,3.4-26,9.7-26,31.3          v68.9c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H373V142.4z"
              ></path>
              <path
                className="st0"
                ref={(el) => {
                  letterO = el;
                }}
                data-svg-title-item=""
                d="M580.5,0.2c-43.9,0-76.7,29-76.7,73.7c0,45.4,32.6,74.1,76.9,74.1c44.1,0,76.9-28.8,76.9-73.9          C657.6,36.8,634.3,0.2,580.5,0.2z M583.2,143c-37.8,0-55-41.6-55-74.1c0-28.4,14.5-63.6,50.6-63.6c32.1,0,53.8,35.3,54.4,72.5          C633.2,107.8,617.9,143,583.2,143z"
              ></path>
              <path
                className="st0"
                ref={(el) => {
                  letterW = el;
                }}
                data-svg-title-item=""
                d="M706.1,150.4H704L669.8,33c-5.2-15.3-5.9-22.3-23.3-27.1V2.7h59.4v3.2c-25.6,3.8-20.4,14.5-15.3,31.7l22.1,74.6          l33-87.8C741.5,11.6,734.6,8.2,722,5.9V2.7h61.3v3.2c-22.9,3.2-20.2,13-16.4,25.2l26.7,83.2L810.2,67c3.6-10.5,13-36.8,13-46.8          c0-10.3-9.5-11.8-21-14.3V2.7H857v3.2c-12.6,0.8-18.9,8-23.3,19.1L819,65.1l-30.9,85.3h-2.3L748.3,33.6L706.1,150.4z"
              ></path>
              <path
                className="st0"
                ref={(el) => {
                  letterS = el;
                }}
                data-svg-title-item=""
                d="M927.4,39.7H924c-3.4-17-8.8-33.4-29.6-33.4c-13.4,0-24.6,9.2-24.6,23.1c0,36.3,66.2,35.1,66.2,77.5          c0,27.1-26.9,41.2-51,41.2c-12.8,0-26.3-3.8-37-10.7l-6.1-35.7h3.8c5.2,20.2,19.3,40.1,42.4,40.1c15.5,0,27.7-9.2,27.7-25.6          c0-37.4-64.3-34-64.3-76c0-24.6,24.4-40.1,46.8-40.1c10.7,0,21.4,3.1,30.7,8.2L927.4,39.7z"
              ></path>
            </svg>
          </h1>
        </div>
        <div className="mt-[20px] w-[80%] pl-[30px] lg:w-[58%] lg:my-auto ">
          <p className="text-[13px] lg:text-[19px]">フェロー紹介</p>
        </div>
      </div>
      {/************************** Description ******************************/}
      <div className="w-[80%] mx-auto mt-[100px] lg:mb-[20px] lg:w-[75%]">
        <div>
          <p className="text-[14px] lg:text-[17px] lg:pl-28 lg:w-[65%]">
            Pecunia stands as a testament to the belief in the impact that
            research and innovative ideas can have on the world of finance. Our
            Fellowship Program is a unique avenue for forward-thinking
            professionals to embark on a transformative journey, working
            collaboratively within a diverse and dynamic community of esteemed
            experts and scholars. Together, we are dedicated to pushing the
            boundaries and propelling the field of social finance forward into
            new realms of possibility.
          </p>
        </div>
        <div>
          <div className="hidden md:block lg:block xl:block 2xl:block">
            <img className={`${handClass} lg:block`} src={Hand} alt="" />
          </div>
          {/**Mobile*/}
          <div className="md:hidden lg:hidden">
            <img
              style={{
                right: positions[positionIndex].right,
                top: positions[positionIndex].top,
              }}
              className="hand"
              src={handMob}
              alt=""
            />
            <img src="" alt="" />
          </div>

          <div className="layers">
            <ul className="layer-inner z-50">
              <a href="#fellow">
                <li className="layer-item-1 z-50">
                  <div
                    className="flex justify-center z-50 md:text-[10px] lg:text-[12px] cursor-pointer"
                    onMouseEnter={() => {
                      setHandClass("hand-3");
                    }}
                  >
                    RARAフェロー
                    <IoMdArrowDropdown className="my-auto ml-1 text-[16px]" />
                  </div>
                </li>
              </a>
              <a href="#associate-fellow">
                <li className="layer-item-2 z-50">
                  <div
                    className="flex justify-center z-50 md:text-[10px] lg:text-[12px] cursor-pointer"
                    onMouseEnter={() => {
                      setHandClass("hand-3");
                    }}
                  >
                    RARAアソシエイトフェロー
                    <IoMdArrowDropdown className="my-auto ml-1 text-[16px]" />
                  </div>
                </li>
              </a>
              <a href="#student-fellow">
                <li className="layer-item-3 z-50">
                  <div
                    className="flex justify-center z-50 md:text-[10px] lg:text-[12px] cursor-pointer"
                    onMouseEnter={() => {
                      setHandClass("hand-3");
                    }}
                  >
                    RARA学生フェロー
                    <IoMdArrowDropdown className="my-auto ml-1 text-[16px]" />
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;