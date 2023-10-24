import React, { useEffect, useState } from "react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

import headOpenBGImage from "../../assets/home/images/b-vision_illust01.png";
import handOpenBGImage from "../../assets/home/images/b-vision_illust08.png";

import { FilledCircle } from "../../components/homeCanvas/FilledCircle/index";

import {
  Circle,
  getResponsiveCircleRadius,
} from "../../components/homeCanvas/middleCircle/index";

import {
  Ellipse,
  getResponsiveEllipseDimensions,
} from "../../components/homeCanvas/middleEllipse/index";

import {
  RockWithLabel,
  getResponsiveRockWithLebelDimensions,
} from "../../components/homeCanvas/Images/RockWithLabel";

import {
  getResponsivePersonWithRunPoseDimensions,
  PersonWithRunPose,
} from "../../components/homeCanvas/Images/PersonWithRunPose";

import {
  getResponsiveGlassesPersonDimensions,
  GlassesPerson,
} from "../../components/homeCanvas/Images/GlassesPerson";

import {
  getResponsiveEllipseWithCirclesDimensions,
  EllipseWithCircles,
} from "../../components/homeCanvas/Images/EllipseWithCircle/EllipseWithCircle";

import {
  getResponsiveShipDimensions,
  Ship,
} from "../../components/homeCanvas/Images/Ship";

import {
  getResponsiveInsectDimensions,
  Insect,
} from "../../components/homeCanvas/Images/Insect";

import {
  getResponsiveRoboticHandDimensions,
  RoboticHand,
} from "../../components/homeCanvas/Images/RoboticHand";

import {
  getResponsiveBoyLedftToGlassesManDimensions,
  BoyLedftToGlassesMan,
} from "../../components/homeCanvas/Images/BoyLedftToGlassesMan";

import {
  getResponsiveCircleOnGlassesPersonDimensions,
  CircleOnGlassesPerson,
} from "../../components/homeCanvas/Images/CircleOnGlassesPerson";

import {
  getResponsiveAeroplaneDimensions,
  Aeroplane,
} from "../../components/homeCanvas/Images/Aeroplane";

import {
  getResponsiveAeroplaneManDimensions,
  AeroplaneMan,
} from "../../components/homeCanvas/Images/AeroplaneMan";

import {
  getResponsiveBuildingAtLeftDimensions,
  BuildingAtLeft,
} from "../../components/homeCanvas/Images/BuildingAtLeft";

import {
  getResponsiveHandDimensions,
  Hand,
} from "../../components/homeCanvas/Images/Hand";

import {
  getResponsivePersonWithBookDimensions,
  PersonWithBook,
} from "../../components/homeCanvas/Images/PersonWithBook";

import {
  getResponsiveHeadSkullWithRedDotDimensions,
  HeadSkullWithRedDot,
} from "../../components/homeCanvas/Images/HeadSkullWithRedDot";

import {
  getResponsiveMapDimensions,
  Map,
} from "../../components/homeCanvas/Images/Map";

import {
  getResponsiveBuildingWithSpeakerDimensions,
  BuildingWithSpeaker,
} from "../../components/homeCanvas/Images/BuildingWithSpeaker";

import {
  getResponsivePenDimensions,
  Pen,
} from "../../components/homeCanvas/Images/Pen";

import {
  getResponsiveRedBuildingDimensions,
  RedBuilding,
} from "../../components/homeCanvas/Images/RedBuilding";

import {
  YoungGirl,
  getResponsiveGirlDimensions,
} from "../../components/homeCanvas/Images/YoungGirl";

import {
  Lady,
  getResponsiveLadyDimensions,
} from "../../components/homeCanvas/Images/Lady";

import {
  Leaf,
  getResponsiveLeafDimensions,
} from "../../components/homeCanvas/Images/Leaf";

import {
  Eye,
  getResponsiveEyeDimensions,
} from "../../components/homeCanvas/Images/Eye";

import {
  SlimManWithGlasses,
  getResponsiveSlimManWithGlassesDimensions,
} from "../../components/homeCanvas/Images/SlimManWithGlasses";

import {
  Equipment,
  getResponsiveEquipmentDimensions,
} from "../../components/homeCanvas/Images/Equipment";

import {
  Aalphabet,
  getResponsiveAalphabetDimensions,
} from "../../components/homeCanvas/Images/Aalphabet";

import {
  GirlCircle,
  getResponsiveGirlCircleDimensions,
} from "../../components/homeCanvas/Images/GirlCircle";

import {
  PersonAboveCart,
  getResponsivePersonAboveCartDimensions,
} from "../../components/homeCanvas/Images/PersonAboveCart";

import {
  Dryer,
  getResponsiveDryerDimensions,
} from "../../components/homeCanvas/Images/Dryer";

import {
  CarImage,
  getResponsiveCarImageDimensions,
} from "../../components/homeCanvas/Images/CarImage";

import {
  ManWithOnlyFace,
  getResponsiveManWithOnlyFaceDimensions,
} from "../../components/homeCanvas/Images/ManWithOnlyFace";

import {
  Cart,
  getResponsiveCartDimensions,
} from "../../components/homeCanvas/Images/Cart";

import {
  BlackRock,
  getResponsiveBlackRockDimensions,
} from "../../components/homeCanvas/Images/BlackRock";

import {
  RedBook,
  getResponsiveRedBookDimensions,
} from "../../components/homeCanvas/Images/RedBook";

import {
  GlassesBoy,
  getResponsiveGlassesBoyDimensions,
} from "../../components/homeCanvas/Images/GlassesBoy";

import {
  Skull,
  getResponsiveSkullDimensions,
} from "../../components/homeCanvas/Images/Skull";

import {
  R_Alphabet,
  getResponsiveR_AlphabetDimensions,
} from "../../components/homeCanvas/Images/R_Alphabet";

import {
  HandFoldingMan,
  getResponsiveHandFoldingManDimensions,
} from "../../components/homeCanvas/Images/HandFoldingMan";

import {
  ManWithHandDirection,
  getResponsiveManWithHandDirectionDimensions,
} from "../../components/homeCanvas/Images/ManWithHandDirection";

import {
  RoofWithRedTop,
  getResponsiveRoofWithRedTopDimensions,
} from "../../components/homeCanvas/Images/RoofWithRedTop";

// getResponsiveRedA_AlphabetDimensions
import {
  getResponsiveRedA_AlphabetDimensions,
  RedA_Alphabet,
} from "../../components/homeCanvas/Images/RedA_Alpahbet";

import {
  ResearchPerson,
  getResponsiveResearchPersonDimensions,
} from "../../components/homeCanvas/Images/ResearchPerson";

import {
  CircleWithThreeColor,
  getResponsiveCircleWithThreeColorDimensions,
} from "../../components/homeCanvas/Images/CircleWithThreeColor";

import { CircleWithEllipseRotation } from "../../components/homeCanvas/CircleWithEllipseRotation";

import { UploadedImage } from "../../components/homeCanvas/UploadedImage";

import { UploadedImageTransparent } from "../../components/homeCanvas/UploadImageTransparent";

import {
  RAlphabet,
  getResponsiveRAlphabetDimensions,
} from "../../components/homeCanvas/Images/RAlphabet";

import { BuildingTwoRedLines } from "../../components/homeCanvas/Images/BuildingTwoRedLines";

import GuideLines from "./Guidelines/index";
import Fellows from "./Fellows/index";
import FellowsMobile from "./FellowsMobile/index";

import Blogs from "./Blogs/index";
import Contact from "./Contact/index";

import {
  BigRedCircle,
  getResponsiveBigRedCircleDimensions,
} from "../../components/homeCanvas/Images/bigRedCircle";
import {
  UpperCircleWithMan,
  getResponsiveUpperCircleWithManDimensions,
} from "../../components/homeCanvas/Images/UpperCircleWithMan";
import {
  PersonLaptopAboveSkull,
  getResponsivePersonLaptopAboveSkullDimensions,
} from "../../components/homeCanvas/Images/PersonLaptopAboveSkull";
import {
  PersonOnPhoneBottomRight,
  getResponsivePersonOnPhoneBottomRightDimensions,
} from "../../components/homeCanvas/Images/PersonOnPhoneBottomRight";
import {
  getResponsiveRedCircleInsideMiddleCircleDimensions,
  RedCircleInsideMiddleCircle,
} from "../../components/homeCanvas/middleCircle/FilledCircleRotation/FilledCircleInsideCircle/redCircle";
import {
  BlueCircleInsideMiddleCircle,
  getResponsiveBlueCircleInsideMiddleCircleDimensions,
} from "../../components/homeCanvas/middleCircle/FilledCircleRotation/FilledCircleInsideCircle/blueCircle";
import {
  FirstCircleOutsideMiddleCircle,
  getResponsiveFirstCircleOutsideMiddleCircleDimensions,
} from "../../components/homeCanvas/middleCircle/FilledCircleRotation/FilledCircleOutsideCircle/firstCircle";
import {
  SecondCircleOutsideMiddleCircle,
  getResponsiveSecondCircleOutsideMiddleCircleDimensions,
} from "../../components/homeCanvas/middleCircle/FilledCircleRotation/FilledCircleOutsideCircle/secondCircle";

import {
  ManOutsideEllipse,
  getResponsiveManOutsideEllipseDimensions,
} from "../../components/homeCanvas/Images/ManOutsideEllipse";

import {
  FirstCircleOutsideEllipse,
  getResponsiveFirstCircleOutsideEllipseDimensions,
} from "../../components/homeCanvas/middleEllipse/FilledCircleOutsideEllipse/FirstCircle";
import {
  SecondCircleOutsideEllipse,
  getResponsiveSecondCircleOutsideEllipseDimensions,
} from "../../components/homeCanvas/middleEllipse/FilledCircleOutsideEllipse/SecondCircle";
import {
  BlueR_Alphabet,
  getResponsiveBlueR_AlphabetDimensions,
} from "../../components/homeCanvas/Images/BlueR_Alphabet";

import videoSrc from "../../assets/videos/WeAreWVÉS.mp4";

import FooterContainer from "./FooterContainer/index";

gsap.registerPlugin(ScrollTrigger, Draggable);

