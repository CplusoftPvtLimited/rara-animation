import { UploadedImage } from "../../UploadedImage";

const responsiveManWithOnlyFaceValues = (canvas) => [
  {
    screenWidth: 320,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 135,
    updatedHeight: 135,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: -300,
    y: 550,
    width: 165,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 8,
    updatedWidth: 165,
    updatedHeight: 165,
    updatedRotation: 0,
  },
];

export function getResponsiveManWithOnlyFaceDimensions(canvas, screenWidth) {
  let x = -300;
  let y = 550;
  let width = 165;
  let height = 165;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 140;
  let updatedY = canvas.height / 2 - 8;
  let updatedWidth = 165;
  let updatedHeight = 165;
  let updatedRotation = 0;

  for (const rule of responsiveManWithOnlyFaceValues(canvas)) {
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

export const ManWithOnlyFace = (
  ManWithOnlyFaceData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    ManWithOnlyFaceData.x,
    ManWithOnlyFaceData.y,
    require("../../../../assets/home/images/header_38.png"),
    ManWithOnlyFaceData.width,
    ManWithOnlyFaceData.height,
    ManWithOnlyFaceData.rotation,
    ManWithOnlyFaceData.updatedX,
    ManWithOnlyFaceData.updatedY,
    ManWithOnlyFaceData.updatedWidth,
    ManWithOnlyFaceData.updatedHeight,
    ManWithOnlyFaceData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
