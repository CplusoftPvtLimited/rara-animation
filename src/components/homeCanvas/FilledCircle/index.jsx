export function FilledCircle(
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
  this.updatedRadian = updatedRadian;
  this.updatedDistance = updatedDistance;

  if (radian != undefined) {
    this.radians = radian;
  } else {
    this.radians = 0;
  }
  if (velocity != undefined) {
    this.velocity = velocity;
  } else {
    this.velocity = 0;
  }
  if (distanceFromCenter != undefined) {
    this.distanceFromCenter = distanceFromCenter;
  } else {
    this.distanceFromCenter = 0;
  }

  // console.log("RADian --------", canvas.width, "------------", canvas.height);

  // update(x, y, radius, color, this.radian);
  this.update = () => {
    if (
      velocity != undefined &&
      radian != undefined &&
      distanceFromCenter != undefined
    ) {
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
    }

    this.draw();
  };

  this.draw = () => {
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
      radian: this.updatedRadian,
      distanceFromCenter: this.updatedDistance,
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
