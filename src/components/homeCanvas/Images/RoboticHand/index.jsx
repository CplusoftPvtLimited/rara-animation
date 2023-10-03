import { UploadedImage } from "../../UploadedImage";

const responsiveRoboticHandValues = (canvas) => [
  {
    screenWidth: 320,
    x: 15,
    y: canvas.width / 0.71,
    width: 110,
    height: 110,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 380,
    x: 15,
    y: canvas.width / 0.72,
    width: 120,
    height: 110,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 430,
    x: 15,
    y: canvas.width / 0.72,
    width: 125,
    height: 115,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 770,
    x: 150,
    y: canvas.height - 160,
    width: 150,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1024,
    x: 205,
    y: canvas.height - 230,
    width: 185,
    height: 185,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1440,
    x: 275,
    y: canvas.height - 185,
    width: 255,
    height: 235,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1920,
    x: 275,
    y: canvas.height - 250,
    width: 255,
    height: 235,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 2500,
    x: 275,
    y: canvas.height - 185,
    width: 255,
    height: 235,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveRoboticHandDimensions(canvas, screenWidth) {
  let x = 275;
  let y = canvas.height - 185;
  let width = 255;
  let height = 235;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 345;
  let updatedY = canvas.height / 2 + 100;
  let updatedWidth = 100;
  let updatedHeight = 100;
  let updatedRotation = 5;

  for (const rule of responsiveRoboticHandValues(canvas)) {
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

export const RoboticHand = (
  RoboticHandData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RoboticHandData.x,
    RoboticHandData.y,
    require("../../../../assets/home/images/header_5.png"),
    RoboticHandData.width,
    RoboticHandData.height,
    RoboticHandData.rotation,
    RoboticHandData.updatedX,
    RoboticHandData.updatedY,
    RoboticHandData.updatedWidth,
    RoboticHandData.updatedHeight,
    RoboticHandData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
