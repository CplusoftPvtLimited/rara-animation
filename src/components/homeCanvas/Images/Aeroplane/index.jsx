import { UploadedImage } from "../../UploadedImage";

const responsiveAeroplaneValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 - 80,
    y: 40,
    width: 90,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2 - 80,
    y: 40,
    width: 90,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2 - 80,
    y: 40,
    width: 90,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: canvas.width / 2 - 100,
    y: 30,
    width: 100,
    height: 50,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 145,
    y: 45,
    width: 140,
    height: 50,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 - 145,
    y: 45,
    width: 180,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2 - 145,
    y: 45,
    width: 180,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 145,
    y: 45,
    width: 180,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 - 145,
    y: 135,
    width: 180,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 - 145,
    y: 85,
    width: 180,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 145,
    y: 45,
    width: 180,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2 - 145,
    y: 45,
    width: 180,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 100,
    updatedHeight: 40,
    updatedRotation: 0,
  },
];

export function getResponsiveAeroplaneDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 - 145;
  let y = 45;
  let width = 180;
  let height = 70;
  let rotation = 0;
  let updatedX = canvas.width / 2 + 70;
  let updatedY = canvas.height / 2 - 243;
  let updatedWidth = 100;
  let updatedHeight = 40;
  let updatedRotation = 0;

  for (const rule of responsiveAeroplaneValues(canvas)) {
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

export const Aeroplane = (AeroplaneData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    AeroplaneData.x,
    AeroplaneData.y,
    require("../../../../assets/home/images/header_2.png"),
    AeroplaneData.width,
    AeroplaneData.height,
    AeroplaneData.rotation,
    AeroplaneData.updatedX,
    AeroplaneData.updatedY,
    AeroplaneData.updatedWidth,
    AeroplaneData.updatedHeight,
    AeroplaneData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
