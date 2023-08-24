import { UploadedImage } from "../../UploadedImage";

export const BuildingTwoRedLines = (canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    canvas.width / 2,
    canvas.height / 2,
    require("../../../../assets/home/images/header_32.png"),
    0,
    0,
    0,
    canvas.width / 2 - 270,
    canvas.height / 2 - 90,
    315,
    150,
    0,
    gsap,
    scrollContainer,
    c
  );
