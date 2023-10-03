import { UploadedImage } from "../../UploadedImage";

const responsiveResearchPersonValues = (canvas) => [
  {
    screenWidth: 380,
    x: canvas.width / 2 - 35,
    y: canvas.height / 2 + 101,
    width: 90,
    height: 110,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: canvas.width / 2 - 35,
    y: canvas.height / 2 + 101,
    width: 90,
    height: 110,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
    updatedWidth: 0,
    updatedHeight: 0,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2 - 35,
    y: canvas.height / 2 + 101,
    width: 70,
    height: 110,
    rotation: -20,
    updatedX: canvas.width / 2 - 275,
    updatedY: canvas.height / 2 + 100,
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
  {
    screenWidth: 1536,
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
  {
    screenWidth: 1728,
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
  {
    screenWidth: 2560,
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

export function getResponsiveResearchPersonDimensions(canvas, screenWidth) {
  let x = canvas.width / 2 - 35;
  let y = canvas.height / 2 + 101;
  let width = 80;
  let height = 130;
  let rotation = -20;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedWidth = 0;
  let updatedHeight = 0;
  let updatedRotation = 0;

  for (const rule of responsiveResearchPersonValues(canvas)) {
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

export const ResearchPerson = (
  ResearchPersonData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    ResearchPersonData.x,
    ResearchPersonData.y,
    require("../../../../assets/home/images/header_41.png"),
    ResearchPersonData.width,
    ResearchPersonData.height,
    ResearchPersonData.rotation,
    ResearchPersonData.updatedX,
    ResearchPersonData.updatedY,
    ResearchPersonData.updatedWidth,
    ResearchPersonData.updatedHeight,
    ResearchPersonData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
