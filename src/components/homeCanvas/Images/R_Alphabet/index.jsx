import { UploadedImage } from "../../UploadedImage";

const responsiveR_AlphabetWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 375,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 465,
    y: canvas.height / 2 + 100,
    width: 85,
    height: 100,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width / 2 + 665,
    y: canvas.height / 2 + 100,
    width: 125,
    height: 150,
    rotation: -45,
    updatedX: canvas.width / 2 + 3,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 80,
    updatedHeight: 100,
    updatedRotation: 0,
  },
];

export function getResponsiveR_AlphabetDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveR_AlphabetWithLabelValues(canvas)) {
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

export const R_Alphabet = (
  RockWithLabelData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_52_1.png"),
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