const index = () => {
  const [homeData, setHomeData] = useState("");
  useEffect(() => {
    const apiURL = "http://localhost:4500/api/home/getHome";

    const getHomeData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setHomeData(data.home[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getHomeData();
  }, []);

  useEffect(() => {
    // const canvas = document.querySelector("#canvas1");

    // const canvasContainer = document.querySelector(".spacer");

    // const spacerHeight = canvasContainer.clientHeight;

    // console.log("spacer height: " + spacerHeight);
    // Calculate 1% of window's height
    // const scrollLimit = spacerHeight * 0.01;

    const scrollContainer = document.querySelector(".custom-container");

    // const c = canvas.getContext("2d");
    // console.log("ccc: ", c);

    // canvas.width = document.documentElement.clientWidth;
    // canvas.height = document.documentElement.clientHeight;

    // canvas.style.width = document.documentElement.clientWidth;
    // +"px";
    // canvas.style.height = document.documentElement.clientHeight;
    // +"px";

    // const mouse = {
    //   x: innerWidth / 2,
    //   y: innerHeight / 2,
    // };

    // let prevMouseX = null;
    // let prevMouseY = null;

    // let deltaX = null;
    // let deltaY = null;

    // const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

    // const timeline = gsap.timeline();

    // const canvasScroll = gsap.to("#canvas1", {
    //   scrollTrigger: {
    //     trigger: "#canvas1",
    //     scroller: scrollContainer,
    //     start: "top top",
    //     end: "+=1%",
    //     scrub: true,
    //     pin: true, // pin the canvas in place
    //     anticipatePin: 1, // 1 means it will anticipate the pin and unpin before they happen.
    //   },
    // });

    // Attach an event listener to the canvas for the mousemove event
    // canvas.addEventListener("mousemove", (event) => {
    //   const rect = canvas.getBoundingClientRect();
    //   const mouseX = event.clientX - rect.left;
    //   const mouseY = event.clientY - rect.top;

    //   if (prevMouseX !== null && prevMouseY !== null) {
    //     deltaX = mouseX - prevMouseX;
    //     deltaY = mouseY - prevMouseY;
    //     // console.log("MOUSE X ------", mouseX);

    //     images.forEach((image) => {
    //       let imageX = null;
    //       let imageY = null;

    //       if (Math.abs(deltaX) > Math.abs(deltaY)) {
    //         if (deltaX > 0) {
    //           // console.log("Right--");
    //           if (mouseX == innerWidth / 2) {
    //             // image.x = image.x1;
    //           } else {
    //             image.x = image.x - 0.1;
    //           }
    //         } else {
    //           if (mouseX == innerWidth / 2) {
    //             // image.x = image.x1;
    //           } else {
    //             image.x = image.x + 0.1;
    //           }
    //           // console.log("Left---", deltaX);
    //         }
    //       } else {
    //         if (deltaY > 0) {
    //           if (mouseY == innerHeight / 2) {
    //             // image.y = image.y1;
    //           } else {
    //             image.y = image.y - 0.1;
    //           }
    //           // Mouse is moving down
    //           // console.log("Down");
    //         } else {
    //           if (mouseY == innerHeight / 2) {
    //             // image.y = image.y1;
    //           } else {
    //             // Mouse is moving up
    //             image.y = image.y + 0.1;
    //           }
    //           // console.log("Up");
    //         }
    //       }
    //     });
    //   }

    //   prevMouseX = mouseX;
    //   prevMouseY = mouseY;
    // });

    // window.addEventListener("resize", () => {
    //   canvas.width = document.documentElement.clientWidth;
    //   canvas.height = document.documentElement.clientHeight;

    //   // if (canvas.width <= 320) {
    //   //   canvas.height = 650;
    //   //   canvas.style.height = 650 + "px";
    //   // }
    //   // if (canvas.width <= 375) {
    //   //   canvas.height = 636;
    //   //   canvas.style.height = 636 + "px";
    //   // }
    //   // if (canvas.width <= 500) {
    //   //   canvas.height = 636;
    //   //   canvas.style.height = 636 + "px";
    //   // }

    //   init();
    // });

    // Implementation
    // let circles;
    // let images;

    // let staticImages;
    // let circleAboveImages;

    // let imageDummy;

    // let images1;

    // function init() {
    //   const screenWidth = document.documentElement.clientWidth;

    //   circles = [];
    //   images = [];
    //   staticImages = [];
    //   circleAboveImages = [];
    //   imageDummy = [];

    //   images1 = [];

    //   imageDummy.push(
    //     new UploadedImageTransparent(
    //       gsap,
    //       scrollContainer,
    //       c,
    //       0,
    //       30,
    //       require("../../assets/home/images/header_60.png"),
    //       innerWidth,
    //       innerHeight
    //     )
    //   );
    //   const FirstCircleOutsideEllipseData =
    //     getResponsiveFirstCircleOutsideEllipseDimensions(canvas, screenWidth);
    //   circles.push(
    //     FirstCircleOutsideEllipse(
    //       FirstCircleOutsideEllipseData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );
    //   // circles.push(
    //   //   new FilledCircle(
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     25,
    //   //     "#af292f",
    //   //     0,
    //   //     0.0002,
    //   //     700,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );
    //   const SecondCircleOutsideEllipseData =
    //     getResponsiveSecondCircleOutsideEllipseDimensions(canvas, screenWidth);
    //   circles.push(
    //     SecondCircleOutsideEllipse(
    //       SecondCircleOutsideEllipseData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );
    //   // circles.push(
    //   //   new FilledCircle(
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     25,
    //   //     "#af292f",
    //   //     3.125,
    //   //     0.0002,
    //   //     700,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   const { width, height, radius, verticalScale } =
    //     getResponsiveEllipseDimensions(canvas, screenWidth);

    //   circles.push(
    //     new Ellipse(
    //       width,
    //       height,
    //       radius,
    //       verticalScale,
    //       "grey",
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       0,
    //       0,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   const { circleWidth, circleHeight, circleRadius } =
    //     getResponsiveCircleRadius(canvas, screenWidth);
    //   circles.push(
    //     new Circle(
    //       circleWidth,
    //       circleHeight,
    //       circleRadius,
    //       "grey",
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       0,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // Red Circle Inside Middle Circle
    //   const RedCircleInsideMiddleCircleData =
    //     getResponsiveRedCircleInsideMiddleCircleDimensions(canvas, screenWidth);
    //   circles.push(
    //     RedCircleInsideMiddleCircle(
    //       RedCircleInsideMiddleCircleData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   const BlueCircleInsideMiddleCircleData =
    //     getResponsiveBlueCircleInsideMiddleCircleDimensions(
    //       canvas,
    //       screenWidth
    //     );
    //   circles.push(
    //     BlueCircleInsideMiddleCircle(
    //       BlueCircleInsideMiddleCircleData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   const FirstCircleOutsideMiddleCircleData =
    //     getResponsiveFirstCircleOutsideMiddleCircleDimensions(
    //       canvas,
    //       screenWidth
    //     );
    //   circles.push(
    //     FirstCircleOutsideMiddleCircle(
    //       FirstCircleOutsideMiddleCircleData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );
    //   // circles.push(
    //   //   new FilledCircle(
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     10,
    //   //     "#af292f",
    //   //     0,
    //   //     0.001,
    //   //     305,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   const SecondCircleOutsideMiddleCircleData =
    //     getResponsiveSecondCircleOutsideMiddleCircleDimensions(
    //       canvas,
    //       screenWidth
    //     );
    //   circles.push(
    //     SecondCircleOutsideMiddleCircle(
    //       SecondCircleOutsideMiddleCircleData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );
    //   // circles.push(
    //   //   new FilledCircle(
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     10,
    //   //     "#af292f",
    //   //     3.125,
    //   //     0.001,
    //   //     305,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // Ellipse when scrolled down --- done

    //   circleAboveImages.push(
    //     new Ellipse(
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       0,
    //       0,
    //       "#ADADAD",
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       615,
    //       215,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // Ellipse rotating circle when scrolled down --- done
    //   circleAboveImages.push(
    //     new CircleWithEllipseRotation(
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       0,
    //       "rgb(91, 146, 157)",
    //       0,
    //       0,
    //       0,
    //       0,
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       10,
    //       0.1,
    //       0.003,
    //       615,
    //       215,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   circleAboveImages.push(
    //     new CircleWithEllipseRotation(
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       0,
    //       "#af292f",
    //       0,
    //       0,
    //       0,
    //       0,
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       5,
    //       0.1,
    //       0.003,
    //       -615,
    //       -215,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   circleAboveImages.push(
    //     new CircleWithEllipseRotation(
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       0,
    //       "#af292f",
    //       0,
    //       0,
    //       0,
    //       0,
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       10,
    //       17.3,
    //       0.003,
    //       615,
    //       215,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   circleAboveImages.push(
    //     new CircleWithEllipseRotation(
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       0,
    //       "#af292f",
    //       0,
    //       0,
    //       0,
    //       0,
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       10,
    //       -4.7,
    //       0.003,
    //       615,
    //       215,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // RAlphabet --- DONE

    //   const RAlphabetWithLabelData = getResponsiveRAlphabetDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     RAlphabet(RAlphabetWithLabelData, canvas, gsap, scrollContainer, c)
    //   );

    //   // images.push(RAlpabet(canvas, gsap, scrollContainer, c));

    //   // building with two red lines and left of center --- done
    //   images.push(BuildingTwoRedLines(canvas, gsap, scrollContainer, c));

    //   // Rock with red label --- done
    //   const RockWithLabelData = getResponsiveRockWithLebelDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     RockWithLabel(RockWithLabelData, canvas, gsap, scrollContainer, c)
    //   );

    //   // tower with clock center --- done
    //   images.push(
    //     new UploadedImage(
    //       canvas.width / 2,
    //       canvas.height / 2,
    //       require("../../assets/home/images/header_29.png"),
    //       0,
    //       0,
    //       0,
    //       canvas.width / 2 - 115,
    //       canvas.height / 2 - 135,
    //       215,
    //       200,
    //       0,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // A alphabet ---- done

    //   const AalphabetData = getResponsiveAalphabetDimensions(
    //     canvas,
    //     screenWidth
    //   );

    //   images.push(Aalphabet(AalphabetData, canvas, gsap, scrollContainer, c));

    //   // man with hand direction ---- done

    //   const ManWithHandDirectionData =
    //     getResponsiveManWithHandDirectionDimensions(canvas, screenWidth);
    //   images.push(
    //     ManWithHandDirection(
    //       ManWithHandDirectionData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width,
    //   //     canvas.height / 2 - 15,
    //   //     require("../../assets/home/images/header_22.png"),
    //   //     115,
    //   //     150,
    //   //     0,
    //   //     canvas.width / 2 + 195,
    //   //     canvas.height / 2 + 15,
    //   //     115,
    //   //     160,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // roof with red top --- done
    //   const RoofWithRedTopData = getResponsiveRoofWithRedTopDimensions(
    //     canvas,
    //     screenWidth
    //   );

    //   images.push(
    //     RoofWithRedTop(RoofWithRedTopData, canvas, gsap, scrollContainer, c)
    //   );

    //   // red book ---- done

    //   const RedBookData = getResponsiveRedBookDimensions(canvas, screenWidth);
    //   images.push(RedBook(RedBookData, canvas, gsap, scrollContainer, c));

    //   // car image --- done

    //   const CarImageData = getResponsiveCarImageDimensions(canvas, screenWidth);
    //   images.push(CarImage(CarImageData, canvas, gsap, scrollContainer, c));

    //   // dryer --- done

    //   const DryerData = getResponsiveDryerDimensions(canvas, screenWidth);
    //   images.push(Dryer(DryerData, canvas, gsap, scrollContainer, c));

    //   // R alphabet center --- done

    //   const BlueR_AlphabetData = getResponsiveBlueR_AlphabetDimensions(
    //     canvas,
    //     screenWidth
    //   );

    //   images.push(
    //     BlueR_Alphabet(BlueR_AlphabetData, canvas, gsap, scrollContainer, c)
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2 + 465,
    //   //     canvas.height / 2 + 100,
    //   //     require("../../assets/home/images/header_52_1.png"),
    //   //     85,
    //   //     100,
    //   //     -45,
    //   //     canvas.width / 2 + 3,
    //   //     canvas.height / 2 - 90,
    //   //     80,
    //   //     100,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // slim man with glasses ---done

    //   const SlimManWithGlassesData = getResponsiveSlimManWithGlassesDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     SlimManWithGlasses(
    //       SlimManWithGlassesData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   //Girl  --- done
    //   const GirlData = getResponsiveGirlDimensions(canvas, screenWidth);
    //   images.push(YoungGirl(GirlData, canvas, gsap, scrollContainer, c));

    //   //girl circle ---- DONE

    //   const GirlCircleData = getResponsiveGirlCircleDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(GirlCircle(GirlCircleData, canvas, gsap, scrollContainer, c));

    //   // man with joined hand --- done
    //   // GlassesBoy

    //   const GlassesBoyData = getResponsiveGlassesBoyDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(GlassesBoy(GlassesBoyData, canvas, gsap, scrollContainer, c));

    //   // black rock front of girl and behind book lady --- done

    //   const BlackRockData = getResponsiveBlackRockDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(BlackRock(BlackRockData, canvas, gsap, scrollContainer, c));

    //   // Eye
    //   const EyeData = getResponsiveEyeDimensions(canvas, screenWidth);
    //   images.push(Eye(EyeData, canvas, gsap, scrollContainer, c));

    //   // Leaf --- done

    //   const LeafData = getResponsiveLeafDimensions(canvas, screenWidth);
    //   images.push(Leaf(LeafData, canvas, gsap, scrollContainer, c));

    //   // person above the cart --- done

    //   const PersonAboveCartData = getResponsivePersonAboveCartDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     PersonAboveCart(PersonAboveCartData, canvas, gsap, scrollContainer, c)
    //   );

    //   // cart --- done

    //   const CartData = getResponsiveCartDimensions(canvas, screenWidth);
    //   images.push(Cart(CartData, canvas, gsap, scrollContainer, c));

    //   // person on phone bottom right corner

    //   const PersonOnPhoneBottomRightData =
    //     getResponsivePersonOnPhoneBottomRightDimensions(canvas, screenWidth);
    //   images.push(
    //     PersonOnPhoneBottomRight(
    //       PersonOnPhoneBottomRightData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width - 130,
    //   //     canvas.height - 153,
    //   //     require("../../assets/home/images/header_27.png"),
    //   //     115,
    //   //     135,
    //   //     -15,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // researcher person --- done

    //   const ResearchPersonData = getResponsiveResearchPersonDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     ResearchPerson(ResearchPersonData, canvas, gsap, scrollContainer, c)
    //   );

    //   // boy left to glasses man --- done

    //   const BoyLeftToGlassMannData =
    //     getResponsiveBoyLedftToGlassesManDimensions(canvas, screenWidth);
    //   images.push(
    //     BoyLedftToGlassesMan(
    //       BoyLeftToGlassMannData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     require("../../assets/home/images/header_61.png"),
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     canvas.width / 2 - 195,
    //   //     canvas.height / 2 - 60,
    //   //     75,
    //   //     105,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // building with speaker --- done

    //   const BuildingWithSpeakerData =
    //     getResponsiveBuildingWithSpeakerDimensions(canvas, screenWidth);
    //   images.push(
    //     BuildingWithSpeaker(
    //       BuildingWithSpeakerData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     require("../../assets/home/images/header_37.png"),
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     canvas.width / 2 - 247,
    //   //     canvas.height / 2 - 13,
    //   //     200,
    //   //     100,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   //glasses peron --- DONE
    //   // With hands open
    //   // const { width, height, radius, verticalScale } =
    //   //   getResponsiveEllipseDimensions(canvas, screenWidth);
    //   // getResponsiveGlassesPersonDimensions

    //   // const RockWithLabelData = getResponsiveRockWithLebelDimensions(
    //   //   canvas,
    //   //   screenWidth
    //   // );
    //   // images.push(
    //   //   RockWithLabel(RockWithLabelData, canvas, gsap, scrollContainer, c)
    //   // );

    //   const GlassesPersonWithLabelData = getResponsiveGlassesPersonDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     GlassesPerson(
    //       GlassesPersonWithLabelData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     265, // position-x
    //   //     canvas.height / 2 - 180,
    //   //     require("../../assets/home/images/header_10.png"),
    //   //     370, //width
    //   //     440, //height
    //   //     0, // rotation
    //   //     canvas.width / 2 - 210,
    //   //     canvas.height / 2 - 90,
    //   //     175,
    //   //     200,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // red A alphabet --- done

    //   const RedA_AlphabetData = getResponsiveRedA_AlphabetDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     RedA_Alphabet(RedA_AlphabetData, canvas, gsap, scrollContainer, c)
    //   );
    //   // images.push(
    //   //   new UploadedImage(
    //   //     363,
    //   //     220,
    //   //     require("../../assets/home/images/header_43.png"),
    //   //     50,
    //   //     50,
    //   //     0,
    //   //     canvas.width / 2 - 140,
    //   //     canvas.height / 2 - 35,
    //   //     95,
    //   //     100,
    //   //     -40,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     363,
    //   //     220,
    //   //     require("../../assets/home/images/header_43.png"),
    //   //     50,
    //   //     50,
    //   //     0,
    //   //     canvas.width / 2 - 140,
    //   //     canvas.height / 2 - 35,
    //   //     95,
    //   //     100,
    //   //     -40,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // red building --- done

    //   const RedBuildingData = getResponsiveRedBuildingDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     RedBuilding(RedBuildingData, canvas, gsap, scrollContainer, c)
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     require("../../assets/home/images/header_23.png"),
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     canvas.width / 2 - 225,
    //   //     canvas.height / 2 + 30,
    //   //     145,
    //   //     115,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // man with only face --- done

    //   const ManWithOnlyFaceData = getResponsiveManWithOnlyFaceDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     ManWithOnlyFace(ManWithOnlyFaceData, canvas, gsap, scrollContainer, c)
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     -300,
    //   //     550,
    //   //     require("../../assets/home/images/header_38.png"),
    //   //     165,
    //   //     165,
    //   //     0,
    //   //     canvas.width / 2 - 140,
    //   //     canvas.height / 2 - 8,
    //   //     165,
    //   //     165,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // hand folding person ---- done

    //   const HandHoldingPersonData = getResponsiveHandFoldingManDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     HandFoldingMan(HandHoldingPersonData, canvas, gsap, scrollContainer, c)
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     600,
    //   //     canvas.width,
    //   //     require("../../assets/home/images/header_49.png"),
    //   //     115,
    //   //     160,
    //   //     0,
    //   //     canvas.width / 2 - 120,
    //   //     canvas.height / 2 + 45,
    //   //     115,
    //   //     160,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // man with hand outside ellipse --- done

    //   const ManOutsideEllipseData = getResponsiveManOutsideEllipseDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     ManOutsideEllipse(
    //       ManOutsideEllipseData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     500,
    //   //     canvas.width,
    //   //     require("../../assets/home/images/header_51.png"),
    //   //     110,
    //   //     155,
    //   //     0,
    //   //     canvas.width / 2 - 170,
    //   //     canvas.height / 2 + 75,
    //   //     95,
    //   //     150,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // building at left side in bottom --- done

    //   const BuildingAtLeftData = getResponsiveBuildingAtLeftDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     BuildingAtLeft(BuildingAtLeftData, canvas, gsap, scrollContainer, c)
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     require("../../assets/home/images/header_24.png"),
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     canvas.width / 2 - 360,
    //   //     canvas.height / 2 + 10,
    //   //     165,
    //   //     100,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // lady with the book --- DONE
    //   const LadyData = getResponsiveLadyDimensions(canvas, screenWidth);
    //   images.push(Lady(LadyData, canvas, gsap, scrollContainer, c));

    //   //Circle with three colors of lady book --- done

    //   const CircleWithThreeColorData =
    //     getResponsiveCircleWithThreeColorDimensions(canvas, screenWidth);
    //   images.push(
    //     CircleWithThreeColor(
    //       CircleWithThreeColorData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   //equipment --- done

    //   const EquipmentData = getResponsiveEquipmentDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(Equipment(EquipmentData, canvas, gsap, scrollContainer, c));

    //   //ship done

    //   const ShipLabelData = getResponsiveShipDimensions(canvas, screenWidth);
    //   images.push(Ship(ShipLabelData, canvas, gsap, scrollContainer, c));

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2 - 250,
    //   //     canvas.height / 2 - 145,
    //   //     require("../../assets/home/images/header_47.png"),
    //   //     150,
    //   //     165,
    //   //     0,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // ellipse with circles and lines --- DONE

    //   const EllipseWithCircleData = getResponsiveEllipseWithCirclesDimensions(
    //     canvas,
    //     screenWidth
    //   );

    //   images.push(
    //     EllipseWithCircles(
    //       EllipseWithCircleData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   //circle with colors on glasses person --- DONE

    //   const CircleOnGlassesPersonWithLabel =
    //     getResponsiveCircleOnGlassesPersonDimensions(canvas, screenWidth);
    //   images.push(
    //     CircleOnGlassesPerson(
    //       CircleOnGlassesPersonWithLabel,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2 - 445,
    //   //     canvas.height / 2 - 13,
    //   //     require("../../assets/home/images/header_4.png"),
    //   //     215,
    //   //     120,
    //   //     0,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // person with lines and run pose ---done

    //   const PersonWithRunPoseData = getResponsivePersonWithRunPoseDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     PersonWithRunPose(
    //       PersonWithRunPoseData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     -45,
    //   //     77,
    //   //     require("../../assets/home/images/header_13_1.png"),
    //   //     295,
    //   //     260,
    //   //     0,
    //   //     canvas.width / 2 - 420,
    //   //     canvas.height / 2 - 62,
    //   //     135,
    //   //     115,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   //head skull with red dot --- done

    //   //Here I am
    //   // import {
    //   //   getResponsiveHeadSkullWithRedDotDimensions,
    //   //   HeadSkullWithRedDot,
    //   // } from "../../components/homeCanvas/Images/HeadSkullWithRedDot";

    //   const HeadSkullWithLabelData = getResponsiveHeadSkullWithRedDotDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     HeadSkullWithRedDot(
    //       HeadSkullWithLabelData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );
    //   // images.push(
    //   //   new UploadedImage(
    //   //     340,
    //   //     87,
    //   //     require("../../assets/home/images/header_44.png"),
    //   //     95,
    //   //     90,
    //   //     0,
    //   //     canvas.width / 2 - 260,
    //   //     canvas.height / 2 - 137,
    //   //     60,
    //   //     57,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // person laptop above skull ---- done

    //   const PersonLaptopAboveSkullData =
    //     getResponsivePersonLaptopAboveSkullDimensions(canvas, screenWidth);
    //   images.push(
    //     PersonLaptopAboveSkull(
    //       PersonLaptopAboveSkullData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     341,
    //   //     59,
    //   //     require("../../assets/home/images/header_58.png"),
    //   //     40,
    //   //     55,
    //   //     0,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // PEN ---- done

    //   const PenWithLabelData = getResponsivePenDimensions(canvas, screenWidth);
    //   images.push(Pen(PenWithLabelData, canvas, gsap, scrollContainer, c));

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2 - 330,
    //   //     -45,
    //   //     require("../../assets/home/images/header_11.png"),
    //   //     125,
    //   //     240,
    //   //     -3,
    //   //     canvas.width / 2 - 180,
    //   //     canvas.height / 2 - 190,
    //   //     45,
    //   //     72,
    //   //     -10,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // Map --- done

    //   const MapWithLabelData = getResponsiveMapDimensions(canvas, screenWidth);
    //   images.push(Map(MapWithLabelData, canvas, gsap, scrollContainer, c));

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2 - 310,
    //   //     5,
    //   //     require("../../assets/home/images/header_54.png"),
    //   //     215,
    //   //     125,
    //   //     0,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   //AEROPLANE MAN ---- done

    //   const AeroplaneManWithLabelData = getResponsiveAeroplaneManDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     AeroplaneMan(
    //       AeroplaneManWithLabelData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2 - 70,
    //   //     10,
    //   //     require("../../assets/home/images/header_20.png"),
    //   //     40,
    //   //     90,
    //   //     -20,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // Aeroplane --- done

    //   const AeroplaneWithLabelData = getResponsiveAeroplaneDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     Aeroplane(AeroplaneWithLabelData, canvas, gsap, scrollContainer, c)
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2 - 145,
    //   //     45,
    //   //     require("../../assets/home/images/header_2.png"),
    //   //     180,
    //   //     70,
    //   //     0,
    //   //     canvas.width / 2 + 70,
    //   //     canvas.height / 2 - 243,
    //   //     100,
    //   //     40,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // Skull with brain --- done

    //   const SkullData = getResponsiveSkullDimensions(canvas, screenWidth);
    //   images.push(Skull(SkullData, canvas, gsap, scrollContainer, c));

    //   // Upper circle with man --- done

    //   const UpperCricleWithManData = getResponsiveUpperCircleWithManDimensions(
    //     canvas,
    //     screenWidth
    //   );
    //   images.push(
    //     UpperCircleWithMan(
    //       UpperCricleWithManData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     145,
    //   //     220,
    //   //     require("../../assets/home/images/header_12.png"),
    //   //     270,
    //   //     200,
    //   //     0,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   //big red circle --- DONE
    //   const BigRedCircleData = getResponsiveBigRedCircleDimensions(
    //     canvas,
    //     screenWidth
    //   );

    //   images.push(
    //     BigRedCircle(BigRedCircleData, canvas, gsap, scrollContainer, c)
    //   );
    //   // images.push(
    //   //   new UploadedImage(
    //   //     -220,
    //   //     canvas.height - 95,
    //   //     require("../../assets/home/images/header_55.png"),
    //   //     675,
    //   //     550,
    //   //     0,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // hand --- DONE

    //   const HandLabelData = getResponsiveHandDimensions(canvas, screenWidth);

    //   images.push(Hand(HandLabelData, canvas, gsap, scrollContainer, c));

    //   // images.push(
    //   //   new UploadedImage(
    //   //     55,
    //   //     canvas.height - 270,
    //   //     require("../../assets/home/images/header_7.png"),
    //   //     300,
    //   //     285,
    //   //     0,
    //   //     canvas.width / 2 - 345,
    //   //     canvas.height / 2 + 40,
    //   //     165,
    //   //     150,
    //   //     5,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // robotic hand --- done

    //   const RoboticHanLabelData = getResponsiveRoboticHandDimensions(
    //     canvas,
    //     screenWidth
    //   );

    //   images.push(
    //     RoboticHand(RoboticHanLabelData, canvas, gsap, scrollContainer, c)
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     275,
    //   //     canvas.height - 185,
    //   //     require("../../assets/home/images/header_5.png"),
    //   //     255,
    //   //     235,
    //   //     0,
    //   //     canvas.width / 2 - 275,
    //   //     canvas.height / 2 + 100,
    //   //     100,
    //   //     100,
    //   //     5,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   // insect

    //   const InsectLabelData = getResponsiveInsectDimensions(
    //     canvas,
    //     screenWidth
    //   );

    //   images.push(Insect(InsectLabelData, canvas, gsap, scrollContainer, c));

    //   // images.push(
    //   //   new UploadedImage(
    //   //     canvas.width / 2 - 280,
    //   //     canvas.height - 115,
    //   //     require("../../assets/home/images/header_53.png"),
    //   //     150,
    //   //     115,
    //   //     0,
    //   //     canvas.width / 2 - 160,
    //   //     canvas.height / 2 + 175,
    //   //     70,
    //   //     55,
    //   //     90,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );

    //   //person with book holding --- DONE

    //   const PersonWithBookLabelData = getResponsivePersonWithBookDimensions(
    //     canvas,
    //     screenWidth
    //   );

    //   images.push(
    //     PersonWithBook(
    //       PersonWithBookLabelData,
    //       canvas,
    //       gsap,
    //       scrollContainer,
    //       c
    //     )
    //   );

    //   // images.push(
    //   //   new UploadedImage(
    //   //     75,
    //   //     canvas.height - 135,
    //   //     require("../../assets/home/images/header_40.png"),
    //   //     100,
    //   //     135,
    //   //     0,
    //   //     canvas.width / 2,
    //   //     canvas.height / 2,
    //   //     0,
    //   //     0,
    //   //     0,
    //   //     gsap,
    //   //     scrollContainer,
    //   //     c
    //   //   )
    //   // );
    // }

    // Animation Loop
    // function animate() {
    //   requestAnimationFrame(animate);
    //   c.clearRect(0, 0, canvas.width, canvas.height);
    //   imageDummy.forEach((image) => {
    //     // image.draw();
    //   });
    //   circles.forEach((object) => {
    //     object.update();
    //   });
    //   circleAboveImages.forEach((image) => {
    //     image.update();
    //   });
    //   staticImages.forEach((image) => {
    //     // image.draw();
    //   });
    //   images.forEach((image) => {
    //     image.draw();
    //   });
    //   images1.forEach((image) => {
    //     image.draw();
    //   });
    // }

    // init();
    // animate();

    // function animateOnScroll() {
    //   ScrollTrigger.create({
    //     trigger: ".spacer",
    //     scroller: scrollContainer,
    //     start: "top top", // Adjust the start position based on your preference
    //     onEnter: () => {
    //       // When scrolling down, apply the styles to display the div
    //       gsap.set(".lKv-people", {
    //         opacity: 1,
    //       });
    //     },
    //     onLeaveBack: () => {
    //       // When scrolling back up, apply the styles to hide the div
    //       gsap.set(".lKv-people", {
    //         opacity: 0,
    //       });
    //     },
    //   });
    // }

    // function toggleDivOnScroll() {
    //   const animationDuration = 1.5; // Adjust the duration of the animation in seconds
    //   const animationDelay = 0.5; // Adjust the delay before the animation starts in seconds
    //   let isActive = false; // Flag to track if animation is active

    //   ScrollTrigger.create({
    //     trigger: ".spacer",
    //     scroller: scrollContainer,
    //     start: "top top", // Adjust the start position based on your preference
    //     onEnter: () => {
    //       // When scrolling down, apply the styles to display the div
    //       // gsap.set(".lKv-people-item-l01", {
    //       //   display: "block",
    //       //   transform: "translate(0, 0)",
    //       //   delay: 0.5,
    //       // });
    //       gsap.fromTo(
    //         ".-l01",
    //         {
    //           transform: "translate(-573px, 272px)",
    //         },
    //         {
    //           transform: "translate(0, 0)",
    //           duration: 1.5,
    //           delay: 0.5,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".-l02",
    //         {
    //           transform: "translate(-573px, 272px)",
    //         },
    //         {
    //           transform: "translate(0, 0)",
    //           duration: 1.5,
    //           delay: 0.5,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".-l03",
    //         {
    //           transform: "translate(-573px, 272px)",
    //         },
    //         {
    //           transform: "translate(0, 0)",
    //           duration: 1.5,
    //           delay: 1,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".-l04",
    //         {
    //           transform: "translate(-573px, 272px)",
    //         },
    //         {
    //           transform: "translate(0, 0)",
    //           duration: 1.5,
    //           delay: 0,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".-l05",
    //         {
    //           transform: "translate(-573px, 272px)",
    //         },
    //         {
    //           transform: "translate(0, 0)",
    //           duration: 1.5,
    //           delay: 0.7,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".-l06",
    //         {
    //           transform: "translate(-573px, 272px)",
    //         },
    //         {
    //           transform: "translate(0, 0)",
    //           duration: 1.5,
    //           delay: 0,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".-l07",
    //         {
    //           transform: "translate(-573px, 272px)",
    //         },
    //         {
    //           transform: "translate(0, 0)",
    //           duration: 1.5,
    //           delay: 1.2,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".-l08",
    //         {
    //           transform: "translate(-573px, 272px)",
    //         },
    //         {
    //           transform: "translate(0, 0)",
    //           duration: 1.5,
    //           delay: 0,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".st1",
    //         {
    //           transform: "scale(0)",
    //         },
    //         {
    //           transform: "scale(1)",
    //           duration: 1,
    //           delay: 0,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".st2",
    //         {
    //           transform: "scale(0)",
    //         },
    //         {
    //           transform: "scale(1)",
    //           duration: 1.3,
    //           delay: 0,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".st3",
    //         {
    //           transform: "scale(0)",
    //         },
    //         {
    //           transform: "scale(1)",
    //           duration: 1.3,
    //           delay: 0.2,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".st4",
    //         {
    //           transform: "scale(0)",
    //         },
    //         {
    //           transform: "scale(1)",
    //           duration: 1.3,
    //           delay: 0.3,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".st5",
    //         {
    //           transform: "scale(0)",
    //         },
    //         {
    //           transform: "scale(1)",
    //           duration: 1.3,
    //           delay: 0.4,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".st6",
    //         {
    //           transform: "scale(0)",
    //         },
    //         {
    //           transform: "scale(1)",
    //           duration: 1.3,
    //           delay: 0.5,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".lKv-coreBall",
    //         {
    //           transform: "scale(0.5267, 0.5267)",
    //         },
    //         {
    //           transform: "translate(0px, -75.024px)",
    //         }
    //       );
    //       gsap.fromTo(
    //         ".lKv-subTitle-item > img ",
    //         {
    //           transform: "translate(0px, 0%)",
    //         },
    //         {
    //           transform: "translate(0px, 130%)",
    //         }
    //       );
    //       gsap.fromTo(
    //         ".cHeader-logo",
    //         {
    //           transform: "translate(-40px, 99.5825px)",
    //           top: 0,
    //           left: 0,
    //         },
    //         {
    //           transform: "scale(0.266,0.266)",
    //           top: "1.9rem",
    //           left: "0rem",
    //         }
    //       );
    //       gsap.fromTo(
    //         ".lKv-lead-text",
    //         {
    //           transform: "translate(0px,130%)",
    //         },
    //         {
    //           transform: "translate(0px, 0%)",
    //         }
    //       );
    //       gsap.fromTo(
    //         ".lKv-lead",
    //         {
    //           transform: "translate(0px, 130%)",
    //         },
    //         {
    //           transform: "translate(0px,0%)",
    //         }
    //       );
    //     },
    //     onLeaveBack: () => {
    //       // When scrolling back up, apply the styles to hide the div
    //       gsap.fromTo(
    //         ".lKv-people-item",
    //         {
    //           transform: "translate(0, 0)",
    //         },
    //         {
    //           transform: "translate(-573px, 272px)",
    //           duration: 1,
    //           delay: 0,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".st",
    //         {
    //           transform: "scale(1)",
    //         },
    //         {
    //           transform: "scale(0)",
    //           duration: 0.5,
    //           delay: 0,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".lKv-coreBall",
    //         { transform: "translate(0px, -108.024px)" },
    //         {
    //           transform: "scale(0.5267, 0.5267)",
    //         }
    //       );
    //       gsap.fromTo(
    //         ".lKv-subTitle-item > img ",
    //         {
    //           transform: "translate(0px, 130%)",
    //         },
    //         {
    //           transform: "translate(0px, 0%)",
    //         }
    //       );
    //       gsap.fromTo(
    //         ".cHeader-logo",
    //         {
    //           transform: "scale(0.266,0.266)",
    //           top: "1.9rem",
    //           left: "0rem",
    //         },
    //         {
    //           transform: "translate(0px, 108.5825px)",
    //           top: 0,
    //           left: 0,
    //         }
    //       );
    //       gsap.fromTo(
    //         ".lKv-lead-text",
    //         {
    //           transform: "translate(0px, 0%)",
    //         },
    //         {
    //           transform: "translate(0px,130%)",
    //         }
    //       );
    //       gsap.fromTo(
    //         ".lKv-lead",
    //         {
    //           transform: "translate(0px, 0%)",
    //         },
    //         {
    //           transform: "translate(0px,130%)",
    //         }
    //       );
    //     },
    //   });
    // }

    // Call the function to start the animations
    // animateOnScroll();
    // toggleDivOnScroll();

    ScrollTrigger.create({
      trigger: ".spacer",
      scroller: scrollContainer,
      start: "top top", // Adjust the start position based on your preference
      onEnter: () => {
        gsap.fromTo(
          ".cHeader-logo",
          {
            transform:
              window.innerWidth > 768
                ? "translate(20%, 108.5825px)"
                : window.innerWidth > 330
                ? "translate(18%, 108.5825px)"
                : "translate(14%, 108.5825px)",
            top: 0,
            left: 0,
          },
          {
            transform:
              window.innerWidth > 768
                ? "scale(0.266,0.266)"
                : "scale(0.266,0.266) translate(-130%,-20px)",
            top: "2.9rem",
            left: "0rem",
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
          },
          {
            transform:
              window.innerWidth > 768
                ? "translate(20%, 108.5825px)"
                : window.innerWidth > 330
                ? "translate(18%, 108.5825px)"
                : "translate(14%, 108.5825px)",
            top: 0,
            left: 0,
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

  return (
    <div>
      {/* canvas */}
      <div className="spacer">
        {window.innerWidth > 768 && (
          <div className="lKv-subTitle" data-kv-subtitle="">
            <div
              className="lKv-subTitle-item -lm01"
              data-kv-subtitle-item=""
              style={{ overflow: "hidden" }}
            >
              <svg
                width="591.43"
                height="33.6"
                viewBox="0 0 591.43 33.6"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: "translate(0px, 0%)",
                  willChange: "transform",
                }}
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
                    d="M 525.819 1.858 A 38.199 38.199 0 0 1 525.815 1.857 A 53.845 53.845 0 0 1 525.81 1.856 A 39.481 39.481 0 0 1 525.805 1.855 L 525.805 1.33 L 534.94 1.33 L 534.94 1.855 C 532.84 1.995 531.79 3.185 531.055 5.04 L 528.605 11.725 L 523.46 25.935 L 523.075 25.935 L 516.845 6.475 L 509.81 25.935 L 509.46 25.935 L 503.755 6.37 A 45.315 45.315 0 0 1 503.677 6.141 C 502.983 4.078 502.75 2.969 500.901 2.202 A 8.907 8.907 0 0 0 499.87 1.855 L 499.87 1.33 L 509.775 1.33 L 509.775 1.855 C 505.505 2.485 506.38 4.27 507.22 7.14 L 510.895 19.565 L 516.39 4.935 C 515.69 2.8 514.535 2.24 512.435 1.855 L 512.435 1.33 L 522.655 1.33 L 522.655 1.855 A 10.137 10.137 0 0 0 521.71 2.027 C 519.464 2.558 519.308 3.653 519.631 5.023 A 15.824 15.824 0 0 0 519.925 6.055 L 524.37 19.915 L 527.135 12.04 C 527.659 10.498 528.945 6.917 529.243 4.938 A 4.861 4.861 0 0 0 529.305 4.235 A 2.468 2.468 0 0 0 529.288 3.94 C 529.114 2.495 527.624 2.251 525.824 1.859 A 50.397 50.397 0 0 0 525.833 1.861 C 527.624 2.251 529.114 2.495 529.288 3.94 M 0 25.13 L 19.46 25.13 A 22.518 22.518 0 0 0 20.486 20.675 A 22.772 22.772 0 0 0 20.65 18.2 L 20.125 18.2 A 11.594 11.594 0 0 1 19.39 20.636 C 18.235 23.244 16.15 24.29 12.67 24.29 A 13.311 13.311 0 0 1 11.161 24.211 C 7.356 23.776 7.385 21.612 7.415 19.818 A 28.317 28.317 0 0 0 7.42 19.355 L 7.42 13.615 L 11.06 13.615 C 13.269 13.615 14.983 13.64 15.741 15.484 A 5.318 5.318 0 0 1 16.065 16.73 L 16.59 16.73 L 16.59 8.925 L 16.065 8.925 C 15.713 11.674 14.019 12.088 11.728 12.139 A 30.084 30.084 0 0 1 11.06 12.145 L 7.42 12.145 L 7.42 2.17 L 10.815 2.17 C 14.35 2.17 17.605 2.205 17.85 6.72 L 18.375 6.72 L 18.795 1.33 L 0 1.33 L 0 1.855 A 15.984 15.984 0 0 1 1.497 2.117 C 4.159 2.737 4.247 3.911 4.335 6.893 A 487.604 487.604 0 0 1 4.34 7.07 L 4.34 19.39 C 4.235 22.995 4.2 24.045 0 24.605 L 0 25.13 Z M 35.42 17.36 L 35.42 21.07 A 31.235 31.235 0 0 1 35.395 22.091 C 35.31 23.917 34.94 24.274 32.865 24.605 L 32.865 25.13 L 40.565 25.13 L 40.565 24.605 A 28.268 28.268 0 0 1 40.432 24.583 C 38.369 24.229 38.136 23.92 38.117 21.51 A 55.112 55.112 0 0 1 38.115 21.07 L 38.115 12.845 A 11.798 11.798 0 0 1 38.305 12.653 C 39.167 11.801 40.029 11.241 41.236 11.145 A 4.774 4.774 0 0 1 41.615 11.13 A 4.921 4.921 0 0 1 42.841 11.273 C 46.011 12.087 45.573 16.137 45.57 17.348 A 4.919 4.919 0 0 0 45.57 17.36 L 45.57 21.07 A 31.235 31.235 0 0 1 45.545 22.091 C 45.46 23.917 45.09 24.274 43.015 24.605 L 43.015 25.13 L 50.715 25.13 L 50.715 24.605 A 28.268 28.268 0 0 1 50.582 24.583 C 48.519 24.229 48.286 23.92 48.267 21.51 A 55.112 55.112 0 0 1 48.265 21.07 L 48.265 16.485 C 48.265 14.595 48.895 9.31 43.715 9.31 A 7.727 7.727 0 0 0 39.12 11.162 C 38.7 11.478 38.295 11.813 37.905 12.145 C 37.275 10.36 35.455 9.31 33.635 9.31 A 7.828 7.828 0 0 0 29.03 11.162 C 28.609 11.478 28.207 11.813 27.825 12.145 L 28.105 9.45 L 27.72 9.31 L 23.555 10.85 L 23.555 11.2 A 13.761 13.761 0 0 1 23.955 11.498 C 25.271 12.521 25.271 13.016 25.27 14.301 A 175.629 175.629 0 0 0 25.27 14.385 L 25.27 21.07 A 31.235 31.235 0 0 1 25.245 22.091 C 25.16 23.917 24.79 24.274 22.715 24.605 L 22.715 25.13 L 30.415 25.13 L 30.415 24.605 A 28.268 28.268 0 0 1 30.282 24.583 C 28.219 24.229 27.986 23.92 27.967 21.51 A 55.112 55.112 0 0 1 27.965 21.07 L 27.965 12.88 C 28.919 11.892 29.94 11.169 31.382 11.132 A 4.552 4.552 0 0 1 31.5 11.13 A 5.025 5.025 0 0 1 32.765 11.278 C 35.617 12.019 35.443 15.353 35.422 17.119 A 19.804 19.804 0 0 0 35.42 17.36 Z M 102.27 14.84 L 106.435 25.48 L 106.925 25.48 L 112.385 13.3 A 634.808 634.808 0 0 1 112.654 12.72 C 113.274 11.395 113.894 10.308 115.64 10.185 L 115.64 9.66 L 109.725 9.66 L 109.725 10.185 A 17.298 17.298 0 0 0 109.947 10.21 C 110.67 10.287 111.459 10.364 111.644 11.092 A 1.427 1.427 0 0 1 111.685 11.445 A 3.784 3.784 0 0 1 111.575 12.236 C 111.104 14.322 109.229 18.495 107.997 21.235 A 1661.508 1661.508 0 0 0 107.835 21.595 L 104.405 12.495 C 103.985 11.34 103.635 10.29 106.26 10.185 L 106.26 9.66 L 98.77 9.66 L 98.77 10.185 A 7.373 7.373 0 0 1 99.495 10.327 C 100.78 10.659 100.992 11.313 101.793 13.404 A 116.022 116.022 0 0 0 101.955 13.825 L 98.665 21.595 L 95.305 13.02 A 23.8 23.8 0 0 1 95.036 12.298 C 94.647 11.171 94.621 10.4 96.249 10.221 A 6.851 6.851 0 0 1 96.81 10.185 L 96.81 9.66 L 89.425 9.66 L 89.425 10.185 A 3.424 3.424 0 0 1 90.258 10.326 C 91.401 10.683 91.775 11.647 92.265 12.828 A 54.898 54.898 0 0 0 92.33 12.985 L 97.37 25.48 L 97.895 25.48 L 102.27 14.84 Z M 212.975 12.635 L 209.16 12.635 L 209.16 2.17 L 212.345 2.17 C 215.794 2.17 218.595 2.324 219.101 6.074 A 9.024 9.024 0 0 1 219.17 6.86 L 219.695 6.86 L 220.255 1.33 L 201.74 1.33 L 201.74 1.855 A 15.984 15.984 0 0 1 203.237 2.117 C 205.899 2.737 205.987 3.911 206.075 6.893 A 487.604 487.604 0 0 1 206.08 7.07 L 206.08 19.39 C 205.975 22.995 205.94 24.045 201.74 24.605 L 201.74 25.13 L 214.2 25.13 L 214.2 24.605 A 29.26 29.26 0 0 1 212.499 24.305 C 209.575 23.682 209.207 22.809 209.165 20.199 A 50.725 50.725 0 0 1 209.16 19.39 L 209.16 14.105 L 212.975 14.105 C 215.915 14.105 217.735 14.035 218.015 17.57 L 218.54 17.57 L 218.54 9.03 L 218.015 9.03 C 217.75 12.178 216.105 12.597 213.435 12.632 A 34.507 34.507 0 0 1 212.975 12.635 Z M 405.685 17.815 L 405.055 17.815 L 406.07 23.765 C 407.855 24.92 410.095 25.55 412.23 25.55 A 10.651 10.651 0 0 0 413.351 25.49 C 417.043 25.099 420.735 22.789 420.735 18.69 A 5.652 5.652 0 0 0 420.15 16.117 C 417.871 11.556 409.71 10.984 409.71 5.775 C 409.71 3.623 411.32 2.139 413.351 1.946 A 4.8 4.8 0 0 1 413.805 1.925 A 4.915 4.915 0 0 1 415.559 2.218 C 416.939 2.74 417.697 3.911 418.183 5.315 A 16.461 16.461 0 0 1 418.74 7.49 L 419.3 7.49 L 419.58 2.24 C 418.04 1.4 416.255 0.875 414.47 0.875 A 8.374 8.374 0 0 0 413.658 0.915 C 410.161 1.256 406.665 3.76 406.665 7.56 C 406.665 14.56 417.375 14 417.375 20.23 A 4.446 4.446 0 0 1 416.95 22.195 C 416.365 23.396 415.224 24.157 413.82 24.408 A 6.042 6.042 0 0 1 412.755 24.5 A 6.422 6.422 0 0 1 407.581 21.804 A 11.185 11.185 0 0 1 405.685 17.815 Z M 153.405 24.605 L 153.405 25.13 L 161.56 25.13 L 161.56 24.605 C 158.97 24.22 158.83 23.94 158.83 21.07 L 158.83 12.635 C 159.985 11.585 160.965 11.13 162.4 11.13 C 166.67 11.13 166.565 14.595 166.565 17.045 L 166.565 21.07 C 166.53 23.8 166.425 24.22 163.835 24.605 L 163.835 25.13 L 171.99 25.13 L 171.99 24.605 C 169.4 24.22 169.26 23.94 169.26 21.07 L 169.26 14.84 C 169.26 12.775 169.05 9.31 164.85 9.31 A 8.004 8.004 0 0 0 160.725 10.623 C 160.045 11.029 159.372 11.503 158.69 12.005 L 158.97 9.45 L 158.585 9.31 L 154.42 10.85 L 154.42 11.2 A 13.761 13.761 0 0 1 154.82 11.498 C 156.136 12.521 156.136 13.016 156.135 14.301 A 175.629 175.629 0 0 0 156.135 14.385 L 156.135 21.07 C 156.1 23.8 155.995 24.22 153.405 24.605 Z M 231.105 24.605 L 231.105 25.13 L 239.26 25.13 L 239.26 24.605 C 236.67 24.22 236.53 23.94 236.53 21.07 L 236.53 12.635 C 237.685 11.585 238.665 11.13 240.1 11.13 C 244.37 11.13 244.265 14.595 244.265 17.045 L 244.265 21.07 C 244.23 23.8 244.125 24.22 241.535 24.605 L 241.535 25.13 L 249.69 25.13 L 249.69 24.605 C 247.1 24.22 246.96 23.94 246.96 21.07 L 246.96 14.84 C 246.96 12.775 246.75 9.31 242.55 9.31 A 8.004 8.004 0 0 0 238.425 10.623 C 237.745 11.029 237.072 11.503 236.39 12.005 L 236.67 9.45 L 236.285 9.31 L 232.12 10.85 L 232.12 11.2 A 13.761 13.761 0 0 1 232.52 11.498 C 233.836 12.521 233.836 13.016 233.835 14.301 A 175.629 175.629 0 0 0 233.835 14.385 L 233.835 21.07 C 233.8 23.8 233.695 24.22 231.105 24.605 Z M 266.105 24.605 L 266.105 25.13 L 274.26 25.13 L 274.26 24.605 C 271.67 24.22 271.53 23.94 271.53 21.07 L 271.53 12.635 C 272.685 11.585 273.665 11.13 275.1 11.13 C 279.37 11.13 279.265 14.595 279.265 17.045 L 279.265 21.07 C 279.23 23.8 279.125 24.22 276.535 24.605 L 276.535 25.13 L 284.69 25.13 L 284.69 24.605 C 282.1 24.22 281.96 23.94 281.96 21.07 L 281.96 14.84 C 281.96 12.775 281.75 9.31 277.55 9.31 A 8.004 8.004 0 0 0 273.425 10.623 C 272.745 11.029 272.072 11.503 271.39 12.005 L 271.67 9.45 L 271.285 9.31 L 267.12 10.85 L 267.12 11.2 A 13.761 13.761 0 0 1 267.52 11.498 C 268.836 12.521 268.836 13.016 268.835 14.301 A 175.629 175.629 0 0 0 268.835 14.385 L 268.835 21.07 C 268.8 23.8 268.695 24.22 266.105 24.605 Z M 186.69 11.795 L 190.96 11.9 L 190.96 10.43 L 185.955 10.43 C 184.415 9.73 183.085 9.31 181.37 9.31 A 7.148 7.148 0 0 0 176.1 11.445 C 175.292 12.339 174.79 13.502 174.79 14.91 A 5.083 5.083 0 0 0 177.332 19.193 A 6.933 6.933 0 0 0 177.66 19.39 A 25.765 25.765 0 0 1 177.65 19.398 C 176.839 20.032 175 21.39 175 22.47 C 175 24.074 177.222 24.948 178.554 25.128 A 4.722 4.722 0 0 0 178.57 25.13 C 176.575 26.18 173.88 27.405 173.88 30.03 A 2.197 2.197 0 0 0 173.989 30.697 C 174.426 32.062 176.196 33.6 179.76 33.6 C 185.99 33.6 190.645 29.68 190.645 26.25 C 190.645 23.905 188.58 22.33 184.835 22.47 L 180.355 22.645 C 177.135 22.785 177.1 20.755 178.255 19.67 A 7.215 7.215 0 0 0 179.997 20.077 A 8.11 8.11 0 0 0 180.88 20.125 A 7.062 7.062 0 0 0 186.007 18.081 C 186.819 17.214 187.339 16.087 187.387 14.727 A 5.849 5.849 0 0 0 187.39 14.525 A 6.158 6.158 0 0 0 187.317 13.543 C 187.222 12.955 187.033 12.424 186.73 11.868 A 7.019 7.019 0 0 0 186.69 11.795 Z M 327.18 11.48 L 330.015 11.48 L 330.015 21.07 A 27.77 27.77 0 0 1 329.987 22.14 C 329.893 23.924 329.48 24.277 327.215 24.605 L 327.215 25.13 L 336.07 25.13 L 336.07 24.605 C 333.246 24.267 332.791 24.01 332.722 22.017 A 28.023 28.023 0 0 1 332.71 21.07 L 332.71 11.48 L 337.26 11.48 L 337.26 10.01 L 332.71 10.01 L 332.71 7.91 A 25.565 25.565 0 0 1 332.717 7.29 C 332.765 5.322 333.091 1.987 334.942 1.238 A 2.145 2.145 0 0 1 335.755 1.085 A 3.185 3.185 0 0 1 337.488 1.685 C 338.258 2.196 338.941 2.951 339.443 3.627 A 10.986 10.986 0 0 1 339.605 3.85 C 340.55 3.885 341.53 3.5 341.53 2.38 C 341.53 0.63 339.04 0.045 337.634 0.003 A 5.418 5.418 0 0 0 337.47 0 A 7.301 7.301 0 0 0 331.608 3.453 A 9.693 9.693 0 0 0 331.415 3.745 A 9.976 9.976 0 0 0 330.033 8.861 A 25.319 25.319 0 0 0 330.015 9.485 L 327.18 11.13 L 327.18 11.48 Z M 56.665 25.375 L 59.01 25.48 C 64.715 25.725 68.845 21.07 68.845 16.625 A 7.551 7.551 0 0 0 65.672 10.336 A 6.146 6.146 0 0 0 62.23 9.31 A 9.673 9.673 0 0 0 57.048 11.185 A 20.281 20.281 0 0 0 56.665 11.445 L 56.805 9.31 L 56.42 9.17 L 52.255 10.85 L 52.255 11.2 A 13.761 13.761 0 0 1 52.655 11.498 C 53.971 12.521 53.971 13.016 53.97 14.301 A 175.629 175.629 0 0 0 53.97 14.385 L 53.97 29.54 A 31.235 31.235 0 0 1 53.945 30.561 C 53.86 32.387 53.49 32.744 51.415 33.075 L 51.415 33.6 L 60.48 33.6 L 60.48 33.075 A 67.607 67.607 0 0 1 60.269 33.053 C 56.8 32.678 56.665 32.354 56.665 29.54 L 56.665 25.375 Z M 591.43 24.465 L 591.29 23.87 C 588.674 24.244 588.386 23.952 588.354 21.615 A 73.691 73.691 0 0 1 588.35 20.65 L 588.35 0.14 L 587.965 0 L 583.94 1.54 L 583.94 1.89 A 13.761 13.761 0 0 1 584.34 2.188 C 585.656 3.211 585.656 3.706 585.655 4.991 A 175.629 175.629 0 0 0 585.655 5.075 L 585.655 9.66 C 584.71 9.415 583.73 9.31 582.75 9.31 A 9.885 9.885 0 0 0 576.177 11.687 C 574.41 13.248 573.3 15.498 573.3 18.2 A 6.937 6.937 0 0 0 573.311 18.59 C 573.505 22.035 576.237 25.48 579.88 25.48 A 7.261 7.261 0 0 0 584.539 23.459 A 21.06 21.06 0 0 0 585.655 22.435 L 585.655 25.76 L 591.43 24.465 Z M 265.335 24.535 L 265.335 24.01 C 262.08 23.345 262.29 22.61 262.29 19.53 L 262.29 14.56 C 262.29 11.76 261.31 9.31 258.09 9.31 C 255.255 9.31 251.405 12.95 251.405 13.895 A 0.314 0.314 0 0 0 251.436 14.039 C 251.554 14.27 251.971 14.245 252.21 14.245 L 253.96 14.14 A 33.405 33.405 0 0 0 253.958 13.784 C 253.942 12.268 253.883 11.299 255.446 11.099 A 5.408 5.408 0 0 1 256.13 11.06 C 258.895 11.06 259.875 12.635 259.595 16.45 L 251.86 19.95 A 6.442 6.442 0 0 0 251.716 20.625 C 251.672 20.91 251.65 21.195 251.65 21.49 A 4.475 4.475 0 0 0 252.478 24.167 C 253.008 24.875 253.783 25.363 254.775 25.462 A 3.799 3.799 0 0 0 255.15 25.48 A 5.849 5.849 0 0 0 259.156 23.564 A 10.006 10.006 0 0 0 259.595 23.1 C 259.77 24.465 260.33 25.305 261.8 25.305 A 6.55 6.55 0 0 0 263.244 25.116 C 263.732 25.005 264.243 24.856 264.784 24.696 A 127.242 127.242 0 0 1 265.335 24.535 Z M 394.135 24.535 L 394.135 24.01 C 390.88 23.345 391.09 22.61 391.09 19.53 L 391.09 14.56 C 391.09 11.76 390.11 9.31 386.89 9.31 C 384.055 9.31 380.205 12.95 380.205 13.895 A 0.314 0.314 0 0 0 380.236 14.039 C 380.354 14.27 380.771 14.245 381.01 14.245 L 382.76 14.14 A 33.405 33.405 0 0 0 382.758 13.784 C 382.742 12.268 382.683 11.299 384.246 11.099 A 5.408 5.408 0 0 1 384.93 11.06 C 387.695 11.06 388.675 12.635 388.395 16.45 L 380.66 19.95 A 6.442 6.442 0 0 0 380.516 20.625 C 380.472 20.91 380.45 21.195 380.45 21.49 A 4.475 4.475 0 0 0 381.278 24.167 C 381.808 24.875 382.583 25.363 383.575 25.462 A 3.799 3.799 0 0 0 383.95 25.48 A 5.849 5.849 0 0 0 387.956 23.564 A 10.006 10.006 0 0 0 388.395 23.1 C 388.57 24.465 389.13 25.305 390.6 25.305 A 6.55 6.55 0 0 0 392.044 25.116 C 392.532 25.005 393.043 24.856 393.584 24.696 A 127.242 127.242 0 0 1 394.135 24.535 Z M 481.635 24.535 L 481.635 24.01 C 478.38 23.345 478.59 22.61 478.59 19.53 L 478.59 14.56 C 478.59 11.76 477.61 9.31 474.39 9.31 C 471.555 9.31 467.705 12.95 467.705 13.895 A 0.314 0.314 0 0 0 467.736 14.039 C 467.854 14.27 468.271 14.245 468.51 14.245 L 470.26 14.14 A 33.405 33.405 0 0 0 470.258 13.784 C 470.242 12.268 470.183 11.299 471.746 11.099 A 5.408 5.408 0 0 1 472.43 11.06 C 475.195 11.06 476.175 12.635 475.895 16.45 L 468.16 19.95 A 6.442 6.442 0 0 0 468.016 20.625 C 467.972 20.91 467.95 21.195 467.95 21.49 A 4.475 4.475 0 0 0 468.778 24.167 C 469.308 24.875 470.083 25.363 471.075 25.462 A 3.799 3.799 0 0 0 471.45 25.48 A 5.849 5.849 0 0 0 475.456 23.564 A 10.006 10.006 0 0 0 475.895 23.1 C 476.07 24.465 476.63 25.305 478.1 25.305 A 6.55 6.55 0 0 0 479.544 25.116 C 480.032 25.005 480.543 24.856 481.084 24.696 A 127.242 127.242 0 0 1 481.635 24.535 Z M 119.42 14.455 L 129.57 14.455 A 5.959 5.959 0 0 0 128.922 11.921 C 128.209 10.57 126.949 9.679 125.31 9.402 A 6.781 6.781 0 0 0 124.18 9.31 A 7.571 7.571 0 0 0 119.496 10.865 C 117.584 12.337 116.418 14.706 116.313 17.322 A 9.66 9.66 0 0 0 116.305 17.71 A 7.99 7.99 0 0 0 118.797 23.616 C 120.053 24.772 121.722 25.48 123.655 25.48 C 126.385 25.48 128.765 23.695 130.095 21.42 L 129.57 21.035 A 6.08 6.08 0 0 1 128.11 22.468 C 127.48 22.891 126.764 23.15 125.921 23.22 A 5.764 5.764 0 0 1 125.44 23.24 C 121.485 23.24 119 19.845 119.28 16.205 L 119.42 14.455 Z M 304.92 14.455 L 315.07 14.455 A 5.959 5.959 0 0 0 314.422 11.921 C 313.709 10.57 312.449 9.679 310.81 9.402 A 6.781 6.781 0 0 0 309.68 9.31 A 7.571 7.571 0 0 0 304.996 10.865 C 303.084 12.337 301.918 14.706 301.813 17.322 A 9.66 9.66 0 0 0 301.805 17.71 A 7.99 7.99 0 0 0 304.297 23.616 C 305.553 24.772 307.222 25.48 309.155 25.48 C 311.885 25.48 314.265 23.695 315.595 21.42 L 315.07 21.035 A 6.08 6.08 0 0 1 313.61 22.468 C 312.98 22.891 312.264 23.15 311.421 23.22 A 5.764 5.764 0 0 1 310.94 23.24 C 306.985 23.24 304.5 19.845 304.78 16.205 L 304.92 14.455 Z M 299.775 22.575 L 299.355 22.05 C 298.2 22.89 297.185 23.415 295.75 23.415 C 292.285 23.415 289.205 20.545 289.205 16.03 A 7.187 7.187 0 0 1 289.29 14.947 C 289.508 13.526 290.146 12.019 291.229 11.145 A 3.282 3.282 0 0 1 293.335 10.395 A 2.872 2.872 0 0 1 294.95 10.993 C 295.928 11.667 296.757 12.67 297.57 12.67 C 298.313 12.67 299.086 11.954 299.2 11.239 A 1.13 1.13 0 0 0 299.215 11.06 C 299.215 9.45 296.52 9.31 295.4 9.31 A 8.799 8.799 0 0 0 286.408 17.586 A 8.39 8.39 0 0 0 286.405 17.815 A 7.832 7.832 0 0 0 289.386 24.081 A 6.912 6.912 0 0 0 293.615 25.48 C 296.03 25.48 298.2 24.36 299.775 22.575 Z M 456.575 22.575 L 456.155 22.05 C 455 22.89 453.985 23.415 452.55 23.415 C 449.085 23.415 446.005 20.545 446.005 16.03 A 7.187 7.187 0 0 1 446.09 14.947 C 446.308 13.526 446.946 12.019 448.029 11.145 A 3.282 3.282 0 0 1 450.135 10.395 A 2.872 2.872 0 0 1 451.75 10.993 C 452.728 11.667 453.557 12.67 454.37 12.67 C 455.113 12.67 455.886 11.954 456 11.239 A 1.13 1.13 0 0 0 456.015 11.06 C 456.015 9.45 453.32 9.31 452.2 9.31 A 8.799 8.799 0 0 0 443.208 17.586 A 8.39 8.39 0 0 0 443.205 17.815 A 7.832 7.832 0 0 0 446.186 24.081 A 6.912 6.912 0 0 0 450.415 25.48 C 452.83 25.48 455 24.36 456.575 22.575 Z M 137.025 13.58 L 136.955 13.58 L 137.095 9.45 L 136.71 9.31 L 132.545 10.85 L 132.545 11.2 A 13.761 13.761 0 0 1 132.945 11.498 C 134.261 12.521 134.261 13.016 134.26 14.301 A 175.629 175.629 0 0 0 134.26 14.385 L 134.26 21.07 A 31.235 31.235 0 0 1 134.235 22.091 C 134.15 23.917 133.78 24.274 131.705 24.605 L 131.705 25.13 L 140.455 25.13 L 140.455 24.605 C 137.095 24.22 136.955 23.94 136.955 21.07 L 136.955 17.535 C 136.955 17.01 136.71 12.25 139.685 11.97 C 140.455 11.9 141.33 12.67 141.925 13.125 A 3.764 3.764 0 0 0 142.189 12.985 C 142.757 12.656 143.361 12.121 143.618 11.513 A 1.522 1.522 0 0 0 143.745 10.92 C 143.745 10.065 143.132 9.476 142.325 9.34 A 2.194 2.194 0 0 0 141.96 9.31 A 4.135 4.135 0 0 0 139.389 10.361 C 138.431 11.145 137.647 12.249 137.173 13.247 A 7.34 7.34 0 0 0 137.025 13.58 Z M 362.425 13.58 L 362.355 13.58 L 362.495 9.45 L 362.11 9.31 L 357.945 10.85 L 357.945 11.2 A 13.761 13.761 0 0 1 358.345 11.498 C 359.661 12.521 359.661 13.016 359.66 14.301 A 175.629 175.629 0 0 0 359.66 14.385 L 359.66 21.07 A 31.235 31.235 0 0 1 359.635 22.091 C 359.55 23.917 359.18 24.274 357.105 24.605 L 357.105 25.13 L 365.855 25.13 L 365.855 24.605 C 362.495 24.22 362.355 23.94 362.355 21.07 L 362.355 17.535 C 362.355 17.01 362.11 12.25 365.085 11.97 C 365.855 11.9 366.73 12.67 367.325 13.125 A 3.764 3.764 0 0 0 367.589 12.985 C 368.157 12.656 368.761 12.121 369.018 11.513 A 1.522 1.522 0 0 0 369.145 10.92 C 369.145 10.065 368.532 9.476 367.725 9.34 A 2.194 2.194 0 0 0 367.36 9.31 A 4.135 4.135 0 0 0 364.789 10.361 C 363.831 11.145 363.047 12.249 362.573 13.247 A 7.34 7.34 0 0 0 362.425 13.58 Z M 556.22 13.58 L 556.15 13.58 L 556.29 9.45 L 555.905 9.31 L 551.74 10.85 L 551.74 11.2 A 13.761 13.761 0 0 1 552.14 11.498 C 553.456 12.521 553.456 13.016 553.455 14.301 A 175.629 175.629 0 0 0 553.455 14.385 L 553.455 21.07 A 31.235 31.235 0 0 1 553.43 22.091 C 553.345 23.917 552.975 24.274 550.9 24.605 L 550.9 25.13 L 559.65 25.13 L 559.65 24.605 C 556.29 24.22 556.15 23.94 556.15 21.07 L 556.15 17.535 C 556.15 17.01 555.905 12.25 558.88 11.97 C 559.65 11.9 560.525 12.67 561.12 13.125 A 3.764 3.764 0 0 0 561.384 12.985 C 561.952 12.656 562.556 12.121 562.813 11.513 A 1.522 1.522 0 0 0 562.94 10.92 C 562.94 10.065 562.327 9.476 561.52 9.34 A 2.194 2.194 0 0 0 561.155 9.31 A 4.135 4.135 0 0 0 558.584 10.361 C 557.626 11.145 556.842 12.249 556.368 13.247 A 7.34 7.34 0 0 0 556.22 13.58 Z M 490.385 25.13 L 490.385 24.605 C 487.795 24.22 487.655 23.94 487.655 21.07 L 487.655 0.14 L 487.27 0 L 483.245 1.54 L 483.245 1.89 A 13.761 13.761 0 0 1 483.645 2.188 C 484.961 3.211 484.961 3.706 484.96 4.991 A 175.629 175.629 0 0 0 484.96 5.075 L 484.96 21.07 C 484.925 23.8 484.82 24.22 482.23 24.605 L 482.23 25.13 L 490.385 25.13 Z M 571.48 25.13 L 571.48 24.605 C 568.89 24.22 568.75 23.94 568.75 21.07 L 568.75 0.14 L 568.365 0 L 564.34 1.54 L 564.34 1.89 A 13.761 13.761 0 0 1 564.74 2.188 C 566.056 3.211 566.056 3.706 566.055 4.991 A 175.629 175.629 0 0 0 566.055 5.075 L 566.055 21.07 C 566.02 23.8 565.915 24.22 563.325 24.605 L 563.325 25.13 L 571.48 25.13 Z M 81.775 9.434 A 10.53 10.53 0 0 0 80.15 9.31 A 8.954 8.954 0 0 0 73.851 11.782 C 72.451 13.156 71.565 15.034 71.508 17.237 A 8.776 8.776 0 0 0 71.505 17.465 C 71.505 22.435 75.32 25.48 80.115 25.48 A 8.748 8.748 0 0 0 87.321 21.854 A 7.845 7.845 0 0 0 88.725 17.325 C 88.725 12.967 85.749 10.055 81.775 9.434 Z M 348.475 9.434 A 10.53 10.53 0 0 0 346.85 9.31 A 8.954 8.954 0 0 0 340.551 11.782 C 339.151 13.156 338.265 15.034 338.208 17.237 A 8.776 8.776 0 0 0 338.205 17.465 C 338.205 22.435 342.02 25.48 346.815 25.48 A 8.748 8.748 0 0 0 354.021 21.854 A 7.845 7.845 0 0 0 355.425 17.325 C 355.425 12.967 352.449 10.055 348.475 9.434 Z M 433.875 9.434 A 10.53 10.53 0 0 0 432.25 9.31 A 8.954 8.954 0 0 0 425.951 11.782 C 424.551 13.156 423.665 15.034 423.608 17.237 A 8.776 8.776 0 0 0 423.605 17.465 C 423.605 22.435 427.42 25.48 432.215 25.48 A 8.748 8.748 0 0 0 439.421 21.854 A 7.845 7.845 0 0 0 440.825 17.325 C 440.825 12.967 437.849 10.055 433.875 9.434 Z M 542.27 9.434 A 10.53 10.53 0 0 0 540.645 9.31 A 8.954 8.954 0 0 0 534.346 11.782 C 532.946 13.156 532.06 15.034 532.003 17.237 A 8.776 8.776 0 0 0 532 17.465 C 532 22.435 535.815 25.48 540.61 25.48 A 8.748 8.748 0 0 0 547.816 21.854 A 7.845 7.845 0 0 0 549.22 17.325 C 549.22 12.967 546.244 10.055 542.27 9.434 Z M 152.285 25.13 L 152.285 24.605 C 149.695 24.22 149.555 23.94 149.555 21.07 L 149.555 9.45 L 149.17 9.31 L 144.725 10.85 L 144.725 11.2 C 146.861 12.44 146.861 12.901 146.86 14.317 A 178.937 178.937 0 0 0 146.86 14.385 L 146.86 21.07 C 146.825 23.8 146.72 24.22 144.13 24.605 L 144.13 25.13 L 152.285 25.13 Z M 229.985 25.13 L 229.985 24.605 C 227.395 24.22 227.255 23.94 227.255 21.07 L 227.255 9.45 L 226.87 9.31 L 222.425 10.85 L 222.425 11.2 C 224.561 12.44 224.561 12.901 224.56 14.317 A 178.937 178.937 0 0 0 224.56 14.385 L 224.56 21.07 C 224.525 23.8 224.42 24.22 221.83 24.605 L 221.83 25.13 L 229.985 25.13 Z M 465.885 25.13 L 465.885 24.605 C 463.295 24.22 463.155 23.94 463.155 21.07 L 463.155 9.45 L 462.77 9.31 L 458.325 10.85 L 458.325 11.2 C 460.461 12.44 460.461 12.901 460.46 14.317 A 178.937 178.937 0 0 0 460.46 14.385 L 460.46 21.07 C 460.425 23.8 460.32 24.22 457.73 24.605 L 457.73 25.13 L 465.885 25.13 Z M 85.47 17.675 C 85.47 20.685 83.895 24.71 80.36 24.71 A 4.947 4.947 0 0 1 76.101 22.119 C 75.244 20.733 74.803 18.998 74.763 17.451 A 8.904 8.904 0 0 1 74.76 17.22 A 10.456 10.456 0 0 1 74.868 15.724 C 75.278 12.902 76.873 10.08 80.08 10.08 A 4.309 4.309 0 0 1 82.89 11.081 C 84.588 12.48 85.38 15.094 85.463 17.292 A 10.187 10.187 0 0 1 85.47 17.675 Z M 352.17 17.675 C 352.17 20.685 350.595 24.71 347.06 24.71 A 4.947 4.947 0 0 1 342.801 22.119 C 341.944 20.733 341.503 18.998 341.463 17.451 A 8.904 8.904 0 0 1 341.46 17.22 A 10.456 10.456 0 0 1 341.568 15.724 C 341.978 12.902 343.573 10.08 346.78 10.08 A 4.309 4.309 0 0 1 349.59 11.081 C 351.288 12.48 352.08 15.094 352.163 17.292 A 10.187 10.187 0 0 1 352.17 17.675 Z M 437.57 17.675 C 437.57 20.685 435.995 24.71 432.46 24.71 A 4.947 4.947 0 0 1 428.201 22.119 C 427.344 20.733 426.903 18.998 426.863 17.451 A 8.904 8.904 0 0 1 426.86 17.22 A 10.456 10.456 0 0 1 426.968 15.724 C 427.378 12.902 428.973 10.08 432.18 10.08 A 4.309 4.309 0 0 1 434.99 11.081 C 436.688 12.48 437.48 15.094 437.563 17.292 A 10.187 10.187 0 0 1 437.57 17.675 Z M 545.965 17.675 C 545.965 20.685 544.39 24.71 540.855 24.71 A 4.947 4.947 0 0 1 536.596 22.119 C 535.739 20.733 535.298 18.998 535.258 17.451 A 8.904 8.904 0 0 1 535.255 17.22 A 10.456 10.456 0 0 1 535.363 15.724 C 535.773 12.902 537.368 10.08 540.575 10.08 A 4.309 4.309 0 0 1 543.385 11.081 C 545.083 12.48 545.875 15.094 545.958 17.292 A 10.187 10.187 0 0 1 545.965 17.675 Z M 56.665 19.25 L 56.665 12.075 A 7.663 7.663 0 0 1 57.193 11.746 C 57.926 11.332 58.617 11.129 59.462 11.075 A 7.739 7.739 0 0 1 59.955 11.06 A 4.506 4.506 0 0 1 60.716 11.131 C 62.719 11.478 65.87 13.179 65.87 17.815 C 65.87 20.72 64.435 24.395 61.005 24.395 C 56.84 24.395 56.665 21.14 56.665 19.25 Z M 585.655 15.33 L 585.655 21.315 C 584.92 22.505 583.275 23.73 581.875 23.73 A 4.801 4.801 0 0 1 580.911 23.631 C 578.593 23.156 576.275 20.943 576.275 16.52 A 8.677 8.677 0 0 1 576.354 15.355 C 576.681 12.953 578.03 10.551 580.669 10.402 A 4.641 4.641 0 0 1 580.93 10.395 A 5.224 5.224 0 0 1 581.658 10.448 C 583.229 10.67 585.338 11.662 585.623 14.634 A 7.303 7.303 0 0 1 585.655 15.33 Z M 179.69 25.13 L 183.12 24.92 A 8.019 8.019 0 0 0 183.243 24.914 C 184.354 24.852 188.545 24.528 188.545 27.685 A 3.444 3.444 0 0 1 186.822 30.634 C 185.674 31.387 184.139 31.759 182.819 31.858 A 9.613 9.613 0 0 1 182.105 31.885 A 9.702 9.702 0 0 1 181.349 31.854 C 180.103 31.756 178.531 31.412 177.506 30.637 A 2.449 2.449 0 0 1 176.435 28.63 A 2.441 2.441 0 0 1 176.958 27.219 C 177.636 26.281 178.833 25.511 179.69 25.13 Z M 181.44 19.355 C 179.865 19.355 177.765 17.78 177.765 14.315 C 177.765 12.533 178.418 10.347 180.399 10.103 A 3.066 3.066 0 0 1 180.775 10.08 A 3.159 3.159 0 0 1 182.389 10.494 C 183.827 11.329 184.415 13.283 184.415 15.015 A 8.62 8.62 0 0 1 184.369 15.916 C 184.202 17.493 183.554 19.071 181.909 19.321 A 3.12 3.12 0 0 1 181.44 19.355 Z M 259.595 17.15 L 259.595 22.435 A 4.117 4.117 0 0 1 257.473 23.694 A 2.292 2.292 0 0 1 257.075 23.73 A 2.433 2.433 0 0 1 255.942 23.47 C 255.073 23.019 254.625 22.039 254.625 20.965 C 254.625 20.475 254.73 20.02 254.87 19.565 L 259.595 17.15 Z M 388.395 17.15 L 388.395 22.435 A 4.117 4.117 0 0 1 386.273 23.694 A 2.292 2.292 0 0 1 385.875 23.73 A 2.433 2.433 0 0 1 384.742 23.47 C 383.873 23.019 383.425 22.039 383.425 20.965 C 383.425 20.475 383.53 20.02 383.67 19.565 L 388.395 17.15 Z M 475.895 17.15 L 475.895 22.435 A 4.117 4.117 0 0 1 473.773 23.694 A 2.292 2.292 0 0 1 473.375 23.73 A 2.433 2.433 0 0 1 472.242 23.47 C 471.373 23.019 470.925 22.039 470.925 20.965 C 470.925 20.475 471.03 20.02 471.17 19.565 L 475.895 17.15 Z M 126.245 13.51 L 119.525 13.79 A 6.634 6.634 0 0 1 119.659 13.278 C 120.148 11.679 121.293 10.08 123.095 10.08 A 2.712 2.712 0 0 1 125.324 11.292 C 125.693 11.794 125.957 12.4 126.126 13.006 A 6.601 6.601 0 0 1 126.245 13.51 Z M 311.745 13.51 L 305.025 13.79 A 6.634 6.634 0 0 1 305.159 13.278 C 305.648 11.679 306.793 10.08 308.595 10.08 A 2.712 2.712 0 0 1 310.824 11.292 C 311.193 11.794 311.457 12.4 311.626 13.006 A 6.601 6.601 0 0 1 311.745 13.51 Z M 148.05 0.91 C 147.07 0.91 146.265 1.715 146.265 2.695 C 146.265 3.675 147.07 4.48 148.05 4.48 C 149.03 4.48 149.835 3.675 149.835 2.695 C 149.835 1.715 149.03 0.91 148.05 0.91 Z M 225.75 0.91 C 224.77 0.91 223.965 1.715 223.965 2.695 C 223.965 3.675 224.77 4.48 225.75 4.48 C 226.73 4.48 227.535 3.675 227.535 2.695 C 227.535 1.715 226.73 0.91 225.75 0.91 Z M 461.65 0.91 C 460.67 0.91 459.865 1.715 459.865 2.695 C 459.865 3.675 460.67 4.48 461.65 4.48 C 462.63 4.48 463.435 3.675 463.435 2.695 C 463.435 1.715 462.63 0.91 461.65 0.91 Z M 525.819 1.858 C 525.821 1.858 525.822 1.859 525.824 1.859"
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
                width="373.1"
                height="18.25"
                viewBox="0 0 373.1 18.25"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: "inline-block",
                  transform: "translate(0px, 0%)",
                  willChange: "transform",
                }}
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
                    d="M 44.575 12.4 L 44.575 15.05 C 44.55 17 44.475 17.3 42.75 17.575 L 42.75 17.95 L 48.25 17.95 L 48.25 17.575 A 20.194 20.194 0 0 1 48.155 17.559 C 46.596 17.292 46.5 17.06 46.5 15.05 L 46.5 9.175 A 8.428 8.428 0 0 1 46.636 9.038 C 47.251 8.429 47.867 8.029 48.729 7.961 A 3.41 3.41 0 0 1 49 7.95 A 3.515 3.515 0 0 1 49.876 8.052 C 52.14 8.633 51.827 11.527 51.825 12.391 A 3.461 3.461 0 0 0 51.825 12.4 L 51.825 15.05 C 51.8 17 51.725 17.3 50 17.575 L 50 17.95 L 55.5 17.95 L 55.5 17.575 A 20.194 20.194 0 0 1 55.405 17.559 C 53.846 17.292 53.75 17.06 53.75 15.05 L 53.75 11.775 C 53.75 10.425 54.2 6.65 50.5 6.65 A 5.519 5.519 0 0 0 47.218 7.973 C 46.948 8.176 46.687 8.39 46.434 8.604 A 34.337 34.337 0 0 0 46.35 8.675 C 45.9 7.4 44.6 6.65 43.3 6.65 A 5.592 5.592 0 0 0 40.01 7.973 C 39.74 8.176 39.481 8.39 39.233 8.604 A 22.804 22.804 0 0 0 39.15 8.675 L 39.35 6.75 L 39.075 6.65 L 36.1 7.75 L 36.1 8 C 37.326 8.883 37.325 9.212 37.325 10.215 A 125.43 125.43 0 0 0 37.325 10.275 L 37.325 15.05 C 37.3 17 37.225 17.3 35.5 17.575 L 35.5 17.95 L 41 17.95 L 41 17.575 A 20.194 20.194 0 0 1 40.905 17.559 C 39.346 17.292 39.25 17.06 39.25 15.05 L 39.25 9.2 C 39.95 8.475 40.7 7.95 41.775 7.95 A 3.589 3.589 0 0 1 42.678 8.056 C 44.716 8.585 44.592 10.967 44.576 12.228 A 14.148 14.148 0 0 0 44.575 12.4 Z M 167.4 9.025 L 164.675 9.025 L 164.675 1.55 L 166.95 1.55 C 169.413 1.55 171.414 1.66 171.775 4.338 A 6.446 6.446 0 0 1 171.825 4.9 L 172.2 4.9 L 172.6 0.95 L 159.375 0.95 L 159.375 1.325 A 11.417 11.417 0 0 1 160.444 1.512 C 162.346 1.955 162.408 2.793 162.471 4.924 A 345.56 345.56 0 0 1 162.475 5.05 L 162.475 13.85 A 345.56 345.56 0 0 1 162.471 13.976 C 162.407 16.149 162.343 16.978 160.329 17.414 A 12.114 12.114 0 0 1 159.375 17.575 L 159.375 17.95 L 168.275 17.95 L 168.275 17.575 A 20.9 20.9 0 0 1 167.06 17.361 C 164.971 16.916 164.709 16.292 164.679 14.428 A 36.233 36.233 0 0 1 164.675 13.85 L 164.675 10.075 L 167.4 10.075 A 258.329 258.329 0 0 0 167.519 10.075 C 169.549 10.074 170.804 10.073 171 12.55 L 171.375 12.55 L 171.375 6.45 L 171 6.45 C 170.811 8.699 169.635 8.998 167.729 9.023 A 24.649 24.649 0 0 1 167.4 9.025 Z M 262.725 0.95 L 251.275 0.95 C 250.498 0.95 250.364 0.972 249.829 0.495 A 9.466 9.466 0 0 1 249.725 0.4 L 249.475 0.175 L 249.275 0.175 L 248.925 4.85 L 249.275 4.925 A 8.079 8.079 0 0 1 249.726 3.679 C 250.616 1.789 251.974 1.7 254.4 1.7 L 255.9 1.7 L 255.9 13.25 C 255.9 16.059 255.777 17 253.26 17.45 A 15.111 15.111 0 0 1 252.4 17.575 L 252.4 17.95 L 261.6 17.95 L 261.6 17.575 A 12.761 12.761 0 0 1 260.368 17.376 C 258.466 16.955 258.155 16.14 258.108 14.128 A 38.116 38.116 0 0 1 258.1 13.25 L 258.1 1.7 L 259.6 1.7 C 262.475 1.7 263.85 1.825 264.725 4.925 L 265.075 4.85 L 264.725 0.175 L 264.525 0.175 L 264.275 0.4 A 8.12 8.12 0 0 1 264.115 0.544 C 263.626 0.971 263.474 0.95 262.725 0.95 Z M 333.725 0.95 L 322.275 0.95 C 321.498 0.95 321.364 0.972 320.829 0.495 A 9.466 9.466 0 0 1 320.725 0.4 L 320.475 0.175 L 320.275 0.175 L 319.925 4.85 L 320.275 4.925 A 8.079 8.079 0 0 1 320.726 3.679 C 321.616 1.789 322.974 1.7 325.4 1.7 L 326.9 1.7 L 326.9 13.25 C 326.9 16.059 326.777 17 324.26 17.45 A 15.111 15.111 0 0 1 323.4 17.575 L 323.4 17.95 L 332.6 17.95 L 332.6 17.575 A 12.761 12.761 0 0 1 331.368 17.376 C 329.466 16.955 329.155 16.14 329.108 14.128 A 38.116 38.116 0 0 1 329.1 13.25 L 329.1 1.7 L 330.6 1.7 C 333.475 1.7 334.85 1.825 335.725 4.925 L 336.075 4.85 L 335.725 0.175 L 335.525 0.175 L 335.275 0.4 A 8.12 8.12 0 0 1 335.115 0.544 C 334.626 0.971 334.474 0.95 333.725 0.95 Z M 3.1 6.1 L 3.1 13.85 A 345.56 345.56 0 0 1 3.096 13.976 C 3.032 16.149 2.968 16.978 0.954 17.414 A 12.114 12.114 0 0 1 0 17.575 L 0 17.95 L 8.625 17.95 L 8.625 17.575 A 18.571 18.571 0 0 1 7.483 17.379 C 5.338 16.927 5.3 16.235 5.3 13.85 L 5.3 1.5 A 8.552 8.552 0 0 1 5.373 1.5 C 8.27 1.5 10.95 2.977 10.95 6.2 C 10.95 8.266 9.823 9.427 8.147 9.966 A 7.306 7.306 0 0 1 7.025 10.225 L 7.1 10.6 A 14.142 14.142 0 0 0 8.32 10.412 C 10.91 9.891 13.5 8.547 13.5 5.525 C 13.5 4.562 12.964 0.724 5.9 0.892 A 19.942 19.942 0 0 0 5.625 0.9 L 0.175 1.1 L 0.175 1.475 C 3.1 1.625 3.1 2.7 3.1 6.1 Z M 275.25 12.175 L 275.25 15.05 A 21.3 21.3 0 0 1 275.232 15.779 C 275.169 17.084 274.89 17.339 273.3 17.575 L 273.3 17.95 L 279.125 17.95 L 279.125 17.575 A 24.938 24.938 0 0 1 279.019 17.559 C 277.306 17.297 277.179 17.069 277.175 15.168 A 51.543 51.543 0 0 1 277.175 15.05 L 277.175 10.6 C 277.175 9.295 277.058 7.206 274.951 6.743 A 4.31 4.31 0 0 0 274.025 6.65 A 6.812 6.812 0 0 0 270.701 7.732 C 270.371 7.918 270.047 8.112 269.725 8.3 L 269.725 0.1 L 269.45 0 L 266.575 1.1 L 266.575 1.35 C 267.801 2.233 267.8 2.562 267.8 3.565 A 125.43 125.43 0 0 0 267.8 3.625 L 267.8 15.05 A 21.3 21.3 0 0 1 267.782 15.779 C 267.719 17.084 267.44 17.339 265.85 17.575 L 265.85 17.95 L 271.675 17.95 L 271.675 17.575 A 24.938 24.938 0 0 1 271.569 17.559 C 269.856 17.297 269.729 17.069 269.725 15.168 A 51.543 51.543 0 0 1 269.725 15.05 L 269.725 8.8 C 270.55 8.275 271.25 7.95 272.275 7.95 A 4.224 4.224 0 0 1 273.271 8.058 C 275.308 8.552 275.25 10.642 275.25 12.175 Z M 91.05 12.725 L 90.6 12.725 L 91.325 16.975 A 8.219 8.219 0 0 0 94.862 18.203 A 8.05 8.05 0 0 0 95.725 18.25 A 7.608 7.608 0 0 0 96.526 18.207 C 99.163 17.928 101.8 16.278 101.8 13.35 A 4.037 4.037 0 0 0 101.382 11.512 C 100.25 9.247 97.085 8.359 95.263 6.777 A 3.4 3.4 0 0 1 93.925 4.125 A 2.671 2.671 0 0 1 94.426 2.533 C 94.955 1.806 95.848 1.375 96.85 1.375 C 98.672 1.375 99.505 2.431 99.977 3.796 A 11.758 11.758 0 0 1 100.375 5.35 L 100.775 5.35 L 100.975 1.6 C 99.875 1 98.6 0.625 97.325 0.625 A 5.981 5.981 0 0 0 96.745 0.653 C 94.247 0.897 91.75 2.686 91.75 5.4 A 4.011 4.011 0 0 0 92.099 7.086 C 93.595 10.377 99.4 10.574 99.4 14.45 A 3.176 3.176 0 0 1 99.096 15.854 C 98.577 16.919 97.444 17.5 96.1 17.5 A 4.587 4.587 0 0 1 92.405 15.574 A 7.99 7.99 0 0 1 91.05 12.725 Z M 180.35 17.575 L 180.35 17.95 L 186.175 17.95 L 186.175 17.575 A 24.938 24.938 0 0 1 186.069 17.559 C 184.356 17.297 184.229 17.069 184.225 15.168 A 51.543 51.543 0 0 1 184.225 15.05 L 184.225 9.025 C 184.989 8.33 185.647 8 186.555 7.955 A 4.485 4.485 0 0 1 186.775 7.95 A 4.224 4.224 0 0 1 187.771 8.058 C 189.808 8.552 189.75 10.642 189.75 12.175 L 189.75 15.05 A 21.3 21.3 0 0 1 189.732 15.779 C 189.669 17.084 189.39 17.339 187.8 17.575 L 187.8 17.95 L 193.625 17.95 L 193.625 17.575 A 24.938 24.938 0 0 1 193.519 17.559 C 191.806 17.297 191.679 17.069 191.675 15.168 A 51.543 51.543 0 0 1 191.675 15.05 L 191.675 10.6 C 191.675 9.295 191.558 7.206 189.451 6.743 A 4.31 4.31 0 0 0 188.525 6.65 A 5.717 5.717 0 0 0 185.579 7.588 C 185.093 7.878 184.612 8.216 184.125 8.575 L 184.325 6.75 L 184.05 6.65 L 181.075 7.75 L 181.075 8 C 182.301 8.883 182.3 9.212 182.3 10.215 A 125.43 125.43 0 0 0 182.3 10.275 L 182.3 15.05 A 21.3 21.3 0 0 1 182.282 15.779 C 182.219 17.084 181.94 17.339 180.35 17.575 Z M 205.35 17.575 L 205.35 17.95 L 211.175 17.95 L 211.175 17.575 A 24.938 24.938 0 0 1 211.069 17.559 C 209.356 17.297 209.229 17.069 209.225 15.168 A 51.543 51.543 0 0 1 209.225 15.05 L 209.225 9.025 C 209.989 8.33 210.647 8 211.555 7.955 A 4.485 4.485 0 0 1 211.775 7.95 A 4.224 4.224 0 0 1 212.771 8.058 C 214.808 8.552 214.75 10.642 214.75 12.175 L 214.75 15.05 A 21.3 21.3 0 0 1 214.732 15.779 C 214.669 17.084 214.39 17.339 212.8 17.575 L 212.8 17.95 L 218.625 17.95 L 218.625 17.575 A 24.938 24.938 0 0 1 218.519 17.559 C 216.806 17.297 216.679 17.069 216.675 15.168 A 51.543 51.543 0 0 1 216.675 15.05 L 216.675 10.6 C 216.675 9.295 216.558 7.206 214.451 6.743 A 4.31 4.31 0 0 0 213.525 6.65 A 5.717 5.717 0 0 0 210.579 7.588 C 210.093 7.878 209.612 8.216 209.125 8.575 L 209.325 6.75 L 209.05 6.65 L 206.075 7.75 L 206.075 8 C 207.301 8.883 207.3 9.212 207.3 10.215 A 125.43 125.43 0 0 0 207.3 10.275 L 207.3 15.05 A 21.3 21.3 0 0 1 207.282 15.779 C 207.219 17.084 206.94 17.339 205.35 17.575 Z M 286.35 17.575 L 286.35 17.95 L 292.175 17.95 L 292.175 17.575 A 24.938 24.938 0 0 1 292.069 17.559 C 290.356 17.297 290.229 17.069 290.225 15.168 A 51.543 51.543 0 0 1 290.225 15.05 L 290.225 9.025 C 290.989 8.33 291.647 8 292.555 7.955 A 4.485 4.485 0 0 1 292.775 7.95 A 4.224 4.224 0 0 1 293.771 8.058 C 295.808 8.552 295.75 10.642 295.75 12.175 L 295.75 15.05 A 21.3 21.3 0 0 1 295.732 15.779 C 295.669 17.084 295.39 17.339 293.8 17.575 L 293.8 17.95 L 299.625 17.95 L 299.625 17.575 A 24.938 24.938 0 0 1 299.519 17.559 C 297.806 17.297 297.679 17.069 297.675 15.168 A 51.543 51.543 0 0 1 297.675 15.05 L 297.675 10.6 C 297.675 9.295 297.558 7.206 295.451 6.743 A 4.31 4.31 0 0 0 294.525 6.65 A 5.717 5.717 0 0 0 291.579 7.588 C 291.093 7.878 290.612 8.216 290.125 8.575 L 290.325 6.75 L 290.05 6.65 L 287.075 7.75 L 287.075 8 C 288.301 8.883 288.3 9.212 288.3 10.215 A 125.43 125.43 0 0 0 288.3 10.275 L 288.3 15.05 A 21.3 21.3 0 0 1 288.282 15.779 C 288.219 17.084 287.94 17.339 286.35 17.575 Z M 346.75 17.575 L 346.75 17.95 L 352.575 17.95 L 352.575 17.575 A 24.938 24.938 0 0 1 352.469 17.559 C 350.756 17.297 350.629 17.069 350.625 15.168 A 51.543 51.543 0 0 1 350.625 15.05 L 350.625 9.025 C 351.389 8.33 352.047 8 352.955 7.955 A 4.485 4.485 0 0 1 353.175 7.95 A 4.224 4.224 0 0 1 354.171 8.058 C 356.208 8.552 356.15 10.642 356.15 12.175 L 356.15 15.05 A 21.3 21.3 0 0 1 356.132 15.779 C 356.069 17.084 355.79 17.339 354.2 17.575 L 354.2 17.95 L 360.025 17.95 L 360.025 17.575 A 24.938 24.938 0 0 1 359.919 17.559 C 358.206 17.297 358.079 17.069 358.075 15.168 A 51.543 51.543 0 0 1 358.075 15.05 L 358.075 10.6 C 358.075 9.295 357.958 7.206 355.851 6.743 A 4.31 4.31 0 0 0 354.925 6.65 A 5.717 5.717 0 0 0 351.979 7.588 C 351.493 7.878 351.012 8.216 350.525 8.575 L 350.725 6.75 L 350.45 6.65 L 347.475 7.75 L 347.475 8 C 348.701 8.883 348.7 9.212 348.7 10.215 A 125.43 125.43 0 0 0 348.7 10.275 L 348.7 15.05 A 21.3 21.3 0 0 1 348.682 15.779 C 348.619 17.084 348.34 17.339 346.75 17.575 Z M 145.3 17.525 L 145.3 17.15 C 143.041 16.689 143.118 16.18 143.125 14.135 A 60.286 60.286 0 0 0 143.125 13.95 L 143.125 10.4 A 5.669 5.669 0 0 0 142.816 8.42 C 142.42 7.373 141.603 6.65 140.125 6.65 A 2.987 2.987 0 0 0 139.398 6.747 C 137.5 7.226 135.35 9.328 135.35 9.925 A 0.224 0.224 0 0 0 135.372 10.028 C 135.456 10.193 135.754 10.175 135.925 10.175 L 137.175 10.1 A 23.862 23.862 0 0 0 137.173 9.846 C 137.16 8.624 137.109 7.9 138.725 7.9 A 3.443 3.443 0 0 1 139.753 8.037 C 140.862 8.384 141.3 9.413 141.225 11.32 A 12.802 12.802 0 0 1 141.2 11.75 L 135.675 14.25 A 4.602 4.602 0 0 0 135.572 14.732 C 135.541 14.936 135.525 15.139 135.525 15.35 A 3.196 3.196 0 0 0 136.117 17.262 C 136.542 17.83 137.188 18.2 138.025 18.2 A 4.178 4.178 0 0 0 140.886 16.831 A 7.147 7.147 0 0 0 141.2 16.5 A 2.942 2.942 0 0 0 141.363 17.189 C 141.53 17.618 141.816 17.91 142.288 18.023 A 2.093 2.093 0 0 0 142.775 18.075 A 4.679 4.679 0 0 0 143.807 17.94 C 144.271 17.834 144.766 17.68 145.3 17.525 Z M 204.8 17.525 L 204.8 17.15 C 202.541 16.689 202.618 16.18 202.625 14.135 A 60.286 60.286 0 0 0 202.625 13.95 L 202.625 10.4 A 5.669 5.669 0 0 0 202.316 8.42 C 201.92 7.373 201.103 6.65 199.625 6.65 A 2.987 2.987 0 0 0 198.898 6.747 C 197 7.226 194.85 9.328 194.85 9.925 A 0.224 0.224 0 0 0 194.872 10.028 C 194.956 10.193 195.254 10.175 195.425 10.175 L 196.675 10.1 A 23.862 23.862 0 0 0 196.673 9.846 C 196.66 8.624 196.609 7.9 198.225 7.9 A 3.443 3.443 0 0 1 199.253 8.037 C 200.362 8.384 200.8 9.413 200.725 11.32 A 12.802 12.802 0 0 1 200.7 11.75 L 195.175 14.25 A 4.602 4.602 0 0 0 195.072 14.732 C 195.041 14.936 195.025 15.139 195.025 15.35 A 3.196 3.196 0 0 0 195.617 17.262 C 196.042 17.83 196.688 18.2 197.525 18.2 A 4.178 4.178 0 0 0 200.386 16.831 A 7.147 7.147 0 0 0 200.7 16.5 A 2.942 2.942 0 0 0 200.863 17.189 C 201.03 17.618 201.316 17.91 201.788 18.023 A 2.093 2.093 0 0 0 202.275 18.075 A 4.679 4.679 0 0 0 203.307 17.94 C 203.771 17.834 204.266 17.68 204.8 17.525 Z M 346.2 17.525 L 346.2 17.15 C 343.941 16.689 344.018 16.18 344.025 14.135 A 60.286 60.286 0 0 0 344.025 13.95 L 344.025 10.4 A 5.669 5.669 0 0 0 343.716 8.42 C 343.32 7.373 342.503 6.65 341.025 6.65 A 2.987 2.987 0 0 0 340.298 6.747 C 338.4 7.226 336.25 9.328 336.25 9.925 A 0.224 0.224 0 0 0 336.272 10.028 C 336.356 10.193 336.654 10.175 336.825 10.175 L 338.075 10.1 A 23.862 23.862 0 0 0 338.073 9.846 C 338.06 8.624 338.009 7.9 339.625 7.9 A 3.443 3.443 0 0 1 340.653 8.037 C 341.762 8.384 342.2 9.413 342.125 11.32 A 12.802 12.802 0 0 1 342.1 11.75 L 336.575 14.25 A 4.602 4.602 0 0 0 336.472 14.732 C 336.441 14.936 336.425 15.139 336.425 15.35 A 3.196 3.196 0 0 0 337.017 17.262 C 337.442 17.83 338.088 18.2 338.925 18.2 A 4.178 4.178 0 0 0 341.786 16.831 A 7.147 7.147 0 0 0 342.1 16.5 A 2.942 2.942 0 0 0 342.263 17.189 C 342.43 17.618 342.716 17.91 343.188 18.023 A 2.093 2.093 0 0 0 343.675 18.075 A 4.679 4.679 0 0 0 344.707 17.94 C 345.171 17.834 345.666 17.68 346.2 17.525 Z M 26.575 10.325 L 33.825 10.325 A 4.257 4.257 0 0 0 33.362 8.515 C 32.853 7.55 31.953 6.913 30.782 6.716 A 4.843 4.843 0 0 0 29.975 6.65 A 5.408 5.408 0 0 0 26.629 7.761 C 25.263 8.812 24.431 10.504 24.356 12.373 A 6.9 6.9 0 0 0 24.35 12.65 A 5.707 5.707 0 0 0 26.13 16.868 C 27.013 17.681 28.182 18.184 29.535 18.2 A 5.635 5.635 0 0 0 29.6 18.2 C 31.55 18.2 33.25 16.925 34.2 15.3 L 33.825 15.025 C 33.075 16.025 32.175 16.6 30.875 16.6 C 28.195 16.6 26.46 14.417 26.46 11.973 A 5.19 5.19 0 0 1 26.475 11.575 L 26.575 10.325 Z M 65.575 10.325 L 72.825 10.325 A 4.257 4.257 0 0 0 72.362 8.515 C 71.853 7.55 70.953 6.913 69.782 6.716 A 4.843 4.843 0 0 0 68.975 6.65 A 5.408 5.408 0 0 0 65.629 7.761 C 64.263 8.812 63.431 10.504 63.356 12.373 A 6.9 6.9 0 0 0 63.35 12.65 A 5.707 5.707 0 0 0 65.13 16.868 C 66.013 17.681 67.182 18.184 68.535 18.2 A 5.635 5.635 0 0 0 68.6 18.2 C 70.55 18.2 72.25 16.925 73.2 15.3 L 72.825 15.025 C 72.075 16.025 71.175 16.6 69.875 16.6 C 67.195 16.6 65.46 14.417 65.46 11.973 A 5.19 5.19 0 0 1 65.475 11.575 L 65.575 10.325 Z M 233.075 10.325 L 240.325 10.325 A 4.257 4.257 0 0 0 239.862 8.515 C 239.353 7.55 238.453 6.913 237.282 6.716 A 4.843 4.843 0 0 0 236.475 6.65 A 5.408 5.408 0 0 0 233.129 7.761 C 231.763 8.812 230.931 10.504 230.856 12.373 A 6.9 6.9 0 0 0 230.85 12.65 A 5.707 5.707 0 0 0 232.63 16.868 C 233.513 17.681 234.682 18.184 236.035 18.2 A 5.635 5.635 0 0 0 236.1 18.2 C 238.05 18.2 239.75 16.925 240.7 15.3 L 240.325 15.025 C 239.575 16.025 238.675 16.6 237.375 16.6 C 234.695 16.6 232.96 14.417 232.96 11.973 A 5.19 5.19 0 0 1 232.975 11.575 L 233.075 10.325 Z M 127.4 16.125 L 127.1 15.75 A 9.078 9.078 0 0 1 126.663 16.051 C 126.066 16.433 125.485 16.677 124.754 16.719 A 4.004 4.004 0 0 1 124.525 16.725 A 4.55 4.55 0 0 1 120.466 14.162 C 120.076 13.398 119.85 12.485 119.85 11.45 A 5.134 5.134 0 0 1 119.911 10.676 C 120.066 9.661 120.522 8.585 121.296 7.961 A 2.344 2.344 0 0 1 122.8 7.425 A 2.052 2.052 0 0 1 123.954 7.852 C 124.522 8.244 125.021 8.792 125.5 8.982 A 0.882 0.882 0 0 0 125.825 9.05 C 126.4 9.05 127 8.45 127 7.9 A 0.953 0.953 0 0 0 126.452 7.053 C 125.887 6.731 125.013 6.663 124.457 6.652 A 9.277 9.277 0 0 0 124.275 6.65 A 6.285 6.285 0 0 0 117.852 12.562 A 5.993 5.993 0 0 0 117.85 12.725 A 5.595 5.595 0 0 0 119.979 17.201 A 4.937 4.937 0 0 0 123 18.2 C 124.725 18.2 126.275 17.4 127.4 16.125 Z M 229.4 16.125 L 229.1 15.75 A 9.078 9.078 0 0 1 228.663 16.051 C 228.066 16.433 227.485 16.677 226.754 16.719 A 4.004 4.004 0 0 1 226.525 16.725 A 4.55 4.55 0 0 1 222.466 14.162 C 222.076 13.398 221.85 12.485 221.85 11.45 A 5.134 5.134 0 0 1 221.911 10.676 C 222.066 9.661 222.522 8.585 223.296 7.961 A 2.344 2.344 0 0 1 224.8 7.425 A 2.052 2.052 0 0 1 225.954 7.852 C 226.522 8.244 227.021 8.792 227.5 8.982 A 0.882 0.882 0 0 0 227.825 9.05 C 228.4 9.05 229 8.45 229 7.9 A 0.953 0.953 0 0 0 228.452 7.053 C 227.887 6.731 227.013 6.663 226.457 6.652 A 9.277 9.277 0 0 0 226.275 6.65 A 6.285 6.285 0 0 0 219.852 12.562 A 5.993 5.993 0 0 0 219.85 12.725 A 5.595 5.595 0 0 0 221.979 17.201 A 4.937 4.937 0 0 0 225 18.2 C 226.725 18.2 228.275 17.4 229.4 16.125 Z M 18.4 9.7 L 18.35 9.7 L 18.45 6.75 L 18.175 6.65 L 15.2 7.75 L 15.2 8 C 16.426 8.883 16.425 9.212 16.425 10.215 A 125.43 125.43 0 0 0 16.425 10.275 L 16.425 15.05 C 16.4 17 16.325 17.3 14.6 17.575 L 14.6 17.95 L 20.85 17.95 L 20.85 17.575 A 40.7 40.7 0 0 1 20.712 17.559 C 18.446 17.292 18.35 17.06 18.35 15.05 L 18.35 12.525 A 3.005 3.005 0 0 0 18.35 12.482 C 18.342 11.958 18.246 8.925 20.128 8.574 A 1.915 1.915 0 0 1 20.3 8.55 C 20.849 8.5 21.472 9.048 21.897 9.373 A 6.976 6.976 0 0 0 21.9 9.375 A 2.689 2.689 0 0 0 22.089 9.275 C 22.494 9.04 22.925 8.658 23.109 8.224 A 1.087 1.087 0 0 0 23.2 7.8 C 23.2 7.1 22.625 6.65 21.925 6.65 C 20.35 6.65 18.95 8.375 18.4 9.7 Z M 78.15 9.7 L 78.1 9.7 L 78.2 6.75 L 77.925 6.65 L 74.95 7.75 L 74.95 8 C 76.176 8.883 76.175 9.212 76.175 10.215 A 125.43 125.43 0 0 0 76.175 10.275 L 76.175 15.05 C 76.15 17 76.075 17.3 74.35 17.575 L 74.35 17.95 L 80.6 17.95 L 80.6 17.575 A 40.7 40.7 0 0 1 80.462 17.559 C 78.196 17.292 78.1 17.06 78.1 15.05 L 78.1 12.525 A 3.005 3.005 0 0 0 78.1 12.482 C 78.092 11.958 77.996 8.925 79.878 8.574 A 1.915 1.915 0 0 1 80.05 8.55 C 80.599 8.5 81.222 9.048 81.647 9.373 A 6.976 6.976 0 0 0 81.65 9.375 A 2.689 2.689 0 0 0 81.839 9.275 C 82.244 9.04 82.675 8.658 82.859 8.224 A 1.087 1.087 0 0 0 82.95 7.8 C 82.95 7.1 82.375 6.65 81.675 6.65 C 80.1 6.65 78.7 8.375 78.15 9.7 Z M 151.55 17.95 L 151.55 17.575 A 24.938 24.938 0 0 1 151.444 17.559 C 149.731 17.297 149.604 17.069 149.6 15.168 A 51.543 51.543 0 0 1 149.6 15.05 L 149.6 0.1 L 149.325 0 L 146.45 1.1 L 146.45 1.35 C 147.676 2.233 147.675 2.562 147.675 3.565 A 125.43 125.43 0 0 0 147.675 3.625 L 147.675 15.05 A 21.3 21.3 0 0 1 147.657 15.779 C 147.594 17.084 147.315 17.339 145.725 17.575 L 145.725 17.95 L 151.55 17.95 Z M 304.1 0.1 L 303.825 0 L 300.95 1.1 L 300.95 1.35 C 302.176 2.233 302.175 2.562 302.175 3.565 A 125.43 125.43 0 0 0 302.175 3.625 L 302.175 15.05 A 21.3 21.3 0 0 1 302.157 15.779 C 302.094 17.084 301.815 17.339 300.225 17.575 L 300.225 17.95 L 306.05 17.95 L 306.05 17.575 A 24.938 24.938 0 0 1 305.944 17.559 C 304.231 17.297 304.104 17.069 304.1 15.168 A 51.543 51.543 0 0 1 304.1 15.05 L 304.1 0.1 Z M 364.5 0.1 L 364.225 0 L 361.35 1.1 L 361.35 1.35 C 362.576 2.233 362.575 2.562 362.575 3.565 A 125.43 125.43 0 0 0 362.575 3.625 L 362.575 15.05 A 21.3 21.3 0 0 1 362.557 15.779 C 362.494 17.084 362.215 17.339 360.625 17.575 L 360.625 17.95 L 366.45 17.95 L 366.45 17.575 A 24.938 24.938 0 0 1 366.344 17.559 C 364.631 17.297 364.504 17.069 364.5 15.168 A 51.543 51.543 0 0 1 364.5 15.05 L 364.5 0.1 Z M 305.95 7.125 L 305.95 7.5 A 4.864 4.864 0 0 1 306.38 7.656 C 307.82 8.269 306.724 9.044 304.4 11.875 C 305.7 13.75 308.325 18.125 311 18.125 C 311.575 18.125 312.125 18.025 312.7 17.95 L 312.7 17.675 C 311.414 17.104 310.401 16.079 309.443 15.054 A 100.209 100.209 0 0 1 309.3 14.9 L 305.95 11.075 A 64.75 64.75 0 0 1 306.62 10.319 C 307.928 8.87 308.983 7.932 310.711 7.394 A 9.911 9.911 0 0 1 311.8 7.125 L 311.8 6.75 L 305.95 7.125 Z M 366.35 7.125 L 366.35 7.5 A 4.864 4.864 0 0 1 366.78 7.656 C 368.22 8.269 367.124 9.044 364.8 11.875 C 366.1 13.75 368.725 18.125 371.4 18.125 C 371.975 18.125 372.525 18.025 373.1 17.95 L 373.1 17.675 C 371.814 17.104 370.801 16.079 369.843 15.054 A 100.209 100.209 0 0 1 369.7 14.9 L 366.35 11.075 A 64.75 64.75 0 0 1 367.02 10.319 C 368.328 8.87 369.383 7.932 371.111 7.394 A 9.911 9.911 0 0 1 372.2 7.125 L 372.2 6.75 L 366.35 7.125 Z M 116.15 12.375 C 116.15 8.85 113.425 6.65 110.025 6.65 A 6.396 6.396 0 0 0 105.526 8.416 C 104.492 9.431 103.85 10.831 103.85 12.475 C 103.85 15.566 105.916 17.615 108.711 18.093 A 7.647 7.647 0 0 0 110 18.2 A 6.248 6.248 0 0 0 115.147 15.61 A 5.604 5.604 0 0 0 116.15 12.375 Z M 62.05 17.95 L 62.05 17.575 A 24.938 24.938 0 0 1 61.944 17.559 C 60.231 17.297 60.104 17.069 60.1 15.168 A 51.543 51.543 0 0 1 60.1 15.05 L 60.1 6.75 L 59.825 6.65 L 56.65 7.75 L 56.65 8 C 58.2 8.9 58.175 9.225 58.175 10.275 L 58.175 15.05 A 21.3 21.3 0 0 1 58.157 15.779 C 58.094 17.084 57.815 17.339 56.225 17.575 L 56.225 17.95 L 62.05 17.95 Z M 134.05 17.95 L 134.05 17.575 A 24.938 24.938 0 0 1 133.944 17.559 C 132.231 17.297 132.104 17.069 132.1 15.168 A 51.543 51.543 0 0 1 132.1 15.05 L 132.1 6.75 L 131.825 6.65 L 128.65 7.75 L 128.65 8 C 130.2 8.9 130.175 9.225 130.175 10.275 L 130.175 15.05 A 21.3 21.3 0 0 1 130.157 15.779 C 130.094 17.084 129.815 17.339 128.225 17.575 L 128.225 17.95 L 134.05 17.95 Z M 179.55 17.95 L 179.55 17.575 A 24.938 24.938 0 0 1 179.444 17.559 C 177.731 17.297 177.604 17.069 177.6 15.168 A 51.543 51.543 0 0 1 177.6 15.05 L 177.6 6.75 L 177.325 6.65 L 174.15 7.75 L 174.15 8 C 175.7 8.9 175.675 9.225 175.675 10.275 L 175.675 15.05 A 21.3 21.3 0 0 1 175.657 15.779 C 175.594 17.084 175.315 17.339 173.725 17.575 L 173.725 17.95 L 179.55 17.95 Z M 285.55 17.95 L 285.55 17.575 A 24.938 24.938 0 0 1 285.444 17.559 C 283.731 17.297 283.604 17.069 283.6 15.168 A 51.543 51.543 0 0 1 283.6 15.05 L 283.6 6.75 L 283.325 6.65 L 280.15 7.75 L 280.15 8 C 281.7 8.9 281.675 9.225 281.675 10.275 L 281.675 15.05 A 21.3 21.3 0 0 1 281.657 15.779 C 281.594 17.084 281.315 17.339 279.725 17.575 L 279.725 17.95 L 285.55 17.95 Z M 113.747 13.636 A 6.795 6.795 0 0 0 113.825 12.625 A 7.276 7.276 0 0 0 113.82 12.351 C 113.761 10.781 113.195 8.914 111.982 7.915 A 3.078 3.078 0 0 0 109.975 7.2 C 107.684 7.2 106.545 9.216 106.252 11.232 A 7.468 7.468 0 0 0 106.175 12.3 C 106.175 13.445 106.49 14.76 107.133 15.799 A 3.534 3.534 0 0 0 110.175 17.65 A 2.939 2.939 0 0 0 112.153 16.906 C 113.045 16.13 113.562 14.857 113.747 13.636 Z M 141.2 12.25 L 141.2 16.025 A 2.941 2.941 0 0 1 139.684 16.924 A 1.637 1.637 0 0 1 139.4 16.95 C 138.414 16.95 137.832 16.27 137.686 15.414 A 2.617 2.617 0 0 1 137.65 14.975 C 137.65 14.625 137.725 14.3 137.825 13.975 L 141.2 12.25 Z M 200.7 12.25 L 200.7 16.025 A 2.941 2.941 0 0 1 199.184 16.924 A 1.637 1.637 0 0 1 198.9 16.95 C 197.914 16.95 197.332 16.27 197.186 15.414 A 2.617 2.617 0 0 1 197.15 14.975 C 197.15 14.625 197.225 14.3 197.325 13.975 L 200.7 12.25 Z M 342.1 12.25 L 342.1 16.025 A 2.941 2.941 0 0 1 340.584 16.924 A 1.637 1.637 0 0 1 340.3 16.95 C 339.314 16.95 338.732 16.27 338.586 15.414 A 2.617 2.617 0 0 1 338.55 14.975 C 338.55 14.625 338.625 14.3 338.725 13.975 L 342.1 12.25 Z M 31.45 9.65 L 26.65 9.85 A 4.738 4.738 0 0 1 26.746 9.484 C 26.987 8.695 27.453 7.905 28.142 7.493 A 2.032 2.032 0 0 1 29.2 7.2 A 1.937 1.937 0 0 1 30.792 8.066 C 31.129 8.524 31.343 9.104 31.45 9.65 Z M 70.45 9.65 L 65.65 9.85 A 4.738 4.738 0 0 1 65.746 9.484 C 65.987 8.695 66.453 7.905 67.142 7.493 A 2.032 2.032 0 0 1 68.2 7.2 A 1.937 1.937 0 0 1 69.792 8.066 C 70.129 8.524 70.343 9.104 70.45 9.65 Z M 237.95 9.65 L 233.15 9.85 A 4.738 4.738 0 0 1 233.246 9.484 C 233.487 8.695 233.953 7.905 234.642 7.493 A 2.032 2.032 0 0 1 235.7 7.2 A 1.937 1.937 0 0 1 237.292 8.066 C 237.629 8.524 237.843 9.104 237.95 9.65 Z M 59.025 0.65 C 58.325 0.65 57.75 1.225 57.75 1.925 C 57.75 2.625 58.325 3.2 59.025 3.2 C 59.725 3.2 60.3 2.625 60.3 1.925 C 60.3 1.225 59.725 0.65 59.025 0.65 Z M 131.025 0.65 C 130.325 0.65 129.75 1.225 129.75 1.925 C 129.75 2.625 130.325 3.2 131.025 3.2 C 131.725 3.2 132.3 2.625 132.3 1.925 C 132.3 1.225 131.725 0.65 131.025 0.65 Z M 176.525 0.65 C 175.825 0.65 175.25 1.225 175.25 1.925 C 175.25 2.625 175.825 3.2 176.525 3.2 C 177.225 3.2 177.8 2.625 177.8 1.925 C 177.8 1.225 177.225 0.65 176.525 0.65 Z M 282.525 0.65 C 281.825 0.65 281.25 1.225 281.25 1.925 C 281.25 2.625 281.825 3.2 282.525 3.2 C 283.225 3.2 283.8 2.625 283.8 1.925 C 283.8 1.225 283.225 0.65 282.525 0.65 Z"
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
            height: window.innerWidth < 768 ? "35pc" : "100%",
          }}
        >
          <video
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
                {homeData.mainAbout}
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
                {homeData.mainEstablish}
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
                {homeData.mainResearchTitle}
              </div>
              <div
                className="cFlatText lVision-section-writing-text"
                data-flat-text=""
                style={{ padding: "0px 14.25px", transform: "scaleX(1.05)" }}
              >
                {homeData.mainDescription}
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
      <GuideLines />
      {/* <FellowsMobile /> */}
      {window.innerWidth < 767 && <FellowsMobile />}
      {window.innerWidth > 767 && <Fellows />}
      <Blogs />
      <Contact />
      <FooterContainer />
    </div>
  );
};

export default index;
