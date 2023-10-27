import { UploadedImage } from "../../UploadedImage";

const responsivePersonLaptopAboveSkullValues = (canvas) => [
  {
    screenWidth: 320,
    x: 25,
    y: canvas.width / 3.8,
    width: 20,
    height: 30,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: 33,
    y: canvas.width / 3.8,
    width: 20,
    height: 30,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: 43,
    y: canvas.width / 3.5,
    width: 25,
    height: 35,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: 165,
    y: 55,
    width: 30,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 255,
    y: canvas.width / 2 - 420,
    width: canvas.width / 2 - 470,
    height: canvas.width / 2 - 470,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1114,
    x: canvas.width / 2 - 250,
    y: canvas.width / 2 - 440,
    width: canvas.width / 2 - 590,
    height: canvas.width / 2 - 590,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 - 360,
    y: canvas.width / 2 - 490,
    width: canvas.width / 2 - 590,
    height: canvas.width / 2 - 590,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2 - 400,
    y: canvas.width / 2 - 520,
    width: canvas.width / 2 - 630,
    height: canvas.width / 2 - 630,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 420,
    y: canvas.width / 2 - 590,
    width: canvas.width / 2 - 660,
    height: canvas.width / 2 - 660,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 - 420,
    y: canvas.width / 2 - 580,
    width: canvas.width / 2 - 700,
    height: canvas.width / 2 - 700,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },

  {
    screenWidth: 1728,
    x: canvas.width / 2 - 470,
    y: canvas.width / 2 - 695,
    width: canvas.width / 2 - 800,
    height: canvas.width / 2 - 800,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 490,
    y: canvas.width / 2 - 780,
    width: canvas.width / 2 - 900,
    height: canvas.width / 2 - 900,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
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

export function getResponsivePersonLaptopAboveSkullDimensions(
  canvas,
  screenWidth
) {
  let x = 341;
  let y = 59;
  let width = 40;
  let height = 55;
  let rotation = 0;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsivePersonLaptopAboveSkullValues(canvas)) {
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

export const PersonLaptopAboveSkull = (
  PersonLaptopAboveSkullData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    PersonLaptopAboveSkullData.x,
    PersonLaptopAboveSkullData.y,
    require("../../../../assets/home/images/header_58.png"),
    PersonLaptopAboveSkullData.width,
    PersonLaptopAboveSkullData.height,
    PersonLaptopAboveSkullData.rotation,
    PersonLaptopAboveSkullData.updatedX,
    PersonLaptopAboveSkullData.updatedY,
    PersonLaptopAboveSkullData.updatedWidth,
    PersonLaptopAboveSkullData.updatedHeight,
    PersonLaptopAboveSkullData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );