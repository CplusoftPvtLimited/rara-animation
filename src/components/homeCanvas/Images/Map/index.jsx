import { UploadedImage } from "../../UploadedImage";

const responsiveMapValues = (canvas) => [
  {
    screenWidth: 380,
    x: canvas.width / 2 - 190,
    y: 0,
    width: 120,
    height: 75,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 425,
    x: canvas.width / 2 - 190,
    y: 0,
    width: 120,
    height: 75,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 150,
    y: 165,
    width: 150,
    height: 95,
    rotation: -3,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 45,
    updatedHeight: 72,
    updatedRotation: -10,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 310,
    y: 5,
    width: 150,
    height: 95,
    rotation: 0,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 310,
    y: 5,
    width: 215,
    height: 125,
    rotation: 0,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 310,
    y: 5,
    width: 215,
    height: 125,
    rotation: 0,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2 - 310,
    y: 5,
    width: 215,
    height: 125,
    rotation: 0,
    updatedX: canvas.width / 2 - 180,
    updatedY: canvas.height / 2 - 190,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveMapDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 - 310;
  let y = 5;
  let width = 215;
  let height = 125;
  let rotation = 0;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2 + 100;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsiveMapValues(canvas)) {
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

export const Map = (MapData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    MapData.x,
    MapData.y,
    require("../../../../assets/home/images/header_54.png"),
    MapData.width,
    MapData.height,
    MapData.rotation,
    MapData.updatedX,
    MapData.updatedY,
    MapData.updatedWidth,
    MapData.updatedHeight,
    MapData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
