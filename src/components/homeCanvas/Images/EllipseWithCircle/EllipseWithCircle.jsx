import { UploadedImage } from "../../UploadedImage";

const responsiveEllipseWithCirclesValues = (canvas) => [
  {
    screenWidth: 320,
    x: -30,
    y: 350,
    width: 100,
    height: 100,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: -30,
    y: 350,
    width: 100,
    height: 100,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: -30,
    y: 350,
    width: 100,
    height: 100,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: -30,
    y: 360,
    width: 170,
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
    x: 60,
    y: 300,
    width: 200,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: 145,
    y: 360,
    width: 270,
    height: 200,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: 145,
    y: 360,
    width: 270,
    height: 200,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: 145,
    y: 360,
    width: 270,
    height: 200,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  // Add more rules for larger screens if needed
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
