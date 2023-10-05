import { UploadedImage } from "../../UploadedImage";

const responsivePersonWithRunPoseValues = (canvas) => [
  {
    screenWidth: 330,
    x: -20,
    y: canvas.width / 2.1,
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
    y: canvas.width / 2.1,
    width: 110,
    height: 100,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 435,
    x: -20,
    y: canvas.width / 2.1,
    width: 120,
    height: 110,
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
    y: canvas.width / 2 - 420,
    width: canvas.width / 2 - 300,
    height: canvas.width / 2 - 300,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1114,
    x: canvas.width / 2 - 560,
    y: canvas.width / 2 - 500,
    width: canvas.width / 2 - 350,
    height: canvas.width / 2 - 350,
    rotation: 0,
    updatedX: canvas.width / 2 - 420,
    updatedY: canvas.height / 2 - 90,
    updatedWidth: 135,
    updatedHeight: 115,
    updatedRotation: 0,
  },
  {
    screenWidth: 1280,
    x: canvas.width / 2 - 660,
    y: canvas.width / 2 - 560,
    width: canvas.width / 2 - 400,
    height: canvas.width / 2 - 400,
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
    y: canvas.width / 2 - 640,
    width: canvas.width / 2 - 450,
    height: canvas.width / 2 - 450,
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
    y: canvas.width / 2 - 680,
    width: canvas.width / 2 - 450,
    height: canvas.width / 2 - 450,
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
    y: canvas.width / 2 - 780,
    width: canvas.width / 2 - 600,
    height: canvas.width / 2 - 600,
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
    y: canvas.width / 2 - 850,
    width: canvas.width / 2 - 600,
    height: canvas.width / 2 - 600,
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
