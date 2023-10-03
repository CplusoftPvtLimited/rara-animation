const responsiveCircleValues = (canvas) => [
  {
    screenWidth: 320,
    width: canvas.width / 2,
    height: canvas.width / 1.1,
    radius: canvas.width / 3.1,
  },
  {
    screenWidth: 380,
    width: canvas.width / 2,
    height: canvas.width / 1.1,
    radius: canvas.width / 3.1,
  },
  {
    screenWidth: 480,
    width: canvas.width / 2,
    height: canvas.width / 1.1,
    radius: canvas.width / 3,
  },
  {
    screenWidth: 768,
    width: canvas.width / 2,
    height: canvas.height / 2,
    radius: canvas.width / 6,
  },
  {
    screenWidth: 1024,
    width: canvas.width / 2,
    height: canvas.height / 2,
    radius: canvas.width / 6,
  },
  {
    screenWidth: 1440,
    width: canvas.width / 2,
    height: canvas.height / 2,
    radius: canvas.width / 7,
  },
  {
    screenWidth: 1920,
    width: canvas.width / 2,
    height: canvas.height / 2,
    radius: canvas.width / 7,
  },
  {
    screenWidth: 2500,
    width: canvas.width / 2,
    height: canvas.height / 2,
    radius: canvas.width / 7,
  },
  // Add more rules for larger screens if needed
];

export function getResponsiveCircleRadius(canvas, screenWidth) {
  let circleWidth = canvas.width / 2;
  let circleHeight = canvas.height / 2;
  let circleRadius = canvas.height / 2.9;

  for (const rule of responsiveCircleValues(canvas)) {
    if (screenWidth <= rule.screenWidth) {
      circleWidth = rule.width;
      circleHeight = rule.height;
      circleRadius = rule.radius;
      break;
    }
  }

  return { circleWidth, circleHeight, circleRadius };
}

// Objects
export function Circle(
  x,
  y,
  radius,
  color,
  updatedX,
  updatedY,
  updatedRadius,
  gsap,
  scrollContainer,
  c
) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.updatedX = updatedX;
  this.updatedY = updatedY;
  this.updatedRadius = updatedRadius;

  this.update = () => {
    this.draw();
  };

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.lineWidth = 1;
    c.strokeStyle = this.color;
    c.stroke();
  };

  if (this.updatedX != undefined && this.updatedY != undefined) {
    const timeline = gsap.timeline();
    timeline.to(this, {
      x: this.updatedX,
      y: this.updatedY,
      radius: this.updatedRadius,
      scrollTrigger: {
        trigger: ".spacer",
        scroller: scrollContainer,
        start: "top top",
        end: "+=1%",
        scrub: 1,
        animate: true,
      },
      onUpdate: () => {
        this.update();
      },
    });
  }
}
