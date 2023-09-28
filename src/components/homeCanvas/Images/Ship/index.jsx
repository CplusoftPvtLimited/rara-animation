import { UploadedImage } from "../../UploadedImage";

const responsiveShipValues = (canvas) => [
  {
    screenWidth: 380,
    x: canvas.width / 2 - 60,
    y: canvas.height / 2 - 80,
    width: 80,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: canvas.width / 2 - 60,
    y: canvas.height / 2 - 80,
    width: 80,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 170,
    y: canvas.height / 2 - 110,
    width: 120,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 180,
    y: canvas.height / 2 - 155,
    width: 120,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 250,
    y: canvas.height / 2 - 145,
    width: 150,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 270,
    y: canvas.height / 2 - 175,
    width: 150,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2 - 250,
    y: canvas.height / 2 - 145,
    width: 150,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveShipDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 - 250;
  let y = canvas.height / 2 - 145;
  let width = 150;
  let height = 165;
  let rotation = 0;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsiveShipValues(canvas)) {
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

export const Ship = (ShipData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    ShipData.x,
    ShipData.y,
    require("../../../../assets/home/images/header_47.png"),
    ShipData.width,
    ShipData.height,
    ShipData.rotation,
    ShipData.updatedX,
    ShipData.updatedY,
    ShipData.updatedWidth,
    ShipData.updatedHeight,
    ShipData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
