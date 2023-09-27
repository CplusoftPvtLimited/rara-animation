import { UploadedImage } from "../../UploadedImage";

const responsiveCircleOnGlassesPersonValues = (canvas) => [
  {
    screenWidth: 380,
    x: canvas.width / 2 - 150,
    y: canvas.height / 2 - 40,
    width: 100,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: canvas.width / 2 - 150,
    y: canvas.height / 2 - 40,
    width: 100,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 320,
    y: canvas.height / 2 + 20,
    width: 180,
    height: 100,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 320,
    y: canvas.height / 2 - 50,
    width: 180,
    height: 100,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 500,
    y: canvas.height / 2 - 13,
    width: 215,
    height: 120,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 500,
    y: canvas.height / 2 - 13,
    width: 215,
    height: 120,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2 - 500,
    y: canvas.height / 2 - 13,
    width: 215,
    height: 120,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveCircleOnGlassesPersonDimensions(
  canvas,
  screenWidth
) {
  let x = canvas.width / 2 - 500;
  let y = canvas.height / 2 - 13;
  let width = 215;
  let height = 120;
  let rotation = 0;
  let updatedX = canvas.width / 2 + 45;
  let updatedY = canvas.height / 2 - 95;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsiveCircleOnGlassesPersonValues(canvas)) {
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

export const CircleOnGlassesPerson = (
  CircleOnGlassesPersonData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    CircleOnGlassesPersonData.x,
    CircleOnGlassesPersonData.y,
    require("../../../../assets/home/images/header_4.png"),
    CircleOnGlassesPersonData.width,
    CircleOnGlassesPersonData.height,
    CircleOnGlassesPersonData.rotation,
    CircleOnGlassesPersonData.updatedX,
    CircleOnGlassesPersonData.updatedY,
    CircleOnGlassesPersonData.updatedWidth,
    CircleOnGlassesPersonData.updatedHeight,
    CircleOnGlassesPersonData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
