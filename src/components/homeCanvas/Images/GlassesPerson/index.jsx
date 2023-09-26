const responsiveEllipseValues = (canvas) => [
    {
      screenWidth: 320,
      width: canvas.width / 2,
      height: canvas.height / 2.2,
      radius: canvas.width / 1.7,
      verticalScale: canvas.width / 1.7,
    },
    {
      screenWidth: 380,
      width: canvas.width / 2,
      height: canvas.height / 2.3,
      radius: canvas.width / 1.6,
      verticalScale: canvas.width / 1.6,
    },
    {
      screenWidth: 480,
      width: canvas.width / 2,
      height: canvas.height / 2.2,
      radius: canvas.width / 1.7,
      verticalScale: canvas.width / 1.7,
    },
    {
      screenWidth: 768,
      width: canvas.width / 2,
      height: canvas.height / 2,
      radius: canvas.height / 2.7,
      verticalScale: canvas.height / 2.7,
    },
    {
      screenWidth: 1024,
      width: canvas.width / 2,
      height: canvas.height / 2,
      radius: canvas.width / 3,
      verticalScale: canvas.width / 3,
    },
    {
      screenWidth: 1440,
      width: canvas.width / 2,
      height: canvas.height / 2,
      radius: canvas.width / 3.5,
      verticalScale: canvas.width / 3.5,
    },
    {
      screenWidth: 1920,
      width: canvas.width / 2,
      height: canvas.height / 2,
      radius: canvas.width / 3.5,
      verticalScale: canvas.width / 3.5,
    },
    {
      screenWidth: 2500,
      width: canvas.width / 2,
      height: canvas.height / 2,
      radius: canvas.width / 3.5,
      verticalScale: canvas.width / 3.5,
    },
    // Add more rules for larger screens if needed
  ];
  export function getResponsiveEllipseDimensions(canvas, screenWidth) {
    let width = canvas.width / 2;
    let height = canvas.height / 2;
    let radius = canvas.height / 1.55;
    let verticalScale = canvas.height / 1.55;
  
    for (const rule of responsiveEllipseValues(canvas)) {
      if (screenWidth <= rule.screenWidth) {
        width = rule.width;
        height = rule.height;
        radius = rule.radius;
        verticalScale = rule.verticalScale;
        break;
      }
    }
  
    return { width, height, radius, verticalScale };
  }
  
  export function Ellipse(
    x,
    y,
    radius,
    verticalScale,
    color,
    updatedX,
    updatedY,
    updatedRadius,
    updatedVerticalScale,
    gsap,
    scrollContainer,
    c
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = 0;
    this.velocity = 0.05;
    this.verticalScale = verticalScale;
  
    this.updatedX = updatedX;
    this.updatedY = updatedY;
    this.updatedRadius = updatedRadius;
    this.updatedVerticalScale = updatedVerticalScale;
  
    this.update = () => {
      this.draw();
    };
  
    this.draw = () => {
      c.beginPath();
      c.ellipse(
        this.x,
        this.y,
        this.radius,
        this.verticalScale,
        0,
        0,
        2 * Math.PI,
        false
      );
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
        verticalScale: this.updatedVerticalScale,
        scrollTrigger: {
          trigger: ".spacer",
          scroller: scrollContainer,
          start: "top top",
          end: "+=1%",
          scrub: 0.4,
          animate: true,
        },
        onUpdate: () => {
          this.draw();
        },
      });
    }
  }
  