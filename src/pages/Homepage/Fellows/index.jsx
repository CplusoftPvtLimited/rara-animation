/* eslint-disable */
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

let effectedValueIndex = 0;
let currentFellow = 2;

var total = 300;

let previousEffectedValueIndex = 4;
var previousTotal = 360;

var previousClicked = 0;

const index = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [SliderMove, setSliderMove] = useState(null);
  const [sliderRotate, setsliderRotate] = useState(-30);
  const [FellowName, setFellowName] = useState(null);
  const [FellowDescription1, setFellowDescription1] = useState(null);
  const [FellowDescription2, setFellowDescription2] = useState(null);
  const [selectedFellow, setSelectedFellows] = useState([]);
  const [fellowData, setFellowData] = useState([]);
  const [fellowRotation, setfellowRotation] = useState([]);

  useEffect(() => {
    const scrollContainer = document.querySelector(".custom-container");

    // sliderRotateElement.classList.add("-isCurrent");
    console.log(
      "🚀 ~ file:FELLOWS index.jsx:12 ~ useEffect ~ useEffect:",
      scrollContainer
    );
    let previousProgress = 0;

    ScrollTrigger.create({
      trigger: "#fellows_trigger",
      scroller: scrollContainer,
      start: "top +85%",
      onUpdate: (self) => {
        // console.log(
        //   "🚀 ~ file:FELLOWS index.jsx:21 ~ useEffect ~ onUpdate:",
        //   self.progress
        // );
        const progress = self.progress;
        let bigCirlceValue = 0;
        let circleBackground = 0;
        if (progress < 0.6) {
          circleBackground = progress * 3 * 100;
          bigCirlceValue = progress * 2.5 * 100;
          gsap.to(".lFellows-bg", {
            transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${circleBackground}, 0, 1)`,
          });
          if (bigCirlceValue < 25) {
            gsap.to(".lFellows-bg-inner", {
              scale: bigCirlceValue,
              top: "unset",
              bottom: "-100px",
            });
          }
        } else {
          bigCirlceValue = 25 - (progress - 0.6) * 1.4 * 100;
          gsap.to(".lFellows-bg", {
            transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`,
          });
          if (bigCirlceValue >= 0) {
            gsap.to(".lFellows-bg-inner", {
              scale: bigCirlceValue,
              top: "-100px",
              bottom: "inherit",
            });
          }
        }
      },
    });
  }, []);
  useEffect(() => {
    const getHome = async () => {
      try {
        const response = await fetch(`http://localhost:4500/api/home/getHome`);
        const data = await response.json();
        const homeFellow = data.home[0].fellows
          .trim()
          .split(",")
          .map((id) => +id);

        console.log(
          "***********🚀 ~ file: index.jsx:90 ~ getHome ~ homeFellow:",
          homeFellow
        );

        return homeFellow;
      } catch (error) {
        console.log("Error fetching home data:", error.message);
        return [];
      }
    };

    const fetchAndFilterFellowData = async () => {
      try {
        const [homeFellowIds, fellowResponse] = await Promise.all([
          getHome(),
          axios({
            method: "get",
            url: `http://localhost:4500/api/profile/getAllProfiles`,
          }),
        ]);
        const fellow = fellowResponse.data.profiles;
        // Filter the blog data based on homeFellowIds
        const filteredFellows = fellow.filter((fellow) =>
          homeFellowIds.includes(fellow.id)
        );
        setSelectedFellows(filteredFellows);
        // console.log(
        //   "**000🚀 ~ file: index.jsx:116 ~ fetchAndFilterFellowData ~ filteredFellows:",
        //   filteredFellows
        // );
      } catch (error) {
        console.log(
          "000🚀 Error fetching or filtering blog data:",
          error.message
        );
      }
    };
    fetchAndFilterFellowData();
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:4500/api/profile/getAllProfiles`,
    })
      .then((response) => {
        setFellowData(response.data.profiles);
      })
      .catch((error) => {
        console.log("No profile found", error.message);
      });
  }, []);

  const [fellowsData, setfellowsData] = useState([
    {
      image: require("../../../assets/fellows/david_chen.jpg"),
      clothAnimatedImage: require("../../../assets/fellows/david_chen_animated.jpg"),
      firstGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-7.png)",
      secondGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-7.png)",
      name: "Professor David Chen",
      description: "Behavioral Economics and Financial Decision-Making",
      description_detailed: "",
    },
    {
      image: require("../../../assets/fellows/d_mitchell.jpg"),
      clothAnimatedImage: require("../../../assets/fellows/d_mitchell_animated.jpg"),
      firstGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-6.png)",
      secondGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-6.png)",
      name: "Mr. Dominick Mitchell",
      description: "Sustainable Development Finance",
      description_detailed: "",
    },
    {
      image: require("../../../assets/fellows/maria_hernandez.jpg"),
      clothAnimatedImage: require("../../../assets/fellows/maria_hernandez.jpg"),
      firstGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic01-5.png)",
      secondGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-5.png)",
      name: "Dr. Maria Hernandez",
      description: "Ethical Banking and Finance",
      description_detailed: "",
    },
    {
      image: require("../../../assets/fellows/tamaki_patel.jpg"),
      clothAnimatedImage: require("../../../assets/fellows/tamaki_patel_animated.jpg"),
      firstGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/03.png)",
      secondGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-4.png)",
      name: "Mrs. Tamaki Patel",
      description: "Impact Investing and Measurement",
      description_detailed: "",
    },
    {
      image: require("../../../assets/fellows/doran_reynolds.jpg"),
      clothAnimatedImage: require("../../../assets/fellows/doran_reynolds.jpg"),
      firstGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/02.png)",
      secondGraphicImage:
        "url(https://rara.ritsumei.ac.jp/cms/wp-content/uploads/2022/04/graphic02-4.png)",
      name: "Sir. Doran Reynolds",
      description: "Inclusive Financial Systems",
      description_detailed: "",
    },
  ]);

  useEffect(() => {
    let fellowRotateData = selectedFellow.map((item, index) => {
      return { data: item, rotation: index * 15 };
    });

    setfellowRotation(fellowRotateData);
  }, [selectedFellow]);

  useEffect(() => {
    const sliderRotateElement = document.querySelector(
      `[data-rotate="${sliderRotate}"]`
    );

    if (selectedFellow !== undefined) {
      const firstProfile = selectedFellow[2];
      if (firstProfile && firstProfile.nameEnglish) {
        setFellowName(firstProfile.nameEnglish);
        setFellowDescription1(firstProfile.tagLine);
        setFellowDescription2("");
        sliderRotateElement?.classList.add("-isCurrent");
        console.log("***000 Fellow Name in English:", firstProfile.nameEnglish);
      }
    }
  }, [selectedFellow]);

  const handleMouseLeave = () => {
    const SliderMoveDiv = document.querySelector(".cSliderMouseStalker-circle");
    SliderMoveDiv.style.transform = "scale(0)";
  };

  function handleMouseMovement() {
    const { clientX, clientY } = event;
    const SliderMoveDiv = document.querySelector(".cSliderMouseStalker-circle");
    const prevSliderDiv = document.querySelector(
      ".cSliderMouseStalker-text.-prev"
    );
    const nextSliderDiv = document.querySelector(
      ".cSliderMouseStalker-text.-next"
    );

    const adjustedX = clientX + window.scrollX;
    // console.log(
    //   "🚀 ~ file: index.jsx:91 ~ handleMouseMovement ~ adjustedX:",
    //   adjustedX
    // );
    const adjustedY = clientY + window.scrollY;
    // console.log(
    //   "🚀 ~ file: index.jsx:93 ~ handleMouseMovement ~ adjustedY:",
    //   adjustedY
    // );
    SliderMoveDiv.style.transform = "translate(0px,0px)";
    if (adjustedX < 610) {
      setSliderMove(2);
      // console.log(
      //   "🚀 ~ file: index.jsx:96 ~ handleMouseMovement ~ SliderMove:",
      //   SliderMove
      // );
      prevSliderDiv.style.transform = "translate3d(0%,10%,0px)";
      nextSliderDiv.style.transform = "translateX(110%)";

      setCoordinates({ x: adjustedX, y: adjustedY });
    } else if (adjustedX > 870) {
      setSliderMove(2);
      nextSliderDiv.style.transform = "translate3d(0%,10%,0px)";
      prevSliderDiv.style.transform = "translateX(110%)";
      setCoordinates({ x: adjustedX, y: adjustedY });
    } else {
      SliderMoveDiv.style.transform = "scale(0)";
    }
  }

  async function handleSliderRotation() {
    const sliderElements = document.querySelectorAll(".lFellows-slider-item");
    console.log(
      "0000****🚀 ~ file: index.jsx:271 ~ handleSliderRotation ~ sliderElements:",
      sliderElements
    );
    sliderElements.forEach((element) => {
      element.classList.remove("-isCurrent");
    });
    // console.log(
    //   "🚀 ~ file: index.jsx:119 ~ handleSliderRotation ~ coordinates:",
    //   coordinates
    // );
    if (coordinates && SliderMove) {
      // console.log(
      //   "🚀 ~ file: index.jsx:119 ~ handleSliderRotation ~ SliderMove:",
      //   SliderMove
      // );
      // if (SliderMove == 1) {
      //   console.log(
      //     "🚀 ~ file: index.jsx:276 ~ handleSliderRotation ~ previousClicked:",
      //     previousClicked
      //   );
      //   if (previousClicked == 2) {
      //     fellowRotation.map((item, index) => {
      //       fellowRotation[index]["rotation"] = index * 15;
      //     });
      //   }

      //   previousTotal = previousTotal - 15;
      //   fellowRotation[previousEffectedValueIndex]["rotation"] = previousTotal;
      //   console.log(
      //     "🚀 ~ file: index.jsx:245 ~ handleSliderRotation ~ fellowRotation:",
      //     fellowRotation
      //   );

      //   if (previousEffectedValueIndex >= 0) {
      //     previousEffectedValueIndex -= 1;
      //   } else {
      //     previousEffectedValueIndex = 4;
      //   }
      //   console.log(
      //     "🚀 ~ file: index.jsx:254 ~ handleSliderRotation ~ previousEffectedValueIndex:",
      //     previousEffectedValueIndex
      //   );

      //   console.log(
      //     "🚀 ~ file: index.jsx:265 ~ handleSliderRotation ~ currentFellow222222:",
      //     currentFellow
      //   );
      //   console.log(
      //     "🚀 ~ file: index.jsx:258 ~ handleSliderRotation ~ fellowRotation.length:",
      //     fellowRotation.length
      //   );
      //   if (currentFellow == 0) {
      //     currentFellow = 4;
      //   } else {
      //     currentFellow -= 1;
      //   }
      //   console.log(
      //     "🚀 ~ file: index.jsx:265 ~ handleSliderRotation ~ currentFellow:",
      //     currentFellow
      //   );
      //   console.log(
      //     "🚀 ~ file: index.jsx:263 ~ handleSliderRotation ~      fellowRotation[currentFellow]?.rotation:",
      //     fellowRotation[currentFellow]?.rotation
      //   );
      //   const sliderRotateElement = document.querySelector(
      //     `[data-rotate="${fellowRotation[currentFellow]?.rotation}"]`
      //   );
      //   setsliderRotate(sliderRotate + 15);

      //   sliderRotateElement.classList.add("-isCurrent");

      //   previousClicked = 1;
      // }
      // if (SliderMove == 2) {
      console.log(
        "🚀 ~ file: index.jsx:283 ~ handleSliderRotation ~ previousClicked:",
        previousClicked
      );
      // setfellowRotation(findindexFellowRotation);

      // FellowData(sliderRotate + 15);

      if (previousClicked == 1) {
        fellowRotation.map((item, index) => {
          fellowRotation[index]["rotation"] = index * 15;
        });
      }

      total = total - 15;
      fellowRotation[effectedValueIndex]["rotation"] = -total;
      console.log(
        "🚀 ~ file: index.jsx:245 ~ handleSliderRotation ~ fellowRotation:",
        fellowRotation
      );

      if (effectedValueIndex < fellowRotation.length - 1) {
        effectedValueIndex += 1;
      } else {
        effectedValueIndex = 0;
      }
      console.log(
        "🚀 ~ file: index.jsx:254 ~ handleSliderRotation ~ effectedValueIndex:",
        effectedValueIndex
      );

      console.log(
        "🚀 ~ file: index.jsx:265 ~ handleSliderRotation ~ currentFellow222222:",
        currentFellow
      );
      console.log(
        "🚀 ~ file: index.jsx:258 ~ handleSliderRotation ~ fellowRotation.length:",
        fellowRotation.length
      );
      if (currentFellow < fellowRotation.length - 1) {
        currentFellow += 1;
      } else {
        currentFellow = 0;
      }
      console.log(
        "🚀 ~ file: index.jsx:265 ~ handleSliderRotation ~ currentFellow:",
        currentFellow
      );
      console.log(
        "🚀 ~ file: index.jsx:263 ~ handleSliderRotation ~      fellowRotation[currentFellow]?.rotation:",
        fellowRotation[currentFellow]?.rotation
      );

      let currentFellowData = fellowRotation[currentFellow];
      console.log(
        "🚀 ~ file: index.jsx:336 ~ handleSliderRotation ~ currentFellowData:",
        currentFellowData
      );

      if (currentFellowData) {
        setFellowName(currentFellowData?.data?.nameEnglish);
        setFellowDescription1(currentFellowData?.data?.tagLine);
        setFellowDescription2(currentFellowData?.data?.description_detailed);
      }

      const sliderRotateElement = document.querySelector(
        `[data-rotate="${fellowRotation[currentFellow]?.rotation}"]`
      );
      setsliderRotate(sliderRotate - 15);

      sliderRotateElement.classList.add("-isCurrent");

      previousClicked = 2;
    }

    console.log(
      "🚀 ~ file: index.jsx:299 ~ index ~ FellowName:",
      fellowRotation
    );
    // }
  }

  const FellowData = (rotation) => {
    const sliderRotation = rotation;
    console.log(
      "🚀 ~ file: index.jsx:169 ~ FellowData ~ sliderRotate:",
      sliderRotate
    );
    // if (fellowRotation?.length > 0) {
    //   if (sliderRotation == fellowRotation[0]) {
    //     setFellowName("Mr. Dominick Mitchell");
    //     setFellowDescription1("Sustainable Development Finance");
    //     setFellowDescription2("");
    //   } else if (sliderRotation == fellowRotation[1]) {
    //     setFellowName("Dr. Maria Hernandez");
    //     setFellowDescription1("Ethical Banking and Finance");
    //     setFellowDescription2("");
    //   } else if (sliderRotation == fellowRotation[2]) {
    //     setFellowName("Mrs. Tamaki Patel");
    //     setFellowDescription1("Impact Investing and Measurement");
    //     setFellowDescription2("");
    //   } else if (sliderRotation == fellowRotation[3]) {
    //     setFellowName("Sir. Doran Reynolds");
    //     setFellowDescription1("Inclusive Financial Systems");
    //     setFellowDescription2("");
    //   } else if (sliderRotation == fellowRotation[4]) {
    //     setFellowName("Professor David Chen");
    //     setFellowDescription1(
    //       "Behavioral Economics and Financial Decision-Making"
    //     );
    //     setFellowDescription2("");
    //   }
    // }

    // else if (sliderRotation == 90) {
    //   setFellowName("Mr. Dominick Mitchell");
    //   setFellowDescription1("Sustainable Development Finance");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 105) {
    //   setFellowName("Dr. Maria Hernandez");
    //   setFellowDescription1("Ethical Banking and Finance");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 120) {
    //   setFellowName("Mrs. Tamaki Patel");
    //   setFellowDescription1("Impact Investing and Measurement");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 135) {
    //   setFellowName("Sir. Doran Reynolds");
    //   setFellowDescription1("Inclusive Financial Systems");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 150) {
    //   setFellowName("Professor David Chen");
    //   setFellowDescription1(
    //     "Behavioral Economics and Financial Decision-Making"
    //   );
    //   setFellowDescription2("");
    // } else if (sliderRotation == 165) {
    //   setFellowName("Mr. Dominick Mitchell");
    //   setFellowDescription1("Sustainable Development Finance");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 180) {
    //   setFellowName("Dr. Maria Hernandez");
    //   setFellowDescription1("Ethical Banking and Finance");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 195) {
    //   setFellowName("Mrs. Tamaki Patel");
    //   setFellowDescription1("Impact Investing and Measurement");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 210) {
    //   setFellowName("Sir. Doran Reynolds");
    //   setFellowDescription1("Inclusive Financial Systems");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 225) {
    //   setFellowName("Professor David Chen");
    //   setFellowDescription1(
    //     "Behavioral Economics and Financial Decision-Making"
    //   );
    //   setFellowDescription2("");
    // } else if (sliderRotation == 240) {
    //   setFellowName("Mr. Dominick Mitchell");
    //   setFellowDescription1("Sustainable Development Finance");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 255) {
    //   setFellowName("Dr. Maria Hernandez");
    //   setFellowDescription1("Ethical Banking and Finance");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 270) {
    //   setFellowName("Mrs. Tamaki Patel");
    //   setFellowDescription1("Impact Investing and Measurement");
    //   setFellowDescription2("");
    // } else if (sliderRotation == 285) {
    //   setFellowName("Sir. Doran Reynolds");
    //   setFellowDescription1("Inclusive Financial Systems");
    //   setFellowDescription2("");
    // }
  };
  // console.log(
  //   "🚀 ~ file: index.jsx:120 ~ handleSliderRotation ~ sliderRotate:",
  //   sliderRotate
  // );

  return (
    <div className="lFellows" id="fellows_trigger">
      <div
        className="lFellows-bg -view"
        data-fellows-bg=""
        data-scroll=""
        data-scroll-sticky=""
        data-scroll-target="[data-router-view]"
      >
        <div
          className="lFellows-bg-inner"
          data-fellows-bg-inner=""
          style={{ transform: "scale(0)" }}
        ></div>
      </div>
      <div
        className="lFellows-inner -view"
        id="fellows"
        data-fellows-inner=""
        data-scroll=""
        // id="fellows_section"
      >
        <div className="lFellows-content" data-fellows-content="">
          <div className="lFellows-slider" data-fellows-slider="">
            <div className="cContainer -spLeftSmall -spRightSmall lFellows-title">
              <h2
                className="lFellows-title-inner"
                data-svg-title=""
                data-fellows-title=""
              >
                <svg viewBox="0 0 936.1 150.5">
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M100.9,49v51.2h-3.1C96.1,79,85.2,79.4,67.6,79.4H44.7v31.7c0,22.5,1.1,26.9,30.2,31.3v3.2H0.1v-3.2                c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h111.1l-3.4,33.2h-3.2c-1.3-27.1-18.9-28.1-41-28.1H44.5v62.8h22.9                C85,70.6,96,68.9,97.6,49L100.9,49L100.9,49z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M121,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h112.8L231.3,35h-3.1                c-1.5-27.1-21-27.3-42.2-27.3h-20.4v59.9h21.8c15.8,0,27.7-1.3,30-19.3h3.1v46.8h-3.1c-2.7-18.5-14.3-18.7-30-18.7h-21.8v34.4                c0,12.4-2.9,29.6,31.5,29.6c26.5,0,39.5-10.1,44.7-36.5h3.1c-0.2,16-2.9,29-7.1,41.6H121V142.4z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M247,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h70.6v3.2c-25.2,3.4-26,9.7-26,31.3                v68.9c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H247V142.4z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M373,142.4c25.2-3.4,25.4-9.7,26-31.3V37.2c-0.6-21.6-0.8-27.9-26-31.3V2.7h70.6v3.2c-25.2,3.4-26,9.7-26,31.3                v68.9c0,10.5,0,21.6,3.1,31.7l25.6,1.9c31.9,2.3,37.2-7.6,53.3-34.4l2.7,1.3l-12,39.1H373V142.4z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M580.5,0.2c-43.9,0-76.7,29-76.7,73.7c0,45.4,32.6,74.1,76.9,74.1c44.1,0,76.9-28.8,76.9-73.9                C657.6,36.8,634.3,0.2,580.5,0.2z M583.2,143c-37.8,0-55-41.6-55-74.1c0-28.4,14.5-63.6,50.6-63.6c32.1,0,53.8,35.3,54.4,72.5                C633.2,107.8,617.9,143,583.2,143z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M706.1,150.4H704L669.8,33c-5.2-15.3-5.9-22.3-23.3-27.1V2.7h59.4v3.2c-25.6,3.8-20.4,14.5-15.3,31.7l22.1,74.6                l33-87.8C741.5,11.6,734.6,8.2,722,5.9V2.7h61.3v3.2c-22.9,3.2-20.2,13-16.4,25.2l26.7,83.2L810.2,67c3.6-10.5,13-36.8,13-46.8                c0-10.3-9.5-11.8-21-14.3V2.7H857v3.2c-12.6,0.8-18.9,8-23.3,19.1L819,65.1l-30.9,85.3h-2.3L748.3,33.6L706.1,150.4z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                  <path
                    className="st0"
                    data-svg-title-item=""
                    d="M927.4,39.7H924c-3.4-17-8.8-33.4-29.6-33.4c-13.4,0-24.6,9.2-24.6,23.1c0,36.3,66.2,35.1,66.2,77.5                c0,27.1-26.9,41.2-51,41.2c-12.8,0-26.3-3.8-37-10.7l-6.1-35.7h3.8c5.2,20.2,19.3,40.1,42.4,40.1c15.5,0,27.7-9.2,27.7-25.6                c0-37.4-64.3-34-64.3-76c0-24.6,24.4-40.1,46.8-40.1c10.7,0,21.4,3.1,30.7,8.2L927.4,39.7z"
                    style={{ transformOrigin: "center", transform: "scale(1)" }}
                  ></path>
                </svg>
              </h2>
              <div
                className="cSubTitle -left -gray lFellows-title-sub"
                data-subtitle="true"
                data-fellows-subtitle=""
                style={{ overflow: "hidden" }}
              >
                <div
                  className="cFlatText cSubTitle-inner"
                  data-flat-text=""
                  style={{ padding: "0px 1.625px", transform: "scaleX(1.05)" }}
                >
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    フ
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    ェ
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    ロ
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    ー
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    紹
                  </span>
                  <span
                    className="cSubTitle-text"
                    data-subtitle-item=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    介
                  </span>
                </div>
              </div>
            </div>
            <div
              className="lFellows-slider-inner"
              data-slider-inner=""
              onMouseMove={handleMouseMovement}
              onMouseLeave={handleMouseLeave}
              onClick={handleSliderRotation}
            >
              <div
                className="cSliderMouseStalker"
                data-slider-stalker=""
                style={{ top: coordinates["y"], left: coordinates["x"] }}
              >
                <div className="cSliderMouseStalker-inner">
                  <div
                    className="cSliderMouseStalker-circle"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "rgb(255, 255, 255)",
                      transform: "scale(0, 0)",
                    }}
                    data-slider-stalker-circle=""
                  ></div>
                  <div className="cSliderMouseStalker-item">
                    <span
                      className="cSliderMouseStalker-text -next"
                      data-slider-stalker-next
                    >
                      NEXT
                    </span>
                    {/* <span
                      className="cSliderMouseStalker-text -prev"
                      data-slider-stalker-prev
                    >
                      PREV
                    </span> */}
                    <span
                      className="cSliderMouseStalker-text -prev"
                      data-slider-stalker-prev
                    >
                      NEXT
                    </span>
                    <span
                      className="cSliderMouseStalker-text -drag"
                      data-slider-stalker-drag
                    >
                      DRAG
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="lFellows-slider-list-continer"
                data-slider-list-inner=""
              >
                <ul
                  className="lFellows-slider-list"
                  data-slider-list=""
                  style={{ transform: `rotate(${sliderRotate}deg)` }}
                >
                  {fellowRotation.length > 0 &&
                    fellowRotation.map((item, index) => (
                      <li
                        className="lFellows-slider-item"
                        data-slider-item=""
                        data-index={index}
                        data-rotate={item?.rotation}
                        style={{ transform: `rotate(${item?.rotation}deg)` }}
                      >
                        <a
                          className="lFellows-slider-item-inner"
                          href="https://rara.ritsumei.ac.jp/fellows/masayo-takahashi/"
                          draggable="false"
                        >
                          <div
                            className="lFellows-slider-item-content"
                            data-has-data=""
                            data-link="https://rara.ritsumei.ac.jp/fellows/masayo-takahashi/"
                            data-name-en="Masayo Takahashi"
                            data-name-ja="高橋 政代"
                            data-study="次世代の視覚再建"
                          >
                            <div className="lFellows-slider-item-thumbnail">
                              <img
                                className="lFellows-slider-item-thumbnail-img"
                                src={item?.data?.imagePath}
                                alt=""
                                loading="lazy"
                              />
                              <img
                                className="lFellows-slider-item-thumbnail-img -cover"
                                src={item?.data?.clothAnimatedImage}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="lFellows-slider-item-cover">
                            <span
                              className="lFellows-slider-item-coverItem -l02"
                              style={{
                                backgroundImage: item?.data?.firstGraphicImage,
                              }}
                            ></span>
                            <span
                              className="lFellows-slider-item-coverItem -l03"
                              style={{
                                backgroundImage: item?.data?.secondGraphicImage,
                              }}
                            ></span>
                          </div>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="lFellows-slider-info" data-slider-info="">
              <div className="lFellows-slider-info-en">
                <p
                  className="lFellows-slider-info-en-text"
                  data-slider-info-name-en=""
                  style={{ transform: "translate(0px, 0%)" }}
                >
                  {FellowName}
                </p>
              </div>
              <div
                className="cFlatText lFellows-slider-info-textbox"
                data-flat-text=""
                style={{
                  padding: "0px 22.65px",
                  transform: "scaleX(1.05)",
                }}
              >
                <div className="lFellows-slider-info-ja">
                  <p
                    className="lFellows-slider-info-ja-text"
                    data-slider-info-name-ja=""
                    style={{ transform: "translate(0px, 0%)" }}
                  >
                    {FellowDescription1}
                  </p>
                </div>
                <div
                  className="lFellows-slider-info-study"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    transform: "translate(0px, 0%)",
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: FellowDescription2,
                    }}
                  ></div>
                </div>
              </div>
              <div className="lFellows-slider-info-more">
                <a
                  className="lFellows-slider-info-more-link"
                  href="https://rara.ritsumei.ac.jp/fellows/yuki-orikasa/"
                  data-slider-info-link=""
                  style={{ transform: "translate(0px, 0%)" }}
                >
                  VIEW DETAIL
                  <svg
                    className="lFellows-slider-info-more-icon"
                    role="img"
                    fill="currentColor"
                    width="17"
                    height="15"
                  ></svg>
                </a>
              </div>
              {/* <ul className="lFellows-slider-dots" data-slider-dots="">
                    <li className="lFellows-slider-dots-item"></li>
                    <li className="lFellows-slider-dots-item"></li>
                    <li className="lFellows-slider-dots-item -isCurrent"></li>
                    <li className="lFellows-slider-dots-item"></li>
                    <li className="lFellows-slider-dots-item"></li>
                  </ul> */}
            </div>

            <div className="lFellows-btn">
              <a className="lFellows-btn-link" href="/fellows">
                VIEW ALL FELLOWS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
