import { UploadedImage } from "../../UploadedImage";

const responsiveRAlphabetValues = (canvas) => [
  {
    screenWidth: 380,
    x: 30,
    y: canvas.height - 340,
    width: 30,
    height: 35,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: 30,
    y: canvas.height - 340,
    width: 30,
    height: 35,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: 50,
    y: canvas.height - 260,
    width: 50,
    height: 65,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: 15,
    y: canvas.height - 205,
    width: 50,
    height: 50,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: 15,
    y: canvas.height - 195,
    width: 80,
    height: 100,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: 15,
    y: canvas.height - 245,
    width: 100,
    height: 125,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: 15,
    y: canvas.height - 195,
    width: 80,
    height: 105,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveRAlphabetDimensions(canvas, screenWidth) {
  let x = 15;
  let y = canvas.height - 195;
  let width = 80;
  let height = 135;
  let rotation = -20;
  let updatedX = canvas.width / 2 - 275;
  let updatedY = canvas.height / 2 - 85;
  let updatedWidth = 97;
  let updatedHeight = 95;
  let updatedRotation = 0;

  for (const rule of responsiveRAlphabetValues(canvas)) {
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

export const RAlphabet = (RAlphabetData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    RAlphabetData.x,
    RAlphabetData.y,
    require("../../../../assets/home/images/header_48.png"),
    RAlphabetData.width,
    RAlphabetData.height,
    RAlphabetData.rotation,
    RAlphabetData.updatedX,
    RAlphabetData.updatedY,
    RAlphabetData.updatedWidth,
    RAlphabetData.updatedHeight,
    RAlphabetData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
