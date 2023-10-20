import { UploadedImage } from "../../UploadedImage";

const responsiveGlassesPersonValues = (canvas) => [
  {
    screenWidth: 320,
    x: 5,
    y: canvas.width / 1.25,
    width: 115,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: 10,
    y: canvas.width / 1.25,
    width: 130,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: 10,
    y: canvas.width / 1.25,
    width: 140,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: canvas.width / 2 - 250,
    y: canvas.width / 2 - 80,
    width: 175,
    height: 200,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: 215,
    y: canvas.width / 2 - 230,
    width: canvas.width / 2 - 300,
    height: canvas.width / 2 - 230,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },

  {
    screenWidth: 1114,
    x: 245,
    y: canvas.width / 2 - 300,
    width: canvas.width / 2 - 300,
    height: canvas.width / 2 - 230,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: 275,
    y: canvas.width / 2 - 400,
    width: canvas.width / 2 - 300,
    height: canvas.width / 2 - 230,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },

  {
    screenWidth: 1366,
    x: 300,
    y: canvas.width / 2 - 450,
    width: canvas.width / 2 - 340,
    height: canvas.width / 2 - 250,
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
    y: canvas.width / 2 - 450,
    width: canvas.width / 2 - 350,
    height: canvas.width / 2 - 300,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: 265,
    y: canvas.width / 2 - 440,
    width: canvas.width / 2 - 400,
    height: canvas.width / 2 - 300,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: 360,
    y: canvas.width / 2 - 600,
    width: canvas.width / 2 - 400,
    height: canvas.width / 2 - 300,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: 300,
    y: canvas.width / 2 - 680,
    width: canvas.width / 2 - 400,
    height: canvas.width / 2 - 300,
    rotation: 0,
    updatedX: canvas.width / 2 - 210,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 175,
    updatedHeight: 200,
    updatedRotation: 0,
  },
  {
    screenWidth: 3000,
    x: canvas.width / 5 - 200,
    y: canvas.width / 4,
    width: canvas.width / 3.75,
    height: canvas.width / 3.3,
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
