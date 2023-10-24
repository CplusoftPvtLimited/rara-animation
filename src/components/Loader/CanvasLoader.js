// import React, { useEffect, useRef, useState } from "react";
// import "./canvasLoader.css";

// function CanvasLoader({ onComplete }) {
//   const canvasRef = useRef(null);
//   const [animationComplete, setAnimationComplete] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     const canvasWidth = window.innerWidth;
//     const canvasHeight = window.innerHeight;
//     const animationSpeed = 3;

//     let x = canvasWidth;
//     let y = 0;

//     function animate() {
//       context.clearRect(0, 0, canvasWidth, canvasHeight);
//       context.beginPath();
//       context.moveTo(x, y);
//       context.lineTo(canvasWidth - x, canvasHeight - y);
//       context.stroke();
//       x -= animationSpeed;
//       y += animationSpeed;

//       if (x <= 0 || y >= canvasHeight) {
//         setAnimationComplete(true);
//         onComplete(); // Call the onComplete callback when animation completes
//       } else {
//         requestAnimationFrame(animate);
//       }
//     }

//     animate();
//   }, [onComplete]);

//   return (
//     <div
//       className={`canvas-loader-container ${animationComplete ? "hidden" : ""}`}
//     >
//       <canvas
//         ref={canvasRef}
//         className="canvas-loader"
//         width={window.innerWidth}
//         height={window.innerHeight}
//       ></canvas>
//     </div>
//   );
// }

// export default CanvasLoader;

import React, { useEffect, useRef, useState } from "react";
import "./canvasLoader.css";

function CanvasLoader({ onComplete }) {
  const canvasRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const animationSpeed = 5;
    const lineLength = 500;

    let x = canvasWidth - 130; // Start from the top-right corner
    let y = -280; // Start from the top-right corner

    function animate() {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x - lineLength, y + lineLength); // Diagonal line to the bottom-left corner
      context.lineWidth = 1; // Line width
      context.stroke();
      x -= animationSpeed;
      y += animationSpeed;

      if (x <= canvasWidth - lineLength || y >= canvasHeight) {
        setAnimationComplete(true);
        onComplete(); // Call the onComplete callback when animation completes
      } else {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }, [onComplete]);

  return (
    <div
      className={`canvas-loader-container ${animationComplete ? "hidden" : ""}`}
    >
      <canvas
        ref={canvasRef}
        className="canvas-loader"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </div>
  );
}

export default CanvasLoader;
