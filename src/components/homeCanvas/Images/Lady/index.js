import { UploadedImage } from "../../UploadedImage";

const responsiveLadyWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 + 120,
    y: canvas.height / 2 - 15,
    width: canvas.width / 2 - 285,
    height: canvas.height / 2 - 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 45,
    updatedY: canvas.width / 2 + 250,
    updatedWidth: 100,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 375,
    x: canvas.width / 2 + 135,
    y: canvas.height / 2 - 15,
    width: canvas.width / 2 - 330,
    height: canvas.height / 2 - 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 45,
    updatedY: canvas.width / 2 + 250,
    updatedWidth: 100,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2 + 135,
    y: canvas.height / 2 - 15,
    width: canvas.width / 2 - 350,
    height: canvas.height / 2 - 150,
    rotation: 0,
    updatedX: canvas.width / 2 - 45,
    updatedY: canvas.width / 2 + 250,
    updatedWidth: 100,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 80,
    width: canvas.width / 2 - 170,
    height: canvas.height / 2 - 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 45,
    updatedY: 370,
    updatedWidth: 130,
    updatedHeight: 175,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 100,
    width: canvas.width / 2 - 200,
    height: canvas.height / 2 + 45,
    rotation: 0,
    updatedX: canvas.width / 2 - 60,
    updatedY: 390,
    updatedWidth: 150,
    updatedHeight: 175,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 20,
    width: canvas.width / 2 - 250,
    height: canvas.height / 2 + 95,
    rotation: 0,
    updatedX: canvas.width / 2 - 70,
    updatedY: 350,
    updatedWidth: 190,
    updatedHeight: 215,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 80,
    width: canvas.width / 2 - 330,
    height: canvas.height / 2 + 95,
    rotation: 0,
    updatedX: canvas.width / 2 - 70,
    updatedY: 400,
    updatedWidth: 190,
    updatedHeight: 215,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 80,
    width: canvas.width / 2 - 330,
    height: canvas.height / 2 + 95,
    rotation: 0,
    updatedX: canvas.width / 2 - 70,
    updatedY: 400,
    updatedWidth: 190,
    updatedHeight: 215,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2,
    y: canvas.height / 2 - 55,
    width: canvas.width / 2 - 350,
    height: canvas.height / 2 + 125,
    rotation: 0,
    updatedX: canvas.width / 2 - 90,
    updatedY: 440,
    updatedWidth: 170,
    updatedHeight: 175,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width / 2,
    y: canvas.height / 2 - 170,
    width: canvas.width / 2 - 550,
    height: canvas.height / 2 + 275,
    rotation: 0,
    updatedX: canvas.width / 2 - 70,
    updatedY: 600,
    updatedWidth: 190,
    updatedHeight: 215,
    updatedRotation: 0,
  },
];

export function getResponsiveLadyDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveLadyWithLabelValues(canvas)) {
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

export const Lady = (RockWithLabelData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_14.png"),
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
