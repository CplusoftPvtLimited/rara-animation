import { UploadedImage } from "../../UploadedImage";

const responsiveManWithHandDirectionWithLabelValues = (canvas) => [
  {
    screenWidth: 375,
    x: canvas.width,
    y: canvas.height / 2 - 15,
    width: 115,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 + 115,
    updatedY: canvas.height / 2,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  // {
  //   screenWidth: 425,
  //   x: canvas.width - 40,
  //   y: canvas.height / 2 - 140,
  //   width: 30,
  //   height: 30,
  //   rotation: -40,
  //   updatedX: canvas.width / 2 + 145,
  //   updatedY: canvas.height / 2 - 75,
  //   updatedWidth: 115,
  //   updatedHeight: 85,
  //   updatedRotation: 95,
  // },
  {
    screenWidth: 768,
    x: canvas.width,
    y: canvas.height / 2 - 15,
    width: 115,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 + 135,
    updatedY: canvas.height / 2,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width,
    y: canvas.height / 2 - 15,
    width: 115,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 + 130,
    updatedY: canvas.height / 2 + 15,
    updatedWidth: 100,
    updatedHeight: 140,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width,
    y: canvas.height / 2 - 15,
    width: 115,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 + 175,
    updatedY: canvas.height / 2 + 15,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width,
    y: canvas.height / 2 - 15,
    width: 115,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 + 175,
    updatedY: canvas.height / 2 + 15,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width,
    y: canvas.height / 2 - 15,
    width: 115,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 + 175,
    updatedY: canvas.height / 2 + 15,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width,
    y: canvas.height / 2 - 15,
    width: 115,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 + 195,
    updatedY: canvas.height / 2 + 15,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width,
    y: canvas.height / 2 - 15,
    width: 115,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 + 175,
    updatedY: canvas.height / 2 + 15,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0,
  },
];

export function getResponsiveManWithHandDirectionDimensions(
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

  for (const rule of responsiveManWithHandDirectionWithLabelValues(canvas)) {
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

export const ManWithHandDirection = (
  RockWithLabelData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_22.png"),
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
