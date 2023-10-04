import { UploadedImage } from "../../UploadedImage";

const responsivePenValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 - 170,
    y: -35,
    width: 65,
    height: 110,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 380,
    x: -15,
    y: -35,
    width: 65,
    height: 110,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 430,
    x: -15,
    y: -35,
    width: 65,
    height: 110,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 185,
    y: -35,
    width: 70,
    height: 115,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 330,
    y: canvas.width / 2 - 560,
    width: 85,
    height: 150,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 - 330,
    y: canvas.width / 2 - 720,
    width: 125,
    height: 240,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2 - 330,
    y: canvas.width / 2 - 780,
    width: 125,
    height: 240,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 330,
    y: canvas.width / 2 - 790,
    width: 125,
    height: 240,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 - 330,
    y: canvas.width / 2 - 800,
    width: 125,
    height: 240,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 - 330,
    y: canvas.width / 2 - 900,
    width: 125,
    height: 240,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 330,
    y: canvas.width / 2 - 950,
    width: 125,
    height: 240,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2 - 330,
    y: -45,
    width: 125,
    height: 240,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
];

export function getResponsivePenDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 - 330;
  let y = canvas.height - 135;
  let width = 100;
  let height = 135;
  let rotation = 0;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2 + 100;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsivePenValues(canvas)) {
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

export const Pen = (PenData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    PenData.x,
    PenData.y,
    require("../../../../assets/home/images/header_11.png"),
    PenData.width,
    PenData.height,
    PenData.rotation,
    PenData.updatedX,
    PenData.updatedY,
    PenData.updatedWidth,
    PenData.updatedHeight,
    PenData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
