import { UploadedImage } from "../../UploadedImage";

const responsivePersonWithRunPoseValues = (canvas) => [
  {
    screenWidth: 380,
    x: 0,
    y: canvas.height / 2 - 260,
    width: 125,
    height: 120,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 425,
    x: 0,
    y: canvas.height / 2 - 260,
    width: 125,
    height: 120,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 768,
    x: -25,
    y: canvas.height / 2 - 230,
    width: 195,
    height: 160,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: -15,
    y: canvas.height / 2 - 320,
    width: 265,
    height: 250,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1440,
    x: -45,
    y: canvas.height / 2 - 300,
    width: 295,
    height: 260,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: -45,
    y: canvas.height / 2 - 300,
    width: 295,
    height: 260,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 2500,
    x: -45,
    y: canvas.height / 2 - 300,
    width: 295,
    height: 260,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
];

export function getResponsivePersonWithRunPoseDimensions(canvas, screenWidth) {
  let x = -45;
  let y = 77;
  let width = 295;
  let height = 300;
  let rotation = 0;
  let updatedX = canvas.width / 2 - 420;
  let updatedY = canvas.height / 2 - 62;
  let updatedWidth = 135;
  let updatedHeight = 115;
  let updatedRotation = 0;

  for (const rule of responsivePersonWithRunPoseValues(canvas)) {
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

export const PersonWithRunPose = (
  PersonWithRunPoseData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new UploadedImage(
    PersonWithRunPoseData.x,
    PersonWithRunPoseData.y,
    require("../../../../assets/home/images/header_13_1.png"),
    PersonWithRunPoseData.width,
    PersonWithRunPoseData.height,
    PersonWithRunPoseData.rotation,
    PersonWithRunPoseData.updatedX,
    PersonWithRunPoseData.updatedY,
    PersonWithRunPoseData.updatedWidth,
    PersonWithRunPoseData.updatedHeight,
    PersonWithRunPoseData.updatedRotation,
    gsap,
    scrollContainer,
    c
  );
