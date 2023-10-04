import { UploadedImage } from "../../UploadedImage";

const responsiveShipValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 - 80,
    y: canvas.width / 1.15,
    width: 50,
    height: 50,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2 - 95,
    y: canvas.width / 1.15,
    width: 60,
    height: 60,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 4,
    y: canvas.width / 1.18,
    width: 70,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: canvas.width / 2 - 140,
    y: canvas.width / 2 - 70,
    width: 85,
    height: 85,
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
    y: canvas.width / 2 - 190,
    width: canvas.width / 2 - 420,
    height: canvas.width / 2 - 420,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 - 170,
    y: canvas.width / 2 - 350,
    width: canvas.width / 2 - 520,
    height: canvas.width / 2 - 520,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2 - 180,
    y: canvas.width / 2 - 380,
    width: canvas.width / 2 - 570,
    height: canvas.width / 2 - 570,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 230,
    y: canvas.width / 2 - 390,
    width: canvas.width / 2 - 600,
    height: canvas.width / 2 - 600,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 - 270,
    y: canvas.width / 2 - 370,
    width: canvas.width / 2 - 640,
    height: canvas.width / 2 - 640,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 - 200,
    y: canvas.width / 2 - 500,
    width: canvas.width / 2 - 740,
    height: canvas.width / 2 - 740,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 285,
    y: canvas.width / 2 - 550,
    width: canvas.width / 2 - 800,
    height: canvas.width / 2 - 800,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 3000,
    x: canvas.width / 2 - 270,
    y: canvas.height / 2 - 175,
    width: canvas.width / 10,
    height: canvas.height / 5,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
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
