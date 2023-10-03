import { UploadedImage } from "../../UploadedImage";

const responsiveHeadSkullWithRedDotValues = (canvas) => [
  {
    screenWidth: 320,
    x: 25,
    y: canvas.width / 3,
    width: 35,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2 - 260,
    updatedY: canvas.height / 2 - 137,
    updatedWidth: 60,
    updatedHeight: 57,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: 35,
    y: canvas.width / 3.2,
    width: 35,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2 - 260,
    updatedY: canvas.height / 2 - 137,
    updatedWidth: 60,
    updatedHeight: 57,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: 45,
    y: canvas.width / 2.9,
    width: 40,
    height: 45,
    rotation: 0,
    updatedX: canvas.width / 2 - 260,
    updatedY: canvas.height / 2 - 137,
    updatedWidth: 60,
    updatedHeight: 57,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: 175,
    y: 85,
    width: 45,
    height: 50,
    rotation: 0,
    updatedX: canvas.width / 2 - 260,
    updatedY: canvas.height / 2 - 137,
    updatedWidth: 60,
    updatedHeight: 57,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: 270,
    y: 100,
    width: 95,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 260,
    updatedY: canvas.height / 2 - 137,
    updatedWidth: 60,
    updatedHeight: 57,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: 340,
    y: 87,
    width: 95,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 260,
    updatedY: canvas.height / 2 - 137,
    updatedWidth: 60,
    updatedHeight: 57,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: 390,
    y: 130,
    width: 95,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 260,
    updatedY: canvas.height / 2 - 137,
    updatedWidth: 60,
    updatedHeight: 57,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: 340,
    y: 87,
    width: 95,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 260,
    updatedY: canvas.height / 2 - 137,
    updatedWidth: 60,
    updatedHeight: 57,
    updatedRotation: 0,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveHeadSkullWithRedDotDimensions(
  canvas,
  screenWidth
) {
  let x = 340;
  let y = 87;
  let width = 95;
  let height = 90;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 260;
  let updatedY = canvas.height / 2 - 137;
  let updatedWidth = 60;
  let updatedHeight = 57;
  let updatedRotation = 0;

  for (const rule of responsiveHeadSkullWithRedDotValues(canvas)) {
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

export const HeadSkullWithRedDot = (
  HeadSkullWithRedDotData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    HeadSkullWithRedDotData.x,
    HeadSkullWithRedDotData.y,
    require("../../../../assets/home/images/header_44.png"),
    HeadSkullWithRedDotData.width,
    HeadSkullWithRedDotData.height,
    HeadSkullWithRedDotData.rotation,
    HeadSkullWithRedDotData.updatedX,
    HeadSkullWithRedDotData.updatedY,
    HeadSkullWithRedDotData.updatedWidth,
    HeadSkullWithRedDotData.updatedHeight,
    HeadSkullWithRedDotData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
