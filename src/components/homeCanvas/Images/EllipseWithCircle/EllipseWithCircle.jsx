import { UploadedImage } from "../../UploadedImage";

const responsiveEllipseWithCirclesValues = (canvas) => [
  {
    screenWidth: 320,
    x: -20,
    y: 265,
    width: 70,
    height: 75,
    rotation: 10,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: -20,
    y: canvas.width / 1.17,
    width: canvas.width / 4.8,
    height: canvas.width / 4.8,
    rotation: 10,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: -20,
    y: canvas.width / 1.17,
    width: canvas.width / 4.8,
    height: canvas.width / 4.8,
    rotation: 10,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 350,
    y: canvas.width / 2 - 60,
    width: 140,
    height: 100,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 400,
    y: canvas.width / 2 - 200,
    width: canvas.width / 2 - 380,
    height: canvas.width / 2 - 380,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 - 520,
    y: canvas.width / 2 - 340,
    width: canvas.width / 2 - 400,
    height: canvas.width / 2 - 400,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1114,
    x: canvas.width / 2 - 300,
    y: canvas.width / 2 - 200,
    width: canvas.width / 2 - 400,
    height: canvas.width / 2 - 400,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2 - 550,
    y: canvas.width / 2 - 380,
    width: canvas.width / 2 - 450,
    height: canvas.width / 2 - 450,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 600,
    y: canvas.width / 2 - 390,
    width: canvas.width / 2 - 480,
    height: canvas.width / 2 - 480,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 - 690,
    y: canvas.width / 2 - 340,
    width: canvas.width / 2 - 500,
    height: canvas.width / 2 - 500,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 - 700,
    y: canvas.width / 2 - 480,
    width: canvas.width / 2 - 600,
    height: canvas.width / 2 - 600,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 850,
    y: canvas.width / 2 - 550,
    width: canvas.width / 2 - 600,
    height: canvas.width / 2 - 600,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },

  {
    screenWidth: 2500,
    x: 165,
    y: 360,
    width: 450,
    height: 350,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];
export function getResponsiveEllipseWithCirclesDimensions(canvas, screenWidth) {
  let x = 145;
  let y = 360;
  let width = 270;
  let height = 200;
  let rotation = 0;
  let updatedX = canvas.width / 2 + 45;
  let updatedY = canvas.height / 2 - 95;
  let updatedWidth = 170;
  let updatedHeight = 125;
  let updatedRotation = 0;

  for (const rule of responsiveEllipseWithCirclesValues(canvas)) {
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
export const EllipseWithCircles = (
  EllipseWithCirclesData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    EllipseWithCirclesData.x,
    EllipseWithCirclesData.y,
    require("../../../../assets/home/images/header_12.png"),
    EllipseWithCirclesData.width,
    EllipseWithCirclesData.height,
    EllipseWithCirclesData.rotation,
    EllipseWithCirclesData.updatedX,
    EllipseWithCirclesData.updatedY,
    EllipseWithCirclesData.updatedWidth,
    EllipseWithCirclesData.updatedHeight,
    EllipseWithCirclesData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );