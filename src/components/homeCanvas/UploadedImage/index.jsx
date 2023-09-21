/* eslint-disable */
export function UploadedImage(
  x,
  y,
  image,
  width,
  height,
  rotation,
  updatedX,
  updatedY,
  updatedWidth,
  updatedHeight,
  updatedRotation,
  gsap,
  scrollContainer,
  c
) {
  this.x = x;
  this.y = y;
  this.x1 = x;
  this.y1 = y;
  this.image = image;
  this.width = width;
  this.height = height;

  this.updatedX = updatedX;
  this.updatedY = updatedY;
  this.updatedWidth = updatedWidth;
  this.updatedHeight = updatedHeight;

  this.rotation = rotation;

  this.updatedRotation = updatedRotation;

  const newImage = new Image();
  newImage.src = this.image;

  newImage.onload = () => {
    this.draw();

    if (this.updatedImage) {
      newImage.src = this.updatedImage;
    }

    if (
      this.updatedX != undefined &&
      this.updatedY != undefined &&
      this.updatedWidth != undefined
    ) {
      const timeline = gsap.timeline();
      78;
      timeline.to(this, {
        x: this.updatedX,
        y: this.updatedY,
        width: this.updatedWidth,
        height: this.updatedHeight,
        rotation: updatedRotation ? updatedRotation : 0,
        scrollTrigger: {
          trigger: ".spacer",
          scroller: scrollContainer,
          start: "top top",
          end: "+=1%",
          scrub: 1,
          onUpdate: (self) => {
            this.draw();
          },
        },
      });
    }
  };

  this.update = () => {
    this.draw();
  };

  this.draw = () => {
    c.globalAlpha = 1;
    // c.drawImage(newImage, this.x, this.y, this.width, this.height);
    // Save the canvas state before applying rotation
    if (this.rotation || this.updatedRotation) {
      c.save(); // Save the original state
      c.translate(this.x + this.width / 2, this.y + this.height / 2); // Move to the center of the image
      c.rotate((this.rotation * Math.PI) / 180); // Convert degrees to radians and rotate
      c.drawImage(
        newImage,
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height
      ); // Draw the image back, but offset by half its dimensions
      c.restore(); // Restore the original state
    } else {
      c.drawImage(newImage, this.x, this.y, this.width, this.height);
    }
  };
}
