import { UploadedImage } from "../../UploadedImage";

const responsiveEyeWithLabelValues = (canvas) => [
  {
    screenWidth: 375,
    x: canvas.width / 2 + 85,
    y: canvas.height / 2 + 45,
    width: 40,
    height: 50,
    rotation: 0,
    updatedX: canvas.width / 2 + 40,
    updatedY: canvas.height / 2 + 38,
    updatedWidth: 60,
    updatedHeight: 50,
    updatedRotation: 0,
  },
  // {
  //   screenWidth: 425,
  //   x: canvas.width / 2 + 10,
  //   y: canvas.height / 2 - 80,
  //   width: 200,
  //   height: 200,
  //   rotation: 0,
  //   updatedX: canvas.width / 2 - 105,
  //   updatedY: 440,
  //   updatedWidth: 170,
  //   updatedHeight: 175,
  //   updatedRotation: 0,
  // },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 180,
    y: canvas.height / 2 + 150,
    width: 150,
    height: 120,
    rotation: 0,
    updatedX: canvas.width / 2 + 105,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 80,
    updatedHeight: 70,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 300,
    y: canvas.height / 2 + 150,
    width: 180,
    height: 120,
    rotation: 0,
    updatedX: canvas.width / 2 + 105,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 80,
    updatedHeight: 70,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 355,
    y: canvas.height / 2 + 150,
    width: 275,
    height: 215,
    rotation: 0,
    updatedX: canvas.width / 2 + 105,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 80,
    updatedHeight: 70,
    updatedRotation: 0,
  },
  // full
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 355,
    y: canvas.height / 2 + 150,
    width: 275,
    height: 215,
    rotation: 0,
    updatedX: canvas.width / 2 + 105,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 80,
    updatedHeight: 70,
    updatedRotation: 0,
  },
];

export function getResponsiveEyeDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveEyeWithLabelValues(canvas)) {
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

export const Eye = (RockWithLabelData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_8.png"),
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
