export function CircleWithEllipseRotation(
  x,
  y,
  radius,
  color,
  radians,
  velocity,
  verticalScaleX,
  verticalScaleY,
  updatedX,
  updatedY,
  updatedRadius,
  updatedRadian,
  updatedVelocity,
  updatedVerticalScaleX,
  updatedVerticalScaleY,
  gsap,
  scrollContainer,
  c
) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = radians;
  this.velocity = velocity;
  this.verticalScaleX = verticalScaleX;
  this.verticalScaleY = verticalScaleY;

  this.updatedX = updatedX;
  this.updatedY = updatedY;
  this.updatedRadius = updatedRadius;
  this.updatedRadian = updatedRadian;
  this.updatedVelocity = updatedVelocity;
  this.updatedVerticalScaleX = updatedVerticalScaleX;
  this.updatedVerticalScaleY = updatedVerticalScaleY;

  if (radians != undefined) {
    this.radians = radians;
  } else {
    this.radians = 0;
  }
  if (velocity != undefined) {
    this.velocity = velocity;
  } else {
    this.velocity = 0;
  }
  if (verticalScaleX != undefined) {
    this.verticalScaleX = verticalScaleX;
  } else {
    this.verticalScaleX = 0;
  }
  if (verticalScaleY != undefined) {
    this.verticalScaleY = verticalScaleY;
  } else {
    this.verticalScaleY = 0;
  }

  this.update = () => {
    if (
      velocity != undefined &&
      radians != undefined &&
      verticalScaleX != undefined &&
      verticalScaleY != undefined
    ) {
      this.radians += this.velocity;
      // Calculating position of revolving circle
      this.x = this.updatedX + this.verticalScaleX * Math.cos(this.radians);
      this.y = this.updatedY + this.verticalScaleY * Math.sin(this.radians);
    }
    this.draw();
  };

  this.draw = (circleX, circleY) => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };

  if (this.updatedX != undefined && this.updatedY != undefined) {
    const timeline = gsap.timeline();
    timeline.to(this, {
      x: this.updatedX,
      y: this.updatedY,
      radius: this.updatedRadius,
      radians: this.updatedRadian,
      velocity: this.updatedVelocity,
      verticalScaleX: this.updatedVerticalScaleX,
      verticalScaleY: this.updatedVerticalScaleY,
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
