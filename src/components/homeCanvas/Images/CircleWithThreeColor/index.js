import { UploadedImage } from "../../UploadedImage";

const responsiveCircleWithThreeColorWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 + 70,
    y: canvas.width / 0.8,
    width: canvas.width / 5,
    height: canvas.width / 6.5,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 1.47,
    y: canvas.width / 0.81,
    width: canvas.width / 5,
    height: canvas.width / 6.5,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 1.42,
    y: canvas.width / 0.81,
    width: canvas.width / 5,
    height: canvas.width / 6.5,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 160,
    y: canvas.height / 2 + 50,
    width: canvas.width / 2 - 254,
    height: canvas.width / 2 - 294,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 220,
    y: canvas.height / 2 + 150,
    width: canvas.width / 2 - 342,
    height: canvas.width / 2 - 377,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 310,
    y: canvas.height / 2 + 250,
    width: canvas.width / 2 - 220,
    height: canvas.width / 2 - 555,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 + 260,
    y: canvas.height / 2 + 210,
    width: canvas.width / 2 - 548,
    height: canvas.width / 2 - 603,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 + 260,
    y: canvas.height / 2 + 210,
    width: canvas.width / 2 - 644,
    height: canvas.width / 2 - 699,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 350,
    y: canvas.height / 2 + 240,
    width: canvas.width / 2 - 740,
    height: canvas.width / 2 - 795,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2560,
    x: canvas.width / 2 + 400,
    y: canvas.height / 2 + 310,
    width: canvas.width / 2 - 960,
    height: canvas.width / 2 - 1015,
    rotation: 0,
    updatedX: canvas.width / 2 + 25,
    updatedY: canvas.width / 2 + 160,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveCircleWithThreeColorDimensions(
  canvas,
  screenWidth
) {
  let x = canvas.width / 2 + 995;
  let y = canvas.height / 2 - 2055;
  let width = 0;
  let height = 0;
  let rotation = 0;
  let updatedX = canvas.width / 2 + 0;
  let updatedY = canvas.height / 2 - 33;
  let updatedWidth = 170;
  let updatedHeight = 175;
  let updatedRotation = 0;

  for (const rule of responsiveCircleWithThreeColorWithLabelValues(canvas)) {
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

export const CircleWithThreeColor = (
  RockWithLabelData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_3.png"),
    RockWithLabelData.width,
    RockWithLabelData.height,
    RockWithLabelData.rotation,
    RockWithLabelData.updatedX,
    RockWithLabelData.updatedY,
    RockWithLabelData.updatedWidth,
    RockWithLabelData.updatedHeight,
    RockWithLabelData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );