import { UploadedImage } from "../../UploadedImage";

const responsiveGirlWithLabelValues = (canvas) => [
  {
    screenWidth: 1440,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 + 45,
    updatedY: canvas.height / 2 - 95,
    updatedWidth: 170,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 + 45,
    updatedY: canvas.height / 2 - 95,
    updatedWidth: 170,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 + 45,
    updatedY: canvas.height / 2 - 95,
    updatedWidth: 170,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveGirlDimensions(canvas, screenWidth) {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let width = 0;
  let height = 0;
  let rotation = 0;
  let updatedX = canvas.width / 2 + 45;
  let updatedY = canvas.height / 2 - 95;
  let updatedWidth = 170;
  let updatedHeight = 125;
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