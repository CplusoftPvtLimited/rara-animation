import { UploadedImage } from "../../UploadedImage";

const responsiveHandValues = (canvas) => [
  {
    screenWidth: 320,
    x: -70,
    y: canvas.width / 0.8,
    width: 150,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 - 345,
    updatedY: canvas.height / 2 + 40,
    updatedWidth: 165,
    updatedHeight: 150,
    updatedRotation: 5,
  },
  {
    screenWidth: 380,
    x: -70,
    y: canvas.width / 0.8,
    width: 150,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 - 345,
    updatedY: canvas.height / 2 + 40,
    updatedWidth: 165,
    updatedHeight: 150,
    updatedRotation: 5,
  },
  {
    screenWidth: 430,
    x: -70,
    y: canvas.width / 0.8,
    width: 155,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 345,
    updatedY: canvas.height / 2 + 40,
    updatedWidth: 165,
    updatedHeight: 150,
    updatedRotation: 5,
  },
  {
    screenWidth: 770,
    x: 25,
    y: canvas.height - 225,
    width: 175,
    height: 175,
    rotation: 0,
    updatedX: canvas.width / 2 - 345,
    updatedY: canvas.height / 2 + 40,
    updatedWidth: 165,
    updatedHeight: 150,
    updatedRotation: 5,
  },
  {
    screenWidth: 1024,
    x: 55,
    y: canvas.height - 300,
    width: 210,
    height: 215,
    rotation: 0,
    updatedX: canvas.width / 2 - 345,
    updatedY: canvas.height / 2 + 40,
    updatedWidth: 165,
    updatedHeight: 150,
    updatedRotation: 5,
  },
  {
    screenWidth: 1440,
    x: 55,
    y: canvas.height - 270,
    width: 300,
    height: 285,
    rotation: 0,
    updatedX: canvas.width / 2 - 345,
    updatedY: canvas.height / 2 + 40,
    updatedWidth: 165,
    updatedHeight: 150,
    updatedRotation: 5,
  },
  {
    screenWidth: 1920,
    x: 55,
    y: canvas.height - 400,
    width: 350,
    height: 325,
    rotation: 0,
    updatedX: canvas.width / 2 - 345,
    updatedY: canvas.height / 2 + 40,
    updatedWidth: 165,
    updatedHeight: 150,
    updatedRotation: 5,
  },
  {
    screenWidth: 2500,
    x: 55,
    y: canvas.height - 270,
    width: 300,
    height: 285,
    rotation: 0,
    updatedX: canvas.width / 2 - 345,
    updatedY: canvas.height / 2 + 40,
    updatedWidth: 165,
    updatedHeight: 150,
    updatedRotation: 5,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveHandDimensions(canvas, screenWidth) {
  let x = 55;
  let y = canvas.height - 270;
  let width = 300;
  let height = 285;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 345;
  let updatedY = canvas.height / 2 + 40;
  let updatedWidth = 165;
  let updatedHeight = 150;
  let updatedRotation = 5;

  for (const rule of responsiveHandValues(canvas)) {
    if (screenWidth <= rule.screenWidth) {
      x = rule.x;
      y = rule.y;
      width = rule.width;
      height = rule.height;
      rotation = rule.rotation;
      updatedX = rule.updatedX;
      updatedY = rule.updatedY;
      updatedWidth = rule.updatedWidth;
      updatedHeight = rule.updatedHeight;
      updatedRotation = rule.updatedRotation;

      break;
    }
  }

  return {
    x,
    y,
    width,
    height,
    rotation,
    updatedX,
    updatedY,
    updatedWidth,
    updatedHeight,
    updatedRotation,
  };
}

export const Hand = (HandData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    HandData.x,
    HandData.y,
    require("../../../../assets/home/images/header_7.png"),
    HandData.width,
    HandData.height,
    HandData.rotation,
    HandData.updatedX,
    HandData.updatedY,
    HandData.updatedWidth,
    HandData.updatedHeight,
    HandData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
