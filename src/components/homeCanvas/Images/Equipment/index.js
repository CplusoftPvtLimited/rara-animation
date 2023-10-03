import { UploadedImage } from "../../UploadedImage";

const responsiveEquipmentWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2,
    y: canvas.width / 0.86,
    width: 40,
    height: 50,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2.2,
    y: canvas.width / 0.87,
    width: 45,
    height: 55,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2.1,
    y: canvas.width / 0.87,
    width: 45,
    height: 55,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 + 65,
    y: canvas.width / 2 + 30,
    width: 50,
    height: 75,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 + 45,
    y: canvas.height / 2 + 75,
    width: 150,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 + 45,
    y: canvas.height / 2 + 75,
    width: 150,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  // full
  {
    screenWidth: 1920,
    x: canvas.width / 2 + 45,
    y: canvas.height / 2 + 75,
    width: 150,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveEquipmentDimensions(canvas, screenWidth) {
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

  for (const rule of responsiveEquipmentWithLabelValues(canvas)) {
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

export const Equipment = (
  RockWithLabelData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    RockWithLabelData.x,
    RockWithLabelData.y,
    require("../../../../assets/home/images/header_1.png"),
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
