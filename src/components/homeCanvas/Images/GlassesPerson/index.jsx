import { UploadedImage } from "../../UploadedImage";

const responsiveGlassesPersonValues = (canvas) => [
  {
    screenWidth: 1440,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 370, // Set default width here
    height: 440, // Set default height here
    rotation: 0,
    updatedX: canvas.width / 2 + 45,
    updatedY: canvas.height / 2 - 95,
    updatedWidth: 170,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 + 45,
    updatedY: canvas.height / 2 - 95,
    updatedWidth: 170,
    updatedHeight: 125,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 0,
    height: 0,
    rotation: 0,
    updatedX: canvas.width / 2 + 45,
    updatedY: canvas.height / 2 - 95,
    updatedWidth: 170,
    updatedHeight: 125,
    updatedRotation: 0,
  },
];

export function getResponsiveGlassesPersonDimensions(canvas, screenWidth) {
  console.log("***********Canvas:", canvas);
  let x = canvas.width / 2;
  let y = canvas.height / 2;
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
    require("../../../../assets/home/images/header_28.png"),
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
