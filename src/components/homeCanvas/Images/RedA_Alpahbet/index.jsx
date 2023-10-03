import { UploadedImage } from "../../UploadedImage";

const responsiveRedA_AlphabetValues = (canvas) => [
  {
    screenWidth: 320,
    x: 363,
    y: 220,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 380,
    x: 363,
    y: 220,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 430,
    x: 363,
    y: 220,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 768,
    x: 363,
    y: 220,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 290,
    y: canvas.height / 2 - 180,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 - 290,
    y: canvas.height / 2 - 180,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2 - 350,
    y: canvas.height / 2 - 180,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 380,
    y: canvas.height / 2 - 180,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 - 390,
    y: canvas.height / 2 - 180,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 - 450,
    y: canvas.height / 2 - 180,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 520,
    y: canvas.height / 2 - 180,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
  },
  {
    screenWidth: 2500,
    x: 363,
    y: 220,
    width: 50,
    height: 50,
    rotation: -15,
    updatedX: canvas.width / 2 - 140,
    updatedY: canvas.height / 2 - 35,
    updatedWidth: 95,
    updatedHeight: 100,
    updatedRotation: -40,
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
