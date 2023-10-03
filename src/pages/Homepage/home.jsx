/* eslint-disable */
import React, { useEffect } from "react";
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
  getResponsivePenDimensions,
  Pen,
} from "../../components/homeCanvas/Images/Pen";

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
  ManWithHandDirection,
  getResponsiveManWithHandDirectionDimensions,
} from "../../components/homeCanvas/Images/ManWithHandDirection";

import {
  RoofWithRedTop,
  getResponsiveRoofWithRedTopDimensions,
} from "../../components/homeCanvas/Images/RoofWithRedTop";

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
  FirstCircleOutsideEllipse,
  getResponsiveFirstCircleOutsideEllipseDimensions,
} from "../../components/homeCanvas/middleEllipse/FilledCircleOutsideEllipse/FirstCircle";
import {
  SecondCircleOutsideEllipse,
  getResponsiveSecondCircleOutsideEllipseDimensions,
} from "../../components/homeCanvas/middleEllipse/FilledCircleOutsideEllipse/SecondCircle";

gsap.registerPlugin(ScrollTrigger, Draggable);

const index = () => {
  useEffect(() => {
    const canvas = document.querySelector("#canvas1");

    const canvasContainer = document.querySelector(".spacer");

    const spacerHeight = canvasContainer.clientHeight;

    // Calculate 1% of window's height
    const scrollLimit = spacerHeight * 0.01;

    const scrollContainer = document.querySelector(".custom-container");

    const c = canvas.getContext("2d");

    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    canvas.style.width = document.documentElement.clientWidth;
    +"px";
    canvas.style.height = document.documentElement.clientHeight;
    +"px";

    const mouse = {
      x: innerWidth / 2,
      y: innerHeight / 2,
    };

    let prevMouseX = null;
    let prevMouseY = null;

    let deltaX = null;
    let deltaY = null;

    const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

    const timeline = gsap.timeline();

    const canvasScroll = gsap.to("#canvas1", {
      scrollTrigger: {
        trigger: "#canvas1",
        scroller: scrollContainer,
        start: "top top",
        end: "+=1%",
        scrub: true,
        pin: true, // pin the canvas in place
        anticipatePin: 1, // 1 means it will anticipate the pin and unpin before they happen.
      },
    });

    // Attach an event listener to the canvas for the mousemove event
    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (prevMouseX !== null && prevMouseY !== null) {
        deltaX = mouseX - prevMouseX;
        deltaY = mouseY - prevMouseY;
        // console.log("MOUSE X ------", mouseX);

        images.forEach((image) => {
          let imageX = null;
          let imageY = null;

          if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
              // console.log("Right--");
              if (mouseX == innerWidth / 2) {
                // image.x = image.x1;
              } else {
                image.x = image.x - 0.1;
              }
            } else {
              if (mouseX == innerWidth / 2) {
                // image.x = image.x1;
              } else {
                image.x = image.x + 0.1;
              }
              // console.log("Left---", deltaX);
            }
          } else {
            if (deltaY > 0) {
              if (mouseY == innerHeight / 2) {
                // image.y = image.y1;
              } else {
                image.y = image.y - 0.1;
              }
              // Mouse is moving down
              // console.log("Down");
            } else {
              if (mouseY == innerHeight / 2) {
                // image.y = image.y1;
              } else {
                // Mouse is moving up
                image.y = image.y + 0.1;
              }
              // console.log("Up");
            }
          }
        });
      }

      prevMouseX = mouseX;
      prevMouseY = mouseY;
    });

    window.addEventListener("resize", () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;

      // if (canvas.width <= 320) {
      //   canvas.height = 650;
      //   canvas.style.height = 650 + "px";
      // }
      // if (canvas.width <= 375) {
      //   canvas.height = 636;
      //   canvas.style.height = 636 + "px";
      // }
      // if (canvas.width <= 500) {
      //   canvas.height = 636;
      //   canvas.style.height = 636 + "px";
      // }

      init();
    });

    // Implementation
    let circles;
    let images;

    let staticImages;
    let circleAboveImages;

    let imageDummy;

    let images1;

    function init() {
      const screenWidth = document.documentElement.clientWidth;

      circles = [];
      images = [];
      staticImages = [];
      circleAboveImages = [];
      imageDummy = [];

      images1 = [];

      imageDummy.push(
        new UploadedImageTransparent(
          gsap,
          scrollContainer,
          c,
          0,
          30,
          require("../../assets/home/images/header_60.png"),
          innerWidth,
          innerHeight
        )
      );
      const FirstCircleOutsideEllipseData =
        getResponsiveFirstCircleOutsideEllipseDimensions(canvas, screenWidth);
      circles.push(
        FirstCircleOutsideEllipse(
          FirstCircleOutsideEllipseData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );
      // circles.push(
      //   new FilledCircle(
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     25,
      //     "#af292f",
      //     0,
      //     0.0002,
      //     700,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );
      const SecondCircleOutsideEllipseData =
        getResponsiveSecondCircleOutsideEllipseDimensions(canvas, screenWidth);
      circles.push(
        SecondCircleOutsideEllipse(
          SecondCircleOutsideEllipseData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );
      // circles.push(
      //   new FilledCircle(
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     25,
      //     "#af292f",
      //     3.125,
      //     0.0002,
      //     700,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      const { width, height, radius, verticalScale } =
        getResponsiveEllipseDimensions(canvas, screenWidth);

      circles.push(
        new Ellipse(
          width,
          height,
          radius,
          verticalScale,
          "grey",
          canvas.width / 2,
          canvas.height / 2,
          0,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      const { circleWidth, circleHeight, circleRadius } =
        getResponsiveCircleRadius(canvas, screenWidth);
      circles.push(
        new Circle(
          circleWidth,
          circleHeight,
          circleRadius,
          "grey",
          canvas.width / 2,
          canvas.height / 2,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      // Red Circle Inside Middle Circle
      const RedCircleInsideMiddleCircleData =
        getResponsiveRedCircleInsideMiddleCircleDimensions(canvas, screenWidth);
      circles.push(
        RedCircleInsideMiddleCircle(
          RedCircleInsideMiddleCircleData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      const BlueCircleInsideMiddleCircleData =
        getResponsiveBlueCircleInsideMiddleCircleDimensions(
          canvas,
          screenWidth
        );
      circles.push(
        BlueCircleInsideMiddleCircle(
          BlueCircleInsideMiddleCircleData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      const FirstCircleOutsideMiddleCircleData =
        getResponsiveFirstCircleOutsideMiddleCircleDimensions(
          canvas,
          screenWidth
        );
      circles.push(
        FirstCircleOutsideMiddleCircle(
          FirstCircleOutsideMiddleCircleData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );
      // circles.push(
      //   new FilledCircle(
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     10,
      //     "#af292f",
      //     0,
      //     0.001,
      //     305,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      const SecondCircleOutsideMiddleCircleData =
        getResponsiveSecondCircleOutsideMiddleCircleDimensions(
          canvas,
          screenWidth
        );
      circles.push(
        SecondCircleOutsideMiddleCircle(
          SecondCircleOutsideMiddleCircleData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );
      // circles.push(
      //   new FilledCircle(
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     10,
      //     "#af292f",
      //     3.125,
      //     0.001,
      //     305,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // Ellipse when scrolled down --- done

      circleAboveImages.push(
        new Ellipse(
          canvas.width / 2,
          canvas.height / 2,
          0,
          0,
          "#ADADAD",
          canvas.width / 2,
          canvas.height / 2,
          615,
          215,
          gsap,
          scrollContainer,
          c
        )
      );

      // Ellipse rotating circle when scrolled down --- done
      circleAboveImages.push(
        new CircleWithEllipseRotation(
          canvas.width / 2,
          canvas.height / 2,
          0,
          "rgb(91, 146, 157)",
          0,
          0,
          0,
          0,
          canvas.width / 2,
          canvas.height / 2,
          10,
          0.1,
          0.003,
          615,
          215,
          gsap,
          scrollContainer,
          c
        )
      );

      circleAboveImages.push(
        new CircleWithEllipseRotation(
          canvas.width / 2,
          canvas.height / 2,
          0,
          "#af292f",
          0,
          0,
          0,
          0,
          canvas.width / 2,
          canvas.height / 2,
          5,
          0.1,
          0.003,
          -615,
          -215,
          gsap,
          scrollContainer,
          c
        )
      );

      circleAboveImages.push(
        new CircleWithEllipseRotation(
          canvas.width / 2,
          canvas.height / 2,
          0,
          "#af292f",
          0,
          0,
          0,
          0,
          canvas.width / 2,
          canvas.height / 2,
          10,
          17.3,
          0.003,
          615,
          215,
          gsap,
          scrollContainer,
          c
        )
      );

      circleAboveImages.push(
        new CircleWithEllipseRotation(
          canvas.width / 2,
          canvas.height / 2,
          0,
          "#af292f",
          0,
          0,
          0,
          0,
          canvas.width / 2,
          canvas.height / 2,
          10,
          -4.7,
          0.003,
          615,
          215,
          gsap,
          scrollContainer,
          c
        )
      );

      // RAlphabet --- DONE

      const RAlphabetWithLabelData = getResponsiveRAlphabetDimensions(
        canvas,
        screenWidth
      );
      images.push(
        RAlphabet(RAlphabetWithLabelData, canvas, gsap, scrollContainer, c)
      );

      // images.push(RAlpabet(canvas, gsap, scrollContainer, c));

      // building with two red lines and left of center --- done
      images.push(BuildingTwoRedLines(canvas, gsap, scrollContainer, c));

      // Rock with red label --- done
      const RockWithLabelData = getResponsiveRockWithLebelDimensions(
        canvas,
        screenWidth
      );
      images.push(
        RockWithLabel(RockWithLabelData, canvas, gsap, scrollContainer, c)
      );

      // tower with clock center --- done
      images.push(
        new UploadedImage(
          canvas.width / 2,
          canvas.height / 2,
          require("../../assets/home/images/header_29.png"),
          0,
          0,
          0,
          canvas.width / 2 - 115,
          canvas.height / 2 - 135,
          215,
          200,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      // A alphabet ---- done

      const AalphabetData = getResponsiveAalphabetDimensions(
        canvas,
        screenWidth
      );
      console.log("🚀 ~ file: home.jsx:468 ~ init ~ GirlData:", AalphabetData);

      images.push(Aalphabet(AalphabetData, canvas, gsap, scrollContainer, c));

      // man with hand direction ---- done

      const ManWithHandDirectionData =
        getResponsiveManWithHandDirectionDimensions(canvas, screenWidth);
      images.push(
        ManWithHandDirection(
          ManWithHandDirectionData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     canvas.width,
      //     canvas.height / 2 - 15,
      //     require("../../assets/home/images/header_22.png"),
      //     115,
      //     150,
      //     0,
      //     canvas.width / 2 + 195,
      //     canvas.height / 2 + 15,
      //     115,
      //     160,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // roof with red top --- done
      const RoofWithRedTopData = getResponsiveRoofWithRedTopDimensions(
        canvas,
        screenWidth
      );

      images.push(
        RoofWithRedTop(RoofWithRedTopData, canvas, gsap, scrollContainer, c)
      );

      // red book ---- done

      const RedBookData = getResponsiveRedBookDimensions(canvas, screenWidth);
      images.push(RedBook(RedBookData, canvas, gsap, scrollContainer, c));

      // car image --- done

      const CarImageData = getResponsiveCarImageDimensions(canvas, screenWidth);
      images.push(CarImage(CarImageData, canvas, gsap, scrollContainer, c));

      // dryer --- done

      const DryerData = getResponsiveDryerDimensions(canvas, screenWidth);
      images.push(Dryer(DryerData, canvas, gsap, scrollContainer, c));

      // R alphabet center --- done

      const R_AlphabetData = getResponsiveR_AlphabetDimensions(
        canvas,
        screenWidth
      );
      images.push(R_Alphabet(R_AlphabetData, canvas, gsap, scrollContainer, c));

      // slim man with glasses ---done

      const SlimManWithGlassesData = getResponsiveSlimManWithGlassesDimensions(
        canvas,
        screenWidth
      );
      images.push(
        SlimManWithGlasses(
          SlimManWithGlassesData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      //Girl  --- done
      const GirlData = getResponsiveGirlDimensions(canvas, screenWidth);
      images.push(YoungGirl(GirlData, canvas, gsap, scrollContainer, c));

      //girl circle ---- DONE

      const GirlCircleData = getResponsiveGirlCircleDimensions(
        canvas,
        screenWidth
      );
      images.push(GirlCircle(GirlCircleData, canvas, gsap, scrollContainer, c));

      // man with joined hand --- done
      // GlassesBoy

      const GlassesBoyData = getResponsiveGlassesBoyDimensions(
        canvas,
        screenWidth
      );
      images.push(GlassesBoy(GlassesBoyData, canvas, gsap, scrollContainer, c));

      // black rock front of girl and behind book lady --- done

      const BlackRockData = getResponsiveBlackRockDimensions(
        canvas,
        screenWidth
      );
      images.push(BlackRock(BlackRockData, canvas, gsap, scrollContainer, c));

      // Eye
      const EyeData = getResponsiveEyeDimensions(canvas, screenWidth);
      images.push(Eye(EyeData, canvas, gsap, scrollContainer, c));

      // Leaf --- done

      const LeafData = getResponsiveLeafDimensions(canvas, screenWidth);
      images.push(Leaf(LeafData, canvas, gsap, scrollContainer, c));

      // person above the cart --- done

      const PersonAboveCartData = getResponsivePersonAboveCartDimensions(
        canvas,
        screenWidth
      );
      images.push(
        PersonAboveCart(PersonAboveCartData, canvas, gsap, scrollContainer, c)
      );

      // cart --- done

      const CartData = getResponsiveCartDimensions(canvas, screenWidth);
      images.push(Cart(CartData, canvas, gsap, scrollContainer, c));

      // person on phone bottom right corner

      const PersonOnPhoneBottomRightData =
        getResponsivePersonOnPhoneBottomRightDimensions(canvas, screenWidth);
      images.push(
        PersonOnPhoneBottomRight(
          PersonOnPhoneBottomRightData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     canvas.width - 130,
      //     canvas.height - 153,
      //     require("../../assets/home/images/header_27.png"),
      //     115,
      //     135,
      //     -15,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // researcher person --- done

      const ResearchPersonData = getResponsiveResearchPersonDimensions(
        canvas,
        screenWidth
      );
      images.push(
        ResearchPerson(ResearchPersonData, canvas, gsap, scrollContainer, c)
      );

      // boy left to glasses man --- done
      images.push(
        new UploadedImage(
          canvas.width / 2,
          canvas.height / 2,
          require("../../assets/home/images/header_61.png"),
          0,
          0,
          0,
          canvas.width / 2 - 195,
          canvas.height / 2 - 60,
          75,
          105,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      // building with speaker --- done

      images.push(
        new UploadedImage(
          canvas.width / 2,
          canvas.height / 2,
          require("../../assets/home/images/header_37.png"),
          0,
          0,
          0,
          canvas.width / 2 - 247,
          canvas.height / 2 - 13,
          200,
          100,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      //glasses peron --- DONE
      // With hands open
      // const { width, height, radius, verticalScale } =
      //   getResponsiveEllipseDimensions(canvas, screenWidth);
      // getResponsiveGlassesPersonDimensions

      // const RockWithLabelData = getResponsiveRockWithLebelDimensions(
      //   canvas,
      //   screenWidth
      // );
      // images.push(
      //   RockWithLabel(RockWithLabelData, canvas, gsap, scrollContainer, c)
      // );

      const GlassesPersonWithLabelData = getResponsiveGlassesPersonDimensions(
        canvas,
        screenWidth
      );
      images.push(
        GlassesPerson(
          GlassesPersonWithLabelData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     265, // position-x
      //     canvas.height / 2 - 180,
      //     require("../../assets/home/images/header_10.png"),
      //     370, //width
      //     440, //height
      //     0, // rotation
      //     canvas.width / 2 - 210,
      //     canvas.height / 2 - 90,
      //     175,
      //     200,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // red A alphabet --- done

      images.push(
        new UploadedImage(
          363,
          220,
          require("../../assets/home/images/header_43.png"),
          50,
          50,
          0,
          canvas.width / 2 - 140,
          canvas.height / 2 - 35,
          95,
          100,
          -40,
          gsap,
          scrollContainer,
          c
        )
      );

      // red building --- done

      images.push(
        new UploadedImage(
          canvas.width / 2,
          canvas.height / 2,
          require("../../assets/home/images/header_23.png"),
          0,
          0,
          0,
          canvas.width / 2 - 225,
          canvas.height / 2 + 30,
          145,
          115,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      // man with only face --- done
      images.push(
        new UploadedImage(
          -300,
          550,
          require("../../assets/home/images/header_38.png"),
          165,
          165,
          0,
          canvas.width / 2 - 140,
          canvas.height / 2 - 8,
          165,
          165,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      // hand folding person ---- done
      images.push(
        new UploadedImage(
          600,
          canvas.width,
          require("../../assets/home/images/header_49.png"),
          115,
          160,
          0,
          canvas.width / 2 - 120,
          canvas.height / 2 + 45,
          115,
          160,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      // man with hand outside ellipse --- done
      images.push(
        new UploadedImage(
          500,
          canvas.width,
          require("../../assets/home/images/header_51.png"),
          110,
          155,
          0,
          canvas.width / 2 - 170,
          canvas.height / 2 + 75,
          95,
          150,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      // building at left side in bottom --- done
      images.push(
        new UploadedImage(
          canvas.width / 2,
          canvas.height / 2,
          require("../../assets/home/images/header_24.png"),
          0,
          0,
          0,
          canvas.width / 2 - 360,
          canvas.height / 2 + 10,
          165,
          100,
          0,
          gsap,
          scrollContainer,
          c
        )
      );

      // lady with the book --- DONE
      const LadyData = getResponsiveLadyDimensions(canvas, screenWidth);
      images.push(Lady(LadyData, canvas, gsap, scrollContainer, c));

      //Circle with three colors of lady book --- done

      const CircleWithThreeColorData =
        getResponsiveCircleWithThreeColorDimensions(canvas, screenWidth);
      images.push(
        CircleWithThreeColor(
          CircleWithThreeColorData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      //equipment --- done

      const EquipmentData = getResponsiveEquipmentDimensions(
        canvas,
        screenWidth
      );
      images.push(Equipment(EquipmentData, canvas, gsap, scrollContainer, c));

      //ship done

      const ShipLabelData = getResponsiveShipDimensions(canvas, screenWidth);
      images.push(Ship(ShipLabelData, canvas, gsap, scrollContainer, c));

      // images.push(
      //   new UploadedImage(
      //     canvas.width / 2 - 250,
      //     canvas.height / 2 - 145,
      //     require("../../assets/home/images/header_47.png"),
      //     150,
      //     165,
      //     0,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // ellipse with circles and lines --- DONE

      const EllipseWithCircleData = getResponsiveEllipseWithCirclesDimensions(
        canvas,
        screenWidth
      );

      images.push(
        EllipseWithCircles(
          EllipseWithCircleData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      //circle with colors on glasses person --- DONE

      const CircleOnGlassesPersonWithLabel =
        getResponsiveCircleOnGlassesPersonDimensions(canvas, screenWidth);
      images.push(
        CircleOnGlassesPerson(
          CircleOnGlassesPersonWithLabel,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     canvas.width / 2 - 445,
      //     canvas.height / 2 - 13,
      //     require("../../assets/home/images/header_4.png"),
      //     215,
      //     120,
      //     0,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // person with lines and run pose ---done

      const PersonWithRunPoseData = getResponsivePersonWithRunPoseDimensions(
        canvas,
        screenWidth
      );
      images.push(
        PersonWithRunPose(
          PersonWithRunPoseData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     -45,
      //     77,
      //     require("../../assets/home/images/header_13_1.png"),
      //     295,
      //     260,
      //     0,
      //     canvas.width / 2 - 420,
      //     canvas.height / 2 - 62,
      //     135,
      //     115,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      //head skull with red dot --- done

      //Here I am
      // import {
      //   getResponsiveHeadSkullWithRedDotDimensions,
      //   HeadSkullWithRedDot,
      // } from "../../components/homeCanvas/Images/HeadSkullWithRedDot";

      const HeadSkullWithLabelData = getResponsiveHeadSkullWithRedDotDimensions(
        canvas,
        screenWidth
      );
      images.push(
        HeadSkullWithRedDot(
          HeadSkullWithLabelData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );
      // images.push(
      //   new UploadedImage(
      //     340,
      //     87,
      //     require("../../assets/home/images/header_44.png"),
      //     95,
      //     90,
      //     0,
      //     canvas.width / 2 - 260,
      //     canvas.height / 2 - 137,
      //     60,
      //     57,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // person laptop above skull ---- done

      const PersonLaptopAboveSkullData =
        getResponsivePersonLaptopAboveSkullDimensions(canvas, screenWidth);
      images.push(
        PersonLaptopAboveSkull(
          PersonLaptopAboveSkullData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     341,
      //     59,
      //     require("../../assets/home/images/header_58.png"),
      //     40,
      //     55,
      //     0,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // PEN ---- done

      const PenWithLabelData = getResponsivePenDimensions(canvas, screenWidth);
      images.push(Pen(PenWithLabelData, canvas, gsap, scrollContainer, c));

      // images.push(
      //   new UploadedImage(
      //     canvas.width / 2 - 330,
      //     -45,
      //     require("../../assets/home/images/header_11.png"),
      //     125,
      //     240,
      //     -3,
      //     canvas.width / 2 - 180,
      //     canvas.height / 2 - 190,
      //     45,
      //     72,
      //     -10,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // Map --- done

      const MapWithLabelData = getResponsiveMapDimensions(canvas, screenWidth);
      images.push(Map(MapWithLabelData, canvas, gsap, scrollContainer, c));

      // images.push(
      //   new UploadedImage(
      //     canvas.width / 2 - 310,
      //     5,
      //     require("../../assets/home/images/header_54.png"),
      //     215,
      //     125,
      //     0,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      //AEROPLANE MAN ---- done

      const AeroplaneManWithLabelData = getResponsiveAeroplaneManDimensions(
        canvas,
        screenWidth
      );
      images.push(
        AeroplaneMan(
          AeroplaneManWithLabelData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     canvas.width / 2 - 70,
      //     10,
      //     require("../../assets/home/images/header_20.png"),
      //     40,
      //     90,
      //     -20,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // Aeroplane --- done

      const AeroplaneWithLabelData = getResponsiveAeroplaneDimensions(
        canvas,
        screenWidth
      );
      images.push(
        Aeroplane(AeroplaneWithLabelData, canvas, gsap, scrollContainer, c)
      );

      // images.push(
      //   new UploadedImage(
      //     canvas.width / 2 - 145,
      //     45,
      //     require("../../assets/home/images/header_2.png"),
      //     180,
      //     70,
      //     0,
      //     canvas.width / 2 + 70,
      //     canvas.height / 2 - 243,
      //     100,
      //     40,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // Skull with brain --- done

      const SkullData = getResponsiveSkullDimensions(canvas, screenWidth);
      images.push(Skull(SkullData, canvas, gsap, scrollContainer, c));

      // Upper circle with man --- done

      const UpperCricleWithManData = getResponsiveUpperCircleWithManDimensions(
        canvas,
        screenWidth
      );
      images.push(
        UpperCircleWithMan(
          UpperCricleWithManData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     canvas.width / 2 + 240,
      //     -180,
      //     require("../../assets/home/images/header_16.png"),
      //     325,
      //     280,
      //     0,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // images.push(
      //   new UploadedImage(
      //     145,
      //     220,
      //     require("../../assets/home/images/header_12.png"),
      //     270,
      //     200,
      //     0,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      //big red circle --- DONE
      const BigRedCircleData = getResponsiveBigRedCircleDimensions(
        canvas,
        screenWidth
      );

      images.push(
        BigRedCircle(BigRedCircleData, canvas, gsap, scrollContainer, c)
      );
      // images.push(
      //   new UploadedImage(
      //     -220,
      //     canvas.height - 95,
      //     require("../../assets/home/images/header_55.png"),
      //     675,
      //     550,
      //     0,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // hand --- DONE

      const HandLabelData = getResponsiveHandDimensions(canvas, screenWidth);

      images.push(Hand(HandLabelData, canvas, gsap, scrollContainer, c));

      // images.push(
      //   new UploadedImage(
      //     55,
      //     canvas.height - 270,
      //     require("../../assets/home/images/header_7.png"),
      //     300,
      //     285,
      //     0,
      //     canvas.width / 2 - 345,
      //     canvas.height / 2 + 40,
      //     165,
      //     150,
      //     5,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // robotic hand --- done

      const RoboticHanLabelData = getResponsiveRoboticHandDimensions(
        canvas,
        screenWidth
      );

      images.push(
        RoboticHand(RoboticHanLabelData, canvas, gsap, scrollContainer, c)
      );

      // images.push(
      //   new UploadedImage(
      //     275,
      //     canvas.height - 185,
      //     require("../../assets/home/images/header_5.png"),
      //     255,
      //     235,
      //     0,
      //     canvas.width / 2 - 275,
      //     canvas.height / 2 + 100,
      //     100,
      //     100,
      //     5,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      // insect

      const InsectLabelData = getResponsiveInsectDimensions(
        canvas,
        screenWidth
      );

      images.push(Insect(InsectLabelData, canvas, gsap, scrollContainer, c));

      // images.push(
      //   new UploadedImage(
      //     canvas.width / 2 - 280,
      //     canvas.height - 115,
      //     require("../../assets/home/images/header_53.png"),
      //     150,
      //     115,
      //     0,
      //     canvas.width / 2 - 160,
      //     canvas.height / 2 + 175,
      //     70,
      //     55,
      //     90,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );

      //person with book holding --- DONE

      const PersonWithBookLabelData = getResponsivePersonWithBookDimensions(
        canvas,
        screenWidth
      );

      images.push(
        PersonWithBook(
          PersonWithBookLabelData,
          canvas,
          gsap,
          scrollContainer,
          c
        )
      );

      // images.push(
      //   new UploadedImage(
      //     75,
      //     canvas.height - 135,
      //     require("../../assets/home/images/header_40.png"),
      //     100,
      //     135,
      //     0,
      //     canvas.width / 2,
      //     canvas.height / 2,
      //     0,
      //     0,
      //     0,
      //     gsap,
      //     scrollContainer,
      //     c
      //   )
      // );
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      imageDummy.forEach((image) => {
        // image.draw();
      });
      circles.forEach((object) => {
        object.update();
      });
      circleAboveImages.forEach((image) => {
        image.update();
      });
      staticImages.forEach((image) => {
        // image.draw();
      });
      images.forEach((image) => {
        image.draw();
      });
      images1.forEach((image) => {
        image.draw();
      });
    }

    init();
    animate();

    function animateOnScroll() {
      ScrollTrigger.create({
        trigger: ".spacer",
        scroller: scrollContainer,
        start: "top top", // Adjust the start position based on your preference
        onEnter: () => {
          // When scrolling down, apply the styles to display the div
          gsap.set(".lKv-people", {
            opacity: 1,
          });
        },
        onLeaveBack: () => {
          // When scrolling back up, apply the styles to hide the div
          gsap.set(".lKv-people", {
            opacity: 0,
          });
        },
      });
    }

    function toggleDivOnScroll() {
      const animationDuration = 1.5; // Adjust the duration of the animation in seconds
      const animationDelay = 0.5; // Adjust the delay before the animation starts in seconds
      let isActive = false; // Flag to track if animation is active

      ScrollTrigger.create({
        trigger: ".spacer",
        scroller: scrollContainer,
        start: "top top", // Adjust the start position based on your preference
        onEnter: () => {
          // When scrolling down, apply the styles to display the div
          // gsap.set(".lKv-people-item-l01", {
          //   display: "block",
          //   transform: "translate(0, 0)",
          //   delay: 0.5,
          // });
          gsap.fromTo(
            ".-l01",
            {
              transform: "translate(-573px, 272px)",
            },
            {
              transform: "translate(0, 0)",
              duration: 1.5,
              delay: 0.5,
            }
          );
          gsap.fromTo(
            ".-l02",
            {
              transform: "translate(-573px, 272px)",
            },
            {
              transform: "translate(0, 0)",
              duration: 1.5,
              delay: 0.5,
            }
          );
          gsap.fromTo(
            ".-l03",
            {
              transform: "translate(-573px, 272px)",
            },
            {
              transform: "translate(0, 0)",
              duration: 1.5,
              delay: 1,
            }
          );
          gsap.fromTo(
            ".-l04",
            {
              transform: "translate(-573px, 272px)",
            },
            {
              transform: "translate(0, 0)",
              duration: 1.5,
              delay: 0,
            }
          );
          gsap.fromTo(
            ".-l05",
            {
              transform: "translate(-573px, 272px)",
            },
            {
              transform: "translate(0, 0)",
              duration: 1.5,
              delay: 0.7,
            }
          );
          gsap.fromTo(
            ".-l06",
            {
              transform: "translate(-573px, 272px)",
            },
            {
              transform: "translate(0, 0)",
              duration: 1.5,
              delay: 0,
            }
          );
          gsap.fromTo(
            ".-l07",
            {
              transform: "translate(-573px, 272px)",
            },
            {
              transform: "translate(0, 0)",
              duration: 1.5,
              delay: 1.2,
            }
          );
          gsap.fromTo(
            ".-l08",
            {
              transform: "translate(-573px, 272px)",
            },
            {
              transform: "translate(0, 0)",
              duration: 1.5,
              delay: 0,
            }
          );
          gsap.fromTo(
            ".st1",
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
            ".st2",
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
            ".st3",
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
            ".st4",
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
            ".st5",
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
            ".st6",
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
            ".lKv-coreBall",
            {
              transform: "scale(0.5267, 0.5267)",
            },
            {
              transform: "translate(0px, -75.024px)",
            }
          );
          gsap.fromTo(
            ".lKv-subTitle-item > img ",
            {
              transform: "translate(0px, 0%)",
            },
            {
              transform: "translate(0px, 130%)",
            }
          );
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
          gsap.fromTo(
            ".lKv-lead-text",
            {
              transform: "translate(0px,130%)",
            },
            {
              transform: "translate(0px, 0%)",
            }
          );
          gsap.fromTo(
            ".lKv-lead",
            {
              transform: "translate(0px, 130%)",
            },
            {
              transform: "translate(0px,0%)",
            }
          );
        },
        onLeaveBack: () => {
          // When scrolling back up, apply the styles to hide the div
          gsap.fromTo(
            ".lKv-people-item",
            {
              transform: "translate(0, 0)",
            },
            {
              transform: "translate(-573px, 272px)",
              duration: 1,
              delay: 0,
            }
          );
          gsap.fromTo(
            ".st",
            {
              transform: "scale(1)",
            },
            {
              transform: "scale(0)",
              duration: 0.5,
              delay: 0,
            }
          );
          gsap.fromTo(
            ".lKv-coreBall",
            { transform: "translate(0px, -108.024px)" },
            {
              transform: "scale(0.5267, 0.5267)",
            }
          );
          gsap.fromTo(
            ".lKv-subTitle-item > img ",
            {
              transform: "translate(0px, 130%)",
            },
            {
              transform: "translate(0px, 0%)",
            }
          );
          gsap.fromTo(
            ".cHeader-logo",
            {
              transform: "scale(0.266,0.266)",
              top: "1.9rem",
              left: "0rem",
            },
            {
              transform: "translate(0px, 108.5825px)",
              top: 0,
              left: 0,
            }
          );
          gsap.fromTo(
            ".lKv-lead-text",
            {
              transform: "translate(0px, 0%)",
            },
            {
              transform: "translate(0px,130%)",
            }
          );
          gsap.fromTo(
            ".lKv-lead",
            {
              transform: "translate(0px, 0%)",
            },
            {
              transform: "translate(0px,130%)",
            }
          );
        },
      });
    }

    // Call the function to start the animations
    animateOnScroll();
    toggleDivOnScroll();

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
      <div className="spacer">
        {/* <div className="lKv-subTitle" data-kv-subtitle="">
          <div
            className="lKv-subTitle-item -lm01"
            data-kv-subtitle-item=""
            style={{ overflow: "hidden" }}
          >
            <img
              className="lKv-subTitle-item-image1"
              src="https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub01.svg"
              width="103"
              height="5"
              alt=""
              loading="lazy"
              srcSet="
                    https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub01.svg 1x,
                    https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub01.svg 2x
                "
            />
          </div>
          <div
            className="lKv-subTitle-item -lm02"
            data-kv-subtitle-item=""
            style={{ overflow: "hidden" }}
          >
            <img
              className="lKv-subTitle-item-image2"
              src="https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub02.svg"
              width="84"
              height="5"
              alt=""
              loading="lazy"
              srcSet="
                    https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub02.svg 1x,
                    https://rara.ritsumei.ac.jp/assets/img/index/kv/b-logo_sub02.svg 2x
                "
            />
          </div>
          <div
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
          </div>
        </div> */}
        <div
          className="lKv-coreBall"
          data-kv-coreball=""
          style={{ transform: "scale(0.5267, 0.5267)" }}
        >
          <picture>
            <source
              srcSet="
                    https://rara.ritsumei.ac.jp//assets/img/index/kv/core_ball.png.webp"
              type="image/webp"
            />
            <img
              src="https://rara.ritsumei.ac.jp//assets/img/index/kv/core_ball.png"
              width="260"
              height="260"
              alt=""
              loading="lazy"
            />
          </picture>
        </div>
        <div
          className="cFlatText lKv-lead"
          data-flat-text=""
          data-kv-lead=""
          style={{
            padding: "0px 28.075px",
            transform: "scaleX(1.05)",
            top: "39pc",
            zIndex: 2,
          }}
        >
          <div
            className="lKv-lead-main"
            data-kv-lead-item=""
            style={{ overflow: "hidden" }}
          >
            <p
              className="lKv-lead-text"
              style={{
                transform: "translate(0px, 130%)",
                willChange: "transform",
              }}
            >
              次世代研究大学<span className="_ls0">をつくる</span>
            </p>
          </div>
          <div
            className="lKv-lead-sub"
            data-kv-lead-item=""
            style={{ overflow: "hidden" }}
          >
            <p
              className="lKv-lead-text"
              style={{
                transform: "translate(0px, 130%)",
                willChange: "transform",
              }}
            >
              先進研究の創造を通じて
            </p>
          </div>
        </div>
        <div className="lKv-people" data-kv-people="">
          <img
            className="lKv-people-item -l01 people-item"
            data-kv-people-item=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people01.svg"
            width="28"
            height="52"
            alt=""
            loading="lazy"
            srcSet="
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people01.svg 1x,
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people01.svg 2x
                "
            style={{ transform: "translate(-573px, 272px)" }}
          />
          <img
            className="lKv-people-item -l02"
            data-kv-people-item=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people02.svg"
            width="31"
            height="50"
            alt=""
            loading="lazy"
            srcSet="
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people02.svg 1x,
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people02.svg 2x
                "
            style={{ transform: "translate(-573px, 272px)" }}
          />

          <img
            className="lKv-people-item -l03"
            data-kv-people-item=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people03.svg"
            width="54"
            height="55"
            alt=""
            loading="lazy"
            srcSet="
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people03.svg 1x,
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people03.svg 2x
                "
            style={{ transform: "translate(-573px, 272px)" }}
          />
          <img
            className="lKv-people-item -l04"
            data-kv-people-item=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people04.svg"
            width="58"
            height="57"
            alt=""
            loading="lazy"
            srcSet="
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people04.svg 1x,
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people04.svg 2x
                "
            style={{ transform: "translate(-573px, 272px)" }}
          />
          <img
            className="lKv-people-item -l05"
            data-kv-people-item=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people05.svg"
            width="28"
            height="48"
            alt=""
            loading="lazy"
            srcSet="
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people05.svg 1x,
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people05.svg 2x
                "
            style={{ transform: "translate(-573px, 272px)" }}
          />
          <img
            className="lKv-people-item -l06"
            data-kv-people-item=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people06.svg"
            width="31"
            height="54"
            alt=""
            loading="lazy"
            srcSet="
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people06.svg 1x,
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people06.svg 2x
                "
            style={{ transform: "translate(573px, 272px)" }}
          />
          <img
            className="lKv-people-item -l07"
            data-kv-people-item=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people07.svg"
            width="29"
            height="51"
            alt=""
            loading="lazy"
            srcSet="
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people07.svg 1x,
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people07.svg 2x
                "
            style={{ transform: "translate(573px, 272px)" }}
          />
          <img
            className="lKv-people-item -l08"
            data-kv-people-item=""
            src="https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people08.svg"
            width="31"
            height="50"
            alt=""
            loading="lazy"
            srcSet="
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people08.svg 1x,
                https://rara.ritsumei.ac.jp/assets/img/index/kv/people/b-intro-people08.svg 2x
                "
            style={{ transform: "translate(573px, 272px)" }}
          />
        </div>
        <div className="lKv-vision">
          <div
            className="lKv-vision-title"
            data-kv-vision-title=""
            style={{ top: "183px" }}
          >
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 767.78 151.37"
              style={{ willChange: "transform" }}
            >
              <path
                className="st st1"
                data-svg-title-item=""
                d="M159.69,3.23v3.15c-19.74,1.68-25.83,18.27-38.85,48.72l-40.11,95.76h-2.94L30.32,37.25            C24.02,21.92,19.19,8.48,0.5,6.38V3.23h66.57v3.15C37.46,9.32,47.12,26.12,52.58,39.35l33.6,81.06l24.78-59.43            c18.06-43.05,21.42-49.98-10.5-54.6V3.23H159.69z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="st st2"
                data-svg-title-item=""
                d="M217.01,111.59c0.63,21.63,0.84,27.93,26.04,31.29v3.15h-70.56v-3.15c25.2-3.36,25.41-9.66,26.04-31.29V37.67            c-0.63-21.63-0.84-27.93-26.04-31.29V3.23h70.56v3.15c-25.2,3.36-25.41,9.66-26.04,31.29V111.59z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="st st3"
                data-svg-title-item=""
                d="M344.48,40.19h-3.36C337.76,23.18,332.3,6.8,311.51,6.8c-13.44,0-24.57,9.24-24.57,23.1            c0,36.33,66.15,35.07,66.15,77.49c0,27.09-26.88,41.16-51.03,41.16c-12.81,0-26.25-3.78-36.96-10.71l-6.09-35.7h3.78            c5.25,20.16,19.32,40.11,42.42,40.11c15.54,0,27.72-9.24,27.72-25.62c0-37.38-64.26-34.02-64.26-76.02            c0-24.57,24.36-40.11,46.83-40.11c10.71,0,21.42,3.15,30.66,8.19L344.48,40.19z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="st st4"
                data-svg-title-item=""
                d="M414.41,111.59c0.63,21.63,0.84,27.93,26.04,31.29v3.15h-70.56v-3.15c25.2-3.36,25.41-9.66,26.04-31.29V37.67            c-0.63-21.63-0.84-27.93-26.04-31.29V3.23h70.56v3.15c-25.2,3.36-25.41,9.66-26.04,31.29V111.59z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="st st5"
                data-svg-title-item=""
                d="M522.83,0.71c-43.89,0-76.65,28.98-76.65,73.71c0,45.36,32.55,74.13,76.86,74.13            c44.1,0,76.86-28.77,76.86-73.92C599.91,37.25,576.6,0.71,522.83,0.71z M525.56,143.51c-37.8,0-55.02-41.58-55.02-74.13            c0-28.35,14.49-63.63,50.61-63.63c32.13,0,53.76,35.28,54.39,72.45C575.54,108.23,560.21,143.51,525.56,143.51z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
              <path
                className="st st6"
                data-svg-title-item=""
                d="M740.39,113.06l-1.05-76.65c-0.21-19.95-5.67-25.83-29.4-30.03V3.23h57.33v3.15            c-14.49,1.89-17.22,9.87-18.9,23.52c-2.94,23.1-1.89,73.71-0.84,119.49l-2.73,0.63c-33.6-39.69-70.98-76.44-106.47-114.66V74            c0,52.08-1.26,62.79,29.19,68.88v3.15h-62.79v-3.15c28.35-2.94,27.3-22.26,27.3-69.93v-31.5c0-21-3.36-29.19-30.03-35.07V3.23h34.65            L740.39,113.06z"
                style={{ transformOrigin: "center", transform: "scale(0)" }}
              ></path>
            </svg>
          </div>
        </div>
        <canvas id="canvas1" width="1538" height="800"></canvas>
      </div>

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
                Pecunia Institute is at the forefront of a financial revolution
                with a vision deeply rooted in societal change. Founded on the
                belief that finance holds the key to building a more socially
                connected and sustainable world, we are dedicated to pioneering
                innovative solutions that transcend traditional financial
                boundaries. Our multidisciplinary team of experts, known as
                Fellows, is committed to exploring the vast potential of social
                finance as a catalyst for positive global transformation.
                {/* <br />
                <a
                  className="cLink lVision-section-link"
                  href="http://www.ritsumei.ac.jp/features/r2030/"
                  target="_blank"
                >
                </a>
                <span className="_cl1">「</span>挑戦をもっと自由に
                <span className="_cr1">」</span>
                <br className="_sp" />
                のもと、
                <br className="_pc" />
                立命館大学では
                <br className="_sp" />
                <span className="_cl1">「</span>チャレンジデザイン
                <span className="_cr1">」</span>を策定しています。
                <br />
                人類に共通する社会課題を解決するため、
                <br />
                社会共生価値の創造とイノベーションに取り組む
                <br />
                <span className="_cl1">「</span>
                次世代研究大学」の実現を目指します。 */}
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
                At Pecunia, our mission is to empower individuals,
                organizations, and communities to harness the power of finance
                for social impact. Our relentless pursuit of groundbreaking
                research, coupled with a dedication to sharing knowledge, forms
                the cornerstone of our work. Through our extensive network and
                partnerships, we create and disseminate cutting-edge insights,
                equipping decision-makers with the tools they need to navigate
                the evolving landscape of finance.
                {/* <br />
                (立命館先進研究アカデミー)は、次世代研究大学として、
                <br className="_pc" />
                未来社会に貢献する新しい研究分野の創出を
                <br className="_pc" />
                目指して設立されました。 */}
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
          {/* <div
            className="lVision-section-image -first -view md:hidden"
            data-play-sprite=""
            data-play-sprite-step="25"
            data-play-sprite-duration="0.8"
            style={{
              backgroundImage: `url(${headOpenBGImage})`,
              transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,35.8191,0,1)",
            }}
            data-scroll-speed="0.7"
            data-scroll=""
          ></div> */}
          <div className="lVision-section -second" data-vision-section="2">
            <div className="lVision-section-writing">
              <div
                className="cFlatText lVision-section-writing-text -mb -isTracking-short"
                data-flat-text=""
                style={{ padding: "0px 14.25px", transform: "scaleX(1.05)" }}
              >
                At Pecunia, our overarching mission is deeply rooted in the
                belief that finance can serve as a catalyst for positive global
                change. We strive to create a world where the potential of
                finance is harnessed not just for profit, but for the greater
                good. Our commitment extends to empowering communities,
                particularly those that have been marginalized or overlooked,
                and fostering a sense of inclusivity that transcends
                socioeconomic boundaries. We aim to address the most pressing
                challenges faced by these communities, thereby contributing to a
                more equitable and sustainable global landscape.
                {/* RARAとは、立命館大学の先導的・先進的研究拠点の形成に向けてリーダーシップを発揮することが
                <span className="_nowrap">期待される</span>
                中核研究者の集まり(アカデミー)のことです。
                <br className="_sp" />
                RARAを基盤にする研究者(RARAフェロー)は、本大学の核となり、他の研究者を巻き込み、先進研究を構想・企画・牽引することを目指します。 */}
              </div>
              <div
                className="cFlatText lVision-section-writing-text"
                data-flat-text=""
                style={{ padding: "0px 14.25px", transform: "scaleX(1.05)" }}
              >
                Central to our mission is the Pecunia Endowment Fund that
                embodies our long-term vision for change. This endowment fund
                serves as a financial engine for sustainable transformation. It
                aims to provide the necessary resources, stability, and
                continuity to support our initiatives in perpetuity. Through
                prudent investment and strategic allocation of funds, we ensure
                that our impact continues to grow over time. The endowment fund
                is not merely a financial vehicle; it is a commitment to the
                enduring legacy of our mission. It enables us to remain at the
                forefront of pioneering research, innovative financial
                solutions, and collaborations that truly make a difference in
                communities worldwide.
                {/* RARAには、RARAフェロー同士の融合や他大学・他研究機関との連携を通じて、
                <br />
                新たな価値を生み出す先進的な学際研究拠点の創成に結びつける役割を
                <br />
                担う狙いもあります。互いに異分野の研究を理解し、
                <br className="_sp" />
                それらを融合した
                <br className="_pc" />
                新たな研究分野、
                <br className="_sp" />
                学際領域を創造することで、
                <br />
                世界と伍する先進研究拠点の
                <br className="_sp" />
                早期実現を目指します。 */}
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
                Central to our mission is the Pecunia Endowment Fund that
                embodies our long-term vision for change. This endowment fund
                serves as a financial engine for sustainable transformation. It
                aims to provide the necessary resources, stability, and
                continuity to support our initiatives in perpetuity. Through
                prudent investment and strategic allocation of funds, we ensure
                that our impact continues to grow over time. The endowment fund
                is not merely a financial vehicle; it is a commitment to the
                enduring legacy of our mission. It enables us to remain at the
                forefront of pioneering research, innovative financial
                solutions, and collaborations that truly make a difference in
                communities worldwide.
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
      {window.innerWidth < 768 && <FellowsMobile />}
      {window.innerWidth > 767 && <Fellows />}
      <Blogs />
      <Contact />
    </div>
  );
};

export default index;
