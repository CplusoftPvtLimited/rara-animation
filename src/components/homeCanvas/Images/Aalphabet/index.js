import { UploadedImage } from "../../UploadedImage";

const responsiveAalphabetWithLabelValues = (canvas) => [
  {
    screenWidth: 375,
    x: canvas.width - 40,
    y: canvas.height / 2 - 140,
    width: 30,
    height: 30,
    rotation: -40,
    updatedX: canvas.width / 2 + 105,
    updatedY: canvas.height / 2 - 25,
    updatedWidth: 65,
    updatedHeight: 35,
    updatedRotation: 95,
  },
  {
    screenWidth: 425,
    x: canvas.width - 40,
    y: canvas.height / 2 - 140,
    width: 30,
    height: 30,
    rotation: -40,
    updatedX: canvas.width / 2 + 105,
    updatedY: canvas.height / 2 - 25,
    updatedWidth: 65,
    updatedHeight: 35,
    updatedRotation: 95,
  },
  {
    screenWidth: 768,
    x: canvas.width - 40,
    y: canvas.height / 2 - 140,
    width: 30,
    height: 30,
    rotation: -40,
    updatedX: canvas.width / 2 + 100,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 65,
    updatedRotation: 95,
  },
  {
    screenWidth: 1024,
    x: canvas.width - 180,
    y: canvas.height / 2 - 140,
    width: 40,
    height: 30,
    rotation: -40,
    updatedX: canvas.width / 2 + 145,
    updatedY: canvas.height / 2 - 75,
    updatedWidth: 115,
    updatedHeight: 85,
    updatedRotation: 95,
  },
  {
    screenWidth: 1440,
    x: canvas.width - 115,
    y: canvas.height / 2 - 140,
    width: 40,
    height: 30,
    rotation: -40,
    updatedX: canvas.width / 2 + 145,
    updatedY: canvas.height / 2 - 45,
    updatedWidth: 115,
    updatedHeight: 85,
    updatedRotation: 95,
  },
  {
    screenWidth: 1920,
    x: canvas.width - 115,
    y: canvas.height / 2 - 140,
    width: 40,
    height: 30,
    rotation: -40,
    updatedX: canvas.width / 2 + 145,
    updatedY: canvas.height / 2 - 45,
    updatedWidth: 115,
    updatedHeight: 85,
    updatedRotation: 95,
  },
];

export function getResponsiveAalphabetDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveAalphabetWithLabelValues(canvas)) {
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

export const Aalphabet = (
  RockWithLabelData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_31.png"),
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
