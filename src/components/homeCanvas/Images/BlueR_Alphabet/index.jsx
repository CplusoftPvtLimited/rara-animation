import { UploadedImage } from "../../UploadedImage";

const responsiveBlueR_AlphabetValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 1.12,
    y: canvas.width / 1,
    width: 25,
    height: 25,
    rotation: -45,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 1.17,
    y: canvas.width / 1,
    width: 35,
    height: 35,
    rotation: -45,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 1.17,
    y: canvas.width / 1,
    width: 45,
    height: 45,
    rotation: -45,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width - 85,
    y: canvas.height - 140,
    width: 100,
    height: 100,
    rotation: -30,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 85,
    y: 0,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2 - 70,
    y: 10,
    width: 40,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveBlueR_AlphabetDimensions(canvas, screenWidth) {
  let x = 363;
  let y = 220;
  let width = 50;
  let height = 50;
  let rotation = -15;
  let updatedX = canvas.width / 2 - 140;
  let updatedY = canvas.height / 2 - 35;
  let updatedWidth = 95;
  let updatedHeight = 100;
  let updatedRotation = -40;

  for (const rule of responsiveBlueR_AlphabetValues(canvas)) {
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

export const BlueR_Alphabet = (
  BlueR_Alphabet,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    BlueR_Alphabet.x,
    BlueR_Alphabet.y,
    require("../../../../assets/home/images/header_52_1.png"),
    BlueR_Alphabet.width,
    BlueR_Alphabet.height,
    BlueR_Alphabet.rotation,
    BlueR_Alphabet.updatedX,
    BlueR_Alphabet.updatedY,
    BlueR_Alphabet.updatedWidth,
    BlueR_Alphabet.updatedHeight,
    BlueR_Alphabet.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
