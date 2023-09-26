import { UploadedImage } from "../../UploadedImage";

export const Eye = (canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    canvas.width / 2 + 355,
    canvas.height / 2 + 150,
    require("../../../../assets/home/images/header_8.png"),
    275,
    215,
    0,
    canvas.width / 2 + 105,
    canvas.height / 2 + 100,
    130,
    95,
    0,
    gsap,
    scrollContainer,
    c
  );
