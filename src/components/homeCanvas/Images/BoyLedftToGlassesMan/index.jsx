import { UploadedImage } from "../../UploadedImage";

const responsiveBoyLedftToGlassesManValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 195,
    updatedY: canvas.height / 2 - 60,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 195,
    updatedY: canvas.height / 2 - 60,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 195,
    updatedY: canvas.height / 2 - 60,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 195,
    updatedY: canvas.height / 2 - 60,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 195,
    updatedY: canvas.height / 2 - 60,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 195,
    updatedY: canvas.height / 2 - 60,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 195,
    updatedY: canvas.height / 2 - 60,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 - 195,
    updatedY: canvas.height / 2 - 60,
    updatedWidth: 75,
    updatedHeight: 105,
    updatedRotation: 0,
  },
];

export function getResponsiveBoyLedftToGlassesManDimensions(
  canvas,
  screenWidth
) {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let width = 0;
  let height = 0;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 195;
  let updatedY = canvas.height / 2 - 60;
  let updatedWidth = 75;
  let updatedHeight = 105;
  let updatedRotation = 0;

  for (const rule of responsiveBoyLedftToGlassesManValues(canvas)) {
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

export const BoyLedftToGlassesMan = (
  BoyLedftToGlassesManData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    BoyLedftToGlassesManData.x,
    BoyLedftToGlassesManData.y,
    require("../../../../assets/home/images/header_61.png"),
    BoyLedftToGlassesManData.width,
    BoyLedftToGlassesManData.height,
    BoyLedftToGlassesManData.rotation,
    BoyLedftToGlassesManData.updatedX,
    BoyLedftToGlassesManData.updatedY,
    BoyLedftToGlassesManData.updatedWidth,
    BoyLedftToGlassesManData.updatedHeight,
    BoyLedftToGlassesManData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
