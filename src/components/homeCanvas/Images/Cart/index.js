import { UploadedImage } from "../../UploadedImage";

const responsiveCartWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width - 70,
    y: canvas.width / 3,
    width: 80,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 148,
    updatedY: canvas.height / 2 - 70,
    updatedWidth: 40,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 375,
    x: canvas.width - 70,
    y: canvas.width / 3,
    width: 80,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 148,
    updatedY: canvas.height / 2 - 70,
    updatedWidth: 40,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width - 70,
    y: canvas.width / 3,
    width: 80,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 148,
    updatedY: canvas.height / 2 - 70,
    updatedWidth: 40,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width - 100,
    y: canvas.height / 2 - 60,
    width: 120,
    height: 145,
    rotation: 0,
    updatedX: canvas.width / 2 + 285,
    updatedY: canvas.height / 2 - 30,
    updatedWidth: 40,
    updatedHeight: 40,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width - 125,
    y: canvas.height / 2 - 20,
    width: 150,
    height: 175,
    rotation: 0,
    updatedX: canvas.width / 2 + 285,
    updatedY: canvas.height / 2 - 30,
    updatedWidth: 65,
    updatedHeight: 75,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width - 185,
    y: canvas.height / 2 - 20,
    width: 220,
    height: 235,
    rotation: 0,
    updatedX: canvas.width / 2 + 285,
    updatedY: canvas.height / 2 - 30,
    updatedWidth: 75,
    updatedHeight: 85,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width - 185,
    y: canvas.height / 2 - 20,
    width: 220,
    height: 235,
    rotation: 0,
    updatedX: canvas.width / 2 + 285,
    updatedY: canvas.height / 2 - 30,
    updatedWidth: 75,
    updatedHeight: 85,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width - 185,
    y: canvas.height / 2 - 20,
    width: 220,
    height: 235,
    rotation: 0,
    updatedX: canvas.width / 2 + 285,
    updatedY: canvas.height / 2 - 30,
    updatedWidth: 75,
    updatedHeight: 85,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width - 185,
    y: canvas.height / 2 - 20,
    width: 230,
    height: 255,
    rotation: 0,
    updatedX: canvas.width / 2 + 285,
    updatedY: canvas.height / 2 - 30,
    updatedWidth: 75,
    updatedHeight: 85,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width - 320,
    y: canvas.height / 2 - 20,
    width: 430,
    height: 450,
    rotation: 0,
    updatedX: canvas.width / 2 + 285,
    updatedY: canvas.height / 2 - 30,
    updatedWidth: 75,
    updatedHeight: 85,
    updatedRotation: 0,
  },
];

export function getResponsiveCartDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 + 995;
  let y = canvas.height / 2 - 2055;
  let width = 0;
  let height = 0;
  let rotation = 0;
  let updatedX = canvas.width / 2 + 0;
  let updatedY = canvas.height / 2 - 33;
  let updatedWidth = 170;
  let updatedHeight = 175;
  let updatedRotation = 0;

  for (const rule of responsiveCartWithLabelValues(canvas)) {
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

export const Cart = (RockWithLabelData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_33.png"),
    RockWithLabelData.width,
    RockWithLabelData.height,
    RockWithLabelData.rotation,
    RockWithLabelData.updatedX,
    RockWithLabelData.updatedY,
    RockWithLabelData.updatedWidth,
    RockWithLabelData.updatedHeight,
    RockWithLabelData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
