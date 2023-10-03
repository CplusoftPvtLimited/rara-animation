import { UploadedImage } from "../../UploadedImage";

const responsiveHandFoldingManValues = (canvas) => [
  {
    screenWidth: 320,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 150,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 100,
    updatedHeight: 130,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: 600,
    y: canvas.width,
    width: 115,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 120,
    updatedY: canvas.height / 2 + 45,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
];

export function getResponsiveHandFoldingManDimensions(canvas, screenWidth) {
  let x = 600;
  let y = canvas.width;
  let width = 115;
  let height = 160;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 120;
  let updatedY = canvas.height / 2 + 45;
  let updatedWidth = 115;
  let updatedHeight = 160;
  let updatedRotation = 0;

  for (const rule of responsiveHandFoldingManValues(canvas)) {
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

export const HandFoldingMan = (
  HandFoldingManData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    HandFoldingManData.x,
    HandFoldingManData.y,
    require("../../../../assets/home/images/header_49.png"),
    HandFoldingManData.width,
    HandFoldingManData.height,
    HandFoldingManData.rotation,
    HandFoldingManData.updatedX,
    HandFoldingManData.updatedY,
    HandFoldingManData.updatedWidth,
    HandFoldingManData.updatedHeight,
    HandFoldingManData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
