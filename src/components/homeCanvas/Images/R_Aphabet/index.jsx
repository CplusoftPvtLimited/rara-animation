import { UploadedImage } from "../../UploadedImage";

export const R_Alpabet = (canvas, gsap, scrollContainer, c) =>
  new UploadedImage(
    35,
    canvas.height - 165,
    require("../../../../assets/home/images/header_48.png"),
    65,
    65,
    -15,
    canvas.width / 2 - 275,
    canvas.height / 2 - 85,
    97,
    95,
    0,
    gsap,
    scrollContainer,
    c
  );
