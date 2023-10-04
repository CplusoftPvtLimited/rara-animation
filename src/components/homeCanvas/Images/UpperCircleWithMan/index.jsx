import { UploadedImage } from "../../UploadedImage";

const responsiveUpperCircleWithManValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 250,
    y: canvas.width / 2 - 700,
    width: 240,
    height: 290,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 + 300,
    y: canvas.width / 2 - 750,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 300,
    y: canvas.width / 2 - 850,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 + 300,
    y: canvas.width / 2 - 850,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 + 300,
    y: canvas.width / 2 - 950,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 300,
    y: canvas.width / 2 - 1050,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 140,
    height: 190,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveUpperCircleWithManDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 + 240;
  let y = -180;
  let width = 325;
  let height = 280;
  let rotation = 0;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsiveUpperCircleWithManValues(canvas)) {
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

export const UpperCircleWithMan = (
  UpperCircleWithManData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    UpperCircleWithManData.x,
    UpperCircleWithManData.y,
    require("../../../../assets/home/images/header_16.png"),
    UpperCircleWithManData.width,
    UpperCircleWithManData.height,
    UpperCircleWithManData.rotation,
    UpperCircleWithManData.updatedX,
    UpperCircleWithManData.updatedY,
    UpperCircleWithManData.updatedWidth,
    UpperCircleWithManData.updatedHeight,
    UpperCircleWithManData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
