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
    y: canvas.width - 400,
    width: canvas.width / 2 - 320,
    height: canvas.width / 2 - 320,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1114,
    x: 235,
    y: canvas.width - 500,
    width: canvas.width / 2 - 450,
    height: canvas.width / 2 - 450,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1280,
    x: 275,
    y: canvas.width - 600,
    width: canvas.width / 2 - 450,
    height: canvas.width / 2 - 450,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1366,
    x: 275,
    y: canvas.width - 700,
    width: canvas.width / 2 - 500,
    height: canvas.width / 2 - 500,
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
    y: canvas.width - 730,
    width: canvas.width / 2 - 500,
    height: canvas.width / 2 - 500,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1536,
    x: 275,
    y: canvas.width - 680,
    width: canvas.width / 2 - 500,
    height: canvas.width / 2 - 500,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1728,
    x: 275,
    y: canvas.width - 870,
    width: canvas.width / 2 - 600,
    height: canvas.width / 2 - 600,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 100,
    updatedHeight: 100,
    updatedRotation: 5,
  },
  {
    screenWidth: 1920,
    x: 295,
    y: canvas.width - 900,
    width: canvas.width / 2 - 700,
    height: canvas.width / 2 - 700,
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
