import { UploadedImage } from "../../UploadedImage";

const responsiveGirlWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 + 140,
    y: canvas.width / 1.48,
    width: canvas.width / 2 - 250,
    height: canvas.width / 3,
    rotation: 0,
    updatedX: canvas.width / 2 + 10,
    updatedY: canvas.height / 2 - 33,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 1.6,
    y: canvas.width / 1.49,
    width: canvas.width / 3.5,
    height: canvas.width / 3,
    rotation: 0,
    updatedX: canvas.width / 2 + 10,
    updatedY: canvas.height / 2 - 33,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 1.6,
    y: canvas.width / 1.5,
    width: canvas.width / 3.3,
    height: canvas.width / 3,
    rotation: 0,
    updatedX: canvas.width / 2 + 10,
    updatedY: canvas.height / 2 - 33,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 105,
    y: canvas.height / 2 - 255,
    width: 150,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 0,
    updatedY: canvas.height / 2 - 13,
    updatedWidth: 120,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 160,
    y: canvas.height / 2 - 295,
    width: 210,
    height: 230,
    rotation: 0,
    updatedX: canvas.width / 2 - 0,
    updatedY: canvas.height / 2 - 13,
    updatedWidth: 110,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 205,
    y: canvas.height / 2 - 255,
    width: canvas.width / 2 - 430,
    height: canvas.height / 2 + 5,
    rotation: 0,
    updatedX: canvas.width / 2 - 0,
    updatedY: canvas.height / 2 - 33,
    updatedWidth: 140,
    updatedHeight: 145,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 + 205,
    y: canvas.height / 2 - 255,
    width: canvas.width / 2 - 430,
    height: canvas.height / 2 + 45,
    rotation: 0,
    updatedX: canvas.width / 2 - 0,
    updatedY: canvas.height / 2 - 33,
    updatedWidth: 140,
    updatedHeight: 145,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 + 205,
    y: canvas.height / 2 - 255,
    width: canvas.width / 2 - 430,
    height: canvas.height / 2 + 45,
    rotation: 0,
    updatedX: canvas.width / 2 - 0,
    updatedY: canvas.height / 2 - 33,
    updatedWidth: 140,
    updatedHeight: 145,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 200,
    y: canvas.height / 2 - 230,
    width: 300,
    height: 350,
    rotation: 0,
    updatedX: canvas.width / 2 - 0,
    updatedY: canvas.height / 2 - 3,
    updatedWidth: 140,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width / 2 + 300,
    y: canvas.height / 2 - 430,
    width: 500,
    height: 550,
    rotation: 0,
    updatedX: canvas.width / 2 - 0,
    updatedY: canvas.height / 2 - 33,
    updatedWidth: 140,
    updatedHeight: 145,
    updatedRotation: 0,
  },
];

export function getResponsiveGirlDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveGirlWithLabelValues(canvas)) {
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

export const YoungGirl = (
  RockWithLabelData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_9.png"),
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
