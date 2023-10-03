import { UploadedImage } from "../../UploadedImage";

const responsiveSlimManWithGlassesWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 375,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 430,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 768,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 1024,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 1440,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 1536,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 1728,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 1920,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
  {
    screenWidth: 2560,
    x: 1200,
    y: -500,
    width: 110,
    height: 170,
    rotation: 0,
    updatedX: canvas.width / 2 - 55,
    updatedY: canvas.height / 2 - 52,
    updatedWidth: 115,
    updatedHeight: 160,
    updatedRotation: 0.5,
  },
];

export function getResponsiveSlimManWithGlassesDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveSlimManWithGlassesWithLabelValues(canvas)) {
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

export const SlimManWithGlasses = (
  RockWithLabelData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_39.png"),
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
