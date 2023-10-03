import { FilledCircle } from "../../../FilledCircle";

const responsiveRedCircleInsideMiddleCircleValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2,
    y: canvas.width / 1.1,
    radius: 3,
    color: "#af292f",
    radian: 0.75,
    velocity: 0.001,
    distanceFromCenter: 70,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 380,
    x: canvas.width / 2,
    y: canvas.width / 1.1,
    radius: 3,
    color: "#af292f",
    radian: 0.75,
    velocity: 0.001,
    distanceFromCenter: 70,
    updatedX: canvas.width / 2,
    updatedY: canvas.width / 2,
    updatedRadius: 0,
    updatedRadian: 0,
    updatedDistance: 0,
  },
  {
    screenWidth: 430,
    x: canvas.width / 2,
    y: canvas.width / 1.1,
    radius: 3,
    color: "#af292f",
    radian: 0.75,
    velocity: 0.001,
    distanceFromCenter: 90,
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

export function getResponsiveRedCircleInsideMiddleCircleDimensions(
  canvas,
  screenWidth
) {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let radius = 5;
  let color = "#af292f";
  let radian = 0.75;
  let velocity = 0.001;
  let distanceFromCenter = 130;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedRadius = 0;
  let updatedRadian = 0;
  let updatedDistance = 0;

  for (const rule of responsiveRedCircleInsideMiddleCircleValues(canvas)) {
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

export const RedCircleInsideMiddleCircle = (
  RedCircleInsideMiddleCircleData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new FilledCircle(
    RedCircleInsideMiddleCircleData.x,
    RedCircleInsideMiddleCircleData.y,
    RedCircleInsideMiddleCircleData.radius,
    RedCircleInsideMiddleCircleData.color,
    RedCircleInsideMiddleCircleData.radian,
    RedCircleInsideMiddleCircleData.velocity,
    RedCircleInsideMiddleCircleData.distanceFromCenter,
    RedCircleInsideMiddleCircleData.updatedX,
    RedCircleInsideMiddleCircleData.updatedY,
    RedCircleInsideMiddleCircleData.updatedRadius,
    RedCircleInsideMiddleCircleData.updatedRadian,
    RedCircleInsideMiddleCircleData.updatedDistance,
    gsap,
    scrollContainer,
    c
  );
