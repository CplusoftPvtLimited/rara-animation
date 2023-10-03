import { UploadedImage } from "../../UploadedImage";

const responsivePersonWithRunPoseValues = (canvas) => [
  {
    screenWidth: 320,
    x: -20,
    y: canvas.height / 2 - 165,
    width: 100,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 380,
    x: -20,
    y: canvas.height / 2 - 165,
    width: 100,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 430,
    x: -20,
    y: canvas.height / 2 - 165,
    width: 115,
    height: 90,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 770,
    x: -30,
    y: 75,
    width: 175,
    height: 150,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2 - 550,
    y: canvas.height / 2 - 350,
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
    screenWidth: 1280,
    x: canvas.width / 2 - 690,
    y: canvas.height / 2 - 350,
    width: 255,
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
    x: canvas.width / 2 - 750,
    y: canvas.height / 2 - 350,
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
    screenWidth: 1536,
    x: canvas.width / 2 - 770,
    y: canvas.height / 2 - 480,
    width: 340,
    height: 320,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1728,
    x: canvas.width / 2 - 900,
    y: canvas.height / 2 - 450,
    width: 390,
    height: 330,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2 - 1000,
    y: canvas.height / 2 - 500,
    width: 390,
    height: 330,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 3000,
    x: -75,
    y: 115,
    width: canvas.width / 6,
    height: canvas.width / 7,
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
