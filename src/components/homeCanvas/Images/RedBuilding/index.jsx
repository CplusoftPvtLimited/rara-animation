import { UploadedImage } from "../../UploadedImage";

const responsiveRedBuildingValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 225,
    updatedY: canvas.height / 2 + 30,
    updatedWidth: 145,
    updatedHeight: 115,
    updatedRotation: 0,
  },
];

export function getResponsiveRedBuildingDimensions(canvas, screenWidth) {
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 225;
  let updatedY = canvas.height / 2 + 30;
  let updatedWidth = 145;
  let updatedHeight = 115;
  let updatedRotation = 0;

  for (const rule of responsiveRedBuildingValues(canvas)) {
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

export const RedBuilding = (
  RedBuildingData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RedBuildingData.x,
    RedBuildingData.y,
    require("../../../../assets/home/images/header_23.png"),
    RedBuildingData.width,
    RedBuildingData.height,
    RedBuildingData.rotation,
    RedBuildingData.updatedX,
    RedBuildingData.updatedY,
    RedBuildingData.updatedWidth,
    RedBuildingData.updatedHeight,
    RedBuildingData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
