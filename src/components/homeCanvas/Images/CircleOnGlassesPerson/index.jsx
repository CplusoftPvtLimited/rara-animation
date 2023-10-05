import { UploadedImage } from "../../UploadedImage";

const responsiveCircleOnGlassesPersonValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2 - 130,
    y: canvas.width / 1.05,
    width: 65,
    height: 35,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2 - 154,
    y: canvas.width / 1.05,
    width: 75,
    height: 45,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 10,
    y: canvas.width / 1.06,
    width: 75,
    height: 45,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: canvas.width / 2 - 220,
    y: canvas.width / 2 - 20,
    width: canvas.width / 4 - 90,
    height: canvas.width / 4 - 130,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 250,
    y: canvas.width / 2 - 120,
    width: canvas.width / 2 - 400,
    height: canvas.width / 2 - 450,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1114,
    x: canvas.width / 2 - 280,
    y: canvas.width / 2 - 200,
    width: canvas.width / 2 - 400,
    height: canvas.width / 2 - 450,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 - 270,
    y: canvas.width / 2 - 240,
    width: canvas.width / 2 - 500,
    height: canvas.width / 2 - 550,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: canvas.width / 2 - 300,
    y: canvas.width / 2 - 290,
    width: canvas.width / 2 - 500,
    height: canvas.width / 2 - 550,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 320,
    y: canvas.width / 2 - 290,
    width: canvas.width / 2 - 600,
    height: canvas.width / 2 - 600,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: canvas.width / 2 - 400,
    y: canvas.width / 2 - 300,
    width: canvas.width / 2 - 600,
    height: canvas.width / 2 - 600,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 - 400,
    y: canvas.width / 2 - 400,
    width: canvas.width / 2 - 650,
    height: canvas.width / 2 - 700,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },

  {
    screenWidth: 1920,
    x: canvas.width / 2 - 530,
    y: canvas.width / 2 - 400,
    width: canvas.width / 2 - 700,
    height: canvas.width / 2 - 800,
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
    width: canvas.width / 2 - 700,
    height: canvas.width / 2 - 800,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 3000,
    x: canvas.width / 2 - 400,
    y: canvas.width / 2 - 400,
    width: canvas.width / 2 - 200,
    height: canvas.width / 2 - 200,
    rotation: 0,
    updatedX: canvas.width / 2 + 45,
    updatedY: canvas.height / 2 - 95,
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
  let x = canvas.width / 2 - 400;
  let y = canvas.width / 2 - 400;
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
