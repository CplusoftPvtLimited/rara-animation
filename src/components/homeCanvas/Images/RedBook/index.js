import { UploadedImage } from "../../UploadedImage";

const responsiveRedBookWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 + 50,
    y: canvas.width / 1.28,
    width: 35,
    height: 30,
    rotation: 0,
    updatedX: canvas.width / 2 + 90,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 35,
    updatedHeight: 25,
    updatedRotation: 0,
  },
  {
    screenWidth: 375,
    x: canvas.width / 2 + 50,
    y: canvas.width / 1.27,
    width: 40,
    height: 35,
    rotation: 0,
    updatedX: canvas.width / 2 + 90,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 35,
    updatedHeight: 25,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 1.6,
    y: canvas.width / 1.27,
    width: 40,
    height: 35,
    rotation: 0,
    updatedX: canvas.width / 2 + 90,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 35,
    updatedHeight: 25,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 115,
    y: canvas.height / 2 - 210,
    width: 55,
    height: 45,
    rotation: 0,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 45,
    updatedHeight: 35,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 165,
    y: canvas.height / 2 - 220,
    width: 70,
    height: 60,
    rotation: 0,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 45,
    updatedHeight: 35,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 220,
    y: canvas.height / 2 - 220,
    width: 100,
    height: 95,
    rotation: 0,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 45,
    updatedHeight: 35,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 + 220,
    y: canvas.height / 2 - 220,
    width: 100,
    height: 95,
    rotation: 0,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 45,
    updatedHeight: 35,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 + 220,
    y: canvas.height / 2 - 220,
    width: 100,
    height: 95,
    rotation: 0,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 45,
    updatedHeight: 35,
    updatedRotation: 0,
  },

  {
    screenWidth: 1920,
    x: canvas.width / 2 + 220,
    y: canvas.height / 2 - 220,
    width: 100,
    height: 95,
    rotation: 0,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 45,
    updatedHeight: 35,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width / 2 + 220,
    y: canvas.height / 2 - 220,
    width: 100,
    height: 95,
    rotation: 0,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 45,
    updatedHeight: 35,
    updatedRotation: 0,
  },
];

export function getResponsiveRedBookDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveRedBookWithLabelValues(canvas)) {
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

export const RedBook = (RockWithLabelData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_36.png"),
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
