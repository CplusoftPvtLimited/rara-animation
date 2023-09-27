import { UploadedImage } from "../../UploadedImage";

const responsiveLadyWithLabelValues = (canvas) => [
  {
    screenWidth: 375,
    x: canvas.width / 2 + 105,
    y: canvas.height / 2 - 15,
    width: canvas.width / 2 - 300,
    height: canvas.height / 2 - 190,
    rotation: 0,
    updatedX: canvas.width / 2 - 105,
    updatedY: 440,
    updatedWidth: 170,
    updatedHeight: 175,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: canvas.width / 2 + 10,
    y: canvas.height / 2 - 80,
    width: 200,
    height: 200,
    rotation: 0,
    updatedX: canvas.width / 2 - 105,
    updatedY: 440,
    updatedWidth: 170,
    updatedHeight: 175,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 80,
    width: canvas.width / 2 - 200,
    height: canvas.height / 2 - 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 105,
    updatedY: 440,
    updatedWidth: 170,
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
    updatedX: canvas.width / 2 - 105,
    updatedY: 440,
    updatedWidth: 170,
    updatedHeight: 175,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 80,
    width: canvas.width / 2 - 330,
    height: canvas.height / 2 + 85,
    rotation: 0,
    updatedX: canvas.width / 2 + 40,
    updatedY: 440,
    updatedWidth: 170,
    updatedHeight: 215,
    updatedRotation: 0,
  },
  // full
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 80,
    width: canvas.width / 2 - 430,
    height: canvas.height / 2 + 45,
    rotation: 0,
    updatedX: canvas.width / 2 - 105,
    updatedY: 440,
    updatedWidth: 170,
    updatedHeight: 175,
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
