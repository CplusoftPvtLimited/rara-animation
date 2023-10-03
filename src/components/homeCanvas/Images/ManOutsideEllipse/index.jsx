import { UploadedImage } from "../../UploadedImage";

const responsiveManOutsideEllipseValues = (canvas) => [
  {
    screenWidth: 320,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 75,
    updatedHeight: 120,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 1366,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 1536,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: 500,
    y: canvas.width,
    width: 110,
    height: 155,
    rotation: 0,
    updatedX: canvas.width / 2 - 170,
    updatedY: canvas.height / 2 + 75,
    updatedWidth: 95,
    updatedHeight: 150,
    updatedRotation: 0,
  },
];

export function getResponsiveManOutsideEllipseDimensions(canvas, screenWidth) {
  let x = 500;
  let y = canvas.width;
  let width = 110;
  let height = 155;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 170;
  let updatedY = canvas.height / 2 + 75;
  let updatedWidth = 95;
  let updatedHeight = 150;
  let updatedRotation = 0;

  for (const rule of responsiveManOutsideEllipseValues(canvas)) {
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

export const ManOutsideEllipse = (
  ManOutsideEllipseData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    ManOutsideEllipseData.x,
    ManOutsideEllipseData.y,
    require("../../../../assets/home/images/header_51.png"),
    ManOutsideEllipseData.width,
    ManOutsideEllipseData.height,
    ManOutsideEllipseData.rotation,
    ManOutsideEllipseData.updatedX,
    ManOutsideEllipseData.updatedY,
    ManOutsideEllipseData.updatedWidth,
    ManOutsideEllipseData.updatedHeight,
    ManOutsideEllipseData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
