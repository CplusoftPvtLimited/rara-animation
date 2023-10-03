import { FilledCircle } from "../../../FilledCircle";

const responsiveFirstCircleOutsideMiddleCircleValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2,
    y: canvas.height / 2 - 40,
    radius: 7,
    color: "#af292f",
    radian: 0,
    velocity: 0.001,
    distanceFromCenter: 130,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2,
    y: canvas.height / 2 - 27,
    radius: 7,
    color: "#af292f",
    radian: 0,
    velocity: 0.002,
    distanceFromCenter: 135,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2 - 3,
    y: canvas.height / 2 - 33,
    radius: 7,
    color: "#af292f",
    radian: 0,
    velocity: 0.002,
    distanceFromCenter: 165,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 768,
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    color: "#af292f",
    radian: 0,
    velocity: 0.001,
    distanceFromCenter: 305,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 1024,
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    color: "#af292f",
    radian: 0,
    velocity: 0.001,
    distanceFromCenter: 305,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 1440,
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 5,
    color: "#af292f",
    radian: 0.75,
    velocity: 0.001,
    distanceFromCenter: 130,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 1920,
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    color: "#af292f",
    radian: 0,
    velocity: 0.001,
    distanceFromCenter: 305,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 2500,
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    color: "#af292f",
    radian: 0,
    velocity: 0.001,
    distanceFromCenter: 305,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
];

export function getResponsiveFirstCircleOutsideMiddleCircleDimensions(
  canvas,
  screenWidth
) {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let radius = 10;
  let color = "#af292f";
  let radian = 0;
  let velocity = 0.001;
  let distanceFromCenter = 305;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedRadius = 0;
  let updatedRadian = 0;
  let updatedDistance = 0;

  for (const rule of responsiveFirstCircleOutsideMiddleCircleValues(canvas)) {
    if (screenWidth <= rule.screenWidth) {
      x = rule.x;
      y = rule.y;
      radius = rule.radius;
      color = rule.color;
      radian = rule.radian;
      velocity = rule.velocity;
      distanceFromCenter = rule.distanceFromCenter;
      updatedX = rule.updatedX;
      updatedY = rule.updatedY;
      updatedRadius = rule.updatedRadius;
      updatedRadian = rule.updatedRadian;
      updatedDistance = rule.updatedDistance;

      break;
    }
  }

  return {
    x,
    y,
    radius,
    color,
    radian,
    velocity,
    distanceFromCenter,
    updatedX,
    updatedY,
    updatedRadius,
    updatedRadian,
    updatedDistance,
  };
}

export const FirstCircleOutsideMiddleCircle = (
  FirstCircleOutsideMiddleCircleData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new FilledCircle(
    FirstCircleOutsideMiddleCircleData.x,
    FirstCircleOutsideMiddleCircleData.y,
    FirstCircleOutsideMiddleCircleData.radius,
    FirstCircleOutsideMiddleCircleData.color,
    FirstCircleOutsideMiddleCircleData.radian,
    FirstCircleOutsideMiddleCircleData.velocity,
    FirstCircleOutsideMiddleCircleData.distanceFromCenter,
    FirstCircleOutsideMiddleCircleData.updatedX,
    FirstCircleOutsideMiddleCircleData.updatedY,
    FirstCircleOutsideMiddleCircleData.updatedRadius,
    FirstCircleOutsideMiddleCircleData.updatedRadian,
    FirstCircleOutsideMiddleCircleData.updatedDistance,
    gsap,
    scrollContainer,
    c
  );
