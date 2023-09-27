import { UploadedImage } from "../../UploadedImage";

const responsiveAeroplaneManValues = (canvas) => [
  {
    screenWidth: 380,
    x: canvas.width / 2 - 90,
    y: 0,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: canvas.width / 2 - 90,
    y: 0,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 40,
    y: 150,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 85,
    y: 0,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveAeroplaneManDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 - 70;
  let y = 10;
  let width = 40;
  let height = 90;
  let rotation = -20;
  let updatedX = canvas.width / 2 + 70;
  let updatedY = canvas.height / 2 - 243;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsiveAeroplaneManValues(canvas)) {
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

export const AeroplaneMan = (
  AeroplaneManData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    AeroplaneManData.x,
    AeroplaneManData.y,
    require("../../../../assets/home/images/header_20.png"),
    AeroplaneManData.width,
    AeroplaneManData.height,
    AeroplaneManData.rotation,
    AeroplaneManData.updatedX,
    AeroplaneManData.updatedY,
    AeroplaneManData.updatedWidth,
    AeroplaneManData.updatedHeight,
    AeroplaneManData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
