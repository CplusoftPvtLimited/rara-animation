import { UploadedImage } from "../../UploadedImage";

const responsivePersonOnPhoneBottomRightValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width - 100,
    y: canvas.width / 0.65,
    width: 75,
    height: 75,
    rotation: 15,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width - 100,
    y: canvas.width / 0.639,
    width: 85,
    height: 85,
    rotation: 15,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width - 100,
    y: canvas.width / 0.55,
    width: 95,
    height: 95,
    rotation: 15,
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

export function getResponsivePersonOnPhoneBottomRightDimensions(
  canvas,
  screenWidth
) {
  let x = canvas.width - 130;
  let y = canvas.height - 153;
  let width = 115;
  let height = 135;
  let rotation = -15;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsivePersonOnPhoneBottomRightValues(canvas)) {
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

export const PersonOnPhoneBottomRight = (
  PersonLaptopAboveSkullData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    PersonLaptopAboveSkullData.x,
    PersonLaptopAboveSkullData.y,
    require("../../../../assets/home/images/header_27.png"),
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
