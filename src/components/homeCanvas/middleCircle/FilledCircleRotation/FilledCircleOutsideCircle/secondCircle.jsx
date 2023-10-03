import { FilledCircle } from "../../../FilledCircle";

const responsiveSecondCircleOutsideMiddleCircleValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2,
    y: canvas.height / 2 - 40,
    radius: 7,
    color: "#af292f",
    radian: 3.125,
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
    radian: 3.125,
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
    radian: 3.125,
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

export function getResponsiveSecondCircleOutsideMiddleCircleDimensions(
  canvas,
  screenWidth
) {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let radius = 10;
  let color = "#af292f";
  let radian = 3.125;
  let velocity = 0.001;
  let distanceFromCenter = 305;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedRadius = 0;
  let updatedRadian = 0;
  let updatedDistance = 0;

  for (const rule of responsiveSecondCircleOutsideMiddleCircleValues(canvas)) {
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

export const SecondCircleOutsideMiddleCircle = (
  SecondCircleOutsideMiddleCircleData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new FilledCircle(
    SecondCircleOutsideMiddleCircleData.x,
    SecondCircleOutsideMiddleCircleData.y,
    SecondCircleOutsideMiddleCircleData.radius,
    SecondCircleOutsideMiddleCircleData.color,
    SecondCircleOutsideMiddleCircleData.radian,
    SecondCircleOutsideMiddleCircleData.velocity,
    SecondCircleOutsideMiddleCircleData.distanceFromCenter,
    SecondCircleOutsideMiddleCircleData.updatedX,
    SecondCircleOutsideMiddleCircleData.updatedY,
    SecondCircleOutsideMiddleCircleData.updatedRadius,
    SecondCircleOutsideMiddleCircleData.updatedRadian,
    SecondCircleOutsideMiddleCircleData.updatedDistance,
    gsap,
    scrollContainer,
    c
  );
