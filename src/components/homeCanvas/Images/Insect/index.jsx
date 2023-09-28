import { UploadedImage } from "../../UploadedImage";

const responsiveInsectValues = (canvas) => [
  {
    screenWidth: 380,
    x: canvas.width / 2 - 40,
    y: canvas.height - 125,
    width: 70,
    height: 55,
    rotation: 0,
    updatedX: canvas.width / 2 - 160,
    updatedY: canvas.height / 2 + 175,
    updatedWidth: 70,
    updatedHeight: 55,
    updatedRotation: 90,
  },
  {
    screenWidth: 425,
    x: canvas.width / 2 - 40,
    y: canvas.height - 125,
    width: 70,
    height: 55,
    rotation: 0,
    updatedX: canvas.width / 2 - 160,
    updatedY: canvas.height / 2 + 175,
    updatedWidth: 70,
    updatedHeight: 55,
    updatedRotation: 90,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 80,
    y: canvas.height - 115,
    width: 110,
    height: 85,
    rotation: 0,
    updatedX: canvas.width / 2 - 160,
    updatedY: canvas.height / 2 + 175,
    updatedWidth: 70,
    updatedHeight: 55,
    updatedRotation: 90,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 120,
    y: canvas.height - 115,
    width: 110,
    height: 85,
    rotation: 0,
    updatedX: canvas.width / 2 - 160,
    updatedY: canvas.height / 2 + 175,
    updatedWidth: 70,
    updatedHeight: 55,
    updatedRotation: 90,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 180,
    y: canvas.height - 115,
    width: 150,
    height: 115,
    rotation: 0,
    updatedX: canvas.width / 2 - 160,
    updatedY: canvas.height / 2 + 175,
    updatedWidth: 70,
    updatedHeight: 55,
    updatedRotation: 90,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 470,
    y: canvas.height - 145,
    width: 180,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 - 160,
    updatedY: canvas.height / 2 + 175,
    updatedWidth: 70,
    updatedHeight: 55,
    updatedRotation: 90,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2 - 280,
    y: canvas.height - 115,
    width: 150,
    height: 115,
    rotation: 0,
    updatedX: canvas.width / 2 - 160,
    updatedY: canvas.height / 2 + 175,
    updatedWidth: 70,
    updatedHeight: 55,
    updatedRotation: 90,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveInsectDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 - 280;
  let y = canvas.height - 115;
  let width = 150;
  let height = 115;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 160;
  let updatedY = canvas.height / 2 + 175;
  let updatedWidth = 70;
  let updatedHeight = 55;
  let updatedRotation = 90;

  for (const rule of responsiveInsectValues(canvas)) {
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

export const Insect = (InsectData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    InsectData.x,
    InsectData.y,
    require("../../../../assets/home/images/header_53.png"),
    InsectData.width,
    InsectData.height,
    InsectData.rotation,
    InsectData.updatedX,
    InsectData.updatedY,
    InsectData.updatedWidth,
    InsectData.updatedHeight,
    InsectData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
