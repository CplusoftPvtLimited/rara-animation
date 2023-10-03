import { UploadedImage } from "../../UploadedImage";

const responsiveBuildingAtLeftValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 360,
    updatedY: canvas.height / 2 + 10,
    updatedWidth: 165,
    updatedHeight: 100,
    updatedRotation: 0,
  },
];

export function getResponsiveBuildingAtLeftDimensions(canvas, screenWidth) {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let width = 0;
  let height = 0;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 360;
  let updatedY = canvas.height / 2 + 10;
  let updatedWidth = 165;
  let updatedHeight = 100;
  let updatedRotation = 0;

  for (const rule of responsiveBuildingAtLeftValues(canvas)) {
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

export const BuildingAtLeft = (
  BuildingAtLeftData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    BuildingAtLeftData.x,
    BuildingAtLeftData.y,
    require("../../../../assets/home/images/header_24.png"),
    BuildingAtLeftData.width,
    BuildingAtLeftData.height,
    BuildingAtLeftData.rotation,
    BuildingAtLeftData.updatedX,
    BuildingAtLeftData.updatedY,
    BuildingAtLeftData.updatedWidth,
    BuildingAtLeftData.updatedHeight,
    BuildingAtLeftData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
