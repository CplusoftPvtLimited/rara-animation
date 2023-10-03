import { UploadedImage } from "../../UploadedImage";

const responsiveRedA_AlphabetValues = (canvas) => [
  {
    screenWidth: 320,
    x: 30,
    y: canvas.width / 1.2,
    width: 20,
    height: 20,
    rotation: -15,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: 45,
    y: canvas.width / 1.19,
    width: 25,
    height: 25,
    rotation: -15,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: 45,
    y: canvas.width / 1.19,
    width: 25,
    height: 25,
    rotation: -15,
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

export function getResponsiveRedA_AlphabetDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveRedA_AlphabetValues(canvas)) {
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

export const RedA_Alphabet = (
  RedA_Alphabet,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RedA_Alphabet.x,
    RedA_Alphabet.y,
    require("../../../../assets/home/images/header_43.png"),
    RedA_Alphabet.width,
    RedA_Alphabet.height,
    RedA_Alphabet.rotation,
    RedA_Alphabet.updatedX,
    RedA_Alphabet.updatedY,
    RedA_Alphabet.updatedWidth,
    RedA_Alphabet.updatedHeight,
    RedA_Alphabet.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
