import { UploadedImage } from "../../UploadedImage";

const responsivePersonWithBookValues = (canvas) => [
  {
    screenWidth: 320,
    x: 25,
    y: canvas.width / 0.6,
    width: 60,
    height: 70,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: 25,
    y: canvas.width / 0.62,
    width: 65,
    height: 75,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: 15,
    y: canvas.width / 0.62,
    width: 75,
    height: 85,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: -10,
    y: canvas.height - 135,
    width: 90,
    height: 100,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: 75,
    y: canvas.height - 135,
    width: 100,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: 75,
    y: canvas.height - 135,
    width: 100,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: 75,
    y: canvas.height - 165,
    width: 140,
    height: 165,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: 75,
    y: canvas.height - 135,
    width: 100,
    height: 135,
    rotation: 0,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  // Add more rules for larger screens if needed
];

export function getResponsivePersonWithBookDimensions(canvas, screenWidth) {
  let x = 75;
  let y = canvas.height - 135;
  let width = 100;
  let height = 135;
  let rotation = 0;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2 + 100;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsivePersonWithBookValues(canvas)) {
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

export const PersonWithBook = (
  PersonWithBookData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    PersonWithBookData.x,
    PersonWithBookData.y,
    require("../../../../assets/home/images/header_40.png"),
    PersonWithBookData.width,
    PersonWithBookData.height,
    PersonWithBookData.rotation,
    PersonWithBookData.updatedX,
    PersonWithBookData.updatedY,
    PersonWithBookData.updatedWidth,
    PersonWithBookData.updatedHeight,
    PersonWithBookData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
