import { UploadedImage } from "../../UploadedImage";

const responsiveGlassesPersonValues = (canvas) => [
  {
    screenWidth: 380,
    x: 15,
    y: canvas.height / 2 - 130,
    width: 200,
    height: 240,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: 15,
    y: canvas.height / 2 - 130,
    width: 200,
    height: 240,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: -20,
    y: canvas.height / 2 - 150,
    width: 350,
    height: 400,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: 145,
    y: canvas.height / 2 - 180,
    width: 300,
    height: 340,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: 265,
    y: canvas.height / 2 - 180,
    width: 370,
    height: 440,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: 265,
    y: canvas.height / 2 - 180,
    width: 370,
    height: 440,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: 265,
    y: canvas.height / 2 - 180,
    width: 370,
    height: 440,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveGlassesPersonDimensions(canvas, screenWidth) {
  let x = 265;
  let y = canvas.height / 2 - 180;
  let width = 370;
  let height = 440;
  let rotation = 0;
  let updatedX = canvas.width / 2 + 45;
  let updatedY = canvas.height / 2 - 95;
  let updatedWidth = 170;
  let updatedHeight = 125;
  let updatedRotation = 0;

  for (const rule of responsiveGlassesPersonValues(canvas)) {
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

export const GlassesPerson = (
  GlassesPersonData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    GlassesPersonData.x,
    GlassesPersonData.y,
    require("../../../../assets/home/images/header_10.png"),
    GlassesPersonData.width,
    GlassesPersonData.height,
    GlassesPersonData.rotation,
    GlassesPersonData.updatedX,
    GlassesPersonData.updatedY,
    GlassesPersonData.updatedWidth,
    GlassesPersonData.updatedHeight,
    GlassesPersonData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
