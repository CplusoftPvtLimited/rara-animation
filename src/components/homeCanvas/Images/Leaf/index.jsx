import { UploadedImage } from "../../UploadedImage";

const responsiveLeafWithLabelValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 1.42,
    y: canvas.width / 3.7,
    width: 50,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 1.37,
    y: canvas.width / 3.7,
    width: 50,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 1.3,
    y: canvas.width / 3.7,
    width: 50,
    height: 40,
    rotation: 0,
    updatedX: canvas.width / 2 + 145,
    updatedY: canvas.height / 2 - 75,
    updatedWidth: 115,
    updatedHeight: 85,
    updatedRotation: 95,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 35,
    y: canvas.height / 2 + 101,
    width: 50,
    height: 130,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 35,
    y: canvas.height / 2 + 101,
    width: 80,
    height: 130,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2 - 35,
    y: canvas.height / 2 + 75,
    width: 80,
    height: 130,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  // full
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 35,
    y: canvas.height / 2 + 101,
    width: 80,
    height: 130,
    rotation: 0,
    updatedX: canvas.width / 2,
    updatedY: canvas.height / 2,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
];

export function getResponsiveLeafDimensions(canvas, screenWidth) {
  let x = canvas.width - 225;
  let y = canvas.height / 2 - 85;
  let width = 150;
  let height = 115;
  let rotation = 0;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsiveLeafWithLabelValues(canvas)) {
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

export const Leaf = (LeafData, canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    LeafData.x,
    LeafData.y,
    require("../../../../assets/home/images/header_50.png"),
    LeafData.width,
    LeafData.height,
    LeafData.rotation,
    LeafData.updatedX,
    LeafData.updatedY,
    LeafData.updatedWidth,
    LeafData.updatedHeight,
    LeafData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
