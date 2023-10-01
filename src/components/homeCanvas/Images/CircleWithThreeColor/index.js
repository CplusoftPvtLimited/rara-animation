import { UploadedImage } from "../../UploadedImage";

const responsiveCircleWithThreeColorWithLabelValues = (canvas) => [
  {
    screenWidth: 375,
    x: canvas.width / 2 + 75,
    y: canvas.height / 2 + 90,
    width: 80,
    height: 50,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: canvas.width / 2 + 260,
    y: canvas.height / 2 + 210,
    width: 220,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 150,
    y: canvas.height / 2 + 70,
    width: 130,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 260,
    y: canvas.height / 2 + 210,
    width: 170,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 260,
    y: canvas.height / 2 + 210,
    width: 220,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  // full
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 260,
    y: canvas.height / 2 + 210,
    width: 220,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveCircleWithThreeColorDimensions(
  canvas,
  screenWidth
) {
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

  for (const rule of responsiveCircleWithThreeColorWithLabelValues(canvas)) {
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

export const CircleWithThreeColor = (
  RockWithLabelData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_3.png"),
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
