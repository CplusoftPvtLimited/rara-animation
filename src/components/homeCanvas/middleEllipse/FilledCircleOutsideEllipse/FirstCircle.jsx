import { FilledCircle } from "../../FilledCircle";

const responsiveFirstCircleOutsideEllipseValues = (canvas) => [
  {
    screenWidth: 320,
    x: canvas.width / 2,
    y: canvas.width / 1.1,
    radius: 10,
    color: "#af292f",
    radian: 0,
    velocity: 0.001,
    distanceFromCenter: 200,
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
    radius: 12,
    color: "#af292f",
    radian: 3.125,
    velocity: 0.001,
    distanceFromCenter: 250,
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
    radius: 12,
    color: "#af292f",
    radian: 3.125,
    velocity: 0.001,
    distanceFromCenter: 275,
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

export function getResponsiveFirstCircleOutsideEllipseDimensions(
  canvas,
  screenWidth
) {
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let radius = 25;
  let color = "#af292f";
  let radian = 0;
  let velocity = 0.0005;
  let distanceFromCenter = 700;
  let updatedX = canvas.width / 2;
  let updatedY = canvas.height / 2;
  let updatedRadius = 0;
  let updatedRadian = 0;
  let updatedDistance = 0;

  for (const rule of responsiveFirstCircleOutsideEllipseValues(canvas)) {
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

export const FirstCircleOutsideEllipse = (
  FirstCircleOutsideEllipseData,
  canvas,
  gsap,
  scrollContainer,
  c
) =>
  new FilledCircle(
    FirstCircleOutsideEllipseData.x,
    FirstCircleOutsideEllipseData.y,
    FirstCircleOutsideEllipseData.radius,
    FirstCircleOutsideEllipseData.color,
    FirstCircleOutsideEllipseData.radian,
    FirstCircleOutsideEllipseData.velocity,
    FirstCircleOutsideEllipseData.distanceFromCenter,
    FirstCircleOutsideEllipseData.updatedX,
    FirstCircleOutsideEllipseData.updatedY,
    FirstCircleOutsideEllipseData.updatedRadius,
    FirstCircleOutsideEllipseData.updatedRadian,
    FirstCircleOutsideEllipseData.updatedDistance,
    gsap,
    scrollContainer,
    c
  );
