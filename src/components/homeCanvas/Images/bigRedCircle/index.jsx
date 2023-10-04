import { UploadedImage } from "../../UploadedImage";

const responsiveBigRedCircleValues = (canvas) => [
  {
    screenWidth: 320,
    x: -150,
    y: canvas.width / 0.58,
    width: 350,
    height: 300,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: -250,
    y: canvas.width / 0.6,
    width: 450,
    height: 500,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: -250,
    y: canvas.width / 0.6,
    width: 450,
    height: 500,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: -150,
    y: canvas.height - 105,
    width: 350,
    height: 300,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: -150,
    y: canvas.width / 2 + 200,
    width: canvas.width / 2 - 100,
    height: canvas.width / 2 - 200,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: -150,
    y: canvas.width / 2 + 80,
    width: canvas.width / 2 - 100,
    height: canvas.width / 2 - 200,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: -150,
    y: canvas.width / 2 + 40,
    width: canvas.width / 2 - 100,
    height: canvas.width / 2 - 200,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: -150,
    y: canvas.width / 2 + 60,
    width: canvas.width / 2 - 300,
    height: canvas.width / 2 - 400,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: -150,
    y: canvas.width / 2 + 200,
    width: canvas.width / 2 - 300,
    height: canvas.width / 2 - 400,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: -150,
    y: canvas.width / 2 + 110,
    width: canvas.width / 2 - 300,
    height: canvas.width / 2 - 400,
    rotation: 0,
    updatedX: canvas.width / 2 + 70,
    updatedY: canvas.height / 2 - 243,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: -150,
    y: canvas.width / 2 + 110,
    width: canvas.width / 2 - 300,
    height: canvas.width / 2 - 400,
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

export function getResponsiveBigRedCircleDimensions(canvas, screenWidth) {
  let x = -220;
  let y = canvas.height - 95;
  let width = 675;
  let height = 550;
  let rotation = 0;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsiveBigRedCircleValues(canvas)) {
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

export const BigRedCircle = (
  BigRedCircleData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    BigRedCircleData.x,
    BigRedCircleData.y,
    require("../../../../assets/home/images/header_55.png"),
    BigRedCircleData.width,
    BigRedCircleData.height,
    BigRedCircleData.rotation,
    BigRedCircleData.updatedX,
    BigRedCircleData.updatedY,
    BigRedCircleData.updatedWidth,
    BigRedCircleData.updatedHeight,
    BigRedCircleData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
