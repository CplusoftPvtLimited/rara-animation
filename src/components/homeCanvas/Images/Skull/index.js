import { UploadedImage } from "../../UploadedImage";

const responsiveSkullWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 + 10,
    y: -10,
    width: 50,
    height: 50,
    rotation: -10,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 40,
    updatedHeight: 20,
    updatedRotation: 0,
  },
  {
    screenWidth: 375,
    x: canvas.width / 2 + 10,
    y: -10,
    width: 50,
    height: 50,
    rotation: -10,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 40,
    updatedHeight: 20,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2 + 10,
    y: -20,
    width: 70,
    height: 70,
    rotation: -10,
    updatedX: canvas.width / 2 + 140,
    updatedY: canvas.height / 2 - 130,
    updatedWidth: 40,
    updatedHeight: 20,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 45,
    y: -20,
    width: 80,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 + 235,
    updatedY: canvas.height / 2 - 145,
    updatedWidth: 50,
    updatedHeight: 30,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 80,
    y: -20,
    width: 125,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 + 235,
    updatedY: canvas.height / 2 - 145,
    updatedWidth: 80,
    updatedHeight: 50,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 80,
    y: -20,
    width: 125,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 + 235,
    updatedY: canvas.height / 2 - 145,
    updatedWidth: 80,
    updatedHeight: 50,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 + 80,
    y: -20,
    width: 125,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 + 235,
    updatedY: canvas.height / 2 - 145,
    updatedWidth: 80,
    updatedHeight: 50,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 + 80,
    y: -20,
    width: 125,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 + 235,
    updatedY: canvas.height / 2 - 145,
    updatedWidth: 80,
    updatedHeight: 50,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 + 80,
    y: -20,
    width: 125,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 + 235,
    updatedY: canvas.height / 2 - 145,
    updatedWidth: 80,
    updatedHeight: 50,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 80,
    y: -20,
    width: 125,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 + 235,
    updatedY: canvas.height / 2 - 145,
    updatedWidth: 80,
    updatedHeight: 50,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width / 2 + 80,
    y: -20,
    width: 125,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 + 235,
    updatedY: canvas.height / 2 - 145,
    updatedWidth: 80,
    updatedHeight: 50,
    updatedRotation: 0,
  },
];

export function getResponsiveSkullDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveSkullWithLabelValues(canvas)) {
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

export const Skull = (RockWithLabelData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_46.png"),
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
